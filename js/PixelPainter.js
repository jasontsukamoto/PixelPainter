window.onload = function() {
  var pxlPainter = GridMaker();
  pxlPainter.createGrid();
  var colorPalette = new pxlPainter.createGrid(8, 'colorPalette');
  var mainGrid = new pxlPainter.createGrid(15, 'mainGrid');
  var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
  pxlPainter.pxlColor(CSS_COLOR_NAMES);
};

var GridMaker = function() {

  //Class to create grids
  var createGrid = function(n, id) {
    //sets divEl equal to pixelPainter div
    var divEl = document.getElementById('pixelPainter');

    var container = document.createElement('div');
    container.id = id;

    var counter = 0;
    for (var j = 0; j < n; j++) {
      var row = document.createElement('div');

      // //creates row of divs
      for (var i = 0; i < n; i++) {
        var gridSq = document.createElement('div');
        gridSq.setAttribute('class', 'grid');
        gridSq.setAttribute('id', 'grid' + counter);
        row.appendChild(gridSq);
        counter++;
      }
      container.appendChild(row);
      divEl.appendChild(container);
    }
  };

  var pxlColor = function(arr) {
    var color = document.getElementById('colorPalette');
    var count = 0;

    for (var i = 0; i < color.children.length; i++) {
      for (var j = 0; j < color.children.length; j++) {
        count++;
      }
    }

    for (var k = 0; k < count; k++) {
      var selector = document.getElementById('grid' + [k]);
      selector.style.background = arr[Math.floor(Math.random() * arr.length)];
    }
  };

  var selectColor = function() {
    object.onclick=function() {

    }
  };

  //returns functions to make them accessible outside of GridMaker scope
  return {
      createGrid : createGrid,
      pxlColor : pxlColor,
      selectColor : selectColor
    };

//closes GridMaker function
};