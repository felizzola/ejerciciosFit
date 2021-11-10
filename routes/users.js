var express = require('express');
var router = express.Router();
const data = require('../data/user');
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource'); 
});

router.post('/login', async(req, res)=>{
  try {
    const user = await data.findByCredentials(req.body.email, req.body.password);
/*     if(user.activo){ */
      const token = await data.generatedAuthToken(user);
      res.send({user, token});
/*     }else{
      res.send('Su cuenta esta inactiva')
    }  */
  } catch (error) {
    res.status(401).send(error.message);
  }
});

router.get('/:id', async(req,res,next)=>{
  res.json(await data.getUser(req.params.id));
});

router.post('/', async (req, res)=>{
  // TODO: Validar que sea correcto el objeto usuario
  const result = await controller.addUser(req.body);
  res.send(result);
});

router.delete('/:id', async (req, res)=>{
  try {
    const result = await data.deleteUser(req.params.id);
    result.deletedCount ? res.send(result) : res.status(404).json({'error': "id not found"});
    /* res.send(result); */
  } catch (error) { 
    console.log(error.message);
    res.status(500).json({'error': error.message});
  }
}); 

router.put('/favoritos/:id', async(req, res)=>{
  /* OPTIMIZAR PROCEDIMIENTO DE DECODIFICAR DATOS DEL TOKEN */
  const token = req.header('Token');
  const tokendecode = jwt.verify(token, process.env.CLAVE_SECRETA);
  console.log(tokendecode);
  let unid = tokendecode._id; 
  /* OPTIMIZAR PROCEDIMIENTO DE DECODIFICAR DATOS DEL TOKEN */
  let favoritos = await data.setFavorito(req.params.id, unid);
  res.json(favoritos);
  res.end();
});

module.exports = router;
