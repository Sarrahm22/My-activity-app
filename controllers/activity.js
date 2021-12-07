const activity=require('../models/activity');

exports.createActivity=(req,res) =>{
    const act=new activity(req,body);
    
    act.save()
    .then((activity) => {
        return res.status(201).json({activity})
     })
        .catch((error)=>{return res.status(400).json({error}) });
    }

    exports.getOneActivity = (req, res) =>{
        const id =req.params.id;
        activity.findOne({_id : id})
        .then((activity)=>{return res.status(200).json({activity})})
        .catch((error)=>{return res.status(400).json({error})
    });}

    exports.getAllActivity = (req, res) =>{
        
        activity.find()
        .then((activity)=>{return res.status(200).json({activity})})
        .catch((error)=>{return res.status(400).json({error})
    });}