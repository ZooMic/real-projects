const data = require('./data.json')

 // NIE UŻYWAM TYCH METOD ALE POSTANOWIŁEM JE STWORZYĆ :)
const testBit = (bajt, numerBitu) => {
    return bajt[numerBitu] === "1";
}

const ustawBit = (bajt, numerBitu) => {
    return bajt.substr(0, numerBitu) + "1" + bajt.substr(numerBitu + 1);
}

// DANE I ZMIENNE
const { v, t, bity } = data;
const skompresowany = v.join("");
const mapaZnakow = {};
t.forEach(({ znak, kod }) => mapaZnakow[kod] = znak)

// tutaj zapisz wynik
const s = [];

let skompresowanyZnak;
for (let i = 0; i < skompresowany.length; i += bity) {
    skompresowanyZnak = skompresowany.substr(i, bity);
    s.push(mapaZnakow[skompresowanyZnak]);
}

// odpowiedz
console.log({ s })