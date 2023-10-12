/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.


Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
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

    //creo una let che mi permetta di attivare il messaggio
    //se non avessi questa let il sistema poi quando andrebbe a fare l'if, per dare un messaggio positivo dovrebbe avere una corrrispondenza completa tra il value e tutti gli array che sarebbe impossibile
    //linkando tutto all'attivazione true false di questa singola let infatti basta che una sola delle condizioni si verifichi per attivarla
    let checked = false

    //creo una let linkata al div dove inserirò il messaggio
    let result = document.getElementById('result');

    for(let i = 0; i < mail.length; i++) {
        //creo una let per associare i a tutti i valori dell'array
        let mailcorrect = mail[i];

        console.log(mailcorrect);
        
        //creo un if: in questo if metto che il value deve essere uguale ad ogni singolo elemento dell'array, impossibile, ma in quesot caso mi basta una sola singola corrispondenza per attivare il messaggio positivo, altrimenti uno negativo
        if (mailcorrect === mailcheck) {

            let checked = true;

        } else {

            let checked = false;
        }
    }
    //ora setto il messagio in base al true false della let checked 
    if (checked = true) { 
        
        result.innerHTML = 'Perfetto!'
    } else {
        result.innerHTML = 'Email non corrispondente!'
    }
})

cancel.addEventListener('click', function() {

})

//dice

//creo una const che generi un numero da 1 a 6 per il giocatore 
const playerscore = document.getElementById('playerscore');

//creo una const che geenri un numero da 1 a 6 per la cpu
const cpuscore = document.getElementById('cpuscore');

//creo un'altra const per l'attivazione del bottone
const play = document.getElementById('play');

//creo una const per l'attivazione del replay
const replay = document.getElementById('replay');



play.addEventListener('click', function(){

    let rngplayer = Math.floor((Math.random() * 6) + 1);
    let rngcpu = Math.floor((Math.random() * 6) + 1);

    playerscore = rngplayer;
    cpuscore = rngcpu;

    console.log( rngplayer, rngcpu);
    
    //link ad una let il div che eseguirà il messaggio di risultato
    let outcome = document.getElementById('outcome');

    if (rngplayer > rngcpu) {
        outcome.innerHTML = 'hai vinto!'
    } else if (rngplayer < rngcpu) {
        outcome.innerHTML = 'hai perso!'
    } else {
        outcome.innerHTML = 'pareggio!'
    }
})

