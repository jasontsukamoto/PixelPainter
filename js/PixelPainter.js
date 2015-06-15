window.onload = function() {
  var pxlPainter = GridMaker();
  pxlPainter.createGrid();
  var colorPalette = new pxlPainter.createGrid(5, 'colorPalette');
  var mainGrid = new pxlPainter.createGrid(15, 'mainGrid');
};

var GridMaker = function() {

  var createGrid = function(n, id) {
    //sets divEl equal to pixelPainter div
    var divEl = document.getElementById('pixelPainter');

    var container = document.createElement('div');
    container.id = id;

    for (var j = 0; j < n; j++) {
      var row = document.createElement('div');

      // //creates row of divs
      for (var i = 1; i < n; i++) {
        var gridSq = document.createElement('div');
        gridSq.setAttribute('class', 'grid');
        gridSq.setAttribute('id', 'grid' + i);
        row.appendChild(gridSq);
      }
      container.appendChild(row);
      divEl.appendChild(container);
    }
  };

  return {
      createGrid : createGrid
    };
};