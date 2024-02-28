const path = require("path");
const fs = require("fs");

const saveData = (data, filenameJSON = "products") => {
    const dataJSON = JSON.stringify(data, null, 3); // PRODUCTOS STRINGIFICADO
    const pathJSON = path.join(__dirname, `./${filenameJSON}.json`);
    fs.writeFileSync(pathJSON, dataJSON, "utf-8");
}


module.exports = {
  saveData
}