var peopleVal = document.getElementById("peopleBox");
var resultShow = document.getElementById("result");

function onClick(){
    var result;
    if (parseFloat(peopleVal.value) < 15){
        result = parseFloat(peopleVal.value) * 19.50;
        resultShow.style.display = 'block';
        resultShow.textContent = "El total por su viaje sera de $" + result.toFixed(2);
    }
    else {
        result = parseFloat(peopleVal.value) * 19.50;
        result = result / 1.15;
        resultShow.style.display = 'block';
        resultShow.textContent = "El total por su viaje sera de $" + result.toFixed(2) + ", con descuento aplicado.";
    }
}