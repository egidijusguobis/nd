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
    if (bg.style.background === "grey") {
        bg.style.background = "white"
    } else {
        bg.style.background = "grey"
    }
})

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
trinti.addEventListener('click', (e) => {
    contacts.style.color = null
    contacts.style.fontSize = null;
    e.stopPropagation()
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

//4.Elementų grupių events
//  a.Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
let doubleClick = document.querySelectorAll('.new')

doubleClick.forEach((e) => {
    e.addEventListener('dblclick', () => {
    e.style.color = "red"
    })
})
//  b.Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.
let didinam = document.querySelectorAll('.animals > ul > li:not(li:first-of-type)')

didinam.forEach((e) => {
    e.addEventListener('click', () => {
        e.style.fontSize = "130%"
    })
})
//  c.Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;

let patinka = document.querySelectorAll('.animals > ul')
patinka.forEach(e => {
    e.querySelector('.like-button').addEventListener('click', () => {
        e.classList.add('like');
    })
});

//5.Dinaminis elementų kūrimas (su createElement)
//  a.Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;
let senjorai = document.getElementsByClassName('prices')[0];
let kaina = document.createElement('h2')
kaina.innerText = "Senjorai tik: 1.99 eur"
senjorai.append(kaina)

//  b.Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;
let kaina2 = document.createElement('h2');
kaina2.innerText = "Senjorų grupė iki 10: tik 5.99 eur";
senjorai.append(kaina2);
kaina2.classList.add('new');
kaina2.addEventListener ('click', () => {
    kaina2.style.color = "green"
})

//  c.Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like

let gyvunai = document.querySelectorAll('ul');
gyvunai.forEach(e => {
    let patinka = e.querySelector('.like-button');
    let nepatinka = document.createElement('li');
    nepatinka.innerText = "NEPATINKA"
    patinka.after(nepatinka)
    nepatinka.addEventListener('click', () => {
        e.classList.remove('like')
    })

})
//  d.Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta
let fieldset = document.createElement('fieldset');
let legend = document.createElement('legend');
legend.innerText = "HEADER 3"
let button = document.createElement('button');
button.innerText = "Pabraukti H1 tagą"
let button2 = document.createElement('button');
button2.innerText = "Nepabraukti H1 tagą"

fieldset.append(legend);
fieldset.append(button);
fieldset.append(button2);

document.getElementById('contacts').before(fieldset);

button.addEventListener('click', () => {
    document.querySelector('h1').style.textDecoration = "underline"
})

button2.addEventListener('click', () => {
    document.querySelector('h1').style.textDecoration = "none"
})



