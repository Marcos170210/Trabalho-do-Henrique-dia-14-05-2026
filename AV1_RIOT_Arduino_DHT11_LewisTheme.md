# AV1 – Robótica e IoT (RIOT) — Tema: Lewis Hamilton / Fórmula 1

## 2ª Parte – Arduino + Sensor DHT11 + LCD I2C + LED (adaptado ao tema)

Data de entrega: definir por turma
Forma de entrega: demonstração do circuito funcional ao professor (até o fim da aula)

Este documento é a segunda parte da AV1 do 2º bimestre. O objetivo é que o grupo monte no Arduino um circuito com sensor de temperatura DHT11, tela LCD com módulo I2C e LED simples ou LED RGB, usando como tema a oficina/box de uma equipe de Fórmula 1 (ex.: Lewis Hamilton / equipe).

### Objetivo geral
Montar e demonstrar um circuito com Arduino em que:
- o sensor DHT11 realize a leitura da temperatura ambiente (por exemplo, temperatura no "box" ou próxima ao carro);
- a temperatura seja exibida na tela LCD I2C;
- um LED simples ou LED RGB indique se a temperatura está FRIA, NORMAL ou QUENTE (por exemplo: ambiente de box frio -> OK para pneus; ambiente quente -> ALERTA);
- a mesma informação indicada pelo LED também apareça no LCD (ex.: `Status: NORMAL` ou `ALERTA CALOR`);
- o circuito funcione de forma estável durante a demonstração.

### Materiais por grupo
Cada grupo receberá:
- 1 Arduino;
- 1 sensor DHT11;
- 1 tela LCD 16x2;
- 1 módulo I2C para a tela LCD;
- LED simples ou LED RGB;
- resistores;
- protoboard e jumpers;
- cabo USB.

### O que o circuito deve fazer (com exemplos F1)
1. O DHT11 mede a temperatura ambiente (ex.: temperatura no box do piloto).
2. A temperatura aparece no LCD com uma mensagem temática.
3. O LED ou LED RGB indica a condição: FRIO, NORMAL, QUENTE.
4. A tela exibe também a condição correspondente.

Exemplo de comportamento esperado (tema F1):
- Temp baixa: `Temp: 18 C` / `Status: FRIO` (p. ex., ambiente frio no box)
- Temp intermediária: `Temp: 26 C` / `Status: NORMAL` (condição ideal)
- Temp alta: `Temp: 32 C` / `Status: QUENTE — ALERTA` (atenção com equipamentos/pneus)

Exemplo de exibição no LCD:
```
Temp: 26 C
Status: NORMAL
```

### Adaptação obrigatória do código
No simulador Tinkercad pode ter sido usado o TMP36 (sensor analógico). No kit físico usaremos o DHT11 (digital). Atenção:
- TMP36 é analógico — usa `analogRead()` e conversão de tensão para temperatura;
- DHT11 é digital — usa biblioteca própria (ex.: `DHT.h`) e retorna temperatura já convertida;

Portanto adapte o código do Tinkercad: substitua leituras analógicas e fórmulas pelo uso da biblioteca do DHT11 e ajuste a lógica que define os limites de FRIO/NORMAL/QUENTE.

### Bônus (opcional) — +0,5 na AV2 escrita
Escolher apenas UMA opção de incremento relacionado ao monitoramento ambiental:

Opção 1 – Potenciômetro para ajuste do limite de temperatura
- Adicionar um potenciômetro para o grupo definir manualmente o limite que considera como QUENTE (ex.: `Limite: 28 C`).

Opção 2 – Utilizar também a umidade do DHT11
- Além da temperatura, exibir a umidade e, se preferir, criar mensagens temáticas (ex.: `AR MUITO SECO` ou `Umid: 67%`).

Regras do bônus: só será concedido se estiver ligado corretamente, funcionar durante a demonstração, estiver relacionado ao DHT11 e não comprometer a funcionalidade principal.

### Critérios de Avaliação
- 40% Montagem: ligações corretas (DHT11, I2C, LED), GND comum, organização do circuito.
- 40% Funcionamento: leitura do DHT11, exibição correta no LCD, LED indica corretamente FRIO/NORMAL/QUENTE, estabilidade.
- 20% Compreensão: adaptação do código, identificação e correção de erros, entendimento da diferença entre sensor analógico e digital.

Durante a demonstração o grupo deverá:
1. mostrar o circuito montado;
2. demonstrar a leitura da temperatura;
3. mostrar a temperatura no LCD;
4. demonstrar o LED indicando frio, normal ou quente;
5. explicar a adaptação feita do TMP36 para o DHT11;
6. caso tenha feito o bônus, demonstrar o incremento funcionando.

### Observações finais (tema)
Sugestões temáticas para a demonstração:
- personalize a tela LCD com a palavra `BOX` ou `LEWIS` na linha superior durante os testes;
- use cores do LED que remetam ao tema (ex.: verde = NORMAL, amarelo = ATENÇÃO, vermelho = ALERTA);
- se possível, mostre também a imagem do tema no material de apresentação (ex.: slide com foto do piloto) enquanto demonstra o circuito.

Boa sorte — faça a montagem com segurança e organize os cabos para a demonstração no box!

***

Arquivo criado e adaptado ao tema solicitado.
