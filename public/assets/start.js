const interval = setInterval(() => {
  let canvas = document.querySelector("canvas")?.getAttribute("width");

  if (canvas) {
    let element = document.querySelector(".main-loading");
    element.remove();
    clearInterval(interval);
  }
}, 1000);