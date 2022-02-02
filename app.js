var letter = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

function validar() {
  var number = document.getElementById("numero").value;
  var letr = document.getElementById("letra").value.toUpperCase();
  var resto = number % 23;

  if (number.length < 8 || isNaN(number)) {
    alert("Introduzca un número válido")
    document.getElementById("numero").value = ""

  } else if (isNaN(document.getElementById("letra").value) && (document.getElementById("letra").length != 1)) {
    if (letr == letter[resto]) {
      document.getElementById("validate").innerHTML = "<h1>La letra introducida es correcta.</h1>";
      document.getElementById("validate").style.color = "green";
      document.getElementById("fxOutcome").innerHTML = "<h1>" + letter[resto] + " </h1>";
      document.getElementById("fxOutcome").style.color = "green";

    } else {
      document.getElementById("validate").innerHTML = "<h3>Letra errónea</h3>";
      document.getElementById("validate").style.color = "red";
      document.getElementById("fxOutcome").innerHTML = "<h1>La letra asignada a este DNI es " + letter[resto] + ".</h1>"
      document.getElementById('h1').style.color = "red";
      document.getElementById("fxOutcome").style.color = "red";
      document.getElementById("numero").value = ""
      document.getElementById("letra").value = ""
    }
  } else {
    alert("Introduzca una letra válida")
    document.getElementById("numero").value = ""
    document.getElementById("letra").value = ""

  }
}

