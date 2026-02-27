let pangilNama = (nama) => {

new Promise(function (resolve, reject) {
  setTimeout(pangilNama,1500,"john");
})
  .then(function (nama) {
  setTimeout(pangilNama,500,"jane")
})
  .then(function (nama) {
  setTimeout(pangilNama,500,"jane")
  })
);
  console.log(nama)
}
