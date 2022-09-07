const { validationResult } = require("express-validator")


module.exports = {
    index: (req,res)=> {
        return res.render('index')
    },
    processLogin: (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            const {nombre, color, email, edad, recordarme} = req.body

            req.session.userLogin = {color, nombre, email, edad}
           /* req.session.userLogin.email = email
            req.session.userLogin.nombre = nombre
            req.session.userLogin.edad = edad*/
            res.locals.userLogin =  req.session.userLogin
            
            if(recordarme){
                res.cookie('tpSessionCookie', req.session.userLogin,{maxAge:1000*60})
            }
            return res.render('index', {
                nombre, email, color, edad
            })
        } else {
            return res.render('index', {
                old:req.body,
                errors: errors.mapped()
            })
        }
        
    },
    mensaje: (req,res)=>{
        const {nombre, color, email, edad} = req.session.userLogin
        return res.render('mensaje',{
        nombre, color, edad
        })
    },
    loggout:(req,res) => {
        req.session.destroy()
        res.cookie('tpSessionCookie', null, {maxAge:-1})
        return res.redirect('/')
    }

}