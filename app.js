//1. Atskiri elementai:
//  a.Tamsiai žaliai nuspalvinti h1 tagą;
document.querySelector('h1').style.color = "darkgreen";
//  b.Tagui i pridėti klasę small;
document.querySelector('i').classList.add("small");
//  c.Iš tago h1 pašalinti klasę main;
document.querySelector('h1').classList.remove("main");
//  d.Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;
document.querySelector('h1 + h2').classList.add('first');
document.querySelector('h1 + h2').classList.remove('main');
//  e.Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
document.querySelector('h2 > span').style.fontSize = "10px"
document.querySelector('h2 > span').style.color = "grey"

//2. Elemetų grupės (nodeList) skaičiavimus išvest į consolę
//  a. Suskaičiuoti kiek yra h2 tagų;
console.log(document.querySelectorAll('h2').length);
//  b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
console.log(document.querySelectorAll('h2').length - document.querySelectorAll('h2.first').length);
//  c. Visus h2 tagus nuspalvinti šviesiai mėlynai
let lb = document.querySelectorAll('h2')
lb.forEach((e) => {
    e.style.color = "lightblue"
});
//  d. Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
let price = document.querySelectorAll('div.price > h2')
price.forEach((e) => {
    e.classList.add("price-tag")
});
//  e. Pabraukti visus tagus su klase new;
let pabr = document.querySelectorAll('.new')
pabr.forEach((e) => {
    e.style.textDecoration = "underline"
});
//  f. Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
console.log(document.querySelectorAll('ul').length);
console.log(document.getElementById('zirafos').childElementCount - 1);
//  g. Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
let remai = document.querySelectorAll('ul')
remai.forEach((e) => {
    e.style.border = "1px solid black"
    e.style.padding = "15px 50px"
})
//  h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
console.log(document.querySelectorAll('.new').length);
//  i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoj
console.log(document.querySelectorAll('#zirafos .new').length);
console.log(document.querySelectorAll('#plesrunai .new').length);
console.log(document.querySelectorAll('#gyvates .new').length);
console.log(document.querySelectorAll('#zoliaedziai .new').length);

//3. Elementų events
//  a.Padaryti tai ką liepia mygtukai Header1 sekcijoje;
let click = document.getElementById('h1-color')
click.addEventListener('click', () => {
    document.querySelector('h1').style.color = "lightgreen"
});
let click2 = document.getElementById('h1-font')
click2.addEventListener('click', () => {
    document.querySelector('h1').style.fontSize = "10px"
});
//  b.Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
let i = document.querySelector('i')
i.addEventListener('click', () => {
    i.style.fontWeight = "bold"
});
//  c.Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
let bg = document.querySelector('.prices')
bg.addEventListener('click', () => {
bg.style.background = "grey"
});
if(bg.style.background == "grey") {
    bg.addEventListener('click', () => {
    bg.style.background = "white"
})
}

//  d.Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;
let contacts = document.querySelector('#contacts');
    contacts.addEventListener('click', () => {
        contacts.style.color = 'orange'
    });
//  e.Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
let size = document.querySelector('#contacts > u')
size.addEventListener('click', () => {
    contacts.style.fontSize = "20px"
})
//  f.Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element
let trinti = document.querySelector('#contacts > b');
trinti.addEventListener('click', () => {
    if (contacts.style.color = 'orange') {
        contacts.style.color = null
    }

    contacts.style.fontSize = null;
});
//  d.Padaryti tai ką liepia mygtukai Header2 sekcijoje;

let clickBack1 = document.getElementById('h1-color-back')
clickBack1.addEventListener('click', () => {
    document.querySelector('h1').style.color = null
});
let clickBack2 = document.getElementById('h1-font-back')
clickBack2.addEventListener('click', () => {
    document.querySelector('h1').style.fontSize = null
});

