// 1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

let i = 'Labas';

for(j = 0; j < 5; j++){
    console.log(i);
};

//2. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);

for (a = 0; a <=4; a++) {
    console.log(a);
};

//3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);

for (b = 0; b <= 40; b += 10) {
    console.log(b);
};

//4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);

for (c = 49; c <= 53; c++) {
    console.log(c);
};

//5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);

for (d = 4; d >= 0; d--) {
    console.log(d);
};

//6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);

for(let e = 0; e <= 8; e+=2) {
    console.log(e);
};

//7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
//skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);

let g = 0;

for (f = 0; f < 5; f++) {
    g = Math.random() * 10;
    console.log(g);
};

//8. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius 
//nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

let h = 0;

while (h !== 5) {
    h = Math.trunc(Math.random() * 10);
    console.log(h);
};

//9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius 
//nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, 
//kai atsitiktinių skaičių suma viršija 100;

for (k = 0; k <= 100; k += l) {
    l = Math.random() * 10;
    console.log(l);
}
console.log(k);

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
console.log(n);

//11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius 
//nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, 
//kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;

let o = 0;
let p = 0;

o = Math.random() * 10;
o+=
p++

