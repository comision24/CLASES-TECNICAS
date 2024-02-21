const fs = require("fs")
const path = require("path")
module.exports = (textLog) => {
  fs.appendFileSync(path.join(__dirname,"../logs/log.txt"),textLog + "\n")
}