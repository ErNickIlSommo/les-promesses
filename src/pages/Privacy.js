import React from "react";
import { Link } from "react-router-dom";

const Privacy = ({ t }) => {
  const {
    title,
    welcome,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section9,
    section10,
    section11,
    section12,
    section13,
  } = t("privacy");
  return (
    // <div className="font-light">
    //     <p className="text-4xl md:text-6xl mb-5 font-medium uppercase">
    //         {title}
    //     </p>
    //     <p>
    //         {welcome}
    //         <Link to="/" className="underline"> www.lespromesses.com</Link>
    //     </p>

    //     <div>
    //         <p className="font-semibold mt-4">
    //             {section1.line1}
    //         </p>
    //         <p className="">
    //             <span className="font-semibold">Celine Beatrice Petit </span>
    //             {section1.line2}
    //         </p>
    //     </div>

    //     <div className="mt-2 md:mt-10">
    //         <p className="text-2xl md:text-4xl font-medium uppercase">{section2.line1}</p>
    //         <p>
    //             {section2.line2}
    //             <a href="mailto:info@lespromesses.com"> info@lespromesses.com</a>
    //         </p>
    //     </div>

    //     <div className="mt-2 md:mt-10">
    //         <p className="text-2xl md:text-4xl font-medium uppercase">{section3.line1}</p>
    //         <p>{section3.line2}</p>
    //     </div>

    //     <div className="mt-2 md:mt-10">
    //         <p className="text-2xl md:text-4xl font-medium uppercase">{section4.line1}</p>
    //         <p>{section4.line2}</p>
    //         <ul className="ml-3 md:ml-5">
    //             <li className="list-disc" >{section4.line3}</li>
    //             <li className="list-disc" >{section4.line4}</li>
    //             <li className="list-disc" >{section4.line5}</li>
    //             <li className="list-disc" >{section4.line6}</li>
    //         </ul>
    //     </div>

    //     <div className="mt-2 md:mt-10">
    //         <p className="text-2xl md:text-4xl font-medium uppercase">{section5.line1}</p>
    //         <p>{section5.line2}</p>
    //         <ul className="ml-3 md:ml-5">
    //             <li className="list-disc" >{section5.line3}</li>
    //             <li className="list-disc" >{section5.line4}</li>
    //             <li className="list-disc" >{section5.line5}</li>
    //         </ul>
    //     </div>

    //     <div className="mt-2 md:mt-10">
    //         <p className="text-2xl md:text-4xl font-medium uppercase">{section6.line1}</p>
    //         <p>{section6.line2}</p>
    //         <ul className="ml-3 md:ml-5">
    //             <li className="list-disc" >{section6.line3}</li>
    //             <li className="list-disc" >{section6.line4}</li>
    //             <li className="list-disc" >{section6.line5}</li>
    //         </ul>
    //     </div>

    //     <div className="mt-2 md:mt-10">
    //         <p className="text-2xl md:text-4xl font-medium uppercase">{section7.line1}</p>
    //         <p>{section7.line2}</p>
    //     </div>

    //     <div className="mt-2 md:mt-10">
    //         <p className="text-2xl md:text-4xl font-medium uppercase">{section8.line1}</p>
    //         <p>{section8.line2}</p>
    //         <ul className="ml-3 md:ml-5">
    //             <li className="list-disc" >{section8.line3}</li>
    //             <li className="list-disc" >{section8.line4}</li>
    //             <li className="list-disc" >{section8.line5}</li>
    //         </ul>
    //         {section8.line6}
    //         <a href="mailto:info@lespromesses.com"> info@lespromesses.com</a>
    //         .
    //     </div>

    //     <div className="mt-2 md:mt-10">
    //         <p className="text-2xl md:text-4xl font-medium uppercase">{section9.line1}</p>
    //         <p>{section9.line2}</p>
    //     </div>

    //     <div className="mt-2 md:mt-10">
    //         <p className="text-2xl md:text-4xl font-medium uppercase">{section10.line1}</p>
    //         <p>{section10.line2}</p>
    //     </div>

    //     <div className="mt-2 md:mt-10">
    //         <p className="text-2xl md:text-4xl font-medium">{section11.line1}</p>
    //         <p>{section11.line2}</p>
    //     </div>

    //     <div className="mt-2 md:mt-10">
    //         <p className="text-2xl md:text-4xl font-medium">{section12.line1}</p>
    //         <p>{section12.line2}</p>
    //     </div>

    //     <div className="mt-2 md:mt-10">
    //         <p className="text-2xl md:text-4xl font-medium">{section13.line1}</p>
    //         <p>
    //             {section13.line2}
    //             <a href="mailto:info@lespromesses.com"> info@lespromesses.com</a>
    //         </p>
    //     </div>
    // </div>
    <div className="font-light">
      <div className="general-info">
        <p className="uppercase text-2xl md:text-4xl mt-2 mb-5 font-medium">
          1. Informazioni generali
        </p>
        <p>
          In adempimento alle previsioni degli artt. 12 e 13 del Regolamento
          (UE) 2016/679 (Regolamento generale sulla protezione dei dati – “
          <span className="font-bold">GDPR</span>”), si descrivono in questa
          pagina i trattamenti dei dati personali effettuati dal Titolare del
          trattamento, come definito al punto 2 che segue, nei confronti degli
          interessati coinvolti nei trattamenti elencati di seguito (“
          <span className="font-bold">interessati”</span>). L’informativa del
          presente sito web non si riferisce ad altri trattamenti effettuati in
          seguito alla navigazione di siti internet raggiunti attraverso link
          eventualmente presenti al suo interno.
        </p>
      </div>
      <div className="data-controller mt-4">
        <p className="uppercase text-2xl md:text-4xl mt-2 mb-5 font-medium">
          2. Titolare del trattamento
        </p>
        <p>
          Il Titolare del trattamento è Celine Beatrice Petit (di seguito, “LES
          PROMESSES”), con sede legale in via Buonarroti, 28 – 20900 – Monza
          (MB), telefono: [ ], e-mail:{" "}
          <a href="mailto:info@lespromesses.com">info@lespromesses.com</a>
        </p>
      </div>
      <div className="data-protection-officier mt-4">
        <p className="uppercase text-2xl md:text-4xl mt-2 mb-5 font-medium">
          3. RESPONSABILE DELLA PROTEZIONE DEI DATI
        </p>
        <p>
          Il Titolare del trattamento non ha designato un Responsabile della
          protezione dei dati (DPO), in quanto non rientra nei termini di quanto
          previsto dagli artt. 37-39 GDPR 2016/679
        </p>
      </div>
      <div className="types-of-processing mt-4">
        <p className="uppercase text-2xl md:text-4xl mt-2 mb-5 font-medium">
          4. TIPOLOGIE DI TRATTAMENTO
        </p>
        <div className="mt-3 types-of-processing-contact-request-data">
          <p className="uppercase text-xl">
            4.1 DATI PER RICHIESTA DI CONTATTO
          </p>
          <p>
            La gestione di richieste di contatto, proposte attraverso la
            compilazione di form presenti su questo sito internet comporta
            l’acquisizione di dati personali dell’interessato/utente.{" "}
          </p>
          <ul className="ml-3 md:ml-5">
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Finalità del trattamento (art.13, par. 1, lett. c), del GDPR):
              </span>
              I dati personali raccolti vengono utilizzati all’esclusivo fine di
              dare riscontro alle richieste inviate, e comunicare con
              l’interessato nelle eventuali fasi successive. La comunicazione di
              alcuni dati è obbligatoria e segnalata attraverso appositi
              asterischi.
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Categorie di dati personali
              </span>
              <ul className="ml-3 md:ml-5">
                <li className="list-disc my-1">dati anagrafici (nome)</li>
                <li className="list-disc my-1">
                  dati di contatto (indirizzo e-mail),
                </li>
                <li className="list-disc my-1">
                  eventuali altri dati/informazioni inseriti nella richiesta.
                </li>
              </ul>
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Liceità del trattamento (art.13, par. 1, lett. c), del GDPR)
              </span>
              Il trattamento viene effettuato al fine di eseguire un’attività
              richiesta dall’interessato (art. 6, par. 1, lett. b), del GDPR).
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Ambito di comunicazione (art.13, par. 1, lett. e) e f), del
                GDPR)
              </span>
              I dati sono trattati esclusivamente da personale autorizzato,
              istruito al trattamento e adeguatamente formato. Potrebbero
              inoltre essere trattati da altri soggetti, coinvolti dal Titolare
              per finalità connesse al trattamento stesso (supporto alla
              gestione del sito internet; società di consulenza): tali soggetti
              hanno il ruolo di responsabili del trattamento e hanno
              sottoscritto con il Titolare specifici accordi ai sensi dell’art.
              28, par. 3, GDPR. In ogni caso, i dati personali raccolti non
              saranno comunicati a terzi, ovvero diffusi o trasferiti al di
              fuori dell’Unione europea/Spazio economico europeo.
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Modalità del trattamento (Considerando 39, GDPR)
              </span>
              I dati personali sono trattati in modo lecito, corretto e
              trasparente, nel rispetto dei principi previsti dalla normativa
              vigente. Il trattamento dei dati personali avviene attraverso
              strumenti informatici e automatizzati. Tenuto conto della natura e
              delle caratteristiche del trattamento, il Titolare ha adottato
              misure tecniche e organizzative di sicurezza finalizzate a
              limitare o escludere i rischi di perdita dei dati, di eventuale
              uso illecito o non corretto, o di accesso non autorizzato.
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Periodo di conservazione dei dati (art.13, par. 2, lett. a), del
                GDPR)
              </span>
              I dati personali vengono mantenuti per il tempo necessario per la
              gestione della relazione con il richiedente.
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Natura del conferimento (art.13, par. 2, lett. e), del GDPR)
              </span>
              I dati sono conferiti facoltativamente dagli interessati.
              Tuttavia, il loro mancato conferimento potrà pregiudicare la
              gestione della richiesta e l’invio di riscontro.
            </li>
          </ul>
        </div>
        <div className="mt-3 types-of-processing-contact-customers-suppliers-contact-persons">
          <p className="uppercase text-xl">
            4.2 CLIENTI E FORNITORI E RELATIVI REFERENTI
          </p>
          <p>
            Nell’ambito dello svolgimento di attività connesse a rapporti
            contrattuali intercorrenti con clienti e fornitori, possono essere
            trattati dati personali di tali soggetti.
          </p>
          <ul className="ml-3 md:ml-5">
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Finalità del trattamento (art.13, par. 1, lett. c), del GDPR)
              </span>
              I dati vengono trattati al fine di
              <ul className="ml-3 md:ml-5">
                <li className="list-disc my-1">
                  concludere rapporti contrattuali/professionali,{" "}
                </li>
                <li className="list-disc my-1">
                  adempiere a obblighi precontrattuali, contrattuali e normativi
                  connessi ai rapporti in essere o da instaurare, nonché gestire
                  le necessarie comunicazioni a ciò correlate;
                </li>
                <li className="list-disc my-1">
                  scambiare comunicazioni in relazione al rapporto contrattuale
                  instaurato tra le parti;
                </li>
                <li className="list-disc my-1">
                  adempiere agli obblighi previsti da leggi, regolamenti,
                  normative europee o ordini dell’Autorità;
                </li>
                <li className="list-disc my-1">
                  esercitare legittimi interessi o diritti del Titolare (ad
                  esempio: diritto di difesa in sede giudiziaria; tutela delle
                  posizioni creditorie; ordinarie esigenze interne di tipo
                  operativo, gestionale e contabile).
                </li>
              </ul>
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Categorie di dati personali
              </span>
              <ul className="ml-3 md:ml-5">
                <li className="list-disc my-1">
                  dati anagrafici (nome, cognome, codice fiscale/partita IVA);
                </li>
                <li className="list-disc my-1">
                  dati di contatto (numero di telefono; indirizzo e-mail/PEC;
                  indirizzi di domicilio/sede legale);
                </li>
                <li className="list-disc my-1">
                  dati relativi alla sfera professionale (dati relativi
                  all’azienda per cui l’interessato opera);
                </li>
                <li className="list-disc my-1">dati bancari e di pagamento.</li>
              </ul>
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Liceità del trattamento (art.13, par. 1, lett. c), del GDPR)
              </span>
              Le attività di trattamento per tali finalità sono compiute sulla
              scorta di varie condizioni di liceità: per l’adempimento di
              contratti o di misure precontrattuali (art. 6, par. 1, lett. b),
              del GDPR); per l’adempimento di obblighi legali (art. 6, par, 1,
              lett. c), del GDPR); per il perseguimento di legittimi interessi
              del Titolare del trattamento (es: esercizio o difesa di diritti in
              sede giudiziale o stragiudiziale) (art. 6, par. 1, lett. f), del
              GDPR).
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Ambito di comunicazione (art.13, par. 1, lett. e) e f), del
                GDPR)
              </span>
              I dati sono trattati esclusivamente da personale autorizzato e
              istruito al trattamento, e adeguatamente formato. Potrebbero
              inoltre essere trattati da altri soggetti, coinvolti dal Titolare
              per finalità connesse al trattamento stesso (es: consulenti
              tributari/fiscali; studi legali; enti pubblici e autorità
              competenti; ecc.). In alcuni casi, tali soggetti hanno il ruolo di
              responsabili del trattamento e hanno sottoscritto con il Titolare
              specifici accordi ai sensi dell’art. 28, par. 3, GDPR. In casi
              specifici (es: indagini e accertamenti), i dati personali potranno
              essere messe a disposizione delle autorità competenti. In ogni
              caso, i dati personali non saranno comunicati a terzi, ovvero
              diffusi o trasferiti al di fuori dell’Unione europea/Spazio
              economico europeo.
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Modalità del trattamento (Considerando 39, GDPR)
              </span>
              I dati personali sono trattati in modo lecito, corretto e
              trasparente, nel rispetto dei principi previsti dalla normativa
              vigente. Il relativo trattamento avviene attraverso strumenti
              informatici e cartacei. Tenuto conto della natura e delle
              caratteristiche del trattamento, il Titolare ha adottato misure
              tecniche e organizzative di sicurezza finalizzate a limitare o
              escludere i rischi di perdita dei dati, di eventuale uso illecito
              o non corretto, o di accesso non autorizzato.
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Periodo di conservazione dei dati (art.13, par. 2, lett. a), del
                GDPR)
              </span>
              I dati sono conservati per il tempo strettamente necessario per
              l’adempimento di obblighi contrattuali o normativi.
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Natura del conferimento (art.13, par. 2, lett. e), del GDPR)
              </span>
              Il conferimento dei dati è obbligatorio per l’adempimento delle
              finalità sopra descritte
            </li>
          </ul>
        </div>
        <div className="mt-3 types-of-processing-navigation-data">
          <p className="uppercase text-xl">4.3 DATI di navigazione</p>
          <p>
            I sistemi informatici e le procedure software preposte al
            funzionamento di questo sito web acquisiscono, nel corso del loro
            normale esercizio, alcuni dati personali la cui trasmissione è
            implicita nell’uso dei protocolli di comunicazione di Internet. In
            questa categoria di dati rientrano gli indirizzi IP o i nomi a
            dominio dei computer utilizzati dagli utenti che si connettono al
            sito, gli indirizzi in notazione URI (Uniform Resource Identifier)
            delle risorse richieste, l’orario della richiesta, il metodo
            utilizzato nel sottoporre la richiesta al server, la dimensione del
            file ottenuto in risposta, il codice numerico indicante lo stato
            della risposta data dal server (buon fine, errore, ecc.) e altri
            parametri relativi al sistema operativo e all’ambiente informatico
            dell’utente.
          </p>
          <ul className="ml-3 md:ml-5">
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Finalità del trattamento (art.13, par. 1, lett. c), del GDPR)
              </span>
              Questi dati vengono utilizzati al solo fine di ricavare
              informazioni statistiche sull’uso del sito e per controllarne il
              corretto funzionamento. I dati potrebbero inoltre essere
              utilizzati per l’accertamento di responsabilità in caso di
              ipotetici reati informatici ai danni del sito (legittimi interessi
              del titolare).
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Liceità del trattamento (art.13, par. 1, lett. c), del GDPR)
              </span>
              Il trattamento è necessario per il perseguimento di legittimi
              interessi del Titolare del trattamento alla sicurezza del proprio
              sistema informativo, e alla valutazione dell’uso del sito internet
              e del relativo funzionamento (art. 6, par. 1, lett. f), del GDPR).
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Ambito di comunicazione (art.13, par. 1, lett. e) e f), del
                GDPR)
              </span>
              I dati sono trattati esclusivamente da personale autorizzato e
              istruito al trattamento, e adeguatamente formato. Potrebbero
              inoltre essere trattati da altri soggetti, coinvolti dal Titolare
              per finalità connesse al trattamento stesso (es: supporto alla
              gestione dei sistemi informativi; del presente sito internet). In
              alcuni casi, tali soggetti hanno il ruolo di responsabili del
              trattamento e hanno sottoscritto con il Titolare specifici accordi
              ai sensi dell’art. 28, par. 3, GDPR. I dati potrebbero essere
              comunicati alle autorità competenti, in casi specifici. In ogni
              caso, i dati personali non saranno comunicati a terzi, ovvero
              diffusi o trasferiti al di fuori dell’Unione europea/Spazio
              economico europeo.
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Modalità del trattamento (Considerando 39, GDPR)
              </span>
              I dati personali sono trattati in modo lecito, corretto e
              trasparente, nel rispetto dei principi previsti dalla normativa
              vigente. Il relativo trattamento avviene attraverso strumenti
              informatici e automatizzati. Tenuto conto della natura e delle
              caratteristiche del trattamento, il Titolare ha adottato misure
              tecniche e organizzative di sicurezza finalizzate a limitare o
              escludere i rischi di perdita dei dati, di eventuale uso illecito
              o non corretto, o di accesso non autorizzato.
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Periodo di conservazione dei dati (art.13, par. 2, lett. a), del
                GDPR)
              </span>
              I dati sono di norma conservati per l’espletamento delle finalità
              sopra indicate, per brevi periodi di tempo, a eccezione di
              eventuali prolungamenti connessi ad attività di indagine.
            </li>
            <li className="list-disc my-1">
              <span className="font-bold mr-2">
                Natura del conferimento (art.13, par. 2, lett. e), del GDPR)
              </span>
              Il conferimento dei dati è implicito nell’accesso e nella
              navigazione del sito internet.
            </li>
          </ul>
        </div>
        <div className="mt-3 types-of-processing-navigation-data">
          <p className="uppercase text-xl">4.4 COOKIE</p>
          <p>
            Per ulteriori informazioni generali sui cookie e sulla loro
            abilitazione e disabilitazione, consultare il documento
            <Link className="font-medium mx-1 underline" to="/cookie">
              Cookie Policy
            </Link>
          </p>
        </div>
      </div>
      <div className="rights-data-subject">
        <p className="uppercase text-2xl md:text-4xl mt-2 mb-5 font-medium">
          5. DIRITTI DELL’INTERESSATO (GDPR artt. 15-22)
        </p>
        <p>
          In ogni momento, l’interessato potrà esercitare i seguenti diritti:
        </p>
        <ul className="ml-3 md:ml-5">
          <li className="list-disc my-1">
            chiedere la conferma della sussistenza di attività di trattamento di
            propri dati personali.
          </li>
          <li className="list-disc my-1">
            ottenere le indicazioni circa le finalità del trattamento, le
            categorie dei dati personali, i destinatari o le categorie di
            destinatari a cui i dati personali sono stati o saranno comunicati e
            il periodo di conservazione (o, se non sia possibile, l’indicazione
            dei criteri che consentano di determinarlo).
          </li>
          <li className="list-disc my-1">
            ottenere la rettifica e la cancellazione dei dati.
          </li>
          <li className="list-disc my-1">
            ottenere, alle condizioni e nei casi previsti dalla normativa
            vigente, la limitazione del trattamento.
          </li>
          <li className="list-disc my-1">
            ottenere, nei casi previsti dalla normativa vigente, la portabilità
            dei dati, ossia riceverli da un titolare del trattamento, in un
            formato strutturato, di uso comune e leggibile da dispositivo
            automatico, anche al fine di trasmetterli ad altro titolare del
            trattamento senza impedimenti.
          </li>
          <li className="list-disc my-1">
            nei casi previsti dalla normativa vigente, opporsi al trattamento in
            qualsiasi momento ed anche nel caso di trattamento per finalità di
            marketing diretto.
          </li>
          <li className="list-disc my-1">
            proporre un reclamo al Garante per la protezione dei dati personali,
            secondo le modalità previste da questa autorità.
          </li>
        </ul>
        <p>
          Le richieste vanno rivolte al Titolare del trattamento scrivendo
          all’indirizzo email{" "}
          <a href="mailto:info@lespromesses.com"> info@lespromesses.com</a> per
          i trattamenti descritti.
        </p>
        <p>Questo documento informativo è aggiornato al 21/10/24</p>
      </div>
    </div>
  );
};

export default Privacy;
