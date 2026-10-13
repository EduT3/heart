"use strict";
function calcularEquacao(x) {
  const cos = Math.cos(x);
  const base = 4 - x * x;
  if (cos < 0 || base < 0) return null;
  return Math.sqrt(cos) * Math.cos(300 * x) +
    (Math.sqrt(Math.abs(x)) - 0.7) * Math.pow(base, 0.01);
}
function desenharCoracao() {
  const canvas = document.getElementById("myChart");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const { width, height } = canvas.getBoundingClientRect();
  const escala = Math.min(window.devicePixelRatio || 1, 3);
  canvas.width = Math.round(width * escala);
  canvas.height = Math.round(height * escala);
  ctx.setTransform(escala, 0, 0, escala, 0, 0);
  const margem = 30;
  const unidade = Math.min((width - margem * 2) / 4, (height - margem * 2) / 3.2);
  const px = x => width / 2 + x * unidade;
  const py = y => height / 2 - y * unidade;
  ctx.strokeStyle = "#eddee4";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(margem, py(0)); ctx.lineTo(width - margem, py(0));
  ctx.moveTo(px(0), margem); ctx.lineTo(px(0), height - margem);
  ctx.stroke();
  ctx.fillStyle = "#77515f";
  ctx.font = "12px system-ui";
  ctx.fillText("x", width - margem, py(0) - 8);
  ctx.fillText("y", px(0) + 8, margem);
  ctx.strokeStyle = "#bd3263";
  ctx.lineWidth = 1;
  ctx.beginPath();
  const amostras = 2400;
  for (let i = 0; i <= amostras; i++) {
    const x = -Math.PI / 2 + (i / amostras) * Math.PI;
    const y = calcularEquacao(x);
    if (y === null) continue;
    if (i === 0) ctx.moveTo(px(x), py(y));
    else ctx.lineTo(px(x), py(y));
  }
  ctx.stroke();
}
if (typeof ResizeObserver !== "undefined") {
  new ResizeObserver(desenharCoracao).observe(document.querySelector(".chart"));
} else {
  window.addEventListener("resize", desenharCoracao);
}
desenharCoracao();
