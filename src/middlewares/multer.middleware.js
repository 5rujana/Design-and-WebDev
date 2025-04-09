import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,"./public/temp")
    },
    filename: function(req,file,cb){
        const unqiueSuffix = Date.now + '-' + Math.round(Math.random * 10e9)
        const extension  = path.extname(file.originalname)
        if(!extension){
            console.error(`Warning! No extension found`)
        }
        cb(null,file.fieldname + "-" +  unqiueSuffix + extension)
    }
})

const upload = multer({storage:storage})
export {upload}