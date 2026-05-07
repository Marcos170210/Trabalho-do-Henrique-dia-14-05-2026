const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const hamilton = {
  name: 'Lewis Hamilton',
  country: 'Reino Unido',
  team: 'Mercedes-AMG Petronas',
  championships: 7,
  podiums: 196,
  poles: 103,
  firstWin: '2007 Brasil',
  activeYears: '2007 - presente',
  bio: 'Lewis Hamilton é um dos pilotos mais icônicos da Fórmula 1. Com velocidade, estilo e um legado de coragem dentro e fora das pistas, ele transformou o automobilismo em uma plataforma global de inspiração.',
  quotes: [
    'Não sonhe pequeno, porque você é gigante.',
    'A vitória não é apenas chegar primeiro, é inspirar o próximo.',
    'No limite, você pega fogo e então aprende a voar.'
  ],
  highlights: [
    'Maior número de poles da história da F1',
    'Sete vezes campeão mundial',
    'Ativista por igualdade e sustentabilidade',
    'Recordes de velocidade, corrida e consistência'
  ]
};

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/hamilton', (req, res) => {
  res.json(hamilton);
});

app.listen(port, () => {
  console.log(`Site API rodando em http://localhost:${port}`);
});
