// SUKURIAME NAUJA DIV ELEMENTA IR IDEDAME I DIV ID = "root"

// const div = document.createElement('div');
// // 1. sukuriamas div elementas, bet jo nera matomo narsykles lange

// const root = document.querySelector('#root');
// //2. cia surandamas html div su id = "root"

// root.appendChild(div);
// //3. ir i ta root diva idedamas sitas naujas divas

// CREATE = SUKU  RTI
// APPEND = PRIDETI 
// QUERY = UZKLAUSTI
// ---------------------------------------------------------------

// 

// GALIMA PADARYTI TAIP JOG TAME DIVE BUTU KAS NORS UZRASYTA:

// const div = document.createElement('div');

// // sukuriamas tekstas, kuris kol kas tvyko kazkur anapus, tam reikia appendinti teksta:
// const text = document.createTextNode('Labas, Bebrai');
// div.appendChild(text);
// // va dabar tekstas matysis narsykleje

// const root = document.querySelector('#root');
// root.appendChild(div);

// GALIMA SUKOMPAKTINTI IR ISVESTI FUNKCIJA su argumentu textNote:
// kai funkcija bus iskviesta ji gales kurti elementus

// const Div = (textNote) => {
//     const div = document.createElement('div'); //1. sukuriamas tuscias divas, bet jo dar nera narsykleje
//     const text = document.createTextNode(textNote); //4. sukuriame lipduka su tam tikru tekstu, bet jo dar nesimato narsykleje
//     div.appendChild(text); // 5. uzklijuojame ta lipduka su tekstu naryskleje
//     const root = document.querySelector('#root'); // 2. surandame vieta kur divas matysis narsykleje
//     root.appendChild(div); //3. pridedame div i matoma narsykleje vieta

// }
// DIV funkcija tai viskas kas paslepta po kapotu ir mes jo nematom

// Div('labas, Bebrai'); // komponentas su kuo mes dirbsime
// Div('Nu sveikutis, Barsukai'); // komponentas su kuo mes dirbsime
// Div("......................................")
// // UZDUOTIS IKELTI MASYVA I NARSYKLE JOG ATRODYTU KAIP DIALOGAS:
// const data = ['Labas, Bebrai', 'Nu sveikutis, Barsukai', 'Kur aini', 'Namo ainu']

// Div(data[0]);
// Div(data[1]);
// Div(data[2]);
// Div(data[3]);
// Div("............................................")

// FOR EACH NAUDOJIMAS - CIKLUS ATSPAUSDINS DUOMENIS STULPELIU
// const data = ['Labas, Bebrai', 'Nu sveikutis, Barsukai', 'Kur aini', 'Namo ainu']

// data.forEach(elementas => Div(elementas));


// PATOBULINTAS DIVAS PAVADINIMU ELEMENT:

// const Element = (textNote, kokioTipoElementas, className) => {
//     const div = document.createElement(kokioTipoElementas); //1. sukuriamas tuscias divas, araba p, arba h1 bet jo dar nera narsykleje
//     const text = document.createTextNode(textNote); //4. sukuriame lipduka su tam tikru tekstu, bet jo dar nesimato narsykleje
//     div.appendChild(text); // 5. uzklijuojame ta lipduka su tekstu naryskleje
//     const root = document.querySelector('#root'); // 2. surandame vieta kur divas matysis narsykleje
//     root.appendChild(div); //3. pridedame div i matoma narsykleje vieta
//     div.classList.add(className); //prideda css klase js
// }

// SET STATE

let state;

const setState = (def = true) => {
    if (def) {
        state = 0;
    } else {
        state++;
    }
    console.log(state);
    document.querySelector('#root').innerHTML = "";
    data.forEach((s, nr) => {
        if (state >= nr) {
            Elem(s, 'h1', nr % 2 === 0 ? 'pink' : 'goth')
        }
    });
}

document.querySelector('button').addEventListener('click', () => {
    setState(false);
})

const Elem = (t, el, className) => {
    const div = document.createElement(el); // sukuria tuscia div arba p arba a
    const text = document.createTextNode(t); // sukuria teksta
    const root = document.querySelector('#root'); // surandam vieta
    root.appendChild(div); // pridedam i matoma narsykleje vieta
    div.appendChild(text); // pridedam teksta i elementa
    div.classList.add(className);
}


const data = ['Labas, Bebrai', 'Nu sveikutis, Barsukai', 'Kur aini?', 'Namo ainu'];

// const a = salyga ? taip : ne;

setState(true);

