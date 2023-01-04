class MobileNavbar {
  // Construtor para inicializar os atributos da classe
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu); // Seletor para o elemento do menu móvel
    this.navList = document.querySelector(navList); // Seletor para a lista de links da barra de navegação
    this.navLinks = document.querySelectorAll(navLinks); // Seletor para todos os links na barra de navegação
    this.activeClass = "active"; // Classe "ativa" que será adicionada ou removida dos elementos selecionados acima

    // Ligação do contexto para a função "handleClick"
    this.handleClick = this.handleClick.bind(this);
  }

  // Função para animar os links na barra de navegação
  animateLinks() {
    // Itera sobre cada link na barra de navegação
    this.navLinks.forEach((link, index) => {
      // Verifica se o estilo de animação já está definido no link
      link.style.animation
        ? (link.style.animation = "") // Se sim, remove a animação
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`); // Se não, adiciona uma animação de "navLinkFade"
    });
  }
   // Função para manipular o evento click no menu móvel
   handleClick() {
    // Adiciona ou remove a classe "ativa" da lista de links e do menu móvel
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);

    // Anima os links na barra de navegação
    this.animateLinks();
  }

  // Função para adicionar um evento de clique no menu móvel
  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  // Função para inicializar a barra de navegação móvel
  init() {
    // Verifica se o elemento do menu móvel existe
    if (this.mobileMenu) {
      // Adiciona o evento de clique no menu móvel
      this.addClickEvent();
    }
    return this;
  }
}

// Cria uma nova instância da classe "MobileNavbar" com os seletores para o menu móvel, a lista de links e os links
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

// Inicializa a barra de navegação móvel
mobileNavbar.init();