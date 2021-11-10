var express = require('express');
var router = express.Router();
const controller = require('../controllers/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource'); 
});

router.get('/:id', function(req,res,next){
  res.json(users.filter(user => user._id == parseInt(req.params.id)));
});

router.post('/', async (req, res)=>{
  // TODO: Validar que sea correcto el objeto usuario
  const result = await controller.addUser(req.body);
  res.send(result);
});

router.post('/login', async(req, res)=>{
  try {
    const user = await controller.findByCredentials(req.body.email, req.body.password);
    const token = controller.generatedAuthToken(user);

    res.send({user, token});

  } catch (error) {
    res.status(401).send(error.message);
  }
});

module.exports = router;
