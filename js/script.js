let km = prompt("Quanti km desideri percorrere?");
let age = prompt("Quanti anni hai?");


let pricePerKm = 0.21;
let totalPrice = pricePerKm * km;

if (!isNaN(km) && !isNaN(age)){
  if(age < 18){
    totalPrice = totalPrice - (totalPrice*0,2);
  }else if(age > 65){
    totalPrice = totalPrice - (totalPrice*0,4);
  }
    document.getElementById("output").innerHTML = "Il prezzo totale è di " + totalPrice.toFixed(2) + "€.";
}else{
    document.getElementById("output").innerHTML = "Errore. Aggiorna la pagina e riprova.";
}