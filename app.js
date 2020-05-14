function bookSearch(e) {
    e.preventDefault();
    results.innerHTML = ""
    frase.innerHTML = ""
    exported = []
    document.getElementById('form').style.display = 'none'
    document.getElementById('container').style.display = 'block'
    document.getElementById('info').style.display = "none"
    document.getElementById('maps').style.display = "none"
    document.getElementById('nop').innerHTML = ""
    var search = document.getElementById('search').value
    if (search != "") {
        httpReq.open("GET", 'https://www.googleapis.com/books/v1/volumes?q=' + search, true);
        httpReq.send();
    }
    else if (search == "") {
        location.reload(true)
    }
    else { return }
}
var exported = []
document.getElementById('button').addEventListener('click', bookSearch, false)
var httpReq = new XMLHttpRequest();
httpReq.onreadystatechange = function () {
    if (httpReq.readyState == 4 && httpReq.status == 200) {
        var books = JSON.parse(httpReq.responseText)
        if (books['items'] == undefined) {
            document.getElementById('nop').innerHTML = "<h1> Nessun libro trovato </h1>"
        }
        else {
            for (var i = 0; i < books['items'].length; i++) {
                if (books['items'][i]['volumeInfo']['title'] == undefined || books['items'][i]['volumeInfo']['authors'] == undefined || books['items'][i]['volumeInfo']['imageLinks']['thumbnail'] == undefined) {
                    return
                }
                var results = document.getElementById('results')
                var div = document.createElement('div')
                var img = document.createElement('img')
                div.setAttribute('class', 'col-auto bg-dark')
                img.setAttribute('class', 'cover')
                img.setAttribute('onclick', 'infosearched(' + i + ')')
                img.setAttribute("src", books['items'][i]['volumeInfo']['imageLinks']['thumbnail'])
                div.append(img)
                results.append(div)
                exported.push("<p>Titolo: <b>" + books['items'][i]['volumeInfo']['title'] + "</b></p>" + "<p>Autore:<b> " + books['items'][i]['volumeInfo']['authors']
                    + "</b></p><p> Casa Editrice: <b>" + books['items'][i]['volumeInfo']['publisher'] + "</b></p><p>Data pubblicazione: <b>"
                    + books['items'][i]['volumeInfo']['publishedDate']
                    + "</b></p><p class='descrizione'>Descrizione: " + books['items'][i]['volumeInfo']['description'])
            }
        }
    }
};
//funzione per tornare in alto allo scroll
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top").style.display = "block";
    } else {
        document.getElementById("top").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var initialBooks = [
    {
        cover: "img/9788842929147_0_221_0_75.jpg",
        titolo: "Il sigillo del cielo",
        autore: "Glenn Cooper",
        editore: "Nord",
        annoUscita: "10 giugno 2019",
        descrizione: "Mosul, 1095. Daniel Basidi è un uomo di fede. Eppure teme che stavolta il Signore abbia caricato un fardello troppo grande sulle sue spalle. Per anni ha cercato di mettere il suo dono al servizio degli altri. Ma quest'ultima rivelazione, terribile e sublime, non può essere condivisa con nessuno, perché è troppo pericolosa. Daniel deve portarla con sé nella tomba. Iraq, 1989. Hiram Donovan è un uomo di scienza. Eppure, quando tocca quella pietra sepolta nella sabbia, si sente come pervadere da una corrente elettrica. E ha paura. Infrangendo la legge e i suoi stessi principi morali, Hiram sottrae l'oggetto dallo scavo e lo spedisce alla moglie, in America. Sarà l'ultima cosa che farà prima di morire. New York, oggi. Cal Donovan è un uomo d'azione. Eppure, non appena riceve la notizia che sua madre è stata uccisa, si sente crollare la terra sotto i piedi. All'apparenza sembrerebbe un furto andato male, se non fosse che in casa non manca nulla. I presunti ladri hanno messo a soqquadro ogni stanza, senza prendere né gioielli, né quadri, né contanti. Che cosa cercassero, Cal lo scopre dopo qualche giorno, in una scatola da scarpe nascosta in fondo a un armadio. Un pacco ancora sigillato che suo padre aveva mandato dall'Iraq trent’anni prima. All’interno, c'è l'ossessione che ha tormentato avventurieri e imperatori, il segreto per cui hanno dato la vita santi e ciarlatani, la minaccia che deve restare sepolta, per il bene del mondo. E ora tocca a Cal proteggerla. A ogni costo."
    },
    {
        cover: "img/9788850240166_0_0_0_75.jpg",
        titolo: "La biblioteca dei morti",
        autore: "Glenn Cooper",
        editore: "TEA",
        annoUscita: "25 giugno 2015",
        descrizione: "Questo romanzo comincia nel dicembre 782 in un'abbazia sull'isola di Vectis (Inghilterra), quando il piccolo Octavus, accolto dai monaci per pietà, prende una pergamena e inizia a scrivere un'interminabile serie di nomi affiancati da numeri. Un elenco enigmatico e inquietante. Questo romanzo comincia il 12 febbraio 1947, a Londra, quando Winston Churchill prende una decisione che peserà sulla sua coscienza sino alla fine dei suoi giorni. Una decisione atroce ma necessaria. Questo romanzo comincia il 10 luglio 1947, a Washington, quando Harry Truman, il presidente della prima bomba atomica, scopre un segreto che, se divulgato, scatenerebbe il panico nel mondo intero. Un segreto lontano e vicinissimo. Questo romanzo comincia il 21 maggio 2009, a New York, quando il giovane banchiere David Swisher riceve una cartolina su cui ci sono una bara e la data di quel giorno. Poco dopo, muore. E la stessa cosa succede ad altre cinque persone. Un destino crudele e imprevedibile. Questo romanzo è cominciato e forse tutti noi ci siamo dentro, anche se non lo sappiamo. Perché non esiste nulla di casuale. Perché la nostra strada è segnata. Perché il destino è scritto. Nella Biblioteca dei Morti."
    },
    {
        cover: "img/9788804631446_0_0_0_75.jpg",
        titolo: "Inferno",
        autore: "Dan Brown",
        editore: "Mondadori",
        annoUscita: "14 maggio 2013",
        descrizione: "Nei suoi blockbuster Il codice Da Vinci, Angeli e Demoni e Il simbolo perduto, Dan Brown ha saputo sapientemente fondere storia, arte, codici e simboli. In questo nuovo avvincente thriller, Brown torna al suo genere e costruisce il suo romanzo più ambizioso fino ad oggi. Il professore di simbologia di Harvard Robert Langdon viene trascinato in un tormentato mondo che ruota intorno ad uno dei più durevoli e misteriosi capolavori della letteratura mondiale: l’Inferno di Dante. Su questo sfondo, Langdon si trova a combattere contro un agghiacciante avversario e un ingegnoso enigma che lo sospinge in uno scenario di arte classica, passaggi segreti e scienza futuristica. Guidato dall’epico e fosco poema dantesco, Langdon si affanna a cercare risposte e a decidere di chi fidarsi prima che il mondo venga per sempre cambiato."
    },
    {
        cover: "img/9788804667223_0_0_782_75.jpg",
        titolo: "Il Codice da Vinci",
        autore: "Dan Brown",
        editore: "Mondadori",
        annoUscita: "24 maggio 2016",
        descrizione: "Parigi, Museo del Louvre. Nella Grande Galleria, il vecchio curatore Saunière, ferito a morte, si aggrappa con un ultimo gesto disperato a un dipinto del Caravaggio, fa scattare l'allarme e le grate di ferro all'entrata della sala immediatamente scendono, chiudendo fuori il suo inseguitore. L'assassino, rabbioso, non ha ottenuto quello che voleva. A Saunière restano pochi minuti di vita. Si toglie i vestiti e, disteso sul pavimento, si dispone come l'uomo di Vitruvio, il celeberrimo disegno di Leonardo da Vinci. La scena che si presenta agli occhi dei primi soccorritori è agghiacciante: il vecchio disteso sul marmo è riuscito, prima di morire, a scrivere alcuni numeri, poche parole e soltanto un nome: Robert Langdon."
    },
    {
        cover: "img/9788830448292_0_0_831_75.jpg",
        titolo: "La casa delle voci",
        autore: "Donato Carrisi",
        editore: "Longanesi",
        annoUscita: "2 dicembre 2019",
        descrizione: "Pietro Gerber non è uno psicologo come gli altri. La sua specializzazione è l'ipnosi e i suoi pazienti hanno una cosa in comune: sono bambini. Spesso traumatizzati, segnati da eventi drammatici o in possesso di informazioni importanti sepolte nella loro fragile memoria, di cui polizia e magistrati si servono per le indagini. Pietro è il migliore di tutta Firenze, dove è conosciuto come l'addormentatore di bambini. Ma quando riceve una telefonata dall'altro capo del mondo da parte di una collega australiana che gli raccomanda una paziente, Pietro reagisce con perplessità e diffidenza. Perché Hanna Hall è un'adulta. Hanna è tormentata da un ricordo vivido, ma che potrebbe non essere reale: un omicidio. E per capire se quel frammento di memoria corrisponde alla verità o è un'illusione, ha disperato bisogno di Pietro Gerber. Hanna è un'adulta oggi, ma quel ricordo risale alla sua infanzia. E Pietro dovrà aiutarla a far riemergere la bambina che è ancora dentro di lei. Una bambina dai molti nomi, tenuta sempre lontana dagli estranei e che, con la sua famiglia, viveva felice in un luogo incantato: la «casa delle voci». Quella bambina, a dieci anni, ha assistito a un omicidio. O forse non ha semplicemente visto. Forse l'assassina è proprio lei."
    },
    {
        cover: "img/9788817086226_0_0_831_75.jpg",
        titolo: "Purgatorio. Canti delle terre divise",
        autore: "Francesco Gungui",
        editore: "BUR Biblioteca Univ. Rizzoli",
        annoUscita: "5 maggio 2016",
        descrizione: "Alec e Maj sono riusciti nell'impresa impossibile. Sono scappati dall'Inferno, la prigione che nel prossimo futuro serve a rinchiudere e spesso eliminare chi si oppone al potere dell'Oligarchia. Scappando, Alec e Maj hanno creato una frattura nel mondo strettamente controllato da eserciti e tecnologia. Hanno dimostrato che opporsi è possibile e hanno dato il via a tanti piccoli focolai di rivolta. Per questo l'Oligarchia deve trovarli ed eliminarli al più presto. Intanto i due ragazzi, nati agli estremi opposti delle Terre Divise - lei cresciuta a Paradiso tra i ricchi, lui a Europa, la città stato dei miserabili - hanno raggiunto un'isola che l'Oligarchia non sa nemmeno esistere. È Purgatorio, dove ribelli e profughi da tutto il mondo trovano rifugio e progettano di rovesciare l'Oligarchia. Per essere accettati a Purgatorio, però, occorre compiere un difficile cammino scalando la montagna che sorge al centro dell'isola, una prova da cui non è detto si riesca a tornare vivi. Ma la sorpresa più grande per Alec è la scoperta che a capo di Purgatorio vi è uno dei primi architetti di Inferno, un uomo che credeva morto da anni: suo padre."
    },
    {
        cover: "img/9788804664772_0_0_831_75.jpg",
        titolo: "I canti del sogno. Ediz. integrale. Vol. 1",
        autore: "George R. R. Martin",
        editore: "Mondadori",
        annoUscita: "21 giugno 2016",
        descrizione: "Il racconto che apre questa raccolta, che è il primo di due volumi che completano l'edizione italiana dei racconti di Martin, cominciata nel 2006 con la pubblicazione dei 'Re di sabbia' e proseguita l'anno successivo con 'Le torri di cenere'. I primi tre racconti, scritti negli anni Sessanta mostrano un Martin giovane ma già in possesso delle virtù di un grande scrittore, particolarmente a suo agio nello spaziare tra generi, dal fantastico di 'Solo i bambini' all'epico eroico della 'Fortezza', con un'insolita incursione nel politico (senza rinunciare a ironia e azione, ovviamente) con 'E morte il suo retaggio'. I restanti quattro sono stati scritti tra gli anni Settanta e gli anni Ottanta, veri e propri gioielli letterari, percorsi da una vena crudele e perturbante che avvicina Martin a maestri assoluti quali Edgar Allan Poe o, mutando forma espressiva, Roman Polanski o Alfred Hitchcock."
    },
    {
        cover: "img/9788804645504_0_0_782_75.jpg",
        titolo: "Il trono di spade. Libro quarto delle Cronache del ghiaccio e del fuoco. Vol. 4",
        autore: "George R. R. Martin",
        editore: "Mondadori",
        annoUscita: "4 novembre 2014",
        descrizione: "In spettrali campi di battaglia e tetre fortezze in rovina, fra città tramutate in cimiteri e terre ridotte a ossari, la spaventosa guerra dei cinque re volge ormai al termine. La Casa Lannister e i suoi alleati appaiono vincitori. Eppure, nei Sette Regni, qualcosa ancora si agita. Mentre corvi in forma umana si raccolgono per un festino di ceneri, nuovi, temerari complotti vengono orditi e nuove, pericolose alleanze prendono forma. In questa apparentemente consolidata 'pace del re' forze inattese sono pronte a sferrare attacchi cruenti. Guidati dal famigerato re Occhio-di-corvo, gli uomini di ferro, eredi di un culto guerriero dimenticato da secoli, si sono lanciati all'invasione del sudovest del reame, costringendo la regina Cersei e il Trono di Spade ad affrontare un'inedita prova di forza. E dalle brume di una memoria lasciata troppo a lungo sepolta, un'antica, sinistra profezia potrebbe minacciare la stessa regina. Non sembra esistere una fine al banchetto dei corvi. E, forse, l'ora del destino sta per scoccare perfino per le prede più inattaccabili. Questa edizione presenta in un volume unico 'Il dominio della regina' e L'ombra della profezia', corrispondente al Libro quarto delle Cronache del ghiaccio e del fuoco, così come concepito dall'autore."
    },
    {
        cover: "img/9788893814508_0_0_831_75.jpg",
        titolo: "Harry Potter e la pietra filosofale. Vol. 1",
        autore: "J. K. Rowling",
        editore: "Salani",
        annoUscita: "25 gennaio 2018",
        descrizione: "Il primo capitolo di uno dei più grandi fenomeni letterari internazionali, il libro che ha fatto leggere milioni di ragazzi e ha unito genitori e figli nella scoperta di un universo fantastico che è già parte dell’immaginario collettivo."
    },
    {
        cover: "img/9788838481727_0_0_0_75.jpg",
        titolo: "Il cacciatore di aquiloni",
        autore: "Khaled Hosseini",
        editore: "Piemme",
        annoUscita: "15 marzo 2004",
        descrizione: "Si dice che il tempo guarisca ogni ferita. Ma, per Amir, il passato è una bestia dai lunghi artigli, pronta a riacciuffarlo quando meno se lo aspetta. Sono trascorsi molti anni dal giorno in cui la vita del suo amico Hassan è cambiata per sempre in un vicolo di Kabul. Quel giorno, Amir ha commesso una colpa terribile. Così, quando una telefonata inattesa lo raggiunge nella sua casa di San Francisco, capisce di non avere scelta: deve tornare a casa, per trovare il figlio di Hassan e saldare i conti con i propri errori mai espiati. Ma ad attenderlo, a Kabul, non ci sono solo i fantasmi della sua coscienza. C'è una scoperta sconvolgente, in un mondo violento e sinistro dove le donne sono invisibili, la bellezza è fuorilegge e gli aquiloni non volano più."
    }
]
//libri in div da array
function riempiPag() {
    var frase = document.getElementById('frase')
    frase.innerHTML = "<h1>I NOSTRI LIBRI PIU' VENDUTI</h1>"
    for (var j = 0; j < initialBooks.length; j++) {
        var results = document.getElementById('results')
        var div = document.createElement('div')
        var img = document.createElement('img')
        div.setAttribute('class', 'col-auto bg-dark')
        img.setAttribute('class', 'cover')
        img.setAttribute('onclick', 'info(' + j + ')')
        img.setAttribute("src", initialBooks[j]['cover'])
        div.append(img)
        results.append(div)
    }
}
//info libri presi da API
function infosearched(n) {
    var px = window['innerWidth']
    var info = document.getElementById('info')
    var text = document.getElementById('text')
    text.innerHTML = exported[n]
    if (px < 477) {
        switch (n) {
            case 0:
                info.style.marginTop = "40px"
                break;
            case 1:
                info.style.marginTop = "310px"
                break;
            case 2:
                info.style.marginTop = "580px"
                break;
            case 3:
                info.style.marginTop = "850px"
                break;
            case 4:
                info.style.marginTop = "1120px"
                break;
            case 5:
                info.style.marginTop = "1390px"
                break;
            case 6:
                info.style.marginTop = "1660px"
                break;
            case 7:
                info.style.marginTop = "1930px"
                break;
            case 8:
                info.style.marginTop = "2200px"
                break;
            case 9:
                info.style.marginTop = "2470px"
                break;
            default:
                break;
        }
    }
    else if (px < 768) {
        switch (n) {
            case 0:
            case 1:
                info.style.marginTop = "80px"
                break;
            case 2:
            case 3:
                info.style.marginTop = "390px"
                break;
            case 4:
            case 5:
                info.style.marginTop = "700px"
                break;
            case 6:
            case 7:
                info.style.marginTop = "1010px"
                break;
            case 8:
            case 9:
                info.style.marginTop = "1320px"
                break;
            default:
                break;
        }
    }
    else if (px < 992) {
        switch (n) {
            case 0:
            case 1:
            case 2:
                info.style.marginTop = "80px"
                break;
            case 3:
            case 4:
            case 5:
                info.style.marginTop = "390px"
                break;
            case 6:
            case 7:
            case 8:
                info.style.marginTop = "700px"
                break;
            case 9:
                info.style.marginTop = "1010px"
                break;
            default:
                break;
        }
    }
    else if (px < 1200) {
        switch (n) {
            case 0:
            case 1:
            case 2:
            case 3:
                info.style.marginTop = "80px"
                break;
            case 4:
            case 5:
            case 6:
            case 7:
                info.style.marginTop = "390px"
                break;
            case 8:
            case 9:
                info.style.marginTop = "700px"
                break;
            default:
                break;
        }
    }
    else if (px >= 1200) {
        switch (n) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                info.style.marginTop = "80px"
                break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                info.style.marginTop = "390px"
                break;
            default:
                break;
        }
    }
    info.style.display = 'flex'
    text.onclick = function () {
        info.style.display = 'none'
    }
}
//info libri array
function info(n) {
    var px = window['innerWidth']
    var info = document.getElementById('info')
    var text = document.getElementById('text')
    text.innerHTML = "<p>Titolo: <b>" + initialBooks[n]["titolo"] + "</b></p>" + "<p>Autore:<b> " + initialBooks[n]["autore"]
        + "</b></p><p> Casa Editrice: <b>" + initialBooks[n]["editore"] + "</b></p><p>Data pubblicazione: <b>"
        + initialBooks[n]["annoUscita"]
        + "</b></p><p class='descrizione'>Descrizione: " + initialBooks[n]["descrizione"]
    if (px < 477) {
        switch (n) {
            case 0:
                info.style.marginTop = "40px"
                break;
            case 1:
                info.style.marginTop = "310px"
                break;
            case 2:
                info.style.marginTop = "580px"
                break;
            case 3:
                info.style.marginTop = "850px"
                break;
            case 4:
                info.style.marginTop = "1120px"
                break;
            case 5:
                info.style.marginTop = "1390px"
                break;
            case 6:
                info.style.marginTop = "1660px"
                break;
            case 7:
                info.style.marginTop = "1930px"
                break;
            case 8:
                info.style.marginTop = "2200px"
                break;
            case 9:
                info.style.marginTop = "2470px"
                break;
            default:
                break;
        }
    }
    else if (px < 768) {
        switch (n) {
            case 0:
            case 1:
                info.style.marginTop = "80px"
                break;
            case 2:
            case 3:
                info.style.marginTop = "390px"
                break;
            case 4:
            case 5:
                info.style.marginTop = "700px"
                break;
            case 6:
            case 7:
                info.style.marginTop = "1010px"
                break;
            case 8:
            case 9:
                info.style.marginTop = "1320px"
                break;
            default:
                break;
        }
    }
    else if (px < 992) {
        switch (n) {
            case 0:
            case 1:
            case 2:
                info.style.marginTop = "80px"
                break;
            case 3:
            case 4:
            case 5:
                info.style.marginTop = "390px"
                break;
            case 6:
            case 7:
            case 8:
                info.style.marginTop = "700px"
                break;
            case 9:
                info.style.marginTop = "1010px"
                break;
            default:
                break;
        }
    }
    else if (px < 1200) {
        switch (n) {
            case 0:
            case 1:
            case 2:
            case 3:
                info.style.marginTop = "80px"
                break;
            case 4:
            case 5:
            case 6:
            case 7:
                info.style.marginTop = "390px"
                break;
            case 8:
            case 9:
                info.style.marginTop = "700px"
                break;
            default:
                break;
        }
    }
    else if (px >= 1200) {
        switch (n) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                info.style.marginTop = "80px"
                break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                info.style.marginTop = "390px"
                break;
            default:
                break;
        }
    }
    info.style.display = 'flex'
    text.onclick = function () {
        info.style.display = 'none'
    }
}

//function per visualizzare il div form
function contattaci() {
    var form = document.getElementById('form')
    document.getElementById('container').style.display = 'none'
    document.getElementById('maps').style.display = 'none'
    form.style.display = 'block'
    document.getElementById('aContact').classList.add("active")
    document.getElementById('aMaps').classList.toggle('active', '')
}

//function dell'invia al form
function formContattaci(e) {
    e.preventDefault();
    document.getElementById('form').innerHTML = "Grazie " + document.getElementById('nome').value + " " +
        document.getElementById('cognome').value + " verrai ricontattato al più presto"
    setTimeout(function () { location.reload(true); }, 3000);
}

//function dove siamo
function doveSiamo() {
    var maps = document.getElementById('maps')
    document.getElementById('container').style.display = 'none'
    document.getElementById('form').style.display = 'none'
    maps.style.display = 'block'
    document.getElementById('aMaps').classList.add("active")
    document.getElementById('aContact').classList.toggle('active', '')
}