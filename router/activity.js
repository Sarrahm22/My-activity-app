const express=require('express');
const router=express.Router(); 
const actCtrl=require('../controllers/activity');
router.post('/',actCtrl.createActivity);
router.get('/:id',actCtrl.getOneActivity);
router.get('/',actCtrl.getAllActivity);



module.exports=router;