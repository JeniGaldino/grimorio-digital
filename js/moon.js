const FASES_LUA = [
    {
        nome: "Lua Nova",
        emoji: "🌑",
        descricao: "A Lua Nova é o momento de novos começos e sementes. É quando a lua está completamente escura, representando o potencial puro e o vazio fértil. É o melhor momento para plantar intenções, iniciar projetos e fazer planos.",
        energia: "Introspecção, novos começos, planejamento",
        magias: [
            "Rituais de novos começos e intenções",
            "Magia para iniciar projetos",
            "Meditação e introspecção profunda",
            "Feitiços de atração (plantar sementes mágicas)",
            "Trabalhos de autoconhecimento",
            "Banimentos e eliminação de hábitos"
        ],
        melhorPara: "Definir intenções, planejar, meditar, começar diários e iniciar estudos."
    },
    {
        nome: "Lua Crescente",
        emoji: "🌒",
        descricao: "A Lua Crescente é o momento de ação e construção. Conforme a lua vai se iluminando, a energia cresce e se expande. É hora de agir sobre as intenções plantadas na Lua Nova e construir ativamente.",
        energia: "Crescimento, atração, construção",
        magias: [
            "Feitiços de atração (amor, dinheiro, sucesso)",
            "Rituais de crescimento pessoal e profissional",
            "Magia de prosperidade e abundância",
            "Feitiços para fortalecer relacionamentos",
            "Trabalhos para aumentar a sorte",
            "Rituais de cura e fortalecimento da saúde"
        ],
        melhorPara: "Atrair oportunidades, fazer pedidos, iniciar negócios, fortalecer vínculos."
    },
    {
        nome: "Lua Cheia",
        emoji: "🌕",
        descricao: "A Lua Cheia é o ápice do poder lunar, quando a energia está no máximo. É o momento mais poderoso para qualquer tipo de magia. A lua totalmente iluminada amplifica tudo — intenções, emoções e poderes mágicos.",
        energia: "Poder máximo, manifestação, expansão",
        magias: [
            "Qualquer tipo de magia (potência máxima)",
            "Rituais de manifestação e realização",
            "Magia de expansão e amplificação de energia",
            "Carregar cristais e ferramentas mágicas",
            "Adivinhação e clarividência",
            "Feitiços de fertilidade e abundância plena",
            "Rituais de gratidão pela colheita"
        ],
        melhorPara: "Manifestar desejos, carregar objetos mágicos, celebrar conquistas, praticar adivinhação."
    },
    {
        nome: "Lua Minguante",
        emoji: "🌘",
        descricao: "A Lua Minguante é o momento de liberar e banir. Conforme a lua vai escurecendo, a energia se volta para dentro e dissolve o que não serve mais. É hora de soltar, limpar e encerrar ciclos.",
        energia: "Liberação, banimento, limpeza",
        magias: [
            "Banimentos e proteção",
            "Quebra de feitiços e maldições",
            "Rituais de limpeza energética",
            "Encerramento de ciclos e relacionamentos tóxicos",
            "Eliminação de vícios e maus hábitos",
            "Trabalhos de perdão e desapego",
            "Feitiços para afastar inimigos"
        ],
        melhorPara: "Limpar energias, encerrar situações, romper padrões, desintoxicar corpo e espírito."
    },
    {
        nome: "Lua Negra (Segunda Lua Nova)",
        emoji: "⚫",
        descricao: "A Lua Negra é a segunda Lua Nova em um mesmo mês — um evento raro e poderoso. Considerada um momento de magia amplificada, é ideal para trabalhos profundos de transformação e contato com o subconsciente.",
        energia: "Transformação profunda, mistério, poder oculto",
        magias: [
            "Trabalhos de sombra e autoconhecimento profundo",
            "Magia de transformação radical",
            "Rituais de renascimento espiritual",
            "Contato com ancestrais",
            "Adivinhação profunda",
            "Meditação nas profundezas do subconsciente"
        ],
        melhorPara: "Trabalho de sombra, transformações profundas, rituais ancestrais."
    },
    {
        nome: "Lua Azul (Segunda Lua Cheia)",
        emoji: "🔵",
        descricao: "A Lua Azul é a segunda Lua Cheia em um mesmo mês — um evento raro que amplifica a energia lunar. 'Uma vez na lua azul' é sinônimo de raridade. É um momento de poder excepcional para magia.",
        energia: "Poder amplificado, raridade, desejos especiais",
        magias: [
            "Desejos especiais e difíceis de alcançar",
            "Magia amplificada de qualquer tipo",
            "Rituais únicos e poderosos",
            "Manifestação de grandes mudanças de vida",
            "Conexão espiritual intensificada",
            "Gratidão e celebração"
        ],
        melhorPara: "Pedidos especiais, desejos raros, celebrações mágicas, rituais de grande poder."
    }
];

const DIAS_SEMANA = [
    {
        nome: "Domingo",
        emoji: "☀️",
        planeta: "Sol",
        cor: "Amarelo / Dourado",
        energia: "Sucesso, vitalidade, liderança, saúde e alegria",
        descricao: "O dia do Sol é dedicado à energia masculina, ao sucesso, à vitalidade e à autoridade. É o melhor dia para trabalhos que envolvam saúde, prosperidade, liderança e crescimento pessoal.",
        magias: [
            "Rituais de sucesso e vitória",
            "Magia de cura e saúde",
            "Feitiços de prosperidade e riqueza",
            "Trabalhos de liderança e poder pessoal",
            "Rituais de alegria e otimismo",
            "Carregar amuletos e talismãs"
        ],
        deuses: "Apolo, Rá, Hélio"
    },
    {
        nome: "Segunda-feira",
        emoji: "🌙",
        planeta: "Lua",
        cor: "Branco / Prata",
        energia: "Intuição, emoções, sonhos, lar e fertilidade",
        descricao: "O dia da Lua é voltado para a intuição, as emoções e o mundo interior. Ideal para trabalhos com sonhos, adivinhação, proteção do lar e conexão com o feminino sagrado.",
        magias: [
            "Rituais de intuição e clarividência",
            "Magia de proteção do lar",
            "Trabalhos com sonhos e adivinhação",
            "Feitiços de fertilidade",
            "Banhos de purificação",
            "Meditação e introspecção"
        ],
        deuses: "Ártemis/Diana, Selene, Hecate"
    },
    {
        nome: "Terça-feira",
        emoji: "⚔️",
        planeta: "Marte",
        cor: "Vermelho",
        energia: "Coragem, força, proteção, competição e paixão",
        descricao: "O dia de Marte é dedicado à ação, à coragem e à força. É o melhor dia para enfrentar desafios, buscar proteção, trabalhar com paixão e resolver conflitos com determinação.",
        magias: [
            "Rituais de proteção e defesa",
            "Feitiços de coragem e força",
            "Magia de paixão e desejo",
            "Trabalhos para vencer competições",
            "Banimentos e quebra de obstáculos",
            "Rituais para superar medos"
        ],
        deuses: "Ares/Marte, Tyr"
    },
    {
        nome: "Quarta-feira",
        emoji: "📚",
        planeta: "Mercúrio",
        cor: "Laranja / Roxo",
        energia: "Comunicação, estudos, viagens, comércio e inteligência",
        descricao: "O dia de Mercúrio favorece a comunicação, o aprendizado e o comércio. Ideal para feitiços que envolvam estudos, viagens, negócios, escritos e qualquer forma de comunicação.",
        magias: [
            "Rituais de comunicação e eloquência",
            "Feitiços para estudos e provas",
            "Magia de comércio e negócios",
            "Trabalhos para viagens seguras",
            "Rituais de escrita e criatividade",
            "Feitiços de tecnologia e informação"
        ],
        deuses: "Hermes/Mercúrio, Thoth, Odin"
    },
    {
        nome: "Quinta-feira",
        emoji: "⚡",
        planeta: "Júpiter",
        cor: "Azul / Roxo",
        energia: "Expansão, sorte, justiça, riqueza e espiritualidade",
        descricao: "O dia de Júpiter é o mais auspicioso para sorte, expansão e crescimento. Ideal para trabalhos de prosperidade em grande escala, justiça, questões legais e desenvolvimento espiritual.",
        magias: [
            "Rituais de prosperidade e abundância",
            "Feitiços de sorte e fortuna",
            "Magia de justiça e questões legais",
            "Trabalhos de expansão espiritual",
            "Rituais de generosidade e gratidão",
            "Feitiços para oportunidades"
        ],
        deuses: "Zeus/Júpiter, Thor"
    },
    {
        nome: "Sexta-feira",
        emoji: "💕",
        planeta: "Vênus",
        cor: "Verde / Rosa",
        energia: "Amor, beleza, arte, prazer e harmonia",
        descricao: "O dia de Vênus é dedicado ao amor em todas as suas formas. É o melhor dia para feitiços de amor, beleza, harmonia, arte e prazer. A energia favorece relacionamentos e autoestima.",
        magias: [
            "Rituais de amor e romance",
            "Feitiços de beleza e autoestima",
            "Magia de harmonia e reconciliação",
            "Trabalhos de arte e criatividade",
            "Rituais de amizade",
            "Feitiços de prazer e indulgência"
        ],
        deuses: "Afrodite/Vênus, Freya"
    },
    {
        nome: "Sábado",
        emoji: "🪐",
        planeta: "Saturno",
        cor: "Preto / Marrom",
        energia: "Proteção, banimento, sabedoria, limites e karma",
        descricao: "O dia de Saturno é para trabalhos sérios de proteção, banimento e encerramento. É o dia ideal para lidar com limites, karma, disciplina e para se proteger de energias negativas.",
        magias: [
            "Rituais de banimento e proteção poderosa",
            "Feitiços de encerramento e corte",
            "Magia de karma e justiça cármica",
            "Trabalhos de disciplina e estrutura",
            "Rituais para afastar negatividade",
            "Feitiços de sabedoria ancestral"
        ],
        deuses: "Cronos/Saturno, Hecate"
    }
];

const CORES_MAGICAS = [
    {
        nome: "Branco",
        hex: "#FFFFFF",
        energia: "Pureza, paz, proteção, verdade e todos os propósitos",
        descricao: "O branco contém todas as cores e pode substituir qualquer outra em rituais. Representa pureza, paz, verdade e proteção espiritual. É a cor da lua e da deusa.",
        usos: ["Purificação e limpeza energética", "Proteção espiritual", "Paz e harmonia", "Cura", "Substituir qualquer outra cor", "Rituais de lua cheia"]
    },
    {
        nome: "Preto",
        hex: "#1a1a1a",
        energia: "Proteção, banimento, absorção de negatividade e mistério",
        descricao: "O preto absorve toda luz e energia negativa. Não representa o mal — é a cor da proteção suprema, do banimento e dos mistérios. Usado para afastar, proteger e encerrar ciclos.",
        usos: ["Banimento de negatividade", "Proteção poderosa", "Encerrar situações", "Trabalho de sombra", "Rituais de lua nova", "Absorver doenças"]
    },
    {
        nome: "Vermelho",
        hex: "#cc2222",
        energia: "Paixão, coragem, força, vitalidade e amor sexual",
        descricao: "O vermelho é a cor do fogo, do sangue e da paixão. Representa coragem, força vital, desejo sexual e ação. É a cor mais energética e estimulante na magia.",
        usos: ["Feitiços de paixão e desejo", "Rituais de coragem e força", "Magia de vitalidade e saúde", "Proteção ativa", "Rituais de Marte/terça-feira", "Amor sexual e fertilidade"]
    },
    {
        nome: "Rosa",
        hex: "#e88fa5",
        energia: "Amor romântico, amizade, ternura, cura emocional",
        descricao: "O rosa é a cor do amor suave, da amizade e da cura emocional. Diferente do vermelho (paixão), o rosa representa o amor gentil, o carinho e a reconciliação.",
        usos: ["Amor romântico e gentil", "Cura emocional", "Amizade e harmonia", "Autoestima e autocuidado", "Reconciliação", "Rituais de Vênus/sexta-feira"]
    },
    {
        nome: "Laranja",
        hex: "#e67e22",
        energia: "Criatividade, sucesso, atração, energia e entusiasmo",
        descricao: "O laranja combina a energia do vermelho com a alegria do amarelo. Representa criatividade, entusiasmo, atração e sucesso. Excelente para estimular a ação positiva.",
        usos: ["Estimular criatividade", "Atrair sucesso e oportunidades", "Rituais de energia e entusiasmo", "Magia de carreira e negócios", "Confiança e carisma", "Feitiços de Mercúrio/quarta-feira"]
    },
    {
        nome: "Amarelo",
        hex: "#f1c40f",
        energia: "Intelecto, alegria, comunicação, estudo e clareza",
        descricao: "O amarelo é a cor do Sol e da mente. Representa inteligência, comunicação, alegria, estudo e clareza mental. Ideal para trabalhos intelectuais e de comunicação.",
        usos: ["Estimular o intelecto e a memória", "Rituais de estudo e aprendizado", "Comunicação e persuasão", "Alegria e otimismo", "Clareza mental", "Rituais de Sol/domingo"]
    },
    {
        nome: "Verde",
        hex: "#27ae60",
        energia: "Prosperidade, cura, crescimento, fertilidade e natureza",
        descricao: "O verde é a cor da natureza, do dinheiro e da cura. Representa crescimento, prosperidade, saúde, fertilidade e equilíbrio. A cor mais usada em magia de dinheiro.",
        usos: ["Magia de dinheiro e prosperidade", "Rituais de cura e saúde", "Crescimento e fertilidade", "Equilíbrio e harmonia", "Trabalhos com natureza e plantas", "Rituais de Vênus/sexta-feira"]
    },
    {
        nome: "Azul",
        hex: "#2980b9",
        energia: "Paz, verdade, justiça, sabedoria e cura espiritual",
        descricao: "O azul é a cor do céu e do mar. Representa paz, verdade, justiça, sabedoria e proteção espiritual. Ideal para meditação e trabalhos que exijam calma.",
        usos: ["Paz e tranquilidade", "Verdade e justiça", "Meditação e sabedoria", "Cura espiritual", "Proteção durante o sono", "Rituais de Júpiter/quinta-feira"]
    },
    {
        nome: "Roxo / Violeta",
        hex: "#8e44ad",
        energia: "Espiritualidade, poder psíquico, transformação e sabedoria oculta",
        descricao: "O roxo é a cor da espiritualidade e do poder psíquico. Representa transformação, sabedoria oculta, adivinhação e conexão com o divino. A cor dos mistérios.",
        usos: ["Desenvolvimento psíquico", "Adivinhação e clarividência", "Meditação profunda", "Poder espiritual", "Transformação e transmutação", "Rituais de Saturno/sábado"]
    },
    {
        nome: "Dourado",
        hex: "#c9a84c",
        energia: "Riqueza, sucesso supremo, poder solar e abundância divina",
        descricao: "O dourado representa o poder do Sol, a riqueza divina e o sucesso supremo. É a cor da realeza espiritual, da iluminação e da prosperidade em seu nível mais alto.",
        usos: ["Prosperidade e riqueza máxima", "Sucesso e reconhecimento", "Poder solar e masculino divino", "Iluminação espiritual", "Confiança e autoestima", "Rituais de Sol/domingo"]
    },
    {
        nome: "Prata",
        hex: "#c0c0c0",
        energia: "Intuição, feminino sagrado, lua, sonhos e reflexão",
        descricao: "A prata é a cor da Lua e do feminino sagrado. Representa intuição, sonhos, reflexão e poder psíquico. Ideal para trabalhos lunares e conexão com a deusa.",
        usos: ["Rituais lunares", "Intuição e clarividência", "Trabalhos com sonhos", "Feminino sagrado", "Purificação", "Rituais de segunda-feira"]
    },
    {
        nome: "Marrom",
        hex: "#8b5e3c",
        energia: "Terra, estabilidade, animais, lar e fundações",
        descricao: "O marrom é a cor da terra firme. Representa estabilidade, segurança, conexão com animais, lar e proteção material. Ideal para fundamentar e estabilizar energias.",
        usos: ["Proteção do lar e da propriedade", "Estabilidade e segurança", "Conexão com a terra", "Magia com animais", "Fundações e raízes", "Rituais de Saturno"]
    }
];
