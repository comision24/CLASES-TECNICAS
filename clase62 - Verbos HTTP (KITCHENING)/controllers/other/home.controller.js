const createLog = require("../../utils/createLog");

module.exports = (req, res) => {
  const banner = ["img-banner.jpg", "img-banner-2.jpg"];
  res.render("home", { 
    bannerImages: banner
  });

  const time = new Date().toTimeString()
  createLog("El usuario accedio al HOME a las " + time)
};
