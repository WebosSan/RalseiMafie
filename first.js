function onKeyDownHandler(evt) {
    let inputValue1 = document.querySelector("#domTextElement1").value; 
    var e = evt || window.event;        //Obtenemos el event
    var key = evt.keyCode || evt.which; //Tecla presionada
    if (key == 13 && inputValue1 == "Dont Let me Alone"){
      console.log("acceso concedido");
    }
  }
