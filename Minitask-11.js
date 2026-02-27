let pangilNama = (nama) => {
  console.log(nama)
}


setTimeout(pangilNama,1500,"john")
setTimeout(pangilNama,500,"jane")

new Promise(function (resolve, reject) {
  setTimeout(pangilNama,1500,"john");
})
  .then(function (result) {
  setTimeout(pangilNama,500,"jane")
})
  .then(function (result) {
  setTimeout(pangilNama,500,"jane")
  })
);
