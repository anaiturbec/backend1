const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

router.get('/', async(req, res)=>{
    const user = await User.findOne({email:'anai@gmail.com'})
    res.send({
        name: user.name
    })
})


// insert user data into database if user doesn't already exist
router.post('/signup', async(req,res)=>{
    console.log('signup')
    const userEmail = await User.findOne({email:req.body.email})
    if(!userEmail){
        const newU = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        })
        newU.save();
        res.send(newU);
    }else{
        console.log('Este usuario ya existe, sign in!');
        return res.status(400).send('Este usuario ya existe, sign in!')
    }
})


// compare email and then password to database user data
router.post('/signin', async(req, res)=>{
    const userEmail = await User.findOne({email:req.body.emailSI})
    if(!userEmail){
        console.log('id o contraseña invalida');
        return res.status(401).send('id o contraseña invalida')
    }else{
        let isValidPassword = await bcrypt.compareSync( req.body.passwordSI, userEmail.password);
        if (!isValidPassword) {
            console.log('id o contraseña invalida');
            return res.status(401).send('id o contraseña invalida');
        }else{
            console.log('correct')
            res.send({
                name: userEmail.name
            })
            return
        }
    }
})




module.exports = router;