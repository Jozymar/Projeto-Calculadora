buttonmedia.onclick = function() {
var notaum = nota1.value;
var notadois = nota2.value;
var notatres = nota3.value;

var media = (parseFloat(notaum) + parseFloat(notadois) + parseFloat(notatres))/3;

alert("SUA MEDIA É: " + media);

if (media >= 7) {
  alert("VOCÊ PASSOU!")
}

else if (media < 7 && media >= 4) {
alert("PROVA FINAL!")
var precisa = (50-6*media)/4;
alert("PRECISA TIRAR: " + precisa);
}

else {
  alert("VOCÊ  FOI REPROVADO!")
}

}
