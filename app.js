function checkRules(e){
  if(localStorage.getItem("rulesAccepted") !== "true"){
    e.preventDefault();
    window.location.href="reglement.html";
  }else{
    window.open("https://cfx.re/join/6avj7j","_blank");
  }
}
