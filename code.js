window.onload = function () {

  const marginPrecent = 1.5;

  const container = document.getElementById("gallery-container");
  const containerWidth = container.offsetWidth;

  const numberOfColumns = 2;
  const imgWidthCalc = 100 / numberOfColumns - marginPrecent / numberOfColumns;
  const imgWidth = imgWidthCalc + "%";

  const marginLeftColumn2Calc = 100 - imgWidthCalc;
  const marginLeftColumn2 = marginLeftColumn2Calc + "%";

  function addStyle(styleString) {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
  }
  if (containerWidth > 1440) {
    const marginOfImg = (containerWidth/ 100) * marginPrecent;
    const bottomImg = marginOfImg + "px";
    addStyle(
      `
        :root {
          --bottomImg: ${bottomImg};
          --marginLeftColumn2: ${marginLeftColumn2};
          --imgWidth: ${imgWidth};
        }
        `
    );
  } else {
    const marginOfImg = (containerWidth / 100) * marginPrecent;
    const bottomImg = marginOfImg + "px";
    addStyle(
      `
        :root {
          --bottomImg: ${bottomImg};
          --marginLeftColumn2: ${marginLeftColumn2};
          --imgWidth: ${imgWidth};
        }
        `
    );
  }
};

window.onresize = function () {

  const marginPrecent = 1.5;

  const container = document.getElementById("gallery-container");
  const containerWidth = container.offsetWidth;

  const numberOfColumns = 2;
  const imgWidthCalc = 100 / numberOfColumns - marginPrecent / numberOfColumns;
  const imgWidth = imgWidthCalc + "%";

  const marginLeftColumn2Calc = 100 - imgWidthCalc;
  const marginLeftColumn2 = marginLeftColumn2Calc + "%";

  function addStyle(styleString) {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
  }
  if (containerWidth > 1440) {
    const marginOfImg = (containerWidth / 100) * marginPrecent;
    const bottomImg = marginOfImg + "px";
    addStyle(
      `
        :root {
          --bottomImg: ${bottomImg};
          --marginLeftColumn2: ${marginLeftColumn2};
          --imgWidth: ${imgWidth};
        }
        `
    );
  } else {
    const marginOfImg = (containerWidth / 100) * marginPrecent;
    const bottomImg = marginOfImg + "px";
    addStyle(
      `
        :root {
          --bottomImg: ${bottomImg};
          --marginLeftColumn2: ${marginLeftColumn2};
          --imgWidth: ${imgWidth};
        }
        `
    );
  }
};

