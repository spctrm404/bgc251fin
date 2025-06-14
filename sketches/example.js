const { Responsive } = P5Template;

function setup() {
  new Responsive().createResponsiveCanvas(400, 300, 'fill', false);
  // "contain" | "fill" | "cover" | "none" | "scale-down"

  // "contain", true
  // 주어진 공간에 잘리지 않고 들어옴; 비례 유지; 이미지 확축
  // data-full-width="false", 너비 1440 추천

  // "contain", false
  // 주어진 공간에 잘리지 않고 들어옴; 비례 유지; 너비 높이 변화
  // data-full-width="true" 추천

  // "fill", false
  // 주어진 공간을 채움; 비례 무시; 너비 높이 변화
  // data-full-width="true" 추천

  // "scale-down", true
  // 주어진 공간에 잘리지 않고 들어옴; 비례 유지; 이미지 축소
  // data-full-width="false", 너비 1440 추천
}

function draw() {
  background('#000000');
  noStroke();
  fill('blue');
  circle(mouseX, mouseY, 100);
  Responsive.drawReferenceGrid('white');
  noStroke();
  fill('white');
  textSize(32);
  textAlign(CENTER, CENTER);
  text(`${width}, ${height}`, width / 2, height / 2);
}
