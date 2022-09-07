module.exports = (req,res,next) => {
    if(req.session.tpSessionCookie){
        res.locals.userLogin = req.session.userLogin
    }
    next()
}