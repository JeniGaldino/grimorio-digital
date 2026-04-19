const ERVAS = [
    {
        nome: "Alecrim",
        nomeCientifico: "Rosmarinus officinalis",
        emoji: "🌿",
        elemento: "Fogo",
        planeta: "Sol",
        propriedadesCientificas: "Rico em antioxidantes, ácido rosmarínico e carnosol. Possui propriedades anti-inflamatórias, antimicrobianas e pode melhorar a memória e concentração. Usado na fitoterapia para problemas digestivos e circulatórios.",
        propriedadesMagicas: "Proteção, purificação, memória, fidelidade e amor. Uma das ervas mais versáteis da magia. Afasta energias negativas e atrai boas vibrações.",
        comoUsar: [
            "Queimar como incenso para purificar ambientes",
            "Colocar ramos na porta para proteção do lar",
            "Banho de alecrim para limpeza energética",
            "Sob o travesseiro para afastar pesadelos",
            "Em sachês para atrair amor e fidelidade",
            "Chá para melhorar memória e concentração"
        ],
        curiosidade: "Na Idade Média, noivas usavam coroas de alecrim como símbolo de fidelidade. Os estudantes gregos usavam ramos para melhorar a memória."
    },
    {
        nome: "Lavanda",
        nomeCientifico: "Lavandula angustifolia",
        emoji: "💜",
        elemento: "Ar",
        planeta: "Mercúrio",
        propriedadesCientificas: "Contém linalol e acetato de linalilo com propriedades ansiolíticas, sedativas e anti-inflamatórias. Usada clinicamente para insônia, ansiedade e dores de cabeça. Antimicrobiana e cicatrizante.",
        propriedadesMagicas: "Paz, sono tranquilo, amor, purificação e felicidade. Atrai harmonia e tranquilidade. Excelente para rituais de cura emocional.",
        comoUsar: [
            "Sachês sob o travesseiro para sono tranquilo",
            "Queimar para acalmar e purificar o ambiente",
            "Banhos para aliviar estresse e ansiedade",
            "Em feitiços de amor e reconciliação",
            "Óleo essencial em rituais de meditação",
            "Espalhar flores secas pela casa para harmonia"
        ],
        curiosidade: "Os romanos usavam lavanda para perfumar banhos — o nome vem do latim 'lavare' (lavar). Cleópatra usava lavanda para seduzir."
    },
    {
        nome: "Sálvia",
        nomeCientifico: "Salvia officinalis",
        emoji: "🍃",
        elemento: "Ar",
        planeta: "Júpiter",
        propriedadesCientificas: "Rica em flavonoides, ácido rosmarínico e tujona. Possui propriedades antibacterianas, anti-inflamatórias e antioxidantes. Usada para problemas de garganta, digestão e suores noturnos na menopausa.",
        propriedadesMagicas: "Sabedoria, purificação, longevidade, proteção e desejos. A 'erva sagrada' por excelência, usada para limpar espaços de energias negativas.",
        comoUsar: [
            "Defumação com sálvia branca para limpeza energética profunda",
            "Chá antes de rituais para aumentar a sabedoria",
            "Queimar folhas e passar a fumaça pelo corpo para purificação",
            "Plantar no jardim para proteção do lar",
            "Escrever um desejo em uma folha e queimá-la",
            "Carregar folhas secas na carteira para sabedoria"
        ],
        curiosidade: "O nome 'Salvia' vem do latim 'salvare' (curar/salvar). Povos nativos americanos usam a sálvia branca em cerimônias de purificação há milênios."
    },
    {
        nome: "Arruda",
        nomeCientifico: "Ruta graveolens",
        emoji: "🌱",
        elemento: "Fogo",
        planeta: "Marte",
        propriedadesCientificas: "Contém rutina e alcaloides. Possui propriedades anti-inflamatórias e antiespasmódicas. ATENÇÃO: É tóxica em grandes quantidades e abortiva — nunca ingerir sem orientação profissional.",
        propriedadesMagicas: "Proteção poderosa contra mau-olhado, inveja e feitiçaria. É a planta protetora mais popular no Brasil e em culturas latinas.",
        comoUsar: [
            "Plantar na entrada da casa para proteção",
            "Galhos atrás da orelha ou na roupa contra mau-olhado",
            "Banho de arruda para quebrar energias negativas (apenas uso externo)",
            "Defumação para limpar ambientes pesados",
            "Em vasos na janela como escudo energético",
            "Sachês de proteção com arruda e sal grosso"
        ],
        curiosidade: "No Brasil, diz-se que quando o pé de arruda murcha, é porque absorveu muita energia negativa destinada ao dono. Deve-se plantar um novo imediatamente."
    },
    {
        nome: "Manjericão",
        nomeCientifico: "Ocimum basilicum",
        emoji: "🌿",
        elemento: "Fogo",
        planeta: "Marte",
        propriedadesCientificas: "Rico em eugenol, linalol e flavonoides. Anti-inflamatório, antioxidante e antimicrobiano. Auxilia na digestão, combate o estresse e tem propriedades adaptogênicas (manjericão sagrado/tulsi).",
        propriedadesMagicas: "Prosperidade, amor, proteção e coragem. Atrai dinheiro e abundância. Usado em rituais de amor e para harmonizar relacionamentos.",
        comoUsar: [
            "Folhas na carteira para atrair dinheiro",
            "Banho para atrair prosperidade e amor",
            "Vaso na cozinha para proteção do lar",
            "Espalhar folhas nos cantos da casa para abundância",
            "Chá para coragem antes de situações importantes",
            "Em sachês verdes para prosperidade"
        ],
        curiosidade: "Na Índia, o Tulsi (manjericão sagrado) é considerado a planta mais sagrada, associada a Vishnu. Ter um pé em casa é sinal de devoção."
    },
    {
        nome: "Camomila",
        nomeCientifico: "Matricaria chamomilla",
        emoji: "🌼",
        elemento: "Água",
        planeta: "Sol",
        propriedadesCientificas: "Contém bisabolol e camazuleno. Anti-inflamatória, calmante, digestiva e cicatrizante. Amplamente usada para insônia, ansiedade, cólicas e problemas de pele.",
        propriedadesMagicas: "Calma, sorte, prosperidade, sono e proteção infantil. Atrai dinheiro e sucesso. Uma das melhores ervas para rituais de paz e tranquilidade.",
        comoUsar: [
            "Chá antes de dormir para sonhos proféticos",
            "Banho para atrair sorte e prosperidade",
            "Lavar as mãos com chá antes de jogos de azar",
            "Borrifar infusão pela casa para paz",
            "Sachês no quarto das crianças para proteção",
            "Adicionar ao banho para acalmar e atrair boas energias"
        ],
        curiosidade: "Os egípcios consideravam a camomila uma flor sagrada dedicada ao deus Sol, Rá. Na Idade Média, era chamada de 'médico das plantas'."
    },
    {
        nome: "Hortelã",
        nomeCientifico: "Mentha spicata",
        emoji: "🍀",
        elemento: "Ar",
        planeta: "Vênus",
        propriedadesCientificas: "Rica em mentol, com propriedades analgésicas, descongestionantes, digestivas e antiespasmódicas. Eficaz contra náuseas, dores de cabeça e problemas respiratórios.",
        propriedadesMagicas: "Cura, prosperidade, proteção em viagens e comunicação com espíritos. Estimula os sentidos e a clareza mental.",
        comoUsar: [
            "Folhas frescas na carteira para atrair dinheiro",
            "Chá para estimular a clareza mental",
            "Esfregar folhas nos pulsos antes de viagens para proteção",
            "Queimar para curar e purificar",
            "Banho para renovar energias",
            "Em travesseiros para sonhos proféticos"
        ],
        curiosidade: "Na mitologia grega, Menta era uma ninfa amada por Hades. Perséfone, enciumada, a transformou na planta que conhecemos."
    },
    {
        nome: "Canela",
        nomeCientifico: "Cinnamomum verum",
        emoji: "🫚",
        elemento: "Fogo",
        planeta: "Sol",
        propriedadesCientificas: "Contém cinamaldeído com propriedades antibacterianas, antifúngicas e anti-inflamatórias. Ajuda a regular o açúcar no sangue, melhora a circulação e possui ação termogênica.",
        propriedadesMagicas: "Prosperidade, sucesso, poder espiritual, proteção e paixão. Acelera qualquer magia e aumenta o poder de outros ingredientes.",
        comoUsar: [
            "Soprar canela em pó pela porta de entrada no 1º dia do mês para prosperidade",
            "Adicionar a incensos para potencializar",
            "Paus de canela em sachês de prosperidade",
            "Chá para aquecer a paixão e a energia",
            "Queimar para atrair dinheiro e sucesso",
            "Em banhos para aumentar o poder pessoal"
        ],
        curiosidade: "A canela era tão valiosa na antiguidade que era oferecida como presente a reis e deuses. Os egípcios a usavam no processo de mumificação."
    },
    {
        nome: "Guiné (Tipi)",
        nomeCientifico: "Petiveria alliacea",
        emoji: "🌾",
        elemento: "Fogo",
        planeta: "Marte",
        propriedadesCientificas: "Contém compostos sulfurados com propriedades anti-inflamatórias, antimicrobianas e imunoestimulantes. Estudos indicam potencial anticancerígeno. ATENÇÃO: Pode ser tóxica em excesso.",
        propriedadesMagicas: "Proteção poderosa, descarrego, afastar negatividade e abrir caminhos. Uma das ervas mais potentes contra trabalhos negativos.",
        comoUsar: [
            "Defumação pesada para limpeza espiritual",
            "Banho de descarrego (usar com moderação, apenas externo)",
            "Plantar na frente da casa como guardião",
            "Em garrafadas espirituais de proteção",
            "Sacudir ramos pela casa para expulsar energias densas",
            "Sachê de proteção combinado com arruda e alecrim"
        ],
        curiosidade: "No candomblé e na umbanda, a guiné é chamada de 'Tipi' e está associada a orixás guerreiros como Ogum. É considerada uma das 'sete ervas sagradas'."
    },
    {
        nome: "Louro",
        nomeCientifico: "Laurus nobilis",
        emoji: "🍂",
        elemento: "Fogo",
        planeta: "Sol",
        propriedadesCientificas: "Contém eugenol e cineol. Possui propriedades digestivas, anti-inflamatórias e antifúngicas. Usado na medicina popular para gases, indigestão e dores articulares.",
        propriedadesMagicas: "Vitória, sucesso, proteção, visões proféticas e desejos. A planta dos campeões e vencedores desde a Grécia antiga.",
        comoUsar: [
            "Escrever um desejo na folha e queimá-la",
            "Colocar folhas na carteira para prosperidade",
            "Coroa de louros para rituais de vitória",
            "Queimar para visões proféticas e meditação",
            "Folhas na entrada da casa para proteção",
            "Banho com louro para atrair sucesso"
        ],
        curiosidade: "Na Grécia, a coroa de louros era o prêmio supremo — dado a atletas, poetas e generais vitoriosos. A Pitonisa de Delfos mastigava folhas de louro para profetizar."
    },
    {
        nome: "Rosa",
        nomeCientifico: "Rosa spp.",
        emoji: "🌹",
        elemento: "Água",
        planeta: "Vênus",
        propriedadesCientificas: "Rica em vitamina C, taninos e flavonoides. As pétalas possuem propriedades anti-inflamatórias, antioxidantes e adstringentes. A água de rosas é usada para cuidados com a pele e aromaterapia.",
        propriedadesMagicas: "Amor, beleza, cura emocional, adivinhação e proteção. A flor sagrada de Afrodite/Vênus, símbolo supremo do amor.",
        comoUsar: [
            "Pétalas no banho para atrair amor",
            "Água de rosas para borrifar no ambiente e atrair harmonia",
            "Pétalas secas em sachês de amor",
            "Chá de rosas para abrir o coração",
            "Oferecer rosas em altares de amor",
            "Pétalas sob o travesseiro para sonhos românticos"
        ],
        curiosidade: "Cada cor de rosa tem um significado mágico: vermelha (paixão), rosa (amor gentil), branca (pureza), amarela (amizade) e negra (proteção e mistério)."
    },
    {
        nome: "Artemísia",
        nomeCientifico: "Artemisia vulgaris",
        emoji: "🌙",
        elemento: "Terra",
        planeta: "Lua",
        propriedadesCientificas: "Contém tujona e flavonoides. Usada na medicina tradicional para problemas digestivos e menstruais. Possui propriedades antifúngicas e antiparasitárias. ATENÇÃO: Contraindicada na gravidez.",
        propriedadesMagicas: "Sonhos proféticos, viagens astrais, proteção, clarividência e adivinhação. A erva das bruxas e dos sonhos lúcidos.",
        comoUsar: [
            "Sob o travesseiro para sonhos proféticos e lúcidos",
            "Queimar antes de práticas divinatórias (tarot, runas)",
            "Banho para aumentar poderes psíquicos",
            "Sachês para viagens astrais seguras",
            "Incenso para meditação profunda",
            "Carregar em amuletos para proteção em viagens"
        ],
        curiosidade: "Nomeada em honra à deusa Ártemis. Na Europa medieval, viajantes colocavam artemísia nos sapatos para não se cansar. É ingrediente da absinta."
    },
    {
        nome: "Erva-de-São-João",
        nomeCientifico: "Hypericum perforatum",
        emoji: "🌻",
        elemento: "Fogo",
        planeta: "Sol",
        propriedadesCientificas: "Contém hipericina e hiperforina, substâncias com efeito antidepressivo comprovado cientificamente. Usada em tratamentos de depressão leve a moderada, ansiedade e insônia. Possui propriedades anti-inflamatórias e cicatrizantes. ATENÇÃO: interage com anticoncepcionais e antidepressivos.",
        propriedadesMagicas: "Proteção poderosa, afastar espíritos, coragem, força de vontade e felicidade. Tradicionalmente colhida no solstício de verão (noite de São João) para máximo poder.",
        comoUsar: [
            "Pendurar ramos na porta no dia de São João para proteção anual",
            "Carregar em sachês para afastar negatividade e depressão",
            "Queimar como incenso para exorcismos e limpezas pesadas",
            "Banho para atrair coragem e alegria",
            "Óleo macerado para ungir velas de proteção",
            "Colocar sob o travesseiro na noite de São João para sonhos proféticos"
        ],
        curiosidade: "Na Idade Média, acreditava-se que a erva-de-São-João era tão poderosa contra o mal que demônios fugiam só de sentir seu cheiro. As manchas vermelhas nas pétalas simbolizariam o sangue de São João Batista."
    },
    {
        nome: "Verbena",
        nomeCientifico: "Verbena officinalis",
        emoji: "💠",
        elemento: "Terra",
        planeta: "Vênus",
        propriedadesCientificas: "Contém verbenalinina e ácido cafeico. Possui propriedades anti-inflamatórias, analgésicas, sedativas e digestivas. Usada na fitoterapia para ansiedade, insônia, enxaquecas e problemas digestivos.",
        propriedadesMagicas: "Conhecida como 'Erva Sagrada' dos druidas e dos romanos. Amor, proteção, purificação, paz, dinheiro, juventude e sono. Uma das ervas mais reverenciadas da história mágica ocidental.",
        comoUsar: [
            "Espalhar pela casa para trazer paz e afastar brigas",
            "Banho para atrair amor e reconciliação",
            "Enterrar no jardim para prosperidade",
            "Usar em coroas rituais como os druidas",
            "Chá antes de rituais para aumentar poderes mágicos",
            "Sachê sob o travesseiro para impedir pesadelos"
        ],
        curiosidade: "Os romanos chamavam-na de 'herba sacra' e a usavam para purificar templos e altares. Os druidas a colhiam com rituais específicos sob a estrela Sírius. Diziam que embaixadores romanos carregavam verbena como proteção diplomática."
    },
    {
        nome: "Mil-Folhas",
        nomeCientifico: "Achillea millefolium",
        emoji: "🌸",
        elemento: "Água",
        planeta: "Vênus",
        propriedadesCientificas: "Rica em azuleno, flavonoides e taninos. Anti-inflamatória, cicatrizante, hemostática (estanca sangramentos), febrífuga e digestiva. Usada para feridas, cólicas menstruais e problemas circulatórios.",
        propriedadesMagicas: "Coragem, amor, poderes psíquicos, exorcismo e proteção. Chamada de 'erva do guerreiro' por sua associação com Aquiles. Amplia poderes de adivinhação.",
        comoUsar: [
            "Segurar durante adivinhação para aumentar clarividência",
            "Sachê de proteção para pendurar sobre a cama",
            "Banho para atrair coragem antes de desafios",
            "Usar em buquês de casamento para garantir 7 anos de amor",
            "Chá para despertar habilidades psíquicas",
            "Talos secos usados em leituras do I Ching"
        ],
        curiosidade: "O nome científico 'Achillea' vem de Aquiles, que segundo a lenda usou esta erva para curar as feridas de seus soldados na Guerra de Troia. O centauro Quíron teria ensinado suas propriedades ao herói."
    },
    {
        nome: "Cravo-da-Índia",
        nomeCientifico: "Syzygium aromaticum",
        emoji: "🫙",
        elemento: "Fogo",
        planeta: "Júpiter",
        propriedadesCientificas: "Contém eugenol (70-90%), potente anestésico, antisséptico e anti-inflamatório. Usado na odontologia para dor de dente. Possui propriedades antimicrobianas, antifúngicas e antioxidantes. Auxilia na digestão.",
        propriedadesMagicas: "Proteção, exorcismo, dinheiro, amor e clareza mental. Afasta fofocas e energias invejosas. Acelera desejos e fortalece a memória.",
        comoUsar: [
            "Queimar cravos para afastar fofocas e inveja",
            "Carregar na carteira para atrair dinheiro",
            "Espetar cravos em uma laranja (pomander) para proteção do lar",
            "Mascar um cravo antes de falar em público para persuasão",
            "Adicionar ao incenso para potencializar proteção",
            "Banho com cravos para cortar inveja"
        ],
        curiosidade: "Na China antiga, funcionários da corte imperial eram obrigados a mascar cravos-da-índia antes de falar com o imperador, tanto por higiene quanto por acreditarem que a planta trazia palavras verdadeiras."
    },
    {
        nome: "Alho",
        nomeCientifico: "Allium sativum",
        emoji: "🧄",
        elemento: "Fogo",
        planeta: "Marte",
        propriedadesCientificas: "Rico em alicina, composto sulfurado com propriedades antibacterianas, antivirais e antifúngicas. Reduz colesterol e pressão arterial. Imunoestimulante natural, antioxidante e anticancerígeno em estudos.",
        propriedadesMagicas: "Proteção suprema contra o mal, cura, exorcismo, anti-roubo e anti-vampirismo. Uma das plantas protetoras mais universais em todas as culturas do mundo.",
        comoUsar: [
            "Pendurar tranças de alho na cozinha para proteção do lar",
            "Colocar dentes de alho nas janelas e portas contra negatividade",
            "Carregar um dente no bolso como amuleto de proteção",
            "Esfregar alho em panelas novas para abençoá-las",
            "Plantar ao redor da casa como barreira protetora",
            "Comer alho cru para fortalecer a aura energética"
        ],
        curiosidade: "A associação do alho com proteção contra vampiros vem das propriedades reais da alicina de repelir parasitas sugadores de sangue. Trabalhadores egípcios que construíram as pirâmides recebiam alho diariamente para força e saúde."
    },
    {
        nome: "Girassol",
        nomeCientifico: "Helianthus annuus",
        emoji: "🌻",
        elemento: "Fogo",
        planeta: "Sol",
        propriedadesCientificas: "Sementes ricas em vitamina E, selênio, magnésio e ácidos graxos essenciais. Anti-inflamatório, antioxidante e bom para saúde cardiovascular. O óleo é usado em cosméticos pela ação hidratante.",
        propriedadesMagicas: "Fertilidade, desejos, saúde, sabedoria e verdade. Atrai a energia solar e a abundância. Símbolo de lealdade (a flor segue o sol).",
        comoUsar: [
            "Pétalas no banho para atrair sucesso e vitalidade",
            "Sementes na carteira para prosperidade contínua",
            "Plantar no jardim para atrair alegria e energia positiva",
            "Comer sementes antes de dormir para sonhos verdadeiros",
            "Colocar girassóis no altar para homenagear divindades solares",
            "Cortar um girassol ao pôr do sol e fazer um desejo"
        ],
        curiosidade: "O mito grego conta que Clítia, uma ninfa apaixonada por Apolo (o Sol), ficava o dia inteiro olhando para ele cruzar o céu até se transformar em girassol — por isso a flor segue o sol."
    },
    {
        nome: "Jasmim",
        nomeCientifico: "Jasminum officinale",
        emoji: "🤍",
        elemento: "Água",
        planeta: "Lua",
        propriedadesCientificas: "Contém linalol, acetato de benzila e jasmonatos. Propriedades ansiolíticas, antidepressivas e antiespasmódicas comprovadas. Na aromaterapia, reduz ansiedade e melhora o humor. Usado em perfumaria fina.",
        propriedadesMagicas: "Amor espiritual, sonhos proféticos, dinheiro, projeção astral e sensualidade. Uma das flores mais poderosas para magia lunar e amor divino.",
        comoUsar: [
            "Flores no quarto para atrair sonhos proféticos",
            "Óleo de jasmim para ungir velas de amor espiritual",
            "Chá de jasmim para meditação e conexão espiritual",
            "Queimar flores secas para atrair riqueza",
            "Banho com jasmim na lua cheia para amplificar intuição",
            "Carregar flores secas para atrair amor verdadeiro"
        ],
        curiosidade: "Na Índia, o jasmim é chamado de 'rainha da noite' porque seu aroma se intensifica após o pôr do sol. No Egito, Cleópatra perfumava as velas de seu barco com óleo de jasmim para seduzir Marco Antônio."
    },
    {
        nome: "Boldo",
        nomeCientifico: "Peumus boldus",
        emoji: "🌿",
        elemento: "Ar",
        planeta: "Saturno",
        propriedadesCientificas: "Contém boldina e catequinas. Hepatoprotetor, colerético (estimula produção de bile), digestivo e diurético. Amplamente usado para problemas hepáticos, digestão lenta e ressaca. ATENÇÃO: contraindicado em obstruções biliares.",
        propriedadesMagicas: "Limpeza, proteção contra mau-olhado, descarrego energético e encerramento de ciclos. Muito usado no Brasil em rituais de purificação.",
        comoUsar: [
            "Defumação para limpeza pesada de ambientes",
            "Banho de descarrego após situações pesadas",
            "Colocar folhas atrás da porta para proteção",
            "Chá após rituais para limpar energias absorvidas",
            "Sachê com boldo e sal grosso para proteção",
            "Queimar com casca de alho para limpeza profunda"
        ],
        curiosidade: "Originário do Chile, o boldo se tornou uma das ervas medicinais mais populares da América do Sul. Diz a lenda que um pastor percebeu suas propriedades ao notar que ovelhas que comiam suas folhas ficavam mais saudáveis."
    },
    {
        nome: "Patchouli",
        nomeCientifico: "Pogostemon cablin",
        emoji: "🍂",
        elemento: "Terra",
        planeta: "Saturno",
        propriedadesCientificas: "Contém patchoulol e alfa-bulneseno. Propriedades antidepressivas, anti-inflamatórias, antifúngicas e cicatrizantes. Na aromaterapia, é usado para ansiedade, estresse e regeneração celular. Repelente natural de insetos.",
        propriedadesMagicas: "Dinheiro, fertilidade, luxúria, proteção e crescimento. Um dos aromas mais usados em magia de prosperidade. Atrai abundância material e prazer.",
        comoUsar: [
            "Óleo nas velas verdes para rituais de dinheiro",
            "Folhas secas na carteira e no caixa para atrair prosperidade",
            "Banho para atrair abundância e sensualidade",
            "Incenso para criar atmosfera de fertilidade e crescimento",
            "Sachê com patchouli e canela para prosperidade",
            "Ungir notas de dinheiro com óleo de patchouli"
        ],
        curiosidade: "Na era hippie dos anos 60-70, o patchouli era símbolo do movimento. Comerciantes indianos usavam folhas de patchouli para proteger tecidos de seda durante o transporte — o aroma se tornou sinônimo de luxo e riqueza."
    },
    {
        nome: "Dente-de-Leão",
        nomeCientifico: "Taraxacum officinale",
        emoji: "🌬️",
        elemento: "Ar",
        planeta: "Júpiter",
        propriedadesCientificas: "Rico em inulina, potássio, vitaminas A, C e K. Diurético natural, hepatoprotetor, digestivo e anti-inflamatório. Estudos indicam potencial prebiótico e anticancerígeno. Todas as partes da planta são comestíveis.",
        propriedadesMagicas: "Desejos, adivinhação, comunicação com espíritos, transformação e chamado. Soprar as sementes e fazer um desejo é uma das magias mais instintivas da humanidade.",
        comoUsar: [
            "Soprar as sementes fazendo um pedido ao universo",
            "Chá de raiz antes de adivinhação para aumentar visões",
            "Enterrar no canto noroeste do jardim para ventos favoráveis",
            "Colocar em um saco sob a cama para chamar espíritos protetores",
            "Chá para purificar corpo e espírito",
            "Coroa de dentes-de-leão para rituais de primavera"
        ],
        curiosidade: "Cada semente do dente-de-leão pode viajar até 8 km pelo vento. Na magia simpática, isso representa a capacidade de seus desejos viajarem até se realizarem. Os celtas a chamavam de 'oráculo do pastor'."
    },
    {
        nome: "Hibisco",
        nomeCientifico: "Hibiscus sabdariffa",
        emoji: "🌺",
        elemento: "Água",
        planeta: "Vênus",
        propriedadesCientificas: "Rico em antocianinas, vitamina C e ácido cítrico. Reduz pressão arterial, colesterol e possui efeito diurético. Antioxidante poderoso, anti-inflamatório e auxilia no emagrecimento.",
        propriedadesMagicas: "Amor, paixão, adivinhação, sonhos e beleza. Flor sagrada em diversas culturas tropicais. Amplifica a energia feminina e a sedução.",
        comoUsar: [
            "Chá de hibisco para aumentar a paixão e o desejo",
            "Flores no banho para atrair amor e beleza",
            "Queimar pétalas secas para adivinhação amorosa",
            "Colocar flores frescas no altar de Vênus/Afrodite",
            "Sachê com pétalas para atrair romance",
            "Oferecer chá de hibisco ao pretendente para despertar amor"
        ],
        curiosidade: "No Havaí, usar um hibisco atrás da orelha direita significa que você está solteira e disponível; atrás da esquerda, comprometida. No Egito antigo era oferecida à deusa Ísis."
    },
    {
        nome: "Noz-Moscada",
        nomeCientifico: "Myristica fragrans",
        emoji: "🥜",
        elemento: "Fogo",
        planeta: "Júpiter",
        propriedadesCientificas: "Contém miristicina, elemicina e eugenol. Propriedades anti-inflamatórias, digestivas, analgésicas e estimulantes cerebrais. Em pequenas doses, auxilia na digestão e no sono. ATENÇÃO: tóxica em grandes quantidades.",
        propriedadesMagicas: "Sorte, dinheiro, saúde, fidelidade e justiça. Uma das especiarias mágicas mais poderosas. Carregar uma noz-moscada inteira é um dos amuletos mais antigos.",
        comoUsar: [
            "Carregar uma noz-moscada inteira no bolso para sorte",
            "Ralar sobre velas verdes para rituais de dinheiro",
            "Adicionar ao incenso para potencializar qualquer magia",
            "Costurar dentro de um sachê verde para prosperidade",
            "Colocar no sapato esquerdo para boa sorte em viagens",
            "Adicionar ao chá em noite de lua cheia para visões"
        ],
        curiosidade: "No século XVI, uma noz-moscada valia mais que seu peso em ouro. Guerras foram travadas pelo controle das ilhas onde crescia. Jogadores medievais carregavam noz-moscada como amuleto de sorte."
    },
    {
        nome: "Sândalo",
        nomeCientifico: "Santalum album",
        emoji: "🪵",
        elemento: "Água",
        planeta: "Lua",
        propriedadesCientificas: "Contém santalol com propriedades anti-inflamatórias, antimicrobianas e sedativas. Usado em aromaterapia para ansiedade, insônia e meditação. Na dermatologia, auxilia em acne e irritações cutâneas.",
        propriedadesMagicas: "Espiritualidade, meditação, proteção, cura e desejos. Uma das madeiras mais sagradas do mundo. Eleva a vibração espiritual e facilita a conexão com o divino.",
        comoUsar: [
            "Queimar durante meditação para aprofundar a prática",
            "Incenso em rituais espirituais e orações",
            "Óleo para ungir o terceiro olho antes de adivinhação",
            "Madeira no altar como oferenda espiritual",
            "Escrever desejos em lascas de sândalo e queimá-los",
            "Banho com essência para purificação espiritual profunda"
        ],
        curiosidade: "Na tradição hindu, o sândalo é um dos itens mais sagrados, usado em pujas (rituais) e para marcar o terceiro olho. A árvore demora pelo menos 15 anos para desenvolver o aroma. Na Índia, é ilegal cortar sândalos sem permissão governamental."
    },
    {
        nome: "Cidreira (Melissa)",
        nomeCientifico: "Melissa officinalis",
        emoji: "🍃",
        elemento: "Água",
        planeta: "Lua",
        propriedadesCientificas: "Contém citral, citronelal e ácido rosmarínico. Propriedades calmantes, ansiolíticas, antivirais (especialmente contra herpes) e digestivas comprovadas. Eficaz para insônia, ansiedade e distúrbios gástricos nervosos.",
        propriedadesMagicas: "Cura emocional, amor, sucesso, longevidade e paz. Atrai amor verdadeiro e cura coração partido. Traz alegria e leveza ao espírito.",
        comoUsar: [
            "Chá para acalmar antes de rituais e meditação",
            "Banho para curar tristeza e atrair alegria",
            "Folhas frescas no travesseiro para sonhos doces",
            "Esfregar folhas nas mãos antes de tocar instrumentos mágicos",
            "Plantar no jardim para atrair abelhas (mensageiras da deusa)",
            "Sachê com cidreira e lavanda para paz no lar"
        ],
        curiosidade: "O nome 'Melissa' vem do grego para 'abelha' — as abelhas são loucas por esta planta. Paracelso a chamava de 'elixir da vida' e acreditava que ela podia rejuvenescer completamente o corpo. Monges carmelitas criaram a famosa 'Água de Melissa' no século XVII."
    }
];
