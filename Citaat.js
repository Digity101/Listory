var CitaatVragen = {
    Vraag0: {
        vraag:`Het begint met 'Ik zal u iets van de kleine Johannes vertellen. Het heeft veel van een sprookje, mijn verhaal, maar het is toch alles werkelijk zo gebeurd.' Johannes is een jongetje dat veel van de natuur houdt. Op een dag ontmoet hij in de tuin de elf Windekind. Windekind neemt Johannes mee naar het rijk van de dieren. Johannes is zo van deze wereld vervuld, dat hij er wel altijd zou willen blijven. Maar dan laat Windekind Johannes ook de wereld van de mensen zien. Daardoor, en door de ontmoeting met de kabouter Wistik, het meisje Robinetta, Pluizer, dokter Cijfer, de Dood en uiteindelijk de Ongenoemde, wordt het sprookje gaandeweg steeds grimmiger en wordt Johannes uiteindelijk voor de ultieme keuze gesteld: zal hij in de sprookjeswereld van Windekind blijven of kiest ervoor om in te treden in de wereld van de mensen, waar hem 'eindeloos verdriet, vermoeienis en zorg' wachten?`,
		keuzes: [`Multatuli, Max Havelaar of De koffiveilingen der Nederlandsche Handelmaatschappy`,
`Piet Paaltjens, Snikken en grimlachjes`,
`E.J. Potgieter, Uit de nalatenschap van een dromer`,
`Frederik van Eeden, De kleine Johannes`],
        antwoord: "Frederik van Eeden, De kleine Johannes"
    },
    Vraag1: {
        vraag:`De korte fatalistische roman Noodlot gaat over twee geliefden die elkaar door het noodlot hebben gevonden en door datzelfde noodlot naar de afgrond worden gedreven, maar uiteindelijk ook bevrijding vinden. Noodlot verscheen voor het eerst in 1890 in De Gids. Het zou eigenlijk voor het eerst verschijnen als premie-uitgave van Het nieuws van den dag. De redactie van deze krant echter vond het verhaal te akelig voor hun abonnees. Hier was Couperus het eigenlijk wel mee eens. In Noodlot analyseert Couperus in zijn eigen woorden 'iets nerveus' en morbides'. Het is inderdaad Couperus' somberste roman, die veel opschudding veroorzaakte bij zijn tijdgenoten vanwege de negatieve, of fatalistische, levenshouding, die er in tot uitdrukking komt. De hedendaagse lezer zal hier weinig moeite mee hebben. De roman gaat behalve over het noodlot, ook over liefde en intrige, ook komen er een moord en een dubbele zelfmoord in voor; maar Noodlot overstijgt de hedendaagse misdaadroman of thriller.
 
Dit is een citaat uit het boek waarvan hierboven een samenvatting staat: ‘Hoor eens, Bertie. Je weet wel die brieven, die ik vroeger in Londen geschreven heb … Eve vertelde me, dat ze achter zijn gehouden door William, hun knecht … Weet jij daar ook iets van?’
`,
		keuzes: [`Herman Gorter, Verzen`,
`Frederik van Eeden, De kleine Johannes`,
`Piet Paaltjens, Snikken en grimlachjes`,
`Louis Couperus, Noodlot`],
        antwoord: "Louis Couperus, Noodlot"
    },
    Vraag2: {
        vraag:`De heftige omgevingsindrukken die de dichter in poëzie omzet, verdringen steeds verder het overzicht dat nodig is om het leven te begrijpen en te waarderen. Gorter schreef zelf over deze periode: ‘Ik liep een jaar rond met een licht hoofd en rare ogen als ik er nu aan denk. Mijn gezondheid leed er zeer diep onder.’ Wie elk moment afzonderlijk ervaart, verliest de regelmaat en raakt zijn oriëntatie kwijt. In plaats van geordend wordt de wereld dan vloeiend, zoals in dit gedicht dat achterin Verzen staat.`,		keuzes: [`Frederik van Eeden`,
`Jacob van Lennep, De Roos van Dekema`,
`E.J. Potgieter, Uit de nalatenschap van een dromer`,
`Herman Gorter, Verzen`],
        antwoord: "Herman Gorter, Verzen"
    },
    Vraag3: {
        vraag:`‘De stormwind gierde met dof gedruis, ik rende razend in Ada’s huis.’
<br> Uit welk(e) boek/bundel komt dit citaat?`,
		keuzes: [`Herman Gorter, Verzen`,
`Jacob van Lennep, De Roos van Dekema`,
`Frederik van Eeden`,
`E.J. Potgieter, Ada’s bruiloftsfeest`],
        antwoord: `E.J. Potgieter, Ada’s bruiloftsfeest`
    },
	Vraag4: {
        vraag5:`“Juist wilde Havelaar een aanvang maken met het verhaal dat zyn gasten van hem wachtten, en dat ophelderen zou waarin en waaom hy den Generaal Vandamme te Natal zoo 'gekontrarieerd' had, toen mevrouw Slotering zich in de voorgalerij van haar woning vertoonde, en den politie-oppasser wenkte, die naast Havelaars huis op een bank zat.”
Heeft mevrouw Slotering een belangrijke rol in het fragment, zo ja waarom?`,
		keuzes: [`Ja, ze zorgt voor een afleiding zodat niemand op de moord let.`,
`Nee, mevrouw Slotering was er maar zorgde niet voor een reactie van een van de gasten.`,
`Nee, mevrouw Slotingen was niet aanwezig.`,
`Ja, ze zorgt ervoor dat het verhaal onderbroken wordt.`],
        antwoord: `Ja, ze zorgt ervoor dat het verhaal onderbroken wordt.`
    },
};

var goede_antwoorden = 0;
var vragen = 0;
console.log(CitaatVragen);
MeerkeuzeHtml(CitaatVragen);
