
//importaciones
const express = require('express')
//variables globales
const app = express();

const nombres = [
    'Mario',
    'Marcelo',
    'Martin',
    'Manuel'

]



//middleware
app.use(express.static('assets'));


app.use(express.json());


function verificarUsuario(req, res, next) {
    const usuario = req.params.usuario;
    if (nombres.includes(usuario)) {
        next(); 
    } else {
        res.sendFile(__dirname + "/assets/who.jpeg")
    }
}

app.get('/abracadabra/juego/:usuario', verificarUsuario, (req, res) => {
    
    res.sendFile(__dirname + "/index.html");
});

app.get("/abracadabra/conejo/:n", (req, res) => {
    const userNumber = req.params.n
    const bunnnyNumber = Math.floor(Math.random() * 5 - 1)
  
    console.log(userNumber)
    console.log(bunnnyNumber)
    if (userNumber == bunnnyNumber){
      res.sendFile(__dirname + "/assets/conejito.jpg")
    } else {
      res.sendFile(__dirname + "/assets/voldemort.jpg")
    }
  })


  app.use((req, res) => {
    res.status(404).send('Esta página no existe...');
});
app.listen(3000, () => {
    console.log('servidor levantado en el puerto 3000')
})

