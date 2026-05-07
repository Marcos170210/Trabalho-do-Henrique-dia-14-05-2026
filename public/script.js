const apiResult = document.getElementById('apiResult');
const loadApiBtn = document.getElementById('loadApiBtn');

const createItem = (label, value) => {
  const item = document.createElement('div');
  item.className = 'api-item';
  item.innerHTML = `<h3>${label}</h3><span>${value}</span>`;
  return item;
};

const createListItem = (label, list) => {
  const item = document.createElement('div');
  item.className = 'api-item';
  item.innerHTML = `
    <h3>${label}</h3>
    <ul class="api-list">
      ${list.map(value => `<li>• ${value}</li>`).join('')}
    </ul>
  `;
  return item;
};

const renderData = (data) => {
  apiResult.innerHTML = '';
  apiResult.appendChild(createItem('Nome', data.name));
  apiResult.appendChild(createItem('País', data.country));
  apiResult.appendChild(createItem('Equipe', data.team));
  apiResult.appendChild(createItem('Anos de atuação', data.activeYears));
  apiResult.appendChild(createItem('Primeira vitória', data.firstWin));
  apiResult.appendChild(createItem('Biografia', data.bio));
  apiResult.appendChild(createItem('Campeonatos', data.championships));
  apiResult.appendChild(createItem('Poles', data.poles));
  apiResult.appendChild(createItem('Podiums', data.podiums));
  apiResult.appendChild(createListItem('Principais feitos', data.highlights));
  apiResult.appendChild(createListItem('Citações', data.quotes));
};

const showError = () => {
  apiResult.innerHTML = '<p>Erro ao carregar os dados da API. Tente novamente em instantes.</p>';
};

const loadApiData = async () => {
  loadApiBtn.disabled = true;
  loadApiBtn.textContent = 'Carregando...';
  try {
    const response = await fetch('/api/hamilton');
    if (!response.ok) throw new Error('Falha na API');
    const data = await response.json();
    renderData(data);
  } catch (error) {
    console.error(error);
    showError();
  } finally {
    loadApiBtn.disabled = false;
    loadApiBtn.textContent = 'Ver dados da API';
  }
};

loadApiBtn.addEventListener('click', loadApiData);
