// Função para calcular os valores da equação
function calcularEquacao(x) {
  return (
    Math.sqrt(Math.cos(x)) * Math.cos(300 * x) +
    (Math.sqrt(Math.abs(x)) - 0.7) * Math.pow(4 - x * x, 0.01)
  );
}

// Preparar dados para o gráfico
const data = {
  labels: [],
  datasets: [
    {
      label: "Equação",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      fill: false,
      data: [],
    },
  ],
};

// Preencher os dados com valores calculados
const step = 0.01;
for (let x = -4.5; x <= 4.5; x += step) {
  data.labels.push(x);
  data.datasets[0].data.push(calcularEquacao(x));
}

// Configurações do gráfico
const config = {
  type: "line",
  data: data,
  options: {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
      y: {
        min: -2,
        max: 2,
      },
    },
  },
};

// Renderizar o gráfico no elemento canvas
const ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx, config);
