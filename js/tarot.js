const ARCANOS_MAIORES = [
    {
        numero: 0,
        nome: "O Louco",
        keywords: "Liberdade, aventura, novos começos",
        significado: "O Louco representa novos começos, aventura e liberdade espiritual. É a carta do potencial infinito, do salto de fé e da confiança no universo. Indica um momento de espontaneidade e coragem para seguir novos caminhos.",
        invertida: "Imprudência, risco desnecessário, falta de direção. Pode indicar decisões precipitadas ou medo de dar o próximo passo.",
        elemento: "Ar",
        planeta: "Urano",
        simbolismo: "O jovem caminha despreocupado à beira de um precipício, confiando no universo. O cão simboliza o instinto que o acompanha."
    },
    {
        numero: 1,
        nome: "O Mago",
        keywords: "Poder, manifestação, habilidade",
        significado: "O Mago representa o poder de manifestação e a conexão entre o mundo espiritual e material. Com todos os elementos à sua disposição, ele transforma intenção em realidade. Indica habilidade, confiança e recursos disponíveis.",
        invertida: "Manipulação, engano, talentos desperdiçados. Pode indicar uso indevido do poder pessoal ou falta de foco.",
        elemento: "Ar",
        planeta: "Mercúrio",
        simbolismo: "Uma mão aponta para o céu e a outra para a terra, simbolizando 'como acima, assim abaixo'. Os quatro elementos estão presentes na mesa."
    },
    {
        numero: 2,
        nome: "A Sacerdotisa",
        keywords: "Intuição, mistério, sabedoria interior",
        significado: "A Sacerdotisa representa a intuição profunda, os mistérios ocultos e a sabedoria interior. Ela guarda os segredos do subconsciente e convida à introspecção. Indica que é hora de confiar na intuição.",
        invertida: "Segredos revelados, intuição bloqueada, superficialidade. Pode indicar que você está ignorando sua voz interior.",
        elemento: "Água",
        planeta: "Lua",
        simbolismo: "Sentada entre duas colunas (dualidade), segura o livro da sabedoria. O véu atrás dela esconde mistérios profundos."
    },
    {
        numero: 3,
        nome: "A Imperatriz",
        keywords: "Fertilidade, abundância, natureza",
        significado: "A Imperatriz representa a feminilidade, fertilidade e abundância da natureza. É a mãe nutriente que cria vida e beleza. Indica um período de crescimento, criatividade e conexão com a natureza.",
        invertida: "Dependência emocional, bloqueio criativo, negligência. Pode indicar desconexão com a própria feminilidade ou com a natureza.",
        elemento: "Terra",
        planeta: "Vênus",
        simbolismo: "Cercada pela natureza exuberante, usa uma coroa de estrelas. O trigo a seus pés simboliza abundância."
    },
    {
        numero: 4,
        nome: "O Imperador",
        keywords: "Autoridade, estrutura, liderança",
        significado: "O Imperador representa autoridade, estrutura e poder paternal. Ele traz ordem ao caos e estabelece regras. Indica necessidade de disciplina, planejamento e liderança firme.",
        invertida: "Tirania, rigidez, controle excessivo. Pode indicar abuso de poder ou inflexibilidade diante das situações.",
        elemento: "Fogo",
        planeta: "Áries",
        simbolismo: "Sentado em um trono de pedra com carneiros (Áries), segura o cetro e o orbe, símbolos de poder e domínio."
    },
    {
        numero: 5,
        nome: "O Hierofante",
        keywords: "Tradição, espiritualidade, ensinamento",
        significado: "O Hierofante representa a tradição espiritual, ensinamentos sagrados e a busca por significado. É o mestre que transmite conhecimento ancestral. Indica busca por orientação espiritual ou educação formal.",
        invertida: "Dogmatismo, rebelião contra normas, hipocrisia. Pode indicar necessidade de questionar tradições ou buscar o próprio caminho.",
        elemento: "Terra",
        planeta: "Touro",
        simbolismo: "Vestido em trajes religiosos, ergue a mão em bênção. Dois seguidores ajoelhados representam a transmissão do conhecimento."
    },
    {
        numero: 6,
        nome: "Os Enamorados",
        keywords: "Amor, escolha, união",
        significado: "Os Enamorados representam amor, escolhas importantes e a união de opostos. É a carta da conexão profunda e das decisões do coração. Indica relacionamentos, harmonia e escolhas baseadas nos valores.",
        invertida: "Desequilíbrio, escolha difícil, desarmonia. Pode indicar conflito entre razão e emoção ou problemas nos relacionamentos.",
        elemento: "Ar",
        planeta: "Gêmeos",
        simbolismo: "Um homem e uma mulher sob a bênção de um anjo. A árvore do conhecimento e a árvore da vida representam as escolhas."
    },
    {
        numero: 7,
        nome: "O Carro",
        keywords: "Vitória, determinação, controle",
        significado: "O Carro representa vitória através da determinação e força de vontade. É o triunfo sobre obstáculos e o avanço decidido. Indica progresso, confiança e controle sobre as circunstâncias.",
        invertida: "Falta de direção, agressividade, derrota. Pode indicar perda de controle ou obstáculos difíceis de superar.",
        elemento: "Água",
        planeta: "Câncer",
        simbolismo: "O condutor guia duas esfinges (opostos) em harmonia, representando o domínio sobre forças contrárias."
    },
    {
        numero: 8,
        nome: "A Força",
        keywords: "Coragem, paciência, poder interior",
        significado: "A Força representa a coragem interior, paciência e domínio sobre os instintos. É o poder que vem da gentileza, não da brutalidade. Indica superação com graça e compaixão.",
        invertida: "Fraqueza interior, dúvida, falta de coragem. Pode indicar submissão aos medos ou incapacidade de controlar impulsos.",
        elemento: "Fogo",
        planeta: "Leão",
        simbolismo: "Uma mulher abre as mandíbulas de um leão com suavidade. O infinito sobre sua cabeça representa o poder ilimitado do espírito."
    },
    {
        numero: 9,
        nome: "O Eremita",
        keywords: "Introspecção, sabedoria, solidão",
        significado: "O Eremita representa a busca interior pela verdade, introspecção e sabedoria adquirida pela experiência. É o guia interior que ilumina o caminho. Indica necessidade de reflexão e tempo sozinho.",
        invertida: "Isolamento excessivo, recusa a crescer, solidão. Pode indicar alienação ou medo de enfrentar a verdade.",
        elemento: "Terra",
        planeta: "Virgem",
        simbolismo: "Um ancião no topo de uma montanha segura uma lanterna (verdade) e um bastão (experiência), iluminando o caminho."
    },
    {
        numero: 10,
        nome: "A Roda da Fortuna",
        keywords: "Ciclos, destino, mudança",
        significado: "A Roda da Fortuna representa os ciclos da vida, as mudanças do destino e a impermanência. O que sobe, desce. Indica uma virada no destino, sorte e o fluxo natural dos acontecimentos.",
        invertida: "Má sorte, resistência às mudanças, estagnação. Pode indicar que está lutando contra o fluxo natural da vida.",
        elemento: "Fogo",
        planeta: "Júpiter",
        simbolismo: "A roda gira com figuras subindo e descendo. As quatro figuras nos cantos representam os quatro elementos fixos."
    },
    {
        numero: 11,
        nome: "A Justiça",
        keywords: "Equilíbrio, verdade, consequências",
        significado: "A Justiça representa equilíbrio, verdade e as consequências de nossas ações. É a lei do carma e da causa e efeito. Indica decisões justas, responsabilidade e honestidade.",
        invertida: "Injustiça, desonestidade, desequilíbrio. Pode indicar falta de responsabilidade ou consequências de atos passados.",
        elemento: "Ar",
        planeta: "Libra",
        simbolismo: "A figura segura a espada da verdade e a balança da justiça, representando discernimento imparcial."
    },
    {
        numero: 12,
        nome: "O Enforcado",
        keywords: "Sacrifício, perspectiva, entrega",
        significado: "O Enforcado representa o sacrifício voluntário, nova perspectiva e a entrega ao fluxo. É ver o mundo de cabeça para baixo e encontrar sabedoria. Indica pausa, aceitação e transformação pelo desapego.",
        invertida: "Martírio, teimosia, estagnação. Pode indicar resistência em mudar de perspectiva ou sacrifícios desnecessários.",
        elemento: "Água",
        planeta: "Netuno",
        simbolismo: "Pendurado de cabeça para baixo por vontade própria, seu rosto mostra serenidade. A auréola indica iluminação."
    },
    {
        numero: 13,
        nome: "A Morte",
        keywords: "Transformação, fim de ciclo, renascimento",
        significado: "A Morte representa transformação profunda, fim de um ciclo e renascimento. Não significa morte literal, mas o encerramento necessário para novos começos. Indica mudança inevitável e libertação do antigo.",
        invertida: "Resistência à mudança, estagnação, medo do fim. Pode indicar apego excessivo ao passado ou medo de transformação.",
        elemento: "Água",
        planeta: "Escorpião",
        simbolismo: "O cavaleiro esqueleto cavalga, mas ao fundo o sol nasce entre duas torres, prometendo um novo amanhecer."
    },
    {
        numero: 14,
        nome: "A Temperança",
        keywords: "Equilíbrio, moderação, harmonia",
        significado: "A Temperança representa equilíbrio, moderação e harmonia. É a arte de misturar opostos para criar algo novo e belo. Indica paciência, calma e integração de diferentes aspectos da vida.",
        invertida: "Excesso, impaciência, desequilíbrio. Pode indicar falta de moderação ou conflito entre extremos.",
        elemento: "Fogo",
        planeta: "Sagitário",
        simbolismo: "Um anjo transfere água entre dois cálices, equilibrando energias opostas com um pé na terra e outro na água."
    },
    {
        numero: 15,
        nome: "O Diabo",
        keywords: "Prisões, vícios, sombra",
        significado: "O Diabo representa as prisões que criamos para nós mesmos, vícios e a sombra interior. Aponta para dependências e padrões destrutivos. Indica necessidade de reconhecer o que nos prende e buscar libertação.",
        invertida: "Libertação, superação de vícios, despertar. Pode indicar que está quebrando correntes ou finalmente enxergando a verdade.",
        elemento: "Terra",
        planeta: "Capricórnio",
        simbolismo: "Duas figuras acorrentadas ao trono do Diabo, mas as correntes são frouxas — podem se libertar quando quiserem."
    },
    {
        numero: 16,
        nome: "A Torre",
        keywords: "Destruição, revelação, mudança repentina",
        significado: "A Torre representa destruição repentina, revelações chocantes e mudanças drásticas. É o colapso de estruturas falsas para revelar a verdade. Indica uma crise que, embora dolorosa, é necessária para o crescimento.",
        invertida: "Medo de mudança, desastre evitado, resistência. Pode indicar que está evitando uma mudança necessária ou que o pior já passou.",
        elemento: "Fogo",
        planeta: "Marte",
        simbolismo: "Um raio atinge a torre, derrubando suas coroas. As figuras caem, simbolizando o colapso de egos e ilusões."
    },
    {
        numero: 17,
        nome: "A Estrela",
        keywords: "Esperança, inspiração, renovação",
        significado: "A Estrela representa esperança, inspiração divina e renovação após a tempestade. É a luz que guia na escuridão. Indica um período de cura, otimismo e conexão com o propósito superior.",
        invertida: "Desesperança, desconexão, falta de fé. Pode indicar perda de direção ou dificuldade em ver o positivo.",
        elemento: "Ar",
        planeta: "Aquário",
        simbolismo: "Uma mulher derrama água na terra e no lago sob um céu estrelado, conectando consciência e subconsciente."
    },
    {
        numero: 18,
        nome: "A Lua",
        keywords: "Ilusão, intuição, inconsciente",
        significado: "A Lua representa o mundo das ilusões, medos e do inconsciente profundo. É o caminho através da escuridão guiado pela intuição. Indica que nem tudo é o que parece e que é preciso confiar nos instintos.",
        invertida: "Confusão dissipada, clareza, medos superados. Pode indicar que verdades ocultas estão vindo à tona.",
        elemento: "Água",
        planeta: "Peixes",
        simbolismo: "A lua ilumina um caminho entre duas torres. Um cão e um lobo uivam (instinto domesticado e selvagem), enquanto um crustáceo emerge das águas do subconsciente."
    },
    {
        numero: 19,
        nome: "O Sol",
        keywords: "Alegria, sucesso, vitalidade",
        significado: "O Sol representa alegria pura, sucesso e vitalidade abundante. É a carta mais positiva do tarot, indicando clareza, felicidade e realizações. Indica um momento de luz, otimismo e energia positiva.",
        invertida: "Excesso de otimismo, atrasos no sucesso, ego. Pode indicar arrogância ou dificuldade temporária em ver o lado positivo.",
        elemento: "Fogo",
        planeta: "Sol",
        simbolismo: "Uma criança alegre monta um cavalo branco sob um sol radiante. Os girassóis atrás representam a vida voltada para a luz."
    },
    {
        numero: 20,
        nome: "O Julgamento",
        keywords: "Renascimento, chamado, redenção",
        significado: "O Julgamento representa o renascimento espiritual, o chamado divino e a redenção. É o despertar da consciência e a avaliação da jornada. Indica transformação profunda, perdão e um novo propósito.",
        invertida: "Recusa em mudar, culpa, estagnação. Pode indicar que está ignorando um chamado importante ou se recusando a se perdoar.",
        elemento: "Fogo",
        planeta: "Plutão",
        simbolismo: "Um anjo toca a trombeta do julgamento final. Os mortos se erguem dos caixões, simbolizando o despertar espiritual."
    },
    {
        numero: 21,
        nome: "O Mundo",
        keywords: "Completude, realização, plenitude",
        significado: "O Mundo representa a completude de um ciclo, realização plena e integração total. É o final feliz, a conquista máxima e a harmonia com o universo. Indica sucesso, viagem, conclusão e celebração.",
        invertida: "Incompletude, atrasos, falta de encerramento. Pode indicar que algo precisa ser finalizado antes de seguir em frente.",
        elemento: "Terra",
        planeta: "Saturno",
        simbolismo: "Uma dançarina no centro de uma guirlanda oval, cercada pelos quatro elementos. Ela celebra a unificação de todas as experiências."
    }
];

const ARCANOS_MENORES = {
    copas: {
        nome: "Copas",
        elemento: "Água",
        simbolo: "♥",
        tema: "Emoções, amor, relacionamentos, intuição",
        cartas: [
            { valor: "Ás", keywords: "Novo amor, emoção pura, intuição", significado: "Início de um novo relacionamento ou renovação emocional. Representa o amor puro e o despertar dos sentimentos.", invertida: "Bloqueio emocional, amor não correspondido." },
            { valor: "2", keywords: "Parceria, atração, conexão", significado: "União de almas, parceria equilibrada e atração mútua. Representa o início de um relacionamento harmonioso.", invertida: "Desequilíbrio no relacionamento, separação." },
            { valor: "3", keywords: "Celebração, amizade, comunidade", significado: "Momento de celebração, festividade e alegria compartilhada com amigos e entes queridos.", invertida: "Excesso, isolamento social." },
            { valor: "4", keywords: "Apatia, contemplação, insatisfação", significado: "Período de insatisfação emocional. Olhar para dentro e reavaliar o que realmente importa.", invertida: "Despertar, novas oportunidades percebidas." },
            { valor: "5", keywords: "Perda, luto, arrependimento", significado: "Período de perda e tristeza, mas nem tudo está perdido. É preciso olhar para o que ainda resta.", invertida: "Aceitação, superação, seguir em frente." },
            { valor: "6", keywords: "Nostalgia, memórias, inocência", significado: "Memórias do passado, nostalgia e inocência. Pode indicar retorno a lugares ou pessoas do passado.", invertida: "Preso ao passado, incapacidade de seguir adiante." },
            { valor: "7", keywords: "Ilusão, fantasia, escolhas", significado: "Muitas opções e fantasias, mas nem tudo é real. Cuidado com ilusões e decisões baseadas em desejos irreais.", invertida: "Clareza, decisão tomada, foco." },
            { valor: "8", keywords: "Abandono, busca, jornada", significado: "Deixar para trás o que não serve mais em busca de algo mais profundo. Jornada espiritual e emocional.", invertida: "Medo de mudar, ficar no que é confortável." },
            { valor: "9", keywords: "Desejo realizado, satisfação, prazer", significado: "O 'cartão de desejo' do tarot. Satisfação emocional, realização de sonhos e contentamento.", invertida: "Ganância, insatisfação, desejos não realizados." },
            { valor: "10", keywords: "Felicidade, harmonia familiar, paz", significado: "Felicidade completa no lar e nos relacionamentos. Amor, harmonia e bênçãos familiares.", invertida: "Desarmonia familiar, conflitos domésticos." },
            { valor: "Pajem", keywords: "Mensagem emocional, criatividade, sonhador", significado: "Uma mensagem de amor ou uma oportunidade criativa. Representa a juventude emocional e a sensibilidade.", invertida: "Imaturidade emocional, mensagem decepcionante." },
            { valor: "Cavaleiro", keywords: "Romance, charme, convite", significado: "A chegada do romance ou de uma proposta. Pessoa encantadora e idealista que segue o coração.", invertida: "Ciúmes, decepção amorosa, fantasia." },
            { valor: "Rainha", keywords: "Compaixão, intuição, cuidado", significado: "Mulher compassiva e intuitiva que cuida dos outros com amor. Representa a maturidade emocional.", invertida: "Codependência, manipulação emocional." },
            { valor: "Rei", keywords: "Equilíbrio emocional, diplomacia, sabedoria", significado: "Mestre das emoções, equilibra razão e sentimento. Representa a maturidade afetiva e a diplomacia.", invertida: "Frieza emocional, manipulação." }
        ]
    },
    ouros: {
        nome: "Ouros",
        elemento: "Terra",
        simbolo: "♦",
        tema: "Matéria, finanças, trabalho, saúde",
        cartas: [
            { valor: "Ás", keywords: "Prosperidade, nova oportunidade, abundância", significado: "Uma nova oportunidade material ou financeira. Início de um empreendimento próspero ou ganho inesperado.", invertida: "Oportunidade perdida, avareza." },
            { valor: "2", keywords: "Equilíbrio, adaptação, prioridades", significado: "Necessidade de equilibrar múltiplas responsabilidades. Adaptação e flexibilidade nas finanças ou trabalho.", invertida: "Desequilíbrio, má gestão financeira." },
            { valor: "3", keywords: "Trabalho em equipe, habilidade, maestria", significado: "Colaboração produtiva e reconhecimento pelo trabalho. Maestria na profissão e crescimento.", invertida: "Mediocridade, falta de trabalho em equipe." },
            { valor: "4", keywords: "Segurança, posse, controle", significado: "Estabilidade financeira e desejo de proteger o que conquistou. Cuidado com o apego excessivo.", invertida: "Generosidade, liberar o controle." },
            { valor: "5", keywords: "Pobreza, dificuldade, exclusão", significado: "Dificuldades materiais e sensação de exclusão. Momento de buscar ajuda e reavaliar prioridades.", invertida: "Recuperação, fim das dificuldades." },
            { valor: "6", keywords: "Generosidade, caridade, equilíbrio", significado: "Dar e receber em equilíbrio. Generosidade recompensada e justiça nas trocas materiais.", invertida: "Dívidas, exploração, injustiça financeira." },
            { valor: "7", keywords: "Paciência, investimento, crescimento lento", significado: "Resultados que virão com o tempo. Paciência com investimentos e projetos de longo prazo.", invertida: "Impaciência, investimento ruim, frustração." },
            { valor: "8", keywords: "Dedicação, aprendizado, aperfeiçoamento", significado: "Foco no desenvolvimento de habilidades e na excelência profissional. Trabalho dedicado que trará resultados.", invertida: "Perfeccionismo, trabalho sem paixão." },
            { valor: "9", keywords: "Luxo, independência, autossuficiência", significado: "Independência financeira e conforto material. Momento de colher os frutos do trabalho árduo.", invertida: "Superficialidade, dependência material." },
            { valor: "10", keywords: "Riqueza, herança, legado familiar", significado: "Riqueza duradoura, legado familiar e estabilidade geracional. A conquista material plena.", invertida: "Perda financeira, conflitos por herança." },
            { valor: "Pajem", keywords: "Estudante, nova habilidade, oportunidade", significado: "Uma oportunidade de aprendizado ou um novo empreendimento. Jovem ambicioso e focado.", invertida: "Falta de foco, irresponsabilidade financeira." },
            { valor: "Cavaleiro", keywords: "Trabalho duro, rotina, responsabilidade", significado: "Pessoa dedicada e responsável que avança com determinação. Progresso lento, mas seguro.", invertida: "Estagnação, tédio, preguiça." },
            { valor: "Rainha", keywords: "Abundância, praticidade, nutrição", significado: "Mulher próspera e prática que cuida da família e dos recursos com sabedoria.", invertida: "Negligência financeira, insegurança." },
            { valor: "Rei", keywords: "Sucesso, liderança, riqueza", significado: "Mestre dos negócios, líder próspero que alcançou o sucesso material com sabedoria.", invertida: "Ganância, corrupção, materialismo." }
        ]
    },
    espadas: {
        nome: "Espadas",
        elemento: "Ar",
        simbolo: "♠",
        tema: "Mente, comunicação, conflitos, verdade",
        cartas: [
            { valor: "Ás", keywords: "Clareza mental, verdade, vitória", significado: "Um momento de clareza mental e verdade. Nova ideia poderosa ou vitória intelectual.", invertida: "Confusão, uso destrutivo do intelecto." },
            { valor: "2", keywords: "Impasse, indecisão, diplomacia", significado: "Decisão difícil entre dois caminhos. Necessidade de diplomacia e equilíbrio mental.", invertida: "Decisão tomada, verdade revelada." },
            { valor: "3", keywords: "Dor, coração partido, separação", significado: "Dor emocional profunda, traição ou separação dolorosa. Momento de luto necessário para curar.", invertida: "Recuperação, perdão, superação da dor." },
            { valor: "4", keywords: "Descanso, recuperação, meditação", significado: "Pausa necessária para recuperar as forças mentais. Meditação e recolhimento antes de agir.", invertida: "Inquietação, retorno à atividade." },
            { valor: "5", keywords: "Conflito, derrota, humilhação", significado: "Conflito ou derrota. Alguém pode estar agindo de forma desonesta. Cuidado com situações injustas.", invertida: "Reconciliação, aprender com a derrota." },
            { valor: "6", keywords: "Transição, mudança, jornada", significado: "Viagem ou mudança necessária. Deixar para trás dificuldades rumo a águas mais calmas.", invertida: "Estagnação, viagem adiada, resistência." },
            { valor: "7", keywords: "Estratégia, engano, astúcia", significado: "Uso da inteligência para superar obstáculos. Cuidado com enganos — seus ou de outros.", invertida: "Confissão, planos fracassados." },
            { valor: "8", keywords: "Prisão mental, limitação, vítima", significado: "Sentimento de estar preso por pensamentos ou circunstâncias. A prisão pode ser mental e autoimposta.", invertida: "Libertação, nova perspectiva." },
            { valor: "9", keywords: "Ansiedade, pesadelos, preocupação", significado: "Ansiedade extrema e pensamentos obsessivos. Os medos podem ser maiores do que a realidade.", invertida: "Esperança, fim das preocupações." },
            { valor: "10", keywords: "Fim doloroso, traição, colapso", significado: "O ponto mais baixo. Uma situação chegou ao fim doloroso, mas o único caminho agora é para cima.", invertida: "Sobrevivência, recuperação, recomeço." },
            { valor: "Pajem", keywords: "Curiosidade, vigilância, espionagem", significado: "Mente ágil e curiosa. Pode indicar notícias, fofocas ou necessidade de investigar algo.", invertida: "Fofoca, paranoia, espionagem." },
            { valor: "Cavaleiro", keywords: "Ação rápida, ambição, impulsividade", significado: "Ação decisiva e rápida. Pessoa inteligente e determinada, mas pode ser impulsiva.", invertida: "Imprudência, conflito, agressividade verbal." },
            { valor: "Rainha", keywords: "Independência, percepção, verdade", significado: "Mulher independente e perceptiva que corta as ilusões com a verdade. Mente afiada e justa.", invertida: "Crueldade, manipulação intelectual." },
            { valor: "Rei", keywords: "Autoridade mental, lógica, justiça", significado: "Mestre do intelecto, líder justo que governa com a razão. Decisões claras e imparciais.", invertida: "Tirania intelectual, frieza, abuso de poder." }
        ]
    },
    paus: {
        nome: "Paus",
        elemento: "Fogo",
        simbolo: "♣",
        tema: "Energia, paixão, criatividade, ação",
        cartas: [
            { valor: "Ás", keywords: "Inspiração, criatividade, novo início", significado: "Uma faísca de inspiração e criatividade. Novo projeto cheio de energia e potencial.", invertida: "Atrasos, falta de motivação, bloqueio criativo." },
            { valor: "2", keywords: "Planejamento, decisão, visão de futuro", significado: "Momento de planejar o futuro e decidir a direção. O mundo está em suas mãos.", invertida: "Medo do desconhecido, planejamento pobre." },
            { valor: "3", keywords: "Expansão, comércio, viagem", significado: "Expansão dos horizontes, comércio bem-sucedido e crescimento. Projetos ganham alcance.", invertida: "Atrasos, falta de visão, esforço desperdiçado." },
            { valor: "4", keywords: "Celebração, lar, harmonia", significado: "Celebração no lar, harmonia e estabilidade. Momento de festejar conquistas em família.", invertida: "Instabilidade, falta de raízes." },
            { valor: "5", keywords: "Competição, conflito, desafio", significado: "Competição saudável ou conflito. Desafios que estimulam o crescimento e a superação.", invertida: "Evitar conflitos, buscar paz." },
            { valor: "6", keywords: "Vitória, reconhecimento, triunfo", significado: "Vitória pública e reconhecimento pelo esforço. Momento de glória e celebração merecida.", invertida: "Derrota, falta de reconhecimento." },
            { valor: "7", keywords: "Perseverança, defesa, coragem", significado: "Defender suas crenças e valores contra adversidades. Perseverança diante dos desafios.", invertida: "Desistência, sentir-se sobrecarregado." },
            { valor: "8", keywords: "Velocidade, movimento, progresso rápido", significado: "As coisas estão se movendo rapidamente. Notícias, viagens ou mudanças acontecem em velocidade.", invertida: "Atrasos, frustração, pressa excessiva." },
            { valor: "9", keywords: "Resiliência, persistência, última batalha", significado: "Quase lá, mas precisa de mais um esforço. Resiliência e determinação para completar a jornada.", invertida: "Exaustão, recusa em continuar." },
            { valor: "10", keywords: "Sobrecarga, responsabilidade, fardo", significado: "Peso excessivo de responsabilidades. Cuidado para não assumir mais do que pode carregar.", invertida: "Delegação, alívio, soltar o controle." },
            { valor: "Pajem", keywords: "Entusiasmo, exploração, notícias", significado: "Jovem entusiasmado com novas ideias e aventuras. Pode indicar boas notícias ou um novo projeto.", invertida: "Imaturidade, ideias sem execução." },
            { valor: "Cavaleiro", keywords: "Aventura, paixão, impulsividade", significado: "Pessoa apaixonada e aventureira que age com entusiasmo. Energia contagiante e determinação.", invertida: "Impulsividade, frustração, conflito." },
            { valor: "Rainha", keywords: "Confiança, independência, carisma", significado: "Mulher confiante e carismática que inspira os outros com sua energia e determinação.", invertida: "Ciúmes, temperamento explosivo." },
            { valor: "Rei", keywords: "Liderança, visão, empreendedorismo", significado: "Líder visionário e empreendedor que inspira e motiva. Mestre da ação e da criatividade.", invertida: "Arrogância, expectativas irrealistas." }
        ]
    }
};

const TIRAGENS = [
    {
        nome: "Tiragem de Uma Carta",
        numCartas: 1,
        descricao: "A forma mais simples de consulta. Ideal para orientação diária ou quando se precisa de uma resposta rápida e direta.",
        indicada: "Perguntas simples, orientação diária, reflexão do dia, decisões rápidas.",
        posicoes: ["A mensagem / energia do momento"]
    },
    {
        nome: "Tiragem de Três Cartas",
        numCartas: 3,
        descricao: "Uma das tiragens mais versáteis do tarot. Pode representar diferentes tríades: passado-presente-futuro, mente-corpo-espírito, situação-ação-resultado.",
        indicada: "Perguntas sobre evolução de situações, entender contextos, decisões com consequências.",
        posicoes: ["Passado / Situação", "Presente / Ação", "Futuro / Resultado"]
    },
    {
        nome: "Cruz Celta",
        numCartas: 10,
        descricao: "A tiragem mais clássica e completa do tarot. Oferece uma visão panorâmica da situação, incluindo influências ocultas, esperanças, medos e o resultado final.",
        indicada: "Questões complexas, análise profunda de situações de vida, entender múltiplas influências.",
        posicoes: [
            "Situação presente",
            "Desafio / Obstáculo",
            "Base / Fundação",
            "Passado recente",
            "Possibilidade / Melhor resultado",
            "Futuro próximo",
            "Você / Atitude",
            "Ambiente / Influências externas",
            "Esperanças e Medos",
            "Resultado final"
        ]
    },
    {
        nome: "Ferradura",
        numCartas: 7,
        descricao: "Uma tiragem em forma de ferradura que oferece uma visão abrangente do passado ao futuro, incluindo conselhos e influências externas.",
        indicada: "Questões sobre o desenvolvimento de uma situação, influências externas, conselhos práticos.",
        posicoes: [
            "Passado",
            "Presente",
            "Futuro",
            "Conselho",
            "Influências externas",
            "Esperanças / Medos",
            "Resultado"
        ]
    },
    {
        nome: "Tiragem do Sim ou Não",
        numCartas: 5,
        descricao: "Tiragem específica para perguntas que requerem uma resposta direta de sim ou não. As cartas na posição normal indicam 'sim' e invertidas indicam 'não'. A maioria define a resposta.",
        indicada: "Perguntas diretas de sim ou não, decisões binárias, confirmações.",
        posicoes: [
            "Carta 1", "Carta 2", "Carta 3", "Carta 4", "Carta 5"
        ]
    },
    {
        nome: "Tiragem do Relacionamento",
        numCartas: 6,
        descricao: "Focada em analisar a dinâmica entre duas pessoas. Mostra como cada um se sente, o que une e o que desafia a relação.",
        indicada: "Questões amorosas, dinâmica de relacionamentos, compatibilidade, conflitos entre duas pessoas.",
        posicoes: [
            "Como você se sente",
            "Como a outra pessoa se sente",
            "O que une vocês",
            "O que desafia vocês",
            "Conselho",
            "Futuro do relacionamento"
        ]
    },
    {
        nome: "Tiragem da Estrela",
        numCartas: 7,
        descricao: "Tiragem espiritual em formato de estrela que conecta aspectos físicos, emocionais, mentais e espirituais da questão.",
        indicada: "Autoconhecimento, desenvolvimento pessoal, questões espirituais, equilíbrio interior.",
        posicoes: [
            "Corpo / Físico",
            "Mente / Pensamentos",
            "Espírito / Alma",
            "Emoções / Sentimentos",
            "Lição a aprender",
            "O que liberar",
            "O que abraçar"
        ]
    },
    {
        nome: "Mandala Astrológica",
        numCartas: 12,
        descricao: "Cada carta corresponde a uma casa astrológica, cobrindo todas as áreas da vida. Uma tiragem completa para análise geral.",
        indicada: "Panorama geral da vida, previsão anual, análise completa de todas as áreas.",
        posicoes: [
            "1ª Casa - Identidade",
            "2ª Casa - Finanças",
            "3ª Casa - Comunicação",
            "4ª Casa - Lar / Família",
            "5ª Casa - Criatividade / Romance",
            "6ª Casa - Saúde / Trabalho",
            "7ª Casa - Relacionamentos",
            "8ª Casa - Transformação",
            "9ª Casa - Espiritualidade",
            "10ª Casa - Carreira",
            "11ª Casa - Amizades / Sonhos",
            "12ª Casa - Subconsciente"
        ]
    }
];
