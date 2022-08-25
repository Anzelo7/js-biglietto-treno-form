console.log('JS OK!');

const messageHTMLElement = document.getElementById('message');

//richiesta km
const textkm = parseInt(prompt('Quanti chilometri vuoi percorrere?'));

//richiesta età
const textage = parseInt(prompt('Qual è la tua età?'));

if (!isNaN(textkm) && !isNaN(textage)) {
    console.log('kmTrip e age sono numeri');
    // calcolo costo totale  

    let calckm = textkm * 0.21;
    let calckmtot = 0;

    if (textage < 18) {
        //applicare discount del 20% ai minorenni

        calckmtot = (calckm / 100 * 20);

    } else if (textage > 65) {
        //applicare discount del 40% ai maggiori di 65 anni

        calckmtot = (calckm / 100 * 40);
    }

    calckm = calckm - calckmtot;

    // output 
    const message = '<p> Il costo del biglietto è ' + calckm.toFixed(2) + ' euro </p>';
    console.log(message);
    messageHTMLElement.innerHTML = message;
} else {
    messageHTMLElement.innerHTML = 'Dati inseriti in modo errato';
}