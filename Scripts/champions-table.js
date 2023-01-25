// Faz uma chamada à API de campeões do League of Legends
fetch(`http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json`)
  .then(response => response.json())
  .then(data => {
    // Armazena os campeões em uma variável
    const champions = data.data;
    // Cria uma tabela
    const table = document.createElement('table');

    // Cria uma linha de cabeçalho para a tabela
    const headerRow = document.createElement('tr');
    // Cria uma célula de cabeçalho para a imagem
    const imageHeader = document.createElement('th');
    imageHeader.textContent = 'Imagem';
    imageHeader.width = 50;
    headerRow.appendChild(imageHeader);
    // Cria uma célula de cabeçalho para o nome
    const nameHeader = document.createElement('th');
    nameHeader.textContent = 'Nome';
    headerRow.appendChild(nameHeader);
    // Cria uma célula de cabeçalho para a função
    const roleHeader = document.createElement('th');
    roleHeader.textContent = 'Função';
    headerRow.appendChild(roleHeader);
    // Adiciona a linha de cabeçalho à tabela
    table.appendChild(headerRow);

    // Itera sobre cada campeão
    for (const [id, champion] of Object.entries(champions)) {
      // Cria uma linha para o campeão
      const row = document.createElement('tr');
      // Cria uma célula para a imagem
      const imageCell = document.createElement('td');
      // Cria uma imagem para o campeão
      const image = document.createElement('img');
      // Define a fonte da imagem como a URL da imagem do campeão
      image.src = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${id}.png`;
      image.alt = champion.name;
      image.title = champion.name;
      image.width = 50;
      image.height = 50;
      // Adiciona a imagem à célula
      imageCell.appendChild(image);
      // Adiciona a célula à linha
      row.appendChild(imageCell);
      // Cria uma célula para o nome
      const nameCell = document.createElement('td');
      // Define o conteúdo da célula como o nome do campeão
      nameCell.textContent = champion.name;
      // Adiciona a célula à linha
      row.appendChild(nameCell);
      // Cria uma célula para a função
      const roleCell = document.createElement('td');
      // Define o conteúdo da célula como as tags do campeão, separadas por vírgulas
      roleCell.textContent = champion.tags.join(', ');
      // Adiciona a célula à linha
      row.appendChild(roleCell);
      // Adiciona a linha à tabela
      table.appendChild(row);
    }

    // Adiciona a tabela ao corpo do documento
    document.body.appendChild(table);
  })
  .catch(error => console.error('Erro ao obter a lista de campeões:', error));

  