// let i = 10;
// while (i>0) {
//   document.write(`${i} <br>`);
//   i--;
// }
// document.write(`Srecna Nova godina`);
///////////////////////////////////////////

// let a=20;
// let brojac=0;

// while(a<=40){
//   if (a%3==0) {
//     brojac++;
//   }
//   a++;  
// }
// document.write(`${brojac}`);
////////////////////////////////

// let n = parseInt(prompt(`Unesite broj:`));
// zbir = 0;

// while (n) {
//   zbir += n % 10;
//   n = parseInt(n / 10);
// }
// document.write(zbir);
/////////////////////////////////////////////

// let a = Math.floor(Math.random() * 100);
// let b = parseInt(prompt(`Unesi broj:`))

// if (b<a) {
//   document.write(`Vas broj je manji od zamilsljenog`);
//   } else if (b>a) {
//     document.write(`Vas broj je veci od zamilsljenog`);
//   } else {
//     document.write(`Alal ti vera :)`);
//   }
/////////////////////////////////////////////

// let a = Math.floor(Math.random() * 100);
// let b = 0;
// let c = 0;

// while (b!=a) {
//    let b = parseInt(prompt(`Unesi broj:`));
//    if (b>a) {
//     alert(`Vas broj je veci od zamilsljenog`);
//     c++;
//     continue;
//   } if (b<a) {
//     alert(`Vas broj je manji od zamilsljenog`);
//     c++;
//     continue;
//   } if (b==a){
//     c++;
//     alert(`Bravo pogodio si iz ${c} puta`);
//     break;
//   }
// }
/////////////////////////////////////////////////

// let zbir = 0;

// while (true) {
//   let broj = parseInt(prompt(`Unesi broj:`));
//   if (broj < 100) {
//     alert(`Uneti broj je manji od 100`)
//     continue
//   }
//   if (broj > 100) {
//     alert(`Uneti Broj je veci od 100`)
//     continue
//   }
//   if (broj == 100) {
//  break
// }
// }
//////////////////////////////////////
// VOID Funkcija, ne vraca vrednost
//////////////////////////////////////
// function prvaFunkcija(x) {
//   y=2*x;
// }
// prvaFunkcija(prompt(`Unesi broj`));
// document.write(y);
/////////////////////////////////////////
/////Nije void funkcija jer vraca vrednost
//////////////////////////////////////////
// let a = prompt(`Unesi a:`);
// let b = prompt(`Unesi b:`);

// function povrsina(a,b) {
//   y=a*b;
//   return y;
// }
// let rezF = povrsina(a, b);
// document.write(rezF);
////////////////////////////////////////

//  let a = parseInt(prompt(`Unesi a:`));
//  let b = parseInt(prompt(`Unesi b:`));
//  let c = parseInt(prompt(`Unesi c:`));

//  function najBroj(a,b,c) {
//    let maxBroj = a;
//    if (maxBroj<b) {
//      maxBroj = b;
//      } else if (maxBroj<c) {
//        maxBroj = c;
//      }
//      alert(`max broj je: ${maxBroj}`);
//      return maxBroj;
//  }
//  najBroj(a,b,c);
//////////////////////////////////////////

//// Anonimna Funkcija
// b = function () {return 4};
// alert(b());
// Ukoliko pozovemo bez zagrada dobicemo string citav "function () {return 4};", ukoliko dodamo zagrade kod b dobicemo vrednost

///////////////////////////////
////// Arrow funkcija ili ti strelicasta funkcija
// let b = () => 6;
/// Koristi se samo kada vracam neku vrednost, kada se ima return.

// let p = 1;
// let a = parseInt(prompt(`Unesi a:`));
// let b = parseInt(prompt(`Unesi b:`));

//  function proizvod(a,b) {
//    if(a>b) {
//      let pom = a;
//      a = b;
//      b = pom;
//    } else if (a==0 || b==0) {
//     alert(`Rezultat je 0!`);
//     return;
//    }
// for (let i = a; i < b; i++) {
//   p = p * i;
//   }
//   return parseInt;
// } 
// proizvod(5,7);
// alert(p);

//////////////////////////////////////////

// let niz = [1,2,3,4,`text`, false];

// console.log(niz);
// document.write(niz);

// console.log(niz[2]);

// console.log(niz[niz.length - 1]);

// let niz = new Array(23);

// document.write(niz);

//////////////////////////////////////

// let niz = [1,2,3,4,5,6,12,4,7,9];

// for (let i = 0; i < niz.length; i++) {
//     console.log(niz[i]);
    
// }
 ////////////////////////////////

//  let niz = [1,2,3,4,5,6,12,4,7,9];

// for (let i = niz.length; i > 0; i--) {
//     console.log(niz[i]);
    
// }

/////////////////////////////////

// let niz =[];

// for (let i = 0; i < 11; i++) {
//     niz[i] = Math.round(Math.random() * 10);
    
// } console.log(niz);

///////////////////////////////

// let niz = [2,3,5,2];

// niz[10] = 5;

// for (let i = 0; i < niz.length; i++) {
//     if(niz[i] === undefined) continue; 
//         console.log(niz[i]);
// }

// console.log(niz);

/////////////////////////////////////////

// let dNiz = [[2312, 56], [4487, 92], [`Miilos`, 23, 56]];

// console.log(dNiz);
// console.log(dNiz[1][0]);

////////////////////////////////////////
//////// Niz u nizu pitanje za posao moguce

// let niz = new Array(10);

// for (let i = 0; i < niz.length; i++) {
//     niz[i] = new Array(10);
// }  console.log(niz);

// for (let i = 0; i < niz.length; i++) {
//     for (let j = 0; j < niz.length; j++) {
//         niz[i][j] = Math.ceil(Math.random()*100);        
//     }    
// } console.log(niz);

/////////////////////////////////////////
//// Bez callback funkcije gleda samo prvu cifru
// let niz1 = [2,35,745,62,44,51,1,986,812];
// niz1.sort(); sortiranje po prvom karakteru elementa
// niz1.sort((a,b) => b-a); sortiranje opadajuce
// niz1.sort((a,b) => a-b);
// console.log(niz1);
//////////////////////////

/////////////////////////////
// let niz = [2,35,745,62,44,51,1,986,812];
// niz.reverse();
// console.log(niz);
////////////////////////////

///////////////////////////// Dodavanje jednog ili vise elemenata na kraj niza
// let niz = [2,35,745,62,44,51,1,986,812];
// niz.push(3,2,5,6);
// console.log(niz);
//////////////////////////////

////////////////////////////// Dodavanje elementa na pocetak uz pomeranje indexa
// let niz = [2,35,745,62,44,51,1,986,812];
// niz.unshift(88);
// console.log(niz);
/////////////////////////////////

///////////// Brisanje elementa iz nisa ali ostaje index prazan
// let niz = [2,35,745,62,44,51,1,986,812];
// delete niz[2];
// console.log(niz);
//////////////////////////

//////// Brisanje poslednjeg elementa niza
// let niz = [2,35,745,62,44,51,1,986,812];
// niz.pop();
// console.log(niz);
////////////////////////////////

/////////////////////////////// Kopira zadatu vrednost iz niza
// let niz = [2,35,745,62,44,51,1,986,812];
// let kopiran = niz.slice(2,4);
// console.log(niz);
// console.log(kopiran);
//////////////////////////

/////// Uzimanje delova niza, definise se prvo od koje pozicije a sledece koliko elemenaa uzima.
// let korpa = [`jabuke`, `kruske`, `tresnje`, `lubenice`];
// console.log(korpa);
// let proizvodi = korpa.splice(1,2)
// console.log(proizvodi);
//////////////////////////////

///////////// Takodje uuzimanje elemenata iz niz
// let korpa = [`jabuke`, `kruske`, `tresnje`, `lubenice`];
// console.log(korpa);
// korpa.splice(1,0,`pecurke`, `krompir`);
// console.log(korpa);
//////////////////////////////

////// Trazi nam indeks zadatog elementa, vlo vazna stvar ibacuje -1 kada nema trazenu vrednost.
// let niz = [1,3,55,4,6,454,654,654,46,54];
// let indeks = niz.indexOf(4457);
// console.log(indeks);
//////////////////////////////////

/// Trazi u nizu trojku ali kreni da trazis od cetvrtog indeksa
// let niz = [1,3,55,4,6,454,654,654,46,54];
// let indeks = niz.indexOf(3,4);
// console.log(indeks);
///////////////////////////////

//////////////////////////////
// let niz = [1,3,55,4,6,46,454,654,654,46,54];
// let indeks = niz.lastIndexOf(46);
// console.log(indeks);
//////////////////////////////

////////////////////////////////
// let niz = [1,3,55,4,6,46,454,654,654,46,54];
// let indeks = niz.findIndex(function (broj) {return broj>10});
// console.log(indeks);
//////////////////////////////////

////////////// Od stringa pravimo niz, ono sto je u zagradama je uslov za odvajanje elemenata
// let string = `Code academy`;
// let stringNiz = string.split(` `);
// console.log(stringNiz);
///////////////////////////////

/////// Od niza pravi string
// let string = `Code academy`;
// let stringNiz = string.split(` `);
// let kreiranString = stringNiz.join();
// console.log(kreiranString);
///////////////////////////////////

///////////////// zadatak 1
// let recenica = prompt(`Unesite recenicu`);
// let obrnutaRecenica = recenica.split(` `).reverse().join(` `);
// alert(obrnutaRecenica);
/////////////////////////////

///////////// Zadatak 2
// let niz = new Array(100);
// for (let i = 0; i < niz.length; i++) {
//     niz[i] = Math.ceil(Math.random()*100);
// }  
// for (let i = 0; i < niz.length; i++) {
//     if(niz[i] > 20 && niz[i]<50) {
//      niz.splice(i,1);
//      i--;
//     }
// }
// niz.sort((a,b)=>a-b);
// console.log(niz);
////////////////////////////////

/////////////////// Zadatak 2 drugi nacin NIJE DOBAR IMA GRESKU
// let niz = new Array(100);
// for (let i = 0; i < niz.length; i++) {
//     niz[i] = Math.ceil(Math.random() * 100);
//     niz.splice((50-20) + 20);
// }
// console.log(niz);
//////////////////////////////////