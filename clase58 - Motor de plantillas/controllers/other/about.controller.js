module.exports = (req,res) => {
  const vista = "HOME";
  const subtitle = "<h3>Este es un subtitulo</h3>"
  const arrPersonas = ["Fernando Marquez","Emiliano Barrios", "Jose Diaz","Gaston Ayala"]
  const arrNum = [1,2,3,4,5,6,7,8,9,10,11,12]
  res.render("about",{   //  object -->  locals 
    view : vista,
    subtitle,
    personas: arrPersonas,
    numeros: arrNum
  })
}