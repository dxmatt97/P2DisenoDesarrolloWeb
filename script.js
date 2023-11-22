function loginUsuario() {
    var usuarios = [
      { tipo: 'cliente', usuario: 'cliente', contraseña: '123' },
      { tipo: 'administrativo', usuario: 'admin', contraseña: '123' },
      { tipo: 'profesional', usuario: 'profesional 1', contraseña: '123' }
  ];
    var us = document.getElementById("inputUsuario").value;
    var pass = document.getElementById("inputClave").value;

    var usuarioEncontrado = usuarios.find(function (u) {
      return u.usuario === us && u.contraseña === pass;
  });

    if (usuarioEncontrado !== undefined) {
      document.cookie = "usuario=" + us;
      document.cookie = "tipo=" + usuarioEncontrado.tipo;
      $("#mensajeBienvenida").html("Hola " + us + ", Bievenido a Centro Educativo de Acompañantes Terapéuticos !")
      $('#bienvenidoModal').modal('show');
      setTimeout(function () { window.location = "index.html"; }, 2500);
    }
    else {
      alert("Los datos ingresados son incorrectos.")
    }
}
function estaLogeado() {
    var usuario = obtenerUsuario();
    if (usuario != "") {
        document.getElementById("botonLogin").style.display = "none";
        document.getElementById("botonLogout").style.display = "show";
        document.getElementById("userLogin").innerHTML = "Hola, " + usuario
    }else{
        window.location = "ingresar.html";
        document.getElementById("botonLogin").style.display = "show";
        document.getElementById("botonLogout").style.display = "none";
        document.getElementById("userLogin").innerHTML = "";
    }
}
function obtenerUsuario() {
    var usuario = "";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith("usuario=")) {
            usuario = cookie.substring("usuario=".length);
        }
    }
    return usuario;
}
function obtenerTipo() {
  var tipo = "";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith("tipo=")) {
        tipo = cookie.substring("tipo=".length);
      }
  }
  return tipo;
}
function desLogear(){
    document.cookie = "usuario=;tipo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location = "ingresar.html";
}
function ModoOscuro() {
  $('body').toggleClass('modo-oscuro');
}