window.onload = function () {
  const marginPrecent = .7;

  const container = document.getElementById("gallery-container");
  const containerWidth = container.offsetWidth;
  const numberOfColumns = 2;
  const imgWidthCalc = 100 / numberOfColumns - marginPrecent / numberOfColumns;
  const imgWidth = imgWidthCalc + "%";
  const marginLeftColumn2Calc = 100 - imgWidthCalc;
  const marginLeftColumn2 = marginLeftColumn2Calc + "%";
  const marginOfImg = (containerWidth / 100) * marginPrecent/2;
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

  console.log(bottomImg);
  console.log(marginLeftColumn2);
  console.log(imgWidth);
};

window.onresize = function () {
  const marginPrecent = .7;

  const container = document.getElementById("gallery-container");
  const containerWidth = container.offsetWidth;
  const numberOfColumns = 2;
  const imgWidthCalc = 100 / numberOfColumns - marginPrecent / numberOfColumns;
  const imgWidth = imgWidthCalc + "%";
  const marginLeftColumn2Calc = 100 - imgWidthCalc;
  const marginLeftColumn2 = marginLeftColumn2Calc + "%";
  const marginOfImg = (containerWidth / 100) * marginPrecent/2;
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
