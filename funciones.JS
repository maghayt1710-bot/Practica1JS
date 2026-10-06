
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let edadInput = document.getElementById("edad").value;
  let genero = document.getElementById("genero").value;
  let edad = parseInt(edadInput);
  let imagenUrl = "";
  let descripcion = "";

  if (isNaN(edad)) {
    alert("Por favor, ingresa una edad válida.");
    return;
  }

  if (edad < 18) {
    switch (genero) {
      case "femenino":
        descripcion = "Cupón para ver Barbie";
        imagenUrl =
          "https://image.europafm.com/clipping/cmsimages02/2023/08/14/BE8BAD22-9280-444D-B848-5258B5F94FC5/pelicula-barbie_103.jpg?crop=1444,1083,x476,y0&width=1200&height=900";

        break;
      case "masculino":
        descripcion = "Cupón para ver Avengers";
        imagenUrl ="https://img.gruporeforma.com/imagenes/960x640/7/290/6289025.jpg";
        break;
    }
  }
  else if (edad >= 18 && edad <= 30) {
    switch (genero) {
      case "masculino":
        descripcion = "Cupón para Billar";
        imagenUrl ="https://foodandpleasure.com/wp-content/uploads/2024/07/billares-bonitos-y-baratos-en-cdmx.jpg";
        break;
      case "femenino":
        descripcion = "Cupón para Café";
        imagenUrl ="https://i.pinimg.com/564x/ae/cf/37/aecf37b3822d54a0a1b6420eddff405c.jpg";
        break;
    }
  }
  else {
    switch (genero) {
      case "masculino":
       descripcion = "Cupón para Gimnasio";
       imagenUrl ="https://media.revistagq.com/photos/65b12cfd195fefc5e6d8fe02/3:2/w_2559,h_1706,c_limit/fitness%20portada.jpg"
        break;

      case "femenino":
        descripcion = "Cupón para Pilates";
        imagenUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrRXPst9hFJEl75KVtLcUDyvFoe1S4yMJAUl0JMjUJo0E_Q0mon1nsCQTE&s=10";
        break;
    }
  }
  let contenedor = document.getElementById("resultado");

  if (imagenUrl !== "") {

    contenedor.innerHTML =

      "<h2>¡Hola, " + nombre + "!</h2>" +

      "<p>Te corresponde:</p>" +

      "<p><strong>" + descripcion + "</strong></p>" +

      "<img src='" + imagenUrl + "' alt='" + descripcion + "'>";

  }

});