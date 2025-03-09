function btn() {
  let firstname = document.getElementById("text").value;
  let lastname = document.getElementById("text2").value;
  
  if(firstname !== "" && lastname !== "") {
    var message = firstname + " " + lastname +" kaise hai Aap dua karta sab Thik Ho";
    document.getElementById("out").innerText = message;
  }
  document.getElementById("out").hidden = true;
  document.getElementById("out").hidden = false;
  
}