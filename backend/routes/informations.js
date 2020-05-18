const router = require('express').Router();
let Information = require('../models/information.model');

router.route('/').get((req,res)=> {
    Information.find()
    .then(informations => res.json(informations))
    .catch(err => res.status(400).json('Erorr: ' + err));
});

router.route('/add').post((req,res) => {
    const idMember = req.body.idMember;
    const major = req.body.major ;
    const className = req.body.className; 
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const description = req.body.description;
    const birthday = Date.parse(req.body.birthday);

    const newInformation = new Information({
       idMember, major, className , phoneNumber, email, description , birthday,
    });

    newInformation.save()
    .then(()=> res.json('Member information added! '))
    .catch(err => res.status(400).json('Erorr: ' + err));
});

router.route('/:id').get((req,res)=>{
    Information.findById(req.params.id)
    .then(information => res.json(information))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res)=>{
   Information.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Infomation deleted! '))
    .catch(err => res.status(400).json('Error: '+ err ));
})

router.route('/update/:id').post((req,res)=>{
    Information.findById(req.params.id)
    .then(information => {
        information.major = req.body.major;
        information.email = req.body.email;
        information.phoneNumber = req.body.phoneNumber;
        information.className = req.body.className;
        information.birthday = Date.parse(req.body.birthday);
        information.description = req.body.description;

        information.save()
        .then(()=> res.json('Information updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;