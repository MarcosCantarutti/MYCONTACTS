const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router(); // função que tem dentro do pacote do express

router.get('/contacts', ContactController.index);// get = buscar
router.get('/contacts/:id', ContactController.show); // get por id = buscar por um identificador / necessario id
router.delete('/contacts/:id', ContactController.delete); // delete = apagar / necessario id
router.post('/contacts/', ContactController.store); // post = adcionar
router.put('/contacts/:id', ContactController.update); // put = alterar / necessario id

router.get('/categories', CategoryController.index);
router.get('/categories/:name', CategoryController.categories);
router.get('/categories/:id', CategoryController.show);
router.delete('/categories/:id', CategoryController.delete);
router.post('/categories', CategoryController.store);
router.put('/categories/:id', CategoryController.update);

module.exports = router;
