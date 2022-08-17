let snowContainer = document.querySelector(".snow-container");

const createSnow = () => {
  /* 雪の要素を生成したい */
  let snow = document.createElement("span");
  snow.className = "snow";
  snow.innerHTML = "yu-"

  minSize = 5;
  maxSize = 10;

  /* 雪の大きさをランダムに生成したい */
  let snowSize = Math.random() * (maxSize - minSize) + minSize;

  snow.style.width = snowSize + "px";
  snow.style.height = snowSize + "px";

  /* 雪の降り始めの位置を決定したい */
  snow.style.left = Math.random() * 100 + "%";
  snowContainer.appendChild(snow);

  /* 10秒後にたまったspanを消したい */
  setTimeout(() => {
    snow.remove();
  }, 10000);
};

setInterval(createSnow, 100);
