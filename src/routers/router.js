const express = require('express');
const router = express.Router(); 
const usuarioController= require('../controllers/UsuarioController');
const entidadController= require('../controllers/EntidadController'); 
const usuarioentidadController= require('../controllers/UsuarioEntidadController');
const reciboscaja= require('../controllers/RecibosCajaController');
const reciboperiodo= require('../controllers/ReciboPeriodoController');
const activofijo = require('../controllers/ActivoFijoController');
const activofijoDetalle = require('../controllers/ActivoFijoDetalleController');
const semestreController = require('../controllers/SemestreController');
const semestreDetalleController = require('../controllers/semestreDetalleController');
const paisController = require('../controllers/PaisController');
const CatalogoController = require('../controllers/CatalgocuentaController');
const CatalogoTransaccionesController = require('../controllers/CatalgoTransaccionesController');
const MovimientoController = require('../controllers/MovimientoController');
 
 //EndPoint Usuario
router.get('/usuario/', usuarioController.list);
router.post('/usuario/create',usuarioController.create);
router.get('/usuario/delete/:id',usuarioController.delete);
router.get('/usuario/update/:id',usuarioController.select);
router.post('/usuario/update/:id',usuarioController.update);
 
//EndPoint entidade
router.get('/entidad/', entidadController.list);
router.post('/entidad/create',entidadController.create);
router.get('/entidad/delete/:id',entidadController.delete);
router.get('/entidad/update/:id',entidadController.select);
router.post('/entidad/update/:id',entidadController.update);

//EndPoint Usuario Entidad
router.get('/usuarioentidad/', usuarioentidadController.list);
router.post('/usuarioentidad/create',usuarioentidadController.create);
router.get('/usuarioentidad/delete/:id',usuarioentidadController.delete);
router.get('/usuarioentidad/update/:id',usuarioentidadController.select);
router.post('/usuarioentidad/update/:id',usuarioentidadController.update);

//EndPoint Recibos de caja
router.get('/reciboscaja/', reciboscaja.list);
router.post('/reciboscaja/create',reciboscaja.create);
router.get('/reciboscaja/delete/:id',reciboscaja.delete);
router.get('/reciboscaja/update/:id',reciboscaja.select);
router.post('/reciboscaja/update/:id',reciboscaja.update);


//EndPoint Recibos periodos
router.get('/reciboperiodo/', reciboperiodo.list);
router.post('/reciboperiodo/create',reciboperiodo.create);
router.get('/reciboperiodo/delete/:id',reciboperiodo.delete);
router.get('/reciboperiodo/update/:id',reciboperiodo.select);
router.post('/reciboperiodo/update/:id',reciboperiodo.update);

//EndPoint activo fijo
router.get('/activofijo/', activofijo.list);
router.post('/activofijo/create',activofijo.create);
router.get('/activofijo/delete/:id',activofijo.delete);
router.get('/activofijo/update/:id',activofijo.select);
router.post('/activofijo/update/:id',activofijo.update);

//EndPoint activo fijo Detalles
router.get('/activofijoDetalle/', activofijoDetalle.list);
router.post('/activofijoDetalle/create',activofijoDetalle.create);
router.get('/activofijoDetalle/delete/:id',activofijoDetalle.delete);
router.get('/activofijoDetalle/update/:id',activofijoDetalle.select);
router.post('/activofijoDetalle/update/:id',activofijoDetalle.update);

//EndPoint semestre
router.get('/semestre/', semestreController.list);
router.post('/semestre/create',semestreController.create);
router.get('/semestre/delete/:id',semestreController.delete);
router.get('/semestre/update/:id',semestreController.select);
router.post('/semestre/update/:id',semestreController.update);
 
//EndPoint semestre detalle
router.get('/semestredetalle/', semestreDetalleController.list);
router.post('/semestredetalle/create',semestreDetalleController.create);
router.get('/semestredetalle/delete/:id',semestreDetalleController.delete);
router.get('/semestredetalle/update/:id',semestreDetalleController.select);
router.post('/semestredetalle/update/:id',semestreDetalleController.update);
  
//EndPoint pais
router.get('/pais/', paisController.list);
router.post('/pais/create',paisController.create);
router.get('/pais/delete/:id',paisController.delete);
router.get('/pais/update/:id',paisController.select);
router.post('/pais/update/:id',paisController.update);
 
//EndPoint Catalogo cuentas
router.get('/Catalogo/', CatalogoController.list);
router.post('/Catalogo/create',CatalogoController.create);
router.get('/Catalogo/delete/:id',CatalogoController.delete);
router.get('/Catalogo/update/:id',CatalogoController.select);
router.post('/Catalogo/update/:id',CatalogoController.update);

//EndPoint Catalogo Transacciones
router.get('/Transaccione/', CatalogoTransaccionesController.list);
router.post('/Transaccione/create',CatalogoTransaccionesController.create);
router.get('/Transaccione/delete/:id',CatalogoTransaccionesController.delete);
router.get('/Transaccione/update/:id',CatalogoTransaccionesController.select);
router.post('/Transaccione/update/:id',CatalogoTransaccionesController.update);
 
//EndPoint Movimiento Transacciones
router.get('/Movimiento/', MovimientoController.list);
router.post('/Movimiento/create',MovimientoController.create);
router.get('/Movimiento/delete/:id',MovimientoController.delete);
router.get('/Movimiento/update/:id',MovimientoController.select);
router.post('/Movimiento/update/:id',MovimientoController.update);
 


module.exports = router;