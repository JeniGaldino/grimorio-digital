// ===== IMAGENS DO TAROT — Rider-Waite-Smith (Domínio Público, 1909) =====
// Wikimedia Commons exige tamanhos "step": 20,40,60,120,250,330,500,960px
// Usando 250px para cards grid e 500px para detalhes

const WIKI_THUMB = 'https://upload.wikimedia.org/wikipedia/commons/thumb/';

// Hash paths das 22 cartas maiores
const _MAJOR_PATHS = [
    '9/90/RWS_Tarot_00_Fool.jpg',
    'd/de/RWS_Tarot_01_Magician.jpg',
    '8/88/RWS_Tarot_02_High_Priestess.jpg',
    'd/d2/RWS_Tarot_03_Empress.jpg',
    'c/c3/RWS_Tarot_04_Emperor.jpg',
    '8/8d/RWS_Tarot_05_Hierophant.jpg',
    'd/db/RWS_Tarot_06_Lovers.jpg',
    '9/9b/RWS_Tarot_07_Chariot.jpg',
    'f/f5/RWS_Tarot_08_Strength.jpg',
    '4/4d/RWS_Tarot_09_Hermit.jpg',
    '3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg',
    'e/e0/RWS_Tarot_11_Justice.jpg',
    '2/2b/RWS_Tarot_12_Hanged_Man.jpg',
    'd/d7/RWS_Tarot_13_Death.jpg',
    'f/f8/RWS_Tarot_14_Temperance.jpg',
    '5/55/RWS_Tarot_15_Devil.jpg',
    '5/53/RWS_Tarot_16_Tower.jpg',
    'd/db/RWS_Tarot_17_Star.jpg',
    '7/7f/RWS_Tarot_18_Moon.jpg',
    '1/17/RWS_Tarot_19_Sun.jpg',
    'd/dd/RWS_Tarot_20_Judgement.jpg',
    'f/ff/RWS_Tarot_21_World.jpg'
];

function _wikiThumb(path, size) {
    const filename = path.split('/').pop();
    return WIKI_THUMB + path + '/' + size + 'px-' + filename;
}

// Thumbnails 250px para os cards
const IMAGENS_ARCANOS_MAIORES = {};
_MAJOR_PATHS.forEach((p, i) => { IMAGENS_ARCANOS_MAIORES[i] = _wikiThumb(p, 250); });

// Versão 500px para detail modals
function getMajorDetailImage(numero) {
    return _wikiThumb(_MAJOR_PATHS[numero], 500);
}

// Arcanos Menores — hash paths por naipe, índice 0 vazio (cartas são 1-14)
const _MINOR_PATHS = {
    copas:   { prefix: 'Cups',   hashes: ['','3/36','f/f8','7/7a','3/35','d/d7','1/17','a/ae','6/60','2/24','8/84','a/ad','f/fa','6/62','0/04'] },
    ouros:   { prefix: 'Pents',  hashes: ['','f/fd','9/9f','4/42','3/35','9/96','a/a6','6/6a','4/49','f/f0','4/42','e/ec','d/d5','8/88','1/1c'] },
    espadas: { prefix: 'Swords', hashes: ['','1/1a','9/9e','0/02','b/bf','2/23','2/29','3/34','a/a7','2/2f','d/d4','4/4c','b/b0','d/d4','3/33'] },
    paus:    { prefix: 'Wands',  hashes: ['','1/11','0/0f','f/ff','a/a4','9/9d','3/3b','e/e4','6/6b','e/e7','0/0b','6/6a','1/16','0/0d','c/ce'] }
};

function _minorPath(naipe, index) {
    const suit = _MINOR_PATHS[naipe];
    if (!suit || index < 1 || index > 14) return null;
    const num = index.toString().padStart(2, '0');
    const filename = suit.prefix + num + '.jpg';
    return suit.hashes[index] + '/' + filename;
}

function getMinorArcanaImage(naipe, index) {
    const path = _minorPath(naipe, index);
    return path ? _wikiThumb(path, 250) : null;
}

function getMinorDetailImage(naipe, index) {
    const path = _minorPath(naipe, index);
    return path ? _wikiThumb(path, 500) : null;
}

// Mapeamento: valor da carta → índice (1-14)
const VALOR_INDEX = {
    'Ás': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
    '8': 8, '9': 9, '10': 10, 'Pajem': 11, 'Cavaleiro': 12, 'Rainha': 13, 'Rei': 14
};

// ===== IMAGENS DOS DEUSES — Esculturas clássicas (Domínio Público) =====
// 330px é um tamanho permitido pelo Wikimedia

const IMAGENS_DEUSES = {
    'Zeus': WIKI_THUMB + '2/20/Zeus_Otricoli_Pio-Clementino_Inv257.jpg/330px-Zeus_Otricoli_Pio-Clementino_Inv257.jpg',
    'Hera': WIKI_THUMB + '7/76/Hera_Campana_Louvre_Ma2283.jpg/330px-Hera_Campana_Louvre_Ma2283.jpg',
    'Poseidon': WIKI_THUMB + 'e/ea/Statue_of_Poseidon_NAMA_235_%28DerHexer%29%2C_part_2.JPG/330px-Statue_of_Poseidon_NAMA_235_%28DerHexer%29%2C_part_2.JPG',
    'Atena': WIKI_THUMB + '2/22/Mattei_Athena_Louvre_Ma530_n2.jpg/330px-Mattei_Athena_Louvre_Ma530_n2.jpg',
    'Apolo': WIKI_THUMB + '0/0c/Italy-3104_-_Apollo_%285378415112%29.jpg/330px-Italy-3104_-_Apollo_%285378415112%29.jpg',
    'Ártemis': WIKI_THUMB + '0/03/Diane_de_Versailles_-_Mus%C3%A9e_du_Louvre_AGER_Ma_589.jpg/330px-Diane_de_Versailles_-_Mus%C3%A9e_du_Louvre_AGER_Ma_589.jpg',
    'Afrodite': WIKI_THUMB + '9/9a/Cnidus_Aphrodite_Altemps_Inv8619.jpg/330px-Cnidus_Aphrodite_Altemps_Inv8619.jpg',
    'Ares': WIKI_THUMB + '7/75/Ares_Canope_Villa_Adriana_b.jpg/330px-Ares_Canope_Villa_Adriana_b.jpg',
    'Hefesto': WIKI_THUMB + 'd/da/Hephaistos_Thetis_at_Kylix_by_the_Foundry_Painter_Antikensammlung_Berlin_F2294.jpg/330px-Hephaistos_Thetis_at_Kylix_by_the_Foundry_Painter_Antikensammlung_Berlin_F2294.jpg',
    'Hermes': WIKI_THUMB + 'd/d0/Hermes_Ingenui_Pio-Clementino_Inv544.jpg/330px-Hermes_Ingenui_Pio-Clementino_Inv544.jpg',
    'Dionísio': WIKI_THUMB + '8/8a/Dionysos_Louvre_Ma87_n2.jpg/330px-Dionysos_Louvre_Ma87_n2.jpg',
    'Deméter': WIKI_THUMB + 'a/a2/Demeter_Altemps_Inv8546.jpg/330px-Demeter_Altemps_Inv8546.jpg',
    'Hades': WIKI_THUMB + '3/39/Persephone_Hades_BM_Vase_E82_%28cropped%29.jpg/330px-Persephone_Hades_BM_Vase_E82_%28cropped%29.jpg',
    'Perséfone': WIKI_THUMB + 'c/ce/AMI_-_Isis-Persephone.jpg/330px-AMI_-_Isis-Persephone.jpg',
    'Héstia': WIKI_THUMB + 'a/a5/Hestia_Giustiniani.jpg/330px-Hestia_Giustiniani.jpg',
    'Eros': WIKI_THUMB + '4/45/Eros_Farnese_N%C3%A1poles_05.jpg/330px-Eros_Farnese_N%C3%A1poles_05.jpg',
    'Gaia': WIKI_THUMB + '8/89/Pergamonmuseum_-_Antikensammlung_-_Pergamonaltar_13_detail.jpg/330px-Pergamonmuseum_-_Antikensammlung_-_Pergamonaltar_13_detail.jpg',
    'Urano': WIKI_THUMB + '4/49/Altar_P%C3%A9rgamo_Urano_01.JPG/330px-Altar_P%C3%A9rgamo_Urano_01.JPG',
    'Nix': WIKI_THUMB + 'b/bc/Terracotta_lekythos_%28oil_flask%29_MET_DP225322_%28cropped%29.jpg/330px-Terracotta_lekythos_%28oil_flask%29_MET_DP225322_%28cropped%29.jpg',
    'Cronos': WIKI_THUMB + '3/33/Rhea_handing_a_swaddled_stone_to_Cronus%2C_Attic_terracotta_pelike%2C_c._460%E2%80%93450_BC%2C_Met_06.1021.144.jpg_%28cropped%29.jpg/330px-Rhea_handing_a_swaddled_stone_to_Cronus%2C_Attic_terracotta_pelike%2C_c._460%E2%80%93450_BC%2C_Met_06.1021.144.jpg_%28cropped%29.jpg',
    'Reia': WIKI_THUMB + '0/08/Rhea_MKL1888.png/330px-Rhea_MKL1888.png',
    'Atlas': WIKI_THUMB + '8/8c/MAN_Atlante_fronte_1040572.JPG/330px-MAN_Atlante_fronte_1040572.JPG',
    'Prometeu': WIKI_THUMB + '7/72/Prometheus_and_Atlas%2C_Laconian_black-figure_kylix%2C_by_the_Arkesilas_Painter%2C_560-550_BC%2C_inv._16592_-_Museo_Gregoriano_Etrusco_-_Vatican_Museums_-_DSC01069.jpg/330px-Prometheus_and_Atlas%2C_Laconian_black-figure_kylix%2C_by_the_Arkesilas_Painter%2C_560-550_BC%2C_inv._16592_-_Museo_Gregoriano_Etrusco_-_Vatican_Museums_-_DSC01069.jpg',
    'Hécate': WIKI_THUMB + '1/1e/Relief_triplicate_Hekate_marble%2C_Hadrian_clasicism%2C_Prague_Kinsky%2C_NM-H10_4742%2C_140995.jpg/330px-Relief_triplicate_Hekate_marble%2C_Hadrian_clasicism%2C_Prague_Kinsky%2C_NM-H10_4742%2C_140995.jpg',
    'Pan': WIKI_THUMB + 'a/aa/PanandDaphnis.jpg/330px-PanandDaphnis.jpg',
    'Asclépio': WIKI_THUMB + 'e/ee/Asclepius-Rotunda_of_Altes_Museum.jpg/330px-Asclepius-Rotunda_of_Altes_Museum.jpg',
    'Nike': WIKI_THUMB + 'a/ac/02_2020_Grecia_photo_Paolo_Villa_FO190013_%28Museo_archeologico_di_Olimpia_-_Statua_della_Vittoria-Nike_scolpita_da_Paionios%29.jpg/330px-02_2020_Grecia_photo_Paolo_Villa_FO190013_%28Museo_archeologico_di_Olimpia_-_Statua_della_Vittoria-Nike_scolpita_da_Paionios%29.jpg',
    'Selene': WIKI_THUMB + '2/23/Brygos_Painter_370_10_Selene_-_gigantomachy_%2803%29.jpg/330px-Brygos_Painter_370_10_Selene_-_gigantomachy_%2803%29.jpg',
    'Hélio': WIKI_THUMB + '8/8e/Ilion---metopa.jpg/330px-Ilion---metopa.jpg',
    'Eos': WIKI_THUMB + '1/14/A_terracotta_lekanis_dish_depicting_dawn_eos_on_chariot_with_four_horses_eros_a_woman_and_a_swan_late_4th_century_metropolitan_museum_of_art_cropped_detail_eos.jpg/330px-thumbnail.jpg',
    'Tique': WIKI_THUMB + 'c/c5/Istanbul_-_Museo_archeol._-_Tyche_e_Plutone_-_sec._II_d.C._-_Foto_G._Dall%27Orto_28-5-2006.jpg/330px-Istanbul_-_Museo_archeol._-_Tyche_e_Plutone_-_sec._II_d.C._-_Foto_G._Dall%27Orto_28-5-2006.jpg',
    'Nêmesis': WIKI_THUMB + 'e/ed/Nemesis_of_Rhamnous_Type_%28Farnese_Collection%29_1.jpg/330px-Nemesis_of_Rhamnous_Type_%28Farnese_Collection%29_1.jpg',
    'Hipnos': WIKI_THUMB + '5/59/Euphronios_krater_side_A_MET_L.2006.10.jpg/330px-Euphronios_krater_side_A_MET_L.2006.10.jpg',
    'Tânatos': WIKI_THUMB + 'b/b3/Column_temple_Artemis_Ephesos_BM_Sc1206_n3.jpg/330px-Column_temple_Artemis_Ephesos_BM_Sc1206_n3.jpg',
    'Íris': WIKI_THUMB + '4/42/Iris_Louvre_L43_n2.jpg/330px-Iris_Louvre_L43_n2.jpg',
    'Éolo': null,
    'Quíron': WIKI_THUMB + '9/96/Achilleus_Lyra.jpg/330px-Achilleus_Lyra.jpg'
};

// Fallback para quando imagem não carrega
function handleImageError(img) {
    img.style.display = 'none';
    const fallback = img.nextElementSibling;
    if (fallback) fallback.style.display = 'flex';
}

// ===== LAYOUTS DAS TIRAGENS =====
// Coordenadas CSS (grid areas) para posicionar as cartas visualmente

const TIRAGEM_LAYOUTS = {
    1: { // Uma carta
        cols: 3, rows: 1,
        cards: [{ pos: '1 / 2', label: '1' }]
    },
    3: { // Três Cartas
        cols: 3, rows: 1,
        cards: [
            { pos: '1 / 1', label: '1' },
            { pos: '1 / 2', label: '2' },
            { pos: '1 / 3', label: '3' }
        ]
    },
    10: { // Cruz Celta
        cols: 6, rows: 5,
        cards: [
            { pos: '3 / 2', label: '1' },   // Centro
            { pos: '3 / 2', label: '2', cross: true },  // Cruzada
            { pos: '5 / 2', label: '3' },   // Base
            { pos: '3 / 1', label: '4' },   // Esquerda (passado)
            { pos: '1 / 2', label: '5' },   // Topo
            { pos: '3 / 3', label: '6' },   // Direita (futuro)
            { pos: '5 / 5', label: '7' },   // Coluna dir baixo
            { pos: '4 / 5', label: '8' },
            { pos: '2 / 5', label: '9' },
            { pos: '1 / 5', label: '10' }   // Coluna dir topo
        ]
    },
    7: { // Ferradura
        cols: 7, rows: 3,
        cards: [
            { pos: '3 / 1', label: '1' },
            { pos: '2 / 2', label: '2' },
            { pos: '1 / 3', label: '3' },
            { pos: '1 / 4', label: '4' },
            { pos: '1 / 5', label: '5' },
            { pos: '2 / 6', label: '6' },
            { pos: '3 / 7', label: '7' }
        ]
    },
    5: { // Sim ou Não
        cols: 5, rows: 1,
        cards: [
            { pos: '1 / 1', label: '1' },
            { pos: '1 / 2', label: '2' },
            { pos: '1 / 3', label: '3' },
            { pos: '1 / 4', label: '4' },
            { pos: '1 / 5', label: '5' }
        ]
    },
    6: { // Relacionamento
        cols: 5, rows: 3,
        cards: [
            { pos: '1 / 2', label: '1' },
            { pos: '1 / 4', label: '2' },
            { pos: '2 / 3', label: '3' },
            { pos: '3 / 3', label: '4' },
            { pos: '2 / 1', label: '5' },
            { pos: '2 / 5', label: '6' }
        ]
    },
    '7e': { // Estrela (diferente da ferradura de 7)
        cols: 5, rows: 5,
        cards: [
            { pos: '5 / 2', label: '1' },   // Baixo esquerda — Corpo
            { pos: '1 / 3', label: '2' },   // Topo — Mente
            { pos: '3 / 3', label: '3' },   // Centro — Espírito
            { pos: '5 / 4', label: '4' },   // Baixo direita — Emoções
            { pos: '2 / 1', label: '5' },   // Esquerda — Lição
            { pos: '2 / 5', label: '6' },   // Direita — Liberar
            { pos: '4 / 3', label: '7' }    // Baixo centro — Abraçar
        ]
    },
    12: { // Mandala Astrológica
        cols: 7, rows: 5,
        cards: [
            { pos: '1 / 4', label: '1' },
            { pos: '1 / 5', label: '2' },
            { pos: '2 / 6', label: '3' },
            { pos: '3 / 7', label: '4' },
            { pos: '4 / 6', label: '5' },
            { pos: '5 / 5', label: '6' },
            { pos: '5 / 4', label: '7' },
            { pos: '5 / 3', label: '8' },
            { pos: '4 / 2', label: '9' },
            { pos: '3 / 1', label: '10' },
            { pos: '2 / 2', label: '11' },
            { pos: '1 / 3', label: '12' }
        ]
    }
};

