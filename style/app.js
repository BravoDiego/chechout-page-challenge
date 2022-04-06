var add1 = document.getElementById('add1');
var add2 = document.getElementById('add2');

var remove1 = document.getElementById('remove1');
var remove2 = document.getElementById('remove2');

var compteur1 = document.getElementById('compteur1');
var compteur2 = document.getElementById('compteur2');

var total = document.getElementById('total');
var dollar = document.getElementById('dollar');

var compte = 1;
var compte2 = 1;

compteur1.textContent = compte;



add1.addEventListener("click", plus1);
add2.addEventListener("click", plus2);

remove1.addEventListener("click", moin1);
remove2.addEventListener("click", moin2);

function totalcalcul() {
    total.textContent = Math.round((54.99 * compte + 54.99 * compte2 + 19) * 100)/100;
    if(compte == 0 && compte2 == 0) {
        total.textContent = "Why you command ?";
        dollar.style.display = "none";
    }
}

function plus1() {
    compte++;
    compteur1.textContent = compte;    
    totalcalcul();
}

function plus2() {
    compte2++;
    compteur2.textContent = compte2;    
    totalcalcul();
}

function moin1() {
    if(compte >= 1) {
    compte--;
    compteur1.textContent = compte;   
    totalcalcul();
    }
}

function moin2() {
    if(compte2 >= 1) {
    compte2--;
    compteur2.textContent = compte2;    
    totalcalcul();
    }
}
