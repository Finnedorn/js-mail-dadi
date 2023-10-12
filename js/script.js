
//Mail Checker

//creo una const che si allacci con l id del bottone per la funzione
const search = document.getElementById('search');

//creo una funzione che al click del bottone mi faccia un check delle mail dell'array
search.addEventListener('click', function() {

    //creo una const e la linko al value del form
    const mailcheck = document.getElementById('mail').value;

    //creo una const che si allacci all'id del bottone annulla
    const cancel = document.getElementById('cancel');

    //creo un array con una lista di mail possibili
    const mail = [
        'mariomario@gmail.com',
        'nonsochescrivere@outlook.com',
        'checimetto@gmail.com',
        'reporepo.ciao@hotmail.it'
    ]

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
        
        //creo un if: in questo if metto che il value deve essere uguale ad ogni singolo elemento dell'array, impossibile, ma in quesot caso mi basta una sola singola corrispondenza per attivare il messaggio positivo, non metto else a sto giro perchè voglio solo che venga validata
        if (mailcorrect === mailcheck) {

            checked = true;

        }
    }
    //ora setto il messagio in base al true false della let checked 
    if (checked) { 
        
        result.innerHTML = 'perfetto!'
    } else {
        result.innerHTML = 'email non corrispondente!'
    }
})

cancel.addEventListener('click', function() {

    mailcheck.value = '';
})

//Dice 

//creo una const che generi un numero da 1 a 6 per il giocatore 
const playerscore = document.getElementById('playerscore');

//creo una const che geenri un numero da 1 a 6 per la cpu
const cpuscore = document.getElementById('cpuscore');

//creo un'altra const per l'attivazione del bottone
const play = document.getElementById('play');

//creo una const per l'attivazione del replay
const replay = document.getElementById('replay');

//creo una const per il pop up message
const msg = document.getElementById('outcome');




play.addEventListener('click', function(){

    let rngplayer = Math.floor((Math.random() * 6) + 1);
    let rngcpu = Math.floor((Math.random() * 6) + 1);

    playerscore.value = rngplayer;
    cpuscore.value = rngcpu;

    console.log( rngplayer, rngcpu);

    if (rngplayer > rngcpu) {
        outcome.innerHTML = 'hai vinto!';
    } else if (rngplayer < rngcpu) {
        outcome.innerHTML = 'hai perso!';
    } else {
        outcome.innerHTML = 'pareggio!';
    }

    //rimuoviamo d-none dal div
    msg.classList.remove('d-none');
})

replay.addEventListener('click', function() {

    playerscore.value = '';
    cpuscore.value = '';

    msg.classList.add('d-none');
})

