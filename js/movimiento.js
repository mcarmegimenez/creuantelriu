
window.onload = function () {

$('#top').html(textos.top_inicio);
$('#boton_start').html(textos.boton_start);


/*
      var handleTick = function () {

          ancho_slider = $('#slider').width();

          ancho_boton_slider = $('#slider_boton').width();

          posicion_boton_slider =  $('#slider_boton').position().left;

          relativo_boton_slider = (ancho_slider/(ancho_slider-ancho_boton_slider))*(posicion_boton_slider/ancho_slider);

          valor_pos_bot_slider = relativo_boton_slider;

          revoluciones_pre = Math.round(valor_pos_bot_slider * 100) / 100;     
      };




      $('#slider_boton').draggable({
  
          axis: "x",
          containment: "parent",
          delay: 0,
          revert: false,
          revertDuration: 10,
          start: function( event, ui ){                                                                           
                               
          },
          stop: function( event, ui ) {                                                
                                                                                                              
          },
          drag: function( event, ui ) { 
          }                           
      });
*/
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');
      var boxes = [];
      var canoa = setProperties('joule', 90, 30, 0, 0);
      var puerto = setProperties('joule', 60, 100, 600, 0);
      var roca_1 = setProperties('joule', 40, 830, 0, 0);
      var cascada = setProperties('joule', 560, 130, 830, 40);
      var tronco_1 = setProperties('joule', 20, 60, 0, 400);
      var tronco_2 = setProperties('joule', 20, 60, 0, 400);
      var tronco_3 = setProperties('joule', 20, 60, 0, 400);
      boxes.push(canoa, puerto, roca_1, cascada, tronco_1, tronco_2, tronco_3);

      fuerza_rio = 0.005;
      fuerza_remos = 0.007;

      var accion = 0;

      function starting(){

        canoa.posX = nueva_posicion_tronco_Y(20, 350);
        canoa.posY = 490;
        canoa.vx = 0;
        canoa.vy = 0;
        puerto.posX = nueva_posicion_tronco_Y(450, 750);
        tronco_1.posX = 0;
        tronco_1.posY = 400;
        tronco_1.vx = 1;
        tronco_2.posX = 300;
        tronco_2.posY = 500;
        tronco_2.vx = 1.5;
        tronco_3.posX = 500;
        tronco_3.posY = 250;
        tronco_3.vx = 2;

      };

      starting()

      $('#boton_start').on('mousedown', function(){
          accion = 1; 
      });

      function nueva_posicion_tronco_Y(min, max) {
         return Math.round(Math.random()*(max-min)+parseInt(min));
      }
/*
      function tiempo_aparicion_tronco(min, max) {
         return Math.round(Math.random()*(max-min)+parseInt(min));
      }
*/

      function draw (image) {
        image.draw(context);
      }


      //mouse = utils.captureMouse(canvas),
 
      (function drawFrame () {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvas.width, canvas.height);

        boxes.forEach(draw);

        if( accion == 1 ){
          canoa.vx += canoa.ax;
          canoa.vy += canoa.ay;
          canoa.posX += canoa.vx;
          canoa.posY -= canoa.vy;
        }

        canoa.ax = fuerza_rio;
        canoa.ay = fuerza_remos;
        tronco_1.ax = fuerza_rio*1.5;
        tronco_1.vx += tronco_1.ax; 
        tronco_1.posX += tronco_1.vx;
        tronco_2.ax = fuerza_rio*1.5;
        tronco_2.vx += tronco_2.ax; 
        tronco_2.posX += tronco_2.vx;
        tronco_3.ax = fuerza_rio*1.5;
        tronco_3.vx += tronco_3.ax; 
        tronco_3.posX += tronco_3.vx;

        if( tronco_1.posX > 820 ){
          tronco_1.posX = -60;
          tronco_1.posY = nueva_posicion_tronco_Y(80, 500);
          tronco_1.vx = 1;
        }

        if( tronco_2.posX > 820 ){
          tronco_2.posX = -60;
          tronco_2.posY = nueva_posicion_tronco_Y(80, 500);
          tronco_2.vx = 1;
        }

        if( tronco_3.posX > 820 ){
          tronco_3.posX = -60;
          tronco_3.posY = nueva_posicion_tronco_Y(80, 500);
          tronco_3.vx = 1;
        }
           

        for (var elemento_1, i = 0, len = boxes.length - 1; i < len; i++) {
          elemento_1 = boxes[i];
          for (var elemento_2, j = i + 1; j < boxes.length; j++) {
            elemento_2 = boxes[j];
            
           /* if (utils.intersects(elemento_1.getBounds(), elemento_2.getBounds())) {
              alert('impacto')
            }  */
          }
      }


      }());

};



