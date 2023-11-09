//cambiar imagen de fondo.

/*$( function(){
    var arrImg = [ 'img/Fondo-2.jpg','../img/Fondo-1.png' ];
    var imgActual = 'img/Fondo-2.jpg';
    var tiempo = 3000;
    var id_contenedor = 'main-wrap'
    setInterval( function(){
        do{
            var randImg = arrImg[Math.ceil(Math.random()*(arrImg.length-1))];
        }while( randImg == imgActual )
        imgActual = randImg;
        cambiarImgFondo(imgActual, id_contenedor);
    }, tiempo)
})
 
function cambiarImgFondo(nuevaImg, contenedor){
    var contenedor = $('#' + contenedor);
    //cargar imagen primero
    var tempImg = new Img();
    $(tempImg).load( function(){
        contenedor.css('backgroundImg', 'url('+tempImg.src+')');
    });
    tempImg.src = 'img/' + nuevaImg;
}*/