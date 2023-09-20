

//codigo del servidor/
const express = require("express")//importando el módulo express( framework web que simplifica la creación de aplicaciones web y la manipulación de rutas, middleware, etc.)

const app= express();//instancia será el objeto central que controlará todas las rutas y funciones de tu aplicación web.

app.use(express.static(__dirname+ '/public'));//especificar las ruta de los archivos estaticos

app.get('/',(req, res)=>{
res.sendFile(__dirname+'/public/index.html');//dirname es la ruta actual
})

app.listen(3000, ()=>{//onfigura el servidor para escuchar en el puerto 3000 y , ejecutará la función de callback que se proporciona
    console.log('server runing on port', 3000)
});
//instalar nodemon