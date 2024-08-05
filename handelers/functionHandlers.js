const User=require('../model/connection.js');


//rendering the page
const getForm=(req,res)=>{
    try{
        res.render('front');
    }
    catch(err){
        res.json({err});
    }
}

//showing the data
const getInfo=async(req,res)=>{
    try{
        const user=await User.find({});
        res.render('data',{user});
    }
    catch(err){
        res.json({err});
    }
}

//posting the information
const createInfo=async(req,res)=>{
    try{
        const{birthMonth,birthDate,birthYear}=req.body;
        combineBirth=`${birthMonth}-${birthDate}-${birthYear}`;
            const user=await new User({
            name:req.body.name,
            birthDate:combineBirth,
            emailId:req.body.emailId,
        })
        user.save();
        res.redirect('/api/info');
    }
    catch(err){
        res.json({err});
    }
}

const deleteInfo=async(req,res)=>{
    try{
        const id=req.params.id;
        await User.findByIdAndDelete(id);
        res.redirect('/api/info')
    }
    catch(err){
        res.json({err});
    }
}


const editShow=async(req,res)=>{
    try{
        const id=req.params.id;
        const user=await User.findById(id);
        res.render('edit',{user});
    }
    catch(err){
        res.json({err});
    }
}


const editInfo=async(req,res)=>{
    try{
        const id=req.params.id;
        const{name,birthDate,emailId}=req.body;
        await User.findByIdAndUpdate(id,{name,birthDate,emailId});
        res.redirect('/api/info');
    }
    catch(err){
        res.json(err);
    } 
}

module.exports={getInfo,createInfo,getForm,deleteInfo,editInfo,editShow};