function image1() {
  const bigimage = document.getElementById("bigimg");
  const ans = bigimage.hasChildNodes();
  if (ans) {
    bigimage.innerHTML = "";
  }
  const copy = document.querySelector(".img1").cloneNode(false);
  document.querySelector(".bigimg").appendChild(copy);
}

function image2() {
  const bigimage = document.getElementById("bigimg");
  const ans = bigimage.hasChildNodes();
  if (ans) {
    bigimage.innerHTML = "";
  }
  const copy = document.querySelector(".img2").cloneNode(false);
  document.querySelector(".bigimg").appendChild(copy);
}

function image3() {
  const bigimage = document.getElementById("bigimg");
  const ans = bigimage.hasChildNodes();
  if (ans) {
    bigimage.innerHTML = "";
  }
  const copy = document.querySelector(".img3").cloneNode(false);
  document.querySelector(".bigimg").appendChild(copy);
}

function image4() {
  const bigimage = document.getElementById("bigimg");
  const ans = bigimage.hasChildNodes();
  if (ans) {
    bigimage.innerHTML = "";
  }
  const copy = document.querySelector(".img4").cloneNode(false);
  document.querySelector(".bigimg").appendChild(copy);
}

function image5() {
  const bigimage = document.getElementById("bigimg");
  const ans = bigimage.hasChildNodes();
  if (ans) {
    bigimage.innerHTML = "";
  }
  const copy = document.querySelector(".img5").cloneNode(false);
  document.querySelector(".bigimg").appendChild(copy);
}

onload = function () {
  const container1 = document.querySelector(".bigimg");
  const container1Width = container1.offsetWidth;
  const bigImgWidth = container1Width + "px";
  const container = document.querySelector(".image");
  const containerWidth = container.offsetWidth;
  const bottomImg = containerWidth + "px";
  const imagePrecent = containerWidth/100;
  const imagePad = imagePrecent + "px";
  function addStyle(styleString) {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
  }
  addStyle(
    `
      :root {
        --imgWidth: ${bottomImg};
        --bigimgWidth: ${bigImgWidth};
        --imagePad: ${imagePad};
      }
      `
  );
};

onresize = function () {
  const container1 = document.querySelector(".bigimg");
  const container1Width = container1.offsetWidth;
  const bigImgWidth = container1Width + "px";
  const container = document.querySelector(".image");
  const containerWidth = container.offsetWidth;
  const bottomImg = containerWidth + "px";
  const imagePadCalc = containerWidth/100;
  const imagePad = imagePadCalc + "px";
  function addStyle(styleString) {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
  }
  addStyle(
    `
      :root {
        --imgWidth: ${bottomImg};
        --bigimgWidth: ${bigImgWidth};
        --imagePad: ${imagePad};
      }
      `
  );
};
