//1. Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis 
//nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

const a = []
a.length = Math.trunc(Math.random() * 30);
for (let b = 0; b < a.length; b++) {
    a[b] = Math.trunc(Math.random() * 10);
}
console.log(a);

//2.Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių 
//(pinigų esančių piniginėje) sumą;

let suma = 0;

for (let b = 0; b < a.length; b++) {
    suma += a[b]
}

console.log(suma);

//3. Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių 
//pinigų (skaičių didesnių už 2 ) reikšmių sumą;

let suma2 = 0;

for (let b = 0; b < a.length; b++) {
    if (a[b] > 2) {
        suma2 += a[b]
    }
}

console.log(suma2);

//4. Išleisti visus metalinius pinigus 
//(reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

for (let b = 0; b < a.length; b++) {
    if (a[b] <= 2) {
        a[b] = 0
    }
}
console.log(a);

//5. Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti 
//kiek tokių didžiausių reikšmių masyve yra;

for (let b = 0; b < a.length; b++) {
    
}

