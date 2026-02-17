// 각 캐릭터별 이미지 목록 (여기 파일명만 너 폴더에 맞게 수정!)
const images = {
  rock: [
    "images/i_rock1.png",
    "images/i_rock2.png",
  ],
  minchi: [
    "images/i_minchi1.png",
    "images/i_minchi2.png",
  ],
};

// 원형 인덱스 계산
function wrapIndex(i, len) {
  return (i % len + len) % len;
}

document.querySelectorAll(".carousel").forEach((carousel) => {
  const key = carousel.dataset.carousel;       // rock / minchi
  const list = images[key];
  let idx = 0;

  const imgEl = carousel.querySelector(".carousel-img");
  const prevBtn = carousel.querySelector(".arrow.left");
  const nextBtn = carousel.querySelector(".arrow.right");

  function render() {
    imgEl.src = list[idx];
  }

  prevBtn.addEventListener("click", () => {
    idx = wrapIndex(idx - 1, list.length);     // ← 원형
    render();
  });

  nextBtn.addEventListener("click", () => {
    idx = wrapIndex(idx + 1, list.length);     // → 원형
    render();
  });

  // 첫 렌더
  render();
});
