const Point = {
  x: 3,
  y: 3,
};

const distanceBetweenPoints = (a, b) => {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};

console.log(distanceBetweenPoints(Point, Point));
