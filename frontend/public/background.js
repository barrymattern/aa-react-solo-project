// https://codepen.io/daviscodesbugs/pen/LyPdwy

const changeBackgroundColor = () => {
  const navy = "rgb(25, 30, 45)";
  const lightNavy = "rgb(60, 67, 76)"
  const colors = [ navy, lightNavy ];
  let currentIndex = 0;

  setInterval(function() {
    document.body.style.cssText = `background-color: ${colors[currentIndex]}`;
    currentIndex++;

    if (currentIndex === undefined || currentIndex >= colors.length) {
      currentIndex = 0;
    }
  }, 3000);
};

window.addEventListener('DOMContentLoaded', event => {
  changeBackgroundColor();
});

export default changeBackgroundColor;
