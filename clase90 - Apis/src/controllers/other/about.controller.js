module.exports = (req, res) => {
  const bannerImages = ["img-pdto-3.jpg","img-pdto-2.jpg"]
  res.render("./other/about",{bannerImages})
}