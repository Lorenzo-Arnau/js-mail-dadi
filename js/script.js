var mailVerificate = ['ciao@ciao.it','bastet@bastet.it','easter@egg.done'];
var password = 'bellapassword';

var emailUser = prompt('Inserisca la sua e mail per accedere');
var passwordUser = prompt('Inserisca la sua password');

for (var i = 0; i < mailVerificate.length; i++) {
  if (mailVerificate[i] !== emailUser || password !== passwordUser) {
    alert('credenziali errate');
  }else{
    alert('Benvenuto! ' + emailUser);
    document.getElementsByTagName('body')[0].style.opacity = 1;
    document.getElementById('mail-user').innerText = emailUser;
  }
}

var dadoUtente = document.getElementById('dado-usr');
var dadoComputer = document.getElementById('dado-cpu');
var tastoPlay = document.getElementById('go');
var printedWin = document.getElementById('whowin');

tastoPlay.addEventListener('click',
  function() {
      dadoUtente.className = dadoUtente.className + " rolling";
      dadoComputer.className = dadoComputer.className + " rolling";
      var userNumber = Math.floor(Math.random()*6)+1;
      var cpuNumber = Math.floor(Math.random()*6)+1;
      dadoUtente.innerText = userNumber;
      dadoComputer.innerText = cpuNumber;

      if (userNumber > cpuNumber) {
        printedWin.innerText = 'INCREDIBILE HAI VINTO!!!!!!'
      }else if (userNumber < cpuNumber) {
        printedWin.innerText = 'Peccato..Hai perso riprova!'
      }else {
          printedWin.innerText = 'Pareggio!'
      }
  }
);
