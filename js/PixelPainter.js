window.onload = function() {
  var pxlPainter = GridMaker();
  pxlPainter.createGrid();
  var colorPalette = new pxlPainter.createGrid(6, 6, 'colorPalette');
  var mainGrid = new pxlPainter.createGrid(15, 15, 'mainGrid');
  var CSS_COLOR_NAMES = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'Darkorange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'];
  pxlPainter.pxlColor(CSS_COLOR_NAMES);
  pxlPainter.selectColor();
  pxlPainter.paint();
  pxlPainter.eraseButton();
  pxlPainter.clearButton();
  pxlPainter.hover();
  pxlPainter.pickedColor();
  pxlPainter.logo();
};

var GridMaker = function() {
  var selected;
  var erase;
  var mouseDown = false;

  //Class to create grids
  var createGrid = function(x, y, id) {
    //sets divEl equal to pixelPainter div
    var divEl = document.getElementById('pixelPainter');

    var container = document.createElement('div');
    container.id = id;

    var holder = document.createElement('div');
    holder.id = id + '_inner';

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
      holder.appendChild(row);
      container.appendChild(holder);
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
      selected = event.target.style.backgroundColor;
    });
  };

  var paint = function() {
    var canvas = document.getElementById('mainGrid');

    canvas.addEventListener('mousedown', function(event) {
      event.preventDefault();
      if (event.target.className === 'mainGrid_cells') {
        event.target.style.backgroundColor = selected;
      }

      mouseDown = true;
    });

    canvas.addEventListener('mouseup', function() {
      mouseDown = false;
    });

    canvas.addEventListener('mousemove', function() {
      if (mouseDown === true) {
        if (event.target.className === 'mainGrid_cells') {
          event.target.style.backgroundColor = selected;
        }
      }
    });
  };

  var eraseButton = function(paint) {
    var divEl = document.getElementById('colorPalette');
    var button = document.createElement('div');
    var color = selected;
    button.setAttribute('id', 'undo');
    button.innerHTML = 'UNDO';
    divEl.appendChild(button);
    button.addEventListener('click', function(event) {
      color = 'transparent';
    });
  };

  var clearButton = function() {
    var divEl = document.getElementById('colorPalette');
    var button = document.createElement('div');
    button.setAttribute('id', 'start-fresh');
    button.innerHTML = 'START FRESH';
    divEl.appendChild(button);
    var canvas = document.getElementsByClassName('mainGrid_cells');
    button.addEventListener('click', function(event) {
      for (var i = 0; i < canvas.length; i++) {
        canvas[i].style.background = 'white';
      }
    });
  };

  var hover = function() {
    var undo = document.querySelector('#undo');
    var startFresh = document.querySelector('#start-fresh');
    var colorPalette = document.querySelector('#colorPalette_inner');
    undo.addEventListener('mouseover', function() {
      undo.style.border = '3px solid #F26823';
      undo.style.color = '#F26823';
    });

    undo.addEventListener('mouseout', function() {
      undo.style.border = '1px solid #6B6B4D';
      undo.style.color = '6B6B4D';
    });

    startFresh.addEventListener('mouseover', function() {
      startFresh.style.border = '3px solid #F26823';
      startFresh.style.color = '#F26823';
    });

    startFresh.addEventListener('mouseout', function() {
      startFresh.style.border = '1px solid #6B6B4D';
      startFresh.style.color = '6B6B4D';
    });
  };

  var pickedColor = function() {
    var div = document.getElementById('colorPalette');
    var picked = document.createElement('div');
    var slash = document.createElement('div');
    slash.setAttribute('id', 'slash');
    picked.setAttribute('id', 'picked');
    slash.innerHTML = '<?xml version="1.0" encoding="utf-8"?> <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 33.7 33.7" enable-background="new 0 0 33.7 33.7" xml:space="preserve"> <line fill="none" stroke="#EE3B24" stroke-miterlimit="10" x1="33.4" y1="0.4" x2="0.4" y2="33.4"/> </svg>';
    picked.appendChild(slash);
    div.appendChild(picked);

    var color = document.getElementById('colorPalette');
    color.addEventListener('click', function(event) {
      slash.innerHTML = null;
      picked.style.background = selected;
    });
  };

  var logo = function() {
    var div = document.getElementById('colorPalette');
    var logo = document.createElement('div');
    logo.setAttribute('id', 'logo');
    logo.innerHTML = 'PIXEL PAINTER';
    div.appendChild(logo);
  };

  //returns functions to make them accessible outside of GridMaker scope
  return {
    createGrid : createGrid,
    pxlColor : pxlColor,
    selectColor : selectColor,
    paint : paint,
    eraseButton : eraseButton,
    clearButton : clearButton,
    hover : hover,
    pickedColor : pickedColor,
    logo : logo
  };
};