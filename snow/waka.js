let snowContainer = document.querySelector(".snow-container");

const createSnow = () => {
  /* 祝いの要素を生成したい */
  let snow = document.createElement("span");
  snow.className = "snow";
  snow.innerHTML = "祝"

  minSize = 20;
  maxSize = 40;

  /* 大きさをランダムに生成したい */
  let snowSize = Math.random() * (maxSize - minSize) + minSize;

  snow.style.width = snowSize + "px";
  snow.style.height = snowSize + "px";

  /* 降り始めの位置を決定したい */
  snow.style.left = Math.random() * 100 + "%";
  snowContainer.appendChild(snow);

  /* span掃除 */
  setTimeout(() => {
    snow.remove();
  }, 10000);
};

setInterval(createSnow, 100);
