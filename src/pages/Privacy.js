import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
    return(
        <div className="font-light">
            <p className="text-4xl md:text-6xl mb-5 font-medium uppercase"> 
                INFORMATIVA SULLA PRIVACY
            </p>
            <p>
                Benvenuti sul sito 
                <Link to="/" className="underline"> www.lespromesses.com</Link> 
            </p>

            <div>
                <p className="font-semibold mt-4">
                    Titolare del Trattamento
                </p>
                <p className="">
                    <span className="font-semibold">Celine Beatrice Petit </span>
                    con sede legale in via Buonarroti, 28 – 20900 – Monza (MB), P. IVA 04165690241 (di seguito, “LES PROMESSES”) tutela la riservatezza dei dati personali degli utenti e garantisce la protezione necessaria da ogni rischio di violazione.
                </p>
            </div>

            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium">LA POLICY</p>
                <p>
                    LES PROMESSES rispetta il diritto degli utenti di essere informati sulla raccolta e sul trattamento dei propri dati personali. Per domande o esigenze legate alla privacy, contattaci all’indirizzo:
                    <a href="mailto:info@lespromesses.com"> info@lespromesses.com</a>
                </p>
            </div>

            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium">RESPONSABILE DELLA PROTEZIONE DEI DATI (DPO)</p>
                <p>
                     LES PROMESSES non ha nominato un Responsabile della Protezione dei Dati (DPO), ma è disponibile per ogni chiarimento riguardo il trattamento dei dati.
                </p>
            </div>

            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium">DATI PERSONALI TRATTATI</p>
                <p>
                    I dati personali trattati includono quelli forniti dagli utenti al momento dell'acquisto e quelli raccolti durante la navigazione, come:
                </p>
                <ul className="ml-3 md:ml-5">
                    <li className="list-disc" >Dati anagrafici (nome, cognome, indirizzo)</li>
                    <li className="list-disc" >Dati di contatto (email, numero di telefono)</li>
                    <li className="list-disc" >Dati di pagamento</li>
                    <li className="list-disc" >Dati di navigazione e cookie</li>
                </ul>
            </div>
            
            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium">FINALITÀ DEL TRATTAMENTO</p>
                <p>
                    I dati sono raccolti e trattati per le seguenti finalità:
                </p>
                <ul className="ml-3 md:ml-5">
                    <li className="list-disc" >Esecuzione di contratti e acquisti</li>
                    <li className="list-disc" >Invio di newsletter e comunicazioni commerciali</li>
                    <li className="list-disc" >Assistenza clienti</li>
                </ul>
            </div>

            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium">BASE GIURIDICA DEL TRATTAMENTO</p>
                <p>
                    Il trattamento dei dati personali si basa su:
                </p>
                <ul className="ml-3 md:ml-5">
                    <li className="list-disc" >Esecuzione di un contratto</li>
                    <li className="list-disc" >Consenso dell'utente</li>
                    <li className="list-disc" >Obblighi legali</li>
                </ul>
            </div>

            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium">CONSERVAZIONE DEI DATI</p>
                <p>
                    I dati saranno conservati fino a quando necessari per le finalità per cui sono stati raccolti. In caso di richiesta di cancellazione, procederemo tempestivamente.
                </p>
            </div>

            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium">DIRITTI DELL'INTERESSATO</p>
                <p>
                    Gli utenti hanno il diritto di:
                </p>
                <ul className="ml-3 md:ml-5">
                    <li className="list-disc" >Accedere ai propri dati</li>
                    <li className="list-disc" >Richiedere la rettifica o la cancellazione</li>
                    <li className="list-disc" >Opporsi al trattamento dei dati</li>
                </ul>
                Per esercitare i diritti, contattaci a 
                <a href="mailto:info@lespromesses.com"> info@lespromesses.com</a>
                .
            </div>
            
            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium">TRASFERIMENTO DEI DATI</p>
                <p>
                    Non trasferiremo i dati personali a paesi terzi o organizzazioni internazionali, salvo diversa comunicazione.
                </p>
            </div>
            
            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium">MISURE DI SICUREZZA</p>
                <p>
                    Adottiamo misure di sicurezza appropriate per proteggere i dati personali da accessi non autorizzati o trattamenti illeciti.
                </p>
            </div>

            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium">MODIFICHE ALL'INFORMATIVA</p>
                <p>
                    LES PROMESSES si riserva il diritto di modificare questa informativa. Le eventuali modifiche saranno pubblicate su questa pagina.
                </p>
            </div>
            
            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium">RECLAMO ALL’AUTORITÀ COMPETENTE</p>
                <p>
                    In caso di violazione dei diritti, è possibile presentare un reclamo all'Autorità Garante per la Protezione dei Dati Personali.
                </p>
            </div>
            
            <div className="mt-2 md:mt-10">
                <p className="text-2xl md:text-4xl font-medium">CONTATTI</p>
                <p>
                    Per ulteriori informazioni, contattaci all'indirizzo:
                    <a href="mailto:info@lespromesses.com"> info@lespromesses.com</a> 
                </p>
            </div>
        </div>
    )
}

export default Privacy