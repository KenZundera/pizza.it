function orderPizza(){

  let name = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let nomor = document.getElementById("nomor").value;
  let address = document.getElementById("address").value;
  let jenis1 = document.getElementById("jenis1").value;
  let jumlah1 = document.getElementById("jumlah1").value;
  let jenis2 = document.getElementById("jenis2").value;
  let jumlah2 = document.getElementById("jumlah2").value;
  
  if(jumlah1 != 0 && jumlah2 == 0) {
    let msg = "Halo, Pizza.It. Saya ingin memesan pizza dengan rincian sebagai berikut: %0A%0ANama: " + name + "%0ANomor: " + nomor + "%0AEmail: " + email + "%0AAlamat: " + address + "%0AJenis: %0A" + jenis1 + " x" + jumlah1 + "%0A%0ATerima kasih telah memesan di Pizza.It.";
    const win = window.open(`https://wa.me/6285757536205?text=${msg}`, '_blank');
  } else if(jumlah2 != 0 && jumlah1 == 0) {
    let msg = "Halo, Pizza.It. Saya ingin memesan pizza dengan rincian sebagai berikut: %0A%0ANama: " + name + "%0ANomor: " + nomor + "%0AEmail: " + email + "%0AAlamat: " + address + "%0AJenis: %0A" + jenis2 + " x" + jumlah2 + "%0A%0ATerima kasih telah memesan di Pizza.It.";
    const win = window.open(`https://wa.me/6285757536205?text=${msg}`, '_blank');
  }else if (jumlah1 != 0 && jumlah2 != 0) {
    let msg = "Halo, Pizza.It. Saya ingin memesan dua pizza dengan rincian sebagai berikut: %0A%0ANama: " + name + "%0ANomor: " + nomor + "%0AEmail: " + email + "%0AAlamat: " + address + "%0AJenis: %0A" + jenis1 + " x" + jumlah1 + "%0A" + jenis2 + " x" + jumlah2 + "%0A%0ATerima kasih telah memesan di Pizza.It.";
    const win = window.open(`https://wa.me/6285757536205?text=${msg}`, '_blank');
  }
 // win.focus();
}

 // Modal
 const myModal = document.getElementById('myModal')
 const myInput = document.getElementById('myInput')

 myModal.addEventListener('shown.bs.modal', () => {
   myInput.focus()
 })

 function sendContactMsg() {
   let name = document.getElementById('name').value
   let email = document.getElementById('email').value
   let msg = document.getElementById('message').value

   let pesan =
     'Halo, Pizza.It. %0A%0ANama saya ' +
     name +
     '. %0AEmail saya ' +
     email +
     '. %0APesan saya adalah: ' +
     msg +
     '. %0A%0ATerima kasih telah menghubungi Pizza.It.'
   const win = window.open(
     `https://wa.me/6285757536205?text=${pesan}`,
     '_blank',
   )
   // win.focus();
 }