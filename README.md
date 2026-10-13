# Heart · arte matemática

Visualização da equação original do projeto usando Canvas 2D e JavaScript, sem dependências externas.

## O que o projeto faz

- Interface responsiva em tons de rosa e texto explicativo acessível.
- Gráfico nítido em telas de alta densidade e redesenhado ao redimensionar.
- 2.401 amostras no domínio real central, de −π/2 a π/2.
- Sem carregamento de Chart.js, plugin de anotação ou serviços externos.
- Sem animação automática.

## Executar

Abra `index.html` em um navegador moderno. Não há instalação de dependências, build ou servidor obrigatório. Para desenvolvimento, também é possível servir a pasta com qualquer servidor estático, por exemplo `python -m http.server 8000` e acessar `http://localhost:8000`.

## Estrutura

- `index.html`: estrutura e conteúdo.
- `style.css`: apresentação.
- `script.js`: comportamento da página.

## Limites e cuidados

A equação implementada em `script.js` é:

`y = sqrt(cos(x)) * cos(300*x) + (sqrt(abs(x)) - 0.7) * (4 - x*x)^0.01`

A raiz exige `cos(x) >= 0` e a potência exige `4 - x² >= 0`. O intervalo real central mostrado é `[-π/2, π/2]`; valores fora do domínio são ignorados. Este projeto não desenha as curvas extras de raiz quadrada mencionadas no README antigo.

## Roteiro de verificação manual

1. Abra a página sem conexão: o gráfico não depende de CDN.
2. Redimensione a janela e confira a nitidez e centralização.
3. Use Tab e Enter para abrir “Como o desenho funciona?”.
4. Confira ausência de erros no console e texto alternativo do canvas.

Não há suíte de testes de navegador configurada no repositório. O roteiro acima deve ser executado antes de publicar alterações. Nenhum deploy é feito por estes arquivos.
