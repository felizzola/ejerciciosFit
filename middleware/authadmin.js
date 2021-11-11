const jwt = require('jsonwebtoken');

async function authadmin(req, res, next){
    try {
        if(req.params.userrol != "administrador"){
            res.status(403).json({'error': 'Sin autorización'});
        }
        next();
    } catch (error) {
        res.status(401).send({error: error.message});
    }
}

module.exports = authadmin;