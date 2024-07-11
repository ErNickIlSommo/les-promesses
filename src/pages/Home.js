import React from "react";

import video from '../images/LES_PROMESSES.mp4'

import no_collections_1 from '../images/no_collections/1.png'
import no_collections_2 from '../images/no_collections/2.jpg'
import no_collections_3 from '../images/no_collections/3.jpg'
import celine from '../images/celine.jpeg'

import conosciamoci from '../images/conosciamoci/1.jpg'
// import conosciamociMobile from '../images/conosciamoci/DSC00663.jpg'
import conosciamociMobile from '../images/conosciamoci/2.jpg'

import provaLaTela from '../images/prova_la_tela/2.jpg'

import abito1 from '../images/indossa_il_tuo_abito/1.jpg'
import abito2 from '../images/indossa_il_tuo_abito/2.jpg'
import abito3 from '../images/indossa_il_tuo_abito/3.jpg'

import contatto1 from '../images/contatto/form1.png'
import contatto2 from '../images/contatto/form2.png'

const Home = () => {
    return(
        <div id="video-lp" className="Home flex flex-col gap-10 md:gap-36">
            {/* EPIGRAMMA */}
            <div className="flex flex-col justify-center items-center font-light mt-5">
                    <p className="text-2xl md:text-4xl my-3">CREIAMO DA ZERO IL TUO ABITO DA SPOSA, DAL DISEGNO AL VESTITO.</p>
                <div className="w-full h-[64vh] md:h-[70vh]">
                    <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* NO-COLLECTIONS */}
            <div className="relative font-light">
                <div className=" w-full h-[800px] absolute z-20 flex justify-center items-center">
                    <div className=" w-full md:w-3/5 md:bg-[#D9D8D7] text-center text-white md:text-black p-6 py-10">
                        {/* <p className="text-7xl">NO COLLEZIONI,</p> */}
                        <p className="text-4xl md:text-7xl">NO COLLEZIONI,</p>
                        <p className="text-4xl md:text-7xl pb-2 font-medium">SOLO PEZZI UNICI.</p>
                        <p className="text-base px-10 md:px-20 lg:px-24">
                            Ci immergiamo nei tuoi sogni, ed ascoltiamo la tua storia. Ogni singolo dettaglio
                            verrà personalizzato per far emergere la tua unicità.
                            La nostra creatività non ha
                            confini, e ci impegneremo con passione finché il tuo abito non sarà l'espressione
                            perfetta di te stessa.
                        </p>
                    </div>
                </div>
                <div className="w-full h-4/5 flex flex-col md:flex-row justify-between align-middle ">
                    <div className="h-[800px] hidden md:block md:w-[30%]"><img className="h-full w-full object-cover" src={no_collections_1} alt="" /></div>
                    <div className="h-[800px] hidden md:block md:w-[30%]"><img className="h-full w-full object-cover" src={no_collections_2} alt="" /></div>
                    <div className="bg-black h-[800px] w-full md:w-[30%]"><img className="h-full w-full object-cover opacity-50 md:opacity-100" src={no_collections_3} alt="" /></div>
                </div>
            </div>

            {/* CONOSCIAMOCI */}
            <div className="w-full flex flex-col lg:flex-row font-light">
                <div className="w-full lg:w-1/2 text-left pb-10 pe-6">
                    <p className="text-4xl md:text-7xl">IL PRIMO INCONTRO,</p>
                    <p className="text-4xl md:text-7xl pb-2 font-medium">PER CONOSCERCI.</p>
                    {/* <p className="text-4xl md:text-7xl uppercase">Conosciamoci.</p> */}
                    <p className="text-base pb-10 pe-6">
                        In questa prima fase, potrai descriverci le idee che avevi in mente per il tuo abito, 
                        e lo stile che ti fa sentire a tuo agio. 
                        Avrai una consulenza completa sulla tua silhouette e su quali 
                        materiali orientarci per esprimere ciò che desideri,
                        considerando anche la location e lo stile complessivo
                        del tuo matrimonio.
                    </p>
                    <div className="w-3/4 lg:w-1/2">
                        <div className="mb-10">
                            <p className="font-semibold underline">Dove siete?</p>
                            <p className="mb-2.5 italic">
                                Il nostro Atelier si trova a Monza, alle porte di Milano. 
                                In alternativa, possiamo organizzare una prima videocall (parliamo italiano, francese e inglese)</p>
                        </div>
                        <div className="mb-10">
                            <p className="font-semibold underline">Potrò provare degli abiti?</p>
                            <p className="mb-2.5 italic">Certo! Si tratta di prototipi realizzati per aiutarti a trovare idee e ispirazioni, toccare con mano i materiali e capire cosa può fare al caso tuo</p>
                        </div>
                        <div className="mb-10">
                            <p className="font-semibold underline">Se al termine dell'incontro non fossi convinta?</p>
                            <p className="mb-2.5 italic">
                                Nessun problema. Ci ha fatto piacere conoscerti, aver bevuto insieme 
                                un aperitivo e averti dato alcuni spunti interessanti
                            </p>
                        </div>
                        <div className="mb-2">
                            <p className="font-semibold underline">Se decidessi di proseguire?</p>
                            <p className="mb-2.5 italic">
                            Siamo contenti di poter cominciare insieme questa esperienza! 
                            Inizieremo a condividere disegni, bozze e proposte per preparare la tua tela
                            </p>
                        </div>

                    </div>
                </div>

                <div className="hidden h-full lg:w-1/2 lg:flex items-center"><img src={conosciamoci} /></div>
                <div className="lg:hidden w-full flex items-center"><img src={conosciamociMobile} /></div>
            </div>

            {/* PROVA LA TELA */}
            <div className="w-full flex flex-col lg:flex-row font-light">
                <div className="hidden h-full lg:w-1/2 lg:flex items-center"><img src={provaLaTela} /></div>
                {/* <div className="lg:hidden w-full flex items-center"><img src={conosciamociMobile} /></div> */}

                <div className="w-full lg:w-1/2 text-left pb-10 ps-6">
                    <p className="text-4xl md:text-7xl">PROVA LA TELA,</p>
                    <p className="text-4xl md:text-7xl pb-2 font-medium">QUI IN ATELIER.</p>
                    <p className="text-base pb-10 pe-6">
                        L'idea inizia a prendere forma.
                        Dopo qualche settimana indosserai la tua tela, cioè il primo prototipo che rispecchierà
                        le forme, le misure e le idee finora condivise.
                        Insieme andremo poi a definire tutto il resto: tessuto, ricami, accessori, fino all’ultimo dettaglio.
                    </p>
                    <div className="w-3/4 lg:w-1/2">
                        <div className="mb-10">
                            <p className="font-semibold underline">Se volessi aggiungere o modificare degli elementi?</p>
                            <p className="mb-2.5 italic">tutto si può modificare, aggiungere o togliere. Il tuo abito dovrà avere tutto ciò che serve</p>
                        </div>
                        <div className="mb-10">
                            <p className="font-semibold underline">Posso avere un abito in seta italiana dipinta a mano?</p>
                            <p className="mb-2.5 italic">Certo!</p>
                        </div>
                        <div className="mb-10">
                            <p className="font-semibold underline">Posso avere pizzi francesi di alta moda sviluppati ad hoc?</p>
                            <p className="mb-2.5 italic">Certo!</p>
                        </div>
                        <div className="mb-2">
                            <p className="font-semibold underline">
                                Posso avere anche ricami a mano personalizzati?
                            </p>
                            <p className="mb-2.5 italic">
                                Certo, tutto si può fare. Il tuo sarà un vero abito artigianale su misura e Made in Italy
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* INDOSSA IL TUO ABITO */}
            <div className="font-light">
                <p className="text-3xl md:text-7xl text-end mb-5 md:mb-10">INDOSSA IL TUO ABITO.</p>
                <div className="flex flex-col-reverse md:flex-row gap-10">
                    <div className="w-full md:w-1/4">
                        <div className="mb-10">
                            <p className="font-semibold underline">Quanto tempo dovrò aspettare per avere il mio abito?</p>
                            <p className="mb-2.5 italic">3 mesi. Per alcune lavorazioni molto particolari o per modifiche dell'ultimo minuto, tuttavia, potrebbe servire qualche settimana in più</p>
                        </div>
                        <div className="mb-10">
                            <p className="font-semibold underline">Se l'abito che vorrei dovesse costare troppo rispetto a quanto preventivato?</p>
                            <p className="mb-2.5 italic">Siamo consapevoli che, a volte, i nostri desideri devono fermarsi dinanzi a costi proibitivi. Noi siamo qui per aiutarti, guidandoti dall’inizio alla fine in ogni singola scelta, proponendo sempre valide alternative che ti permettano di non scendere a compromessi con il tuo sogno</p>
                        </div>
                        <div className="mb-10">
                            <p className="font-semibold underline">Indicativamente, a quanto ammonta il costo?</p>
                            <p className="mb-2.5 italic">Dipende. La scelta del tipo di materiali, tessuti, accessori, o di specifiche lavorazioni può incidere sensibilmente sul prezzo finale. Possiamo anticiparti che la maggior parte delle nostre clienti ha realizzato il proprio abito ad una cifra complessiva compresa fra i 5 e i 7k</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4"><img src={abito1} className="h-full object-cover"/></div>
                    <div className="w-full hidden md:block md:w-1/4"><img src={abito2} className="h-full object-cover"/></div>
                    <div className="w-full hidden md:block md:w-1/4"><img src={abito3} className="h-full object-cover"/></div>
                </div>
            </div>

            {/* CHI SIAMO */}
            <div id="who" className="w-full flex flex-col lg:flex-row font-light -mt-36 pt-36 md:-mt-32 md:pt-32">
                <div className="w-full lg:w-1/3 text-left pb-10 pe-6">
                    <p className="text-4xl md:text-6xl uppercase text-end">mi presento</p>
                    {/* <p className="text-4xl md:text-7xl pb-2 font-medium text-end uppercase">io sono celine.</p> */}
                </div>
                <div className="h-full lg:w-1/3">
                    <img src={celine}/>
                </div>
                <div className="w-full h-full flex align-bottom lg:w-1/3 pb-10 ps-6">
                    <p className="text-base mt-32 pb-10 pe-6">
                    Sono Celine, da 20 anni lavoro nel mondo della moda, Haute Couture e Pret à Porter, prima a Parigi, poi a Milano.
                    <br/>In questi anni ho avuto il privilegio di lavorare a fianco di grandi artisti che mi hanno insegnato come la bellezza possa esprimersi dall'abito che indossi, vestendo celebrità internazionali per eventi speciali e preparando sfilate per l'Alta Moda.
                    <br/><br/>Insieme a Michele, il mio partner, abbiamo pensato fosse giunto il momento di mettere a disposizione questo bagaglio di esperienze e competenze a chiunque l'avesse desiderato. Offrire un servizio di Alta Moda per una donna che ha sempre sognato il proprio abito, pensato e creato.
                    <br/><br/> Se hai sempre desiderato avere una tua creazione, unica, artigianale e su misura, vienici a trovare e parliamone assieme.
                    </p>
                </div> 
            </div>

            {/* FORM */}
            <div  data-type="subscription" id="form" className="w-full flex flex-col lg:flex-row font-light -mt-36 pt-36 md:-mt-32 md:pt-32">
                <div className="hidden h-full lg:w-1/3 lg:flex items-center"><img src={contatto1}/></div>
                <div className="w-full h-full lg:w-1/3 items-center">
                    <p className="text-4xl md:text-7xl uppercase text-center">mettiamoci</p>
                    <p className="text-4xl md:text-7xl pb-2 font-medium text-center uppercase">in contatto</p>
                    <form id="sib-form" method="POST" action="https://217ddafd.sibforms.com/serve/MUIFANAFS4E_YRtmxKHBueYSx7KUIq2JAok0uboMRi7WQArR-KAtFEpzbulcUs0It_RLIC8QYjkF0RtXoHmrKkv7mZdBFqrMYe8UgpZ72AH2nQAxCpUvBffwS0e_dgabBgaaBbP4NxL868kX10p8DX99YYJfVWyXYv7idd8KNnmFe3Vt1et56SrMj3T9X7IaHH-Q0chvHS7S20Td" className="w-full p-8 space-y-4">
                        <div>
                            <label className="sr-only">Name</label>
                            <input
                            type="name"
                            id="NOME" 
                            name="NOME"
                            className="w-full bg-transparent rounded-sm border border-[#8E969B] p-4 pe-12 text-sm"
                            placeholder="Inserisci il tuo nome"
                            />
                        </div>
                        <div>
                            <label className="sr-only">Email</label>
                            <input
                            type="email"
                            id="EMAIL" 
                            name="EMAIL"
                            className="w-full bg-transparent rounded-sm border border-[#8E969B] p-4 pe-12 text-sm"
                            placeholder="Inserisci la tua email"
                            />
                        </div>
                        <div>
                            <label className="sr-only">Lingua</label>
                            <select
                                type=""
                                id="LINGUA" 
                                name="LINGUA"
                                className="w-full appearance-none bg-transparent rounded-sm border border-[#8E969B] p-4 text-sm"
                                placeholder="(Inglese, francese, italiano)" 

                            >
                                <option value="1">Italiano</option>
                                <option value="2">Francese</option>
                                <option value="3">Inglese</option>
                            </select>
                        </div>
                        <div>
                            <label className="sr-only">Messaggio</label>
                            <textarea 
                            rows="4"
                            id="MESSAGGIO" 
                            name="MESSAGGIO"
                            className="w-full bg-transparent rounded-sm border border-[#8E969B] p-4 pe-12 text-sm"
                            placeholder="Scrivi qui il tuo messaggio"
                            />
                            <p className="w-full text-gray-800 font-light text-sm mt-1">Garantiamo una risposta entro 2 giorni lavorativi.</p>
                        </div>
                        <button form="sib-form" type="submit" className="w-full font-bold px-5 py-3 border-2 border-[#A39B98] rounded-sm text-center text-[#000000] uppercase cursor-pointer">contattaci</button>
                    </form>
                </div>
                <div className="hidden h-full lg:w-1/3 lg:flex items-center"><img src={contatto2}/></div>
            </div>
        </div>
    )
}

export default Home
