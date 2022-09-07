const {validationResult, check , body} = require('express-validator');

const validaterRegister = [
    check('nombre')
    .notEmpty().withMessage('debe ingresar un nombre').bail(),

    body('email')
    .notEmpty().withMessage('Debes completar el email').bail(),

    /* check('edad')
    .isNumeric().withMessage('Debes ingresar un número') */


]
module.exports = validaterRegister