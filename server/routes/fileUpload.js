import express from 'express'
import fileupload from 'express-fileupload';

const uploadController=express.Router();
uploadController.use(fileupload());


uploadController.post('/upload', function(request, response)
{
    console.log(request.files);
})


export{
    uploadController
}