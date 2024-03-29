window.onload = function () {
  const marginPrecent = 1;

  const container = document.getElementById("gallery-container");
  const containerWidth = container.offsetWidth;
  const numberOfColumns = 2;
  const imgWidthCalc = 100 / numberOfColumns - marginPrecent / numberOfColumns;
  const imgWidth = imgWidthCalc + "%";
  const marginLeftColumn2Calc = 100 - imgWidthCalc;
  const marginLeftColumn2 = marginLeftColumn2Calc + "%";
  const marginOfImg = (containerWidth / 100) * marginPrecent;
  const bottomImg = marginOfImg + "px";
  function addStyle(styleString) {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
  }
  addStyle(
    `
        :root {
          --bottomImg: ${bottomImg};
          --marginLeftColumn2: ${marginLeftColumn2};
          --imgWidth: ${imgWidth};
        }
        `
  );
};

window.onresize = function () {
  const marginPrecent = 1;

  const container = document.getElementById("gallery-container");
  const containerWidth = container.offsetWidth;
  const numberOfColumns = 2;
  const imgWidthCalc = 100 / numberOfColumns - marginPrecent / numberOfColumns;
  const imgWidth = imgWidthCalc + "%";
  const marginLeftColumn2Calc = 100 - imgWidthCalc;
  const marginLeftColumn2 = marginLeftColumn2Calc + "%";
  const marginOfImg = (containerWidth / 100) * marginPrecent;
  const bottomImg = marginOfImg + "px";
  function addStyle(styleString) {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
  }
  addStyle(
    `
        :root {
          --bottomImg: ${bottomImg};
          --marginLeftColumn2: ${marginLeftColumn2};
          --imgWidth: ${imgWidth};
        }
        `
  );
};

function myFunction2() {
  var element = document.getElementById("overlay");
  element.classList.add("overlay");
}

//  window.scrollTo(0, 0);

function moveright() {
  document.getElementById("photoleft").style.left = "0";
  document.getElementById("photoright").style.right = "-90.5%";
}




function moveleft() {
  document.getElementById("photoright").style.right = "0";
  document.getElementById("photoleft").style.left = "-90.5%";
}