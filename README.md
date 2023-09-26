# Gráfico da Equação em JavaScript

Este é um projeto simples que cria um gráfico de uma equação matemática especificada em JavaScript usando a biblioteca Chart.js.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte:

- Um navegador da web moderno que suporta a tag `<canvas>`.
- Conexão à internet (para carregar a biblioteca Chart.js).

## Como usar

1. Clone ou faça o download deste repositório para o seu computador.

2. Abra o arquivo `index.html` em seu navegador da web.

3. Você verá um gráfico da equação `sqrt(cos(x))*cos(300x)+sqrt(abs(x))-0.7)*(4-x*x)^0.01, sqrt(6-x^2), -sqrt(6-x^2)` no intervalo de -4.5 a 4.5.

4. Você pode personalizar o gráfico, ajustando as configurações no código-fonte, como cores, intervalo e outros parâmetros.

## Personalização

- Você pode personalizar as configurações do gráfico no arquivo `index.html`. As configurações estão dentro da seção `// Configurações do gráfico`.

- Para alterar a equação a ser plotada, modifique a função `calcularEquacao(x)` no arquivo `index.html`.

