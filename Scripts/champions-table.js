const API_KEY = 'RGAPI-9715366d-7c8b-4b1e-b5d6-0bd5cb480673';

fetch(`http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json`)
  .then(response => response.json())
  .then(data => {
    const champions = data.data;
    const table = document.createElement('table');

    const headerRow = document.createElement('tr');
    const imageHeader = document.createElement('th');
    imageHeader.textContent = 'Imagem';
    imageHeader.width = 50;
    headerRow.appendChild(imageHeader);
    const nameHeader = document.createElement('th');
    nameHeader.textContent = 'Nome';
    headerRow.appendChild(nameHeader);
    const roleHeader = document.createElement('th');
    roleHeader.textContent = 'Função';
    headerRow.appendChild(roleHeader);
    table.appendChild(headerRow);

    for (const [id, champion] of Object.entries(champions)) {
      const row = document.createElement('tr');
      const imageCell = document.createElement('td');
      const image = document.createElement('img');
      image.src = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${id}.png`;
      image.alt = champion.name;
      image.title = champion.name;
      image.width = 50;
      image.height = 50;
      imageCell.appendChild(image);
      row.appendChild(imageCell);
      const nameCell = document.createElement('td');
      nameCell.textContent = champion.name;
      row.appendChild(nameCell);
      const roleCell = document.createElement('td');
      roleCell.textContent = champion.tags.join(', ');
      row.appendChild(roleCell);
      table.appendChild(row);
    }

    document.body.appendChild(table);
  })
  .catch(error => console.error('Erro ao obter a lista de campeões:', error));
