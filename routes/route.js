const express=require('express');
const router=express.Router();
const {getInfo,createInfo,getForm,deleteInfo,editInfo,editShow}=require('../handelers/functionHandlers.js')

router.get('/info',getInfo)

router.get('/create',getForm);

router.post('/create',createInfo);

router.post('/delete/:id',deleteInfo);

router.get('/edit/:id',editShow);

router.post('/edit/:id',editInfo);

module.exports=router;