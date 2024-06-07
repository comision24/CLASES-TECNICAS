// console.log(location.search)

// const query = new URLSearchParams(location.search)

// console.log(query.values()) // ["2", "10"]
// console.log(query.keys()) // ["userId", "productId"]
// console.log(query.has("userId")) // true
// console.log(query.has("rolId")) // false
// console.log(query.get("userId")) // "2"

// query.values().forEach(v => {
//   console.log(typeof v);
// });


// const searchKitcheningGoogle = "https://www.google.com/search?q=kitchening&sca_esv=ac127feb30d806e7&sca_upv=1&hl=es&sxsrf=ADLYWIJiQFYy2TjPqxO46gDabr3EIEYhrQ%3A1715899244307&source=hp&ei=bItGZpSGEOvR1sQPp-aZYA&iflsig=AL9hbdgAAAAAZkaZfCwrCO2Lkve1EHCfGmTZPRgG_OHV&ved=0ahUKEwiU7LLnnpOGAxXrqJUCHSdzBgwQ4dUDCBU&uact=5&oq=kitchening&gs_lp=Egdnd3Mtd2l6IgpraXRjaGVuaW5nMgoQIxiABBgnGIoFMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyBhAAGAoYHjIEEAAYHjIEEAAYHjIMEC4YxwEYChgeGK8BSPITUOEDWP4McAF4AJABAJgBf6ABgAeqAQM3LjO4AQPIAQD4AQGYAgugAp8HqAIKwgIHECMYJxjqAsICBBAjGCfCAgoQABiABBhDGIoFwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxiDARiKBcICCxAuGIAEGLEDGIMBwgIOEAAYgAQYsQMYgwEYigXCAhAQABiABBixAxhDGIMBGIoFwgIIEAAYgAQYsQPCAgUQABiABMICCBAuGIAEGLEDwgINEAAYgAQYsQMYQxiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgILEC4YgAQYxwEYrwHCAgUQLhiABMICDhAuGIAEGMcBGI4FGK8BwgINEAAYgAQYsQMYgwEYCsICBxAAGIAEGArCAgYQABgDGAqYAwaSBwM4LjOgB4ln&sclient=gws-wiz"

// const logo = document.querySelector("img.logo")
// logo.addEventListener("click", () => {
  // window.open(searchKitcheningGoogle,"_blank")
  // location.href = searchKitcheningGoogle;
  
  // console.log(location.href)
  // console.log(location.origin)
  // console.log(location.hash)
// })



// const btnReload = document.querySelector(".reload")

// btnReload.onclick = function() {
//   location.reload();
// }


/* SESSION STORAGE */
/* LOCAL STORAGE */
// const obj = {nombre:"Ricardina", apellido: "Zabala"}

// const logo = document.querySelector("img.logo")
// logo.addEventListener("click", () => {
//   // sessionStorage.setItem("estudiante", JSON.stringify(obj))
//   const student = localStorage.getItem("estudiante")
//   if(student) {
//     localStorage.removeItem("estudiante")
//   } else {
//     localStorage.setItem("estudiante", JSON.stringify(obj))
//   }
// })