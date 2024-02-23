function setProperties (foto, h, w, posX, posY, angle) {

  image = new Image();
  image.src = 'data/imgns/'+foto+'.png';

  if (h === undefined) { h = 30; }
  if (w === undefined) { w = 30; }
  if (angle === undefined) { angle  = 0; }
  image.posX = posX;
  image.posY = posY;
  image.h = h;
  image.w = w;
  image.vx = 10;
  image.vy = 0;
  image.angle = angle;

  return image;

}

Image.prototype.draw = function (context) {

  context.save();
  context.translate(this.posX + this.w/2, this.posY + this.h/2);
  context.rotate(this.angle); 
  context.translate(- this.w/2, - this.h/2);
  context.beginPath();
  context.drawImage(this, 0, 0, this.w, this.h);
  context.closePath();
  context.restore();
};

Image.prototype.getBounds = function () {
  return {
    x: this.posX - this.w,
    y: this.posY - this.h,
    width: this.w ,
    height: this.h
  };
};
