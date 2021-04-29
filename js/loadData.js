function getGridData(mycolor) {
  var data = new Array();
  var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
  var ypos = 1;
  var width = 30;
  var height = 30;
  var click = 0;
  var count = 0;

  // iterate for rows
  for (var row = 0; row < 10; row++) {
    data.push(new Array());

    // iterate for cells/columns inside rows
    for (var column = 0; column < 33; column++) {
      // console.log(count, mycolor[count]);
      data[row].push({
        x: xpos,
        y: ypos,
        width: width,
        height: height,
        padding: 10,
        color: d3.lab(
          parseFloat(mycolor[count]["L*"]),
          parseFloat(mycolor[count]["a*"]),
          parseFloat(mycolor[count]["b*"]),
          (opacity = 1)
        ),
        click: click,
      });
      // increment the x position. I.e. move it over by 50 (width variable)
      xpos += width;
      // console.log(count);
      count++;
    }
    // reset the x position after a row is complete
    xpos = 1;
    // increment the y position for the next row. Move it down 50 (height variable)
    ypos += height;
  }
  return data;
}
