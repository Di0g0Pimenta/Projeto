// Define a sua chave de API da Riot Games
const API_KEY = 'RGAPI-5afe2c63-d9bb-4420-9f38-ab92891144ca';

// Cria um pedido HTTP para obter a lista de campeões
fetch(`http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json`)
  .then(response => response.json()) // processa a resposta como JSON
  .then(data => {
    // Processa a lista de campeões
    const champions = data.data;

    // Cria a tabela HTML
    const table = document.createElement('table');

    // Cria o cabeçalho da tabela
    const headerRow = document.createElement('tr');
    const nameHeader = document.createElement('th');
    nameHeader.textContent = 'Nome';
    headerRow.appendChild(nameHeader);
    const roleHeader = document.createElement('th');
    roleHeader.textContent = 'Função';
    headerRow.appendChild(roleHeader);
    table.appendChild(headerRow);

    // Adiciona cada campeão à tabela
    for (const [id, champion] of Object.entries(champions)) {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      nameCell.textContent = champion.name;
      row.appendChild(nameCell);
      const roleCell = document.createElement('td');
      roleCell.textContent = champion.tags.join(', ');
      row.appendChild(roleCell);
      table.appendChild(row);
    }

    // Adiciona a tabela ao documento HTML
    document.body.appendChild(table);
  })
  .catch(error => console.error('Erro ao obter a lista de campeões:', error)); // exibe um erro em caso de falha
