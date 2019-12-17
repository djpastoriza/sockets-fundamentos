const {io} = require('../server');

io.on('connection',(client)=> {
    console.log('usuario conectado');

    client.on('disconnect', ()=> {
        console.log('usuario desconectado');
    })

    //escuchar el cliente

    client.on('enviarMensaje',(data,callback)=>{
        console.log(data);
        /*if(mensaje.usuario){
            callback({
                resp:'todo salio bien'
            })
        }else{
            callback({
                resp:'todo salio mal'
            })
        }*/

        
        client.broadcast.emit('enviarMensaje',data); //broadcast envia a todos
    })

    // enviar al cliente

    client.emit('mensajeServidor',{
        mensaje:'envio mensaje desde el backend'
    })
})


