const router = require('express').Router();
let Member = require('../models/member.model');

router.route('/').get((req,res) => {
    Member.find()
    .then(members => res.json(members))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>{
    const idMember = req.body.idMember;
    const memberName = req.body.memberName;

    const newMember = new Member({idMember,memberName});

    newMember.save()
    .then(()=> res.json('Member added! '))
    .catch(err => res.status(400).json('Error: ' + err ));
});

module.exports = router; 