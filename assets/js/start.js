// pewarisan
class Parent {
    constructor(nama,umur){
      this.nama = nama;
      this.umur = umur;
    };
  }
  
  const submitForm = (e) => {
      e.preventDefault();
      // let nama = document.forms["welcome_form"]["nama"].value;
      // let umur = document.forms["welcome_form"]["umur"].value;
      let nama = document.querySelector('#nama').value;
      let umur = document.querySelector('#umur').value;
      // let avatar = document.getElementById('imgRndm').value;
    //setItem ke localStorage

    const data = new Parent(nama, umur);
      localStorage.setItem('name',data.nama);
      localStorage.setItem('umur',data.umur);
      // localStorage.setItem("avatar", avatar);
    
      location.href = "selectq.html";
    }
  
  const generator= () => {
      var x = Math.floor((Math.random()*9)+1);
      document.getElementById('imgRndm').innerHTML=`
          <img src="./assets/img/avatar/avatar${x}.svg" style="width:100px; height=100px; justify-content: center;" >
      `;
  }
  window.onload(generator());