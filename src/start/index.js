// const div = document.createElement('div');
// // sukuriamas div elementas, bet jo nera matomo narsykles langa

// const root = document.querySelector('#root');
// // cia surandamas html fiv root'as 

// root.appendChild(div);
// // ir i ta root diva idedamas sitas naujas divas
// ---------------------------------------------------------------

// iskvietus Div funkcija ji kvies visus elementus
// const Div = (t) => {
//     const div = document.createElement('div'); //1. sukuriamas tuscias divas, bet jo dar nera narsykleje
//     const text = document.createTextNode(t); //4. sukuriame lipduka su tam tikru tekstu, bet jo dar nesimato narsykleje

//     div.appendChild(text); // 5. uzklijuojame ta lipduka su tekstu naryskleje

//     const root = document.querySelector('#root'); // 2. surandame vieta kur divas matysis narsykleje
//     root.appendChild(div); //3. pridedame i matoma narsykleje vieta
// }

// Div('labas Betrai');
// Div('Nu sveikutis barsukai');

// const data = ['Labas, Bebrai', 'Nu sveikutis, Barsukai', 'Kur aini', 'Namo ainu']

// // for each komanda kaip ciklas atspausdins dat duomenis stulpeliu
// data.forEach(s => Div(s));
// -------------------------------------------------------------------------

const Elem = (t, el, className) => {
    const div = document.createElement(el); //1. sukuriamas tuscias divas, bet jo dar nera narsykleje
    const text = document.createTextNode(t); //4. sukuriame lipduka su tam tikru tekstu, bet jo dar nesimato narsykleje

    div.appendChild(text); // 5. uzklijuojame ta lipduka su tekstu naryskleje

    const root = document.querySelector('#root'); // 2. surandame vieta kur divas matysis narsykleje
    root.appendChild(div); //3. pridedame i matoma narsykleje vieta
    div.classList.add(className); //prideda css klase js
}

const data = ['Labas, Bebrai', 'Nu sveikutis, Barsukai', 'Kur aini', 'Namo ainu']

// const a = salyga ? taip: ne;

// for each komanda kaip ciklas atspausdins dat duomenis stulpeliu
data.forEach((s, nr) => Elem(s, 'h1', nr%2 ? 'pink' : 'goth'));
