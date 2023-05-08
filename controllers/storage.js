const insertFile = async (req, res) => {
  console.log(req.file)
  const fileName = req.file.filename
  const pathFilename = req.file.path
  
  res.send('Archivo guardado...')
}
module.exports = { insertFile };
