/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.


Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?


Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
2.   Grafica per il gioco dei dadi
*/


//creo una const e la linko al value del form
const mailcheck = document.getElementById('mail').value;

//creo una const che si allacci con l id del bottone per la funzione
const search = document.getElementById('search');

//creo una const che si allacci all'id del bottone annulla
const cancel = document.getElementById('cancel');

//creo un array con una lista di mail possibili
const mail = [
    'mariomario@gmail.com',
    'nonsochescrivere@outlook.com',
    'checimetto@gmail.com',
    'reporepo.ciao@hotmail.it'
]

//creo una funzione che al click del bottone mi faccia un check delle mail dell'array
search.addEventListener('click', function() {
    //creo un ciclo che passi in rassegna a tutti gli elementi della lista
    for(let i = 0; i < mail.length; i++) {
        //creo una let per associare i a tutti i valori dell'array
        let mailcorrect = mail[i];
        //creo una let linkata al div dove inserirò il messaggio
        let result = document.getElementById('result');

        console.log(mailcorrect);
        
        //creo un if: se mail correct corrisponde a mailcheck cioè il value inserito allora darò un messaggio positivo, altrimenti uno negativo
        if (mailcorrect === mailcheck) {

            result.innerHTML = 'perfetto!';

        } else {
            result.innerHTML = 'email non corrispondente!';
        }
    
    }
})

//dice

//creo una 

