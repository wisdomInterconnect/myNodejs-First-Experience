const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
// const Thing = require('../models/thing');
const stuffCtrl = require('../controllers/stuff');

router.get('/', auth, stuffCtrl.getAllThing)
router.post('/', auth, multer, stuffCtrl.createThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.get('/:id', auth, stuffCtrl.getOneThing);

// app.use((req, res, next) => {
//     console.log('Required received');
//     next();
// })
// app.use((req, res, next) => {
//     res.status(201);
//     next();
// })

// app.use((req, res, next) => {
//     res.json({ message: 'Your request was successful' });
//     next();

// });
// app.use((req, res, next) => {
//     console.log('Response sent Successfully');
// });

// const stuff = [{
//         _id: 'Volve',
//         title: 'Volve lexus',
//         description: "The most powerfull car",
//         imageUrl: '',
//         price: 4900,
//         userId: '001',
//     },
//     {
//         _id: 'Jeep',
//         title: 'Jeep lexus',
//         description: "The most Beautiful car",
//         imageUrl: '',
//         price: 4900,
//         userId: '002',
//     },
// ]
// res.status(200).json(stuff);
//});




module.exports = router;