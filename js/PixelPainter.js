window.onload = function() {
  var pxlPainter = GridMaker();
  pxlPainter.createGrid();
  var colorPalette = new pxlPainter.createGrid(6,6, 'colorPalette');
  var mainGrid = new pxlPainter.createGrid(15, 15, 'mainGrid');
  var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
  pxlPainter.pxlColor(CSS_COLOR_NAMES);
  pxlPainter.selectColor();
  pxlPainter.paint();
  pxlPainter.eraseButton();
  pxlPainter.clearButton();
};

var GridMaker = function() {
  var selected;
  var erase;

  //Class to create grids
  var createGrid = function(x, y, id) {
    //sets divEl equal to pixelPainter div
    var divEl = document.getElementById('pixelPainter');

    var container = document.createElement('div');
    container.id = id;

    var counter = 0;
    for (var j = 0; j < y; j++) {
      var row = document.createElement('div');

      // //creates row of divs
      for (var i = 0; i < x; i++) {
        var gridSq = document.createElement('div');
        gridSq.setAttribute('class', id + '_cells');
        gridSq.setAttribute('id', id + '_grid_' + counter);
        row.appendChild(gridSq);
        counter++;
      }
      container.appendChild(row);
      divEl.appendChild(container);
    }
  };

  var pxlColor = function(arr) {
    var color = document.getElementById('colorPalette');
    var count = document.getElementsByClassName('colorPalette_cells');

    for (var k = 0; k < count.length; k++) {
      var selector = document.getElementById('colorPalette_grid_' + k);
      selector.style.background = arr[Math.floor(Math.random() * arr.length)];
    }
  };

  var selectColor = function() {
    var color = document.getElementById('colorPalette');
    color.addEventListener('click', function(event) {
      selected = event.target.style.background;
    });
  };

  var paint = function() {
    var canvas = document.getElementById('mainGrid');
    canvas.addEventListener('click', function(event) {
      if (event.target.className === 'mainGrid_cells') {
        event.target.style.background = selected;
      }
    });
  };

  var eraseButton = function(paint) {
    var divEl = document.getElementById('pixelPainter')
    var button = document.createElement('button');
    button.innerHTML = 'erase';
    divEl.appendChild(button);
    button.addEventListener('click', function(event) {
      selected = 'transparent';
      paint(selected);
    });
  };

  var clearButton = function() {
    var divEl = document.getElementById('pixelPainter')
    var button = document.createElement('button');
    button.innerHTML = 'clear'
    divEl.appendChild(button);
    var canvas = document.getElementsByClassName('mainGrid_cells');
    console.log('canvas',canvas);
    button.addEventListener('click', function(event) {
      for (var i = 0; i < canvas.length; i++) {
      canvas[i].style.background = 'transparent';
      }
    });
  };

  //returns functions to make them accessible outside of GridMaker scope
  return {
    createGrid : createGrid,
    pxlColor : pxlColor,
    selectColor : selectColor,
    paint : paint,
    eraseButton : eraseButton,
    clearButton : clearButton
  };
};