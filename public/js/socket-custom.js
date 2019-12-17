var socket = io();

//on --> escuchar informacion
//emit --> emitir informacion

socket.on('connect', function(){
    console.log('conectado al servidor');
})

socket.on('disconnect', function(){
    console.log('usuario desconectado');
})

socket.emit('enviarMensaje',{
    usuario:'diego',
    mensaje:'mensaje desde el frontend'
},function(resp){
    console.log('respuesta server: ',resp);
});

socket.on('mensajeServidor',function(mensaje){
    console.log(mensaje);
})
