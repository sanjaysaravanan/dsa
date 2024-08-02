const area = document.querySelector("#circle-area");

const ctx = area.getContext("2d");

let circles = [];

function circleIntersect(x0, y0, r0, x1, y1, r1) {
  console.log(Math.hypot(x0 - x1, y0 - y1));
  return Math.hypot(x0 - x1, y0 - y1) <= r0 + r1;
}

area.addEventListener("click", (e) => {
  ctx.beginPath();

  if (circles.length < 2) {
    const radius = Math.floor(Math.random() * 100);

    circles.push({
      x: e.offsetX,
      y: e.offsetY,
      radius,
    });

    ctx.arc(e.offsetX, e.offsetY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();

    if (circles.length === 2) {
      const [c1, c2] = circles;
      console.log(
        circleIntersect(c1.x, c1.y, c1.radius, c2.x, c2.y, c2.radius)
      );
    }
  } else {
    ctx.clearRect(0, 0, area.width, area.height);
    circles = [];
  }
});
