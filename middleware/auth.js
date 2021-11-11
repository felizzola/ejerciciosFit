const jwt = require('jsonwebtoken');

async function auth(req, res, next){
    try {
        const token = req.header('Token');
        const tokendecode = jwt.verify(token, process.env.CLAVE_SECRETA);
        req.params.userid = tokendecode._id;
        req.params.userrol = tokendecode.rol;
        next();
    } catch (error) {
        res.status(401).send({error: error.message});
    }
}

module.exports = auth;