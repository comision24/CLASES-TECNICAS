module.exports = (req, res) => {
  const banner = ["img-banner.jpg", "img-banner2.jpeg","img-banner3.jpeg"];
  res.render("./other/home", { 
    bannerImages: banner
  });
};
