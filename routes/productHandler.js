const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const multer = require('multer');




// //query to get all product data
router.post('/register', async(req,res)=>{
    const newP = new Product({
        name: req.body.pname,
        link: req.body.link,
        description: req.body.description,
        logo: req.body.logo,
        votes: req.body.votes
    });
    newP.save();
    res.send(newP);
});

//get all products in database (in theory)
router.get('/', async(req, res)=>{
    const product = await Product.find({});
    res.send(product)
});

// //img upload
// const DIR = './uploads/';
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now()+ file.originalname)
//     }
// });
// const fileFilter = (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
// }

// const {upload} = multer({storage:storage, fileFilter:fileFilter})


// Add product to the database
// router.post('/register', (req, res) => {
//     const newP = new Product({
//         name: req.body.pname,
//         link: req.body.link,
//         description: req.body.description,
//         logo: 'hey',
//         votes: req.body.votes

//     });
//     newP.save();
//     res.send(newP);
    
// });





module.exports = router;