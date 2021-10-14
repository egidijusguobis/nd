//1. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis 
//nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

let a = [];
let ilgis = rand(10, 30);

for (i = 0; i < ilgis; i++) {
    a.push(rand(0, 10))
} 

console.log(a);
console.log('-----------------------');

//2.Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių 
//(pinigų esančių piniginėje) sumą;

// let suma = 0;

// for (let b = 0; b < a.length; b++) {
//     suma += a[b]
// }

// console.log(suma);
// console.log('-----------------------');

//3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių 
//pinigų (skaičių didesnių už 2 ) reikšmių sumą;

// let suma2 = 0;

// for (let b = 0; b < a.length; b++) {
//     if (a[b] > 2) {
//         suma2 += a[b]
//     }
// }

// console.log(suma2);
// console.log('-----------------------');

// 4. Išleisti visus metalinius pinigus 
// (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

// for (let b = 0; b < a.length; b++) {
//     if (a[b] <= 2) {
//         a[b] = 0
//     }
// }
// console.log(a)
// console.log('-----------------------');

// 5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti 
// kiek tokių didžiausių reikšmių masyve yra;

// let max = 0;
// let maxSum = 0;

// for (let i = 0; i < a.length; i++) {
//     if (a[i] > max) {
//         max = a[i]
//     }
// }
// for (let j = 0; j < a.length; j++) {
//     if (a[j] == max) {
//         maxSum++
//     }
// }
// console.log(max);
// console.log(maxSum);
// console.log('-----------------------');

//6. Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų 
//indeksų (vietų, numerių) reikšmes;

// for(let i = 0; i < a.length; i++) {
//     if (a[i] == 0) {
//         a[i] = i;
//     };
// }
// console.log(a);
// console.log('-----------------------');

//7. Į 1 uždavinio masyvą pridėti tiek naujų reikšmių 
// (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo 
// ilgis būtų lygiai 30;

// while(a.length !== 30) {
//     a.push(i) = Math.trunc(Math.random() * 11)
//  }
// console.log(a);
// console.log('-----------------------');

//8. Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus 
// masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba 
// lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);

// let monetos = [];
// let popieriniai = [];

// for(let i = 0; i < a.length; i++) { 
//     if (a[i] <= 2) {
//         monetos.push(a[i])
//     } else {
//         popieriniai.push(a[i])
//     }
// }
// console.log(monetos, popieriniai);
// console.log('-----------------------');

//9. Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, 
// kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o 
// antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;

// let pinigine = [];

// pinigine.push(monetos, popieriniai);

// console.log(pinigine);
// console.log('-----------------------');

//10. Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią 
// skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 
// 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI']

// let korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

// pinigine.push(korteles);

// console.log(pinigine);
// console.log('-----------------------');

//11. Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;

// pinigine[2].sort()

// console.log(pinigine);
// console.log('-----------------------');

//12. Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' 
// (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' 
// ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis 
// (masyvo ilgis) pasidarytų lygus 20;

// while(pinigine[2].length <= 20) {
//     if(Math.random() < 0.5) {
//         pinigine[2].push('MasterCard')
//     } else {
//         pinigine[2].push('Visa')
//     };
// }
// console.log(pinigine);
// console.log('-----------------------');

// 13. Paskaičiuokite, kokio tipo kortelių 
// ('MasterCard' arba 'Visa') yra daugiau;

// let master = 0;
// let visa = 0;
// for(i = 0; i < pinigine[2].length; i++) {
//     if(pinigine[2][i] === 'MasterCard') {
//         master++
//     } else if(pinigine[2][i] === 'Visa') {
//         visa++;
//     }   
// }
// console.log('MasterCard =', master, 'Visa =', visa);
// console.log('-----------------------');

//14. Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos 
// bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 
// iki 9999999999;

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// let bilietai = [];

// for (let i = 0; i < bilietai.length || bilietai.length < 10; i++) {
//     bilietai[i] = rand(1000000000, 9999999999);
// }
// pinigine.push(bilietai)
// console.log(pinigine);
// console.log('-----------------------');

//15. Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;

// pinigine[3].sort()

// console.log(pinigine[3]);
// console.log('-----------------------');

//16. Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom 
// ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, 
// kol įdėta suma bus lygi arba daugiau 500);

// let popieriusSum = 0;
// let popierius;

// while(popieriusSum <= 500) {
//     popierius = rand(3, 10)
//     pinigine[1].push(popierius)
//     popieriusSum += popierius
// }

// console.log(pinigine);
// console.log(popieriusSum);
// console.log('-----------------------');

//17. Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris 
// išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.

// let laimetojai = 0;

// for (let i = 0; i < pinigine[3].length; i++) {
//     if (pinigine[3][i] % 777 == 0) {
//         laimetojai++
//     }
// }

// console.log('laimejo:',laimetojai);
// console.log('-----------------------');

//18. Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 
// 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi 
// žodžiai;

// let nuotraukos = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas']
// pinigine.push(nuotraukos)

// pinigine[4].sort((a, b) => a.length - b.length);

// console.log(pinigine[4]);

