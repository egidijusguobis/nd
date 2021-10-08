// 1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

let i = 'Labas';

for(j = 0; j < 5; j++){
    console.log(i);
};
console.log('-------------------------------------');

//2. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);

for (a = 0; a <=4; a++) {
    console.log(a);
};
console.log('-------------------------------------');

//3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);

for (b = 0; b <= 40; b += 10) {
    console.log(b);
};
console.log('-------------------------------------');

//4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);

for (c = 49; c <= 53; c++) {
    console.log(c);
};
console.log('-------------------------------------');

//5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);

for (d = 4; d >= 0; d--) {
    console.log(d);
};
console.log('-------------------------------------');

//6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);

for(let e = 0; e <= 8; e+=2) {
    console.log(e);
};
console.log('-------------------------------------');

//7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);

let g = 0;

for (f = 0; f < 5; f++) {
    g = Math.random() * 10;
    console.log(g);
};
console.log('-------------------------------------');

//8. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius 
//nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

let h = 0;

while (h !== 5) {
    h = Math.trunc(Math.random() * 10);
    console.log(h);
};
console.log('-------------------------------------');

//9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius 
//nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, 
//kai atsitiktinių skaičių suma viršija 100;

for (k = 0; k <= 100; k += l) {
    l = Math.random() * 10;
    console.log(l);
}
console.log(k);
console.log('-------------------------------------');

//10. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius 
//nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius 
//turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;

let m = 0;
let n = 0;

while (m !== 5 && m != 7) {
    m = Math.trunc(Math.random() * 10);
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
    p += Math.random() * 10;
    o++;
}
console.log(p);
console.log(o);
console.log('-------------------------------------');

//12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 
//0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

let r = 0;
let s = 0;

while (s < 3) {
    r = Math.trunc(Math.random() * 10);
    console.log(r);
    if(r % 2 != 0){
        s++;
    }
}
console.log('-------------------------------------');

// 13. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių 
//nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;

do {
    t = Math.trunc(Math.random() * 10);
    u = Math.trunc(Math.random() * 10);
    console.log(t, u);
} while (t != u);

console.log('-------------------------------------');

//14. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 
//(abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose 
//(skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;
let v = 0;
let x = 0;
while(v < 100 || x < 100) {
    v += Math.random() * 10;
    x += Math.random() * 10;
    console.log(v, x);
}

console.log('-------------------------------------');

//15. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių 
//nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau 
//nelyginių skaičių  (skaičiai atskiruose stulpeliuose).

let y;
let z;
let aa = 0;
let ab = 0;

while (aa < 3 || ab < 3) {
    y = Math.trunc(Math.random() * 10);
    z = Math.trunc(Math.random() * 10);
    console.log(y, z);
    if(y % 2 != 0) {
        aa++;
    }
    if(z % 2 != 0) {
        ab++
    }
}

