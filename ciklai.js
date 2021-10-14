// 1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

let i = 'Labas';

for(j = 0; j < 5; j++){
    console.log(i);
};
console.log('-------------------------------------');

//2. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);

for (i = 0; i <=4; i++) {
    console.log(i);
};
console.log('-------------------------------------');

//3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);

for (i = 0; i <= 40; i += 10) {
    console.log(i);
};
console.log('-------------------------------------');

//4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);

for (i = 49; i <= 53; i++) {
    console.log(i);
};
console.log('-------------------------------------');

//5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);

for (i = 4; i >= 0; i--) {
    console.log(i);
};
console.log('-------------------------------------');

//6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);

for(let i = 0; i <= 8; i+=2) {
    console.log(i);
};
console.log('-------------------------------------');

//7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);

let g

for (i = 0; i < 5; i++) {
    g = Math.trunc(Math.random() * 11);
    console.log(g);
};
console.log('-------------------------------------');

//8. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius 
//nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

let h;

while (h !== 5) {
    h = Math.trunc(Math.random() * 11);
    console.log(h);
};
console.log('-------------------------------------');

//9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius 
//nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, 
//kai atsitiktinių skaičių suma viršija 100;

for (i = 0; i <= 100; i += k) {
    k = Math.trunc(Math.random() * 11);
    console.log(k);
}
console.log(i);
console.log('-------------------------------------');

//10. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius 
//nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius 
//turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;

let m;
let n = 0;

while (m !== 5 && m != 7) {
    m = Math.trunc(Math.random() * 11);
    console.log(m);
    n++;
}
console.log('ciklu prasisuko: ', n);
console.log('-------------------------------------');

//11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius 
//nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, 
//kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;

let o = 0;
let p = 0;

while (o < 11 || p < 20) {
    p += Math.trunc(Math.random() * 11);
    o++;
}
console.log(o);
console.log(p);
console.log('-------------------------------------');

//12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 
//0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

let r;
let s = 0;

while (s < 3) {
     r = Math.trunc(Math.random() * 11);
    console.log(r);
    if(r % 2 != 0){
        s++;
    }
}
console.log('-------------------------------------');

// 13. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių 
//nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;

do {
    i = Math.trunc(Math.random() * 11);
    j = Math.trunc(Math.random() * 11);
    console.log(i, j);
} while (i != j);

console.log('-------------------------------------');

//14. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 
//(abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose 
//(skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;
let v = 0;
let x = 0;
while(v < 100 || x < 100) {
    v += Math.trunc(Math.random() * 11);
    x += Math.trunc(Math.random() * 11);
    console.log(v, x);
}

console.log('-------------------------------------');

//15. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių 
//nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau 
//nelyginių skaičių  (skaičiai atskiruose stulpeliuose).

let y;
let z;
let a = 0;
let b = 0;

while (a < 3 || b < 3) {
    y = Math.trunc(Math.random() * 11);
    z = Math.trunc(Math.random() * 11);
    console.log(y, z);
    if(y % 2 == 1) {
        a++;
    }
    if(z % 2 == 1) {
        b++
    }
}

