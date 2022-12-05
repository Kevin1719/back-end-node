const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')

const stuffCtrl = require('../controllers/stuff');

//Récupération de toutes les données depuis la base de donnée
router.get('/', auth, stuffCtrl.getAllThings);

//Envoyer les données dans la base de donnée
router.post('/', auth, multer, stuffCtrl.createThing);

//récuperer un objet specifque dans la base de donnée en fonction de son "id"
router.get('/:id', auth, stuffCtrl.getOneThing);

//modifier l'objet existant
router.put('/:id', auth, multer, stuffCtrl.modifyThing);

//supprimer un objet dans la base de donnée
router.delete('/:id', auth, stuffCtrl.deleteThing);


module.exports = router;