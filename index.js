function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

function passcode(){
  const password = document.getElementById('passwordInput').value;
  const correctPassword = '14280102'; // The correct password
  var fromuser = document.getElementById('protectedContent');
  if (password === correctPassword) {
    fromuser.style.display = 'block';
  } else {
    fromuser.style.display = 'none';
    alert("You can't access them right now")
  }
}

