const multer = require('multer')

const STORAGE_PAHT = `${process.cwd()}/storage`

const storage = multer.diskStorage({
    destination: function(_, _ ,cb){
        cb(null, STORAGE_PAHT)
        
    },
    filename: function(_, file ,cb){
        const ext = file.originalname.split('.').pop() //png ,jpeg, avi
        const filename = `file-${Date.now()}.${ext}` //mi-perro.png ==> file-12312312321.png
        cb(null, filename)
    }
})

const uploadMiddleware = multer({storage})

module.exports = uploadMiddleware