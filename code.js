window.onload = function () {
  const marginPrecent = 1.5;
  const containerDisPreFull = 100;
  const containerDisPreLim = 60;
  const windowWidth = window.innerWidth;
  console.log(windowWidth);
  const containerSizeFull = (windowWidth * containerDisPreFull) / 100;
  const containerSizelim = (windowWidth * containerDisPreLim) / 100;

  const numberOfColumns = 2;
  const imgWidthCalc = 100 / numberOfColumns - marginPrecent / 2;
  const imgWidth = imgWidthCalc + "%";
  const marginLeftColumn2Calc = 100 - imgWidthCalc;
  const marginLeftColumn2 = 100 - imgWidthCalc + "%";
  const widthContainer = 100;

  function addStyle(styleString) {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
  }
  if (windowWidth > 1440) {
    const marginOfImg = (containerSizelim / 100) * marginPrecent;
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
    const marginOfImg = (containerSizeFull / 100) * marginPrecent;
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
  const containerDisPreFull = 100;
  const containerDisPreLim = 60;
  const windowWidth = window.innerWidth;
  console.log(windowWidth);
  const containerSizeFull = (windowWidth * containerDisPreFull) / 100;
  const containerSizelim = (windowWidth * containerDisPreLim) / 100;

  const numberOfColumns = 2;
  const imgWidthCalc = 100 / numberOfColumns - marginPrecent / 2;
  const imgWidth = imgWidthCalc + "%";
  const marginLeftColumn2Calc = 100 - imgWidthCalc;
  const marginLeftColumn2 = 100 - imgWidthCalc + "%";
  const widthContainer = 100;

  function addStyle(styleString) {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
  }
  if (windowWidth > 1440) {
    const marginOfImg = (containerSizelim / 100) * marginPrecent;
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
    const marginOfImg = (containerSizeFull / 100) * marginPrecent;
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
