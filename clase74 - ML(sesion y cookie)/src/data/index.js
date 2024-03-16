const fs = require("fs");
const path = require("path");
module.exports = {
  loadData: (filenameJSON = "productsDataBase") => {
    const pathJSON = path.join(__dirname, `./${filenameJSON}.json`);

    if (!fs.existsSync(pathJSON)) {
      fs.writeFileSync(pathJSON, "[]", "utf-8");
    }

    const dataJSON = fs.readFileSync(pathJSON, "utf-8");
    const dataJS = JSON.parse(dataJSON);
    return dataJS;
  },
  saveData: (data, filenameJSON = "productsDataBase") => {
    const pathJSON = path.join(__dirname, `./${filenameJSON}.json`);
    const dataString = JSON.stringify(data, null, 3);
    fs.writeFileSync(pathJSON, dataString, "utf-8");
  },
};
