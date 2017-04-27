function drawSquare(){
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext('2d'),
      img = document.getElementById("purity")

      var pat=context.createPattern(img,"repeat");
      context.strokeRect(0,0,300,300)
      context.fillStyle=pat;
      context.fill();

      context.save();
      context.translate(150,-64);
      context.rotate(45*Math.PI/180);

      context.save();
      context.translate(35,35);
      context.shadowBlur=20;
      context.shadowOffsetX=20;
      context.shadowColor="black";
      context.fillRect(0,0,230,230);

      context.save();
      context.fillStyle = "white";
      context.fillRect(30,30,170,170)
      context.restore();

      context.save();
    //  context.translate(130,-54);
      context.rotate(45*Math.PI/180);
      context.translate(50,-115);

      context.save();
      context.fillStyle = 'blue';
      context.fillRect(50,50,130,130);
      context.restore();

      context.save();
      context.fillRect(70,70,90,90)
      context.restore();

}
