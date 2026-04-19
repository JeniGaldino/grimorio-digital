document.addEventListener('DOMContentLoaded', () => {
    const app = new GrimorioApp();
    app.init();
});

class GrimorioApp {
    constructor() {
        this.notesManager = new NotesManager();
    }

    init() {
        this.setupMobileMenu();
        this.setupNavigation();
        this.setupHomeCards();
        this.setupTarot();
        this.setupGods();
        this.setupHerbs();
        this.setupMoon();
        this.notesManager.init();
        this.setupModals();
    }

    // ===== MOBILE MENU =====
    setupMobileMenu() {
        const toggle = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');

        if (toggle) {
            toggle.addEventListener('click', () => {
                sidebar.classList.toggle('open');
                overlay.classList.toggle('active');
            });
        }

        if (overlay) {
            overlay.addEventListener('click', () => {
                sidebar.classList.remove('open');
                overlay.classList.remove('active');
            });
        }
    }

    closeMobileMenu() {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebar-overlay').classList.remove('active');
    }

    // ===== NAVIGATION =====
    setupNavigation() {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                const section = item.dataset.section;
                this.navigateTo(section);
            });
        });
    }

    navigateTo(section) {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        document.querySelector(`.nav-item[data-section="${section}"]`).classList.add('active');

        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        document.getElementById(`section-${section}`).classList.add('active');

        this.closeMobileMenu();
        window.scrollTo(0, 0);
    }

    setupHomeCards() {
        document.querySelectorAll('.home-card').forEach(card => {
            card.addEventListener('click', () => {
                this.navigateTo(card.dataset.goto);
            });
        });
    }

    // ===== TAROT =====
    setupTarot() {
        this.renderArcanosMaiores();
        this.renderArcanosMenores('all');
        this.renderTiragens();

        // Tab switching
        document.querySelectorAll('.tarot-tabs .tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tarot-tabs .tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                document.querySelectorAll('#tarot-content .tab-content').forEach(t => t.classList.remove('active'));
                document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
            });
        });

        // Naipe filter
        document.querySelectorAll('.naipe-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.naipe-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.renderArcanosMenores(btn.dataset.naipe);
            });
        });
    }

    renderArcanosMaiores() {
        const container = document.getElementById('tab-arcanos-maiores');
        container.innerHTML = `
            <div class="cards-grid">
                ${ARCANOS_MAIORES.map(card => {
                    const imgUrl = IMAGENS_ARCANOS_MAIORES[card.numero];
                    return `
                    <div class="tarot-card has-image" data-numero="${card.numero}" data-tipo="maior">
                        <div class="card-image-wrap">
                            <img src="${imgUrl}" alt="${card.nome}" loading="lazy" onerror="handleImageError(this)">
                            <div class="card-image-fallback" style="display:none">
                                <span class="card-number">${card.numero}</span>
                            </div>
                        </div>
                        <div class="card-name">${card.nome}</div>
                        <div class="card-keywords">${card.keywords}</div>
                    </div>
                `;
                }).join('')}
            </div>
        `;

        container.querySelectorAll('.tarot-card').forEach(card => {
            card.addEventListener('click', () => {
                const num = parseInt(card.dataset.numero);
                this.showArcanoMaiorDetail(num);
            });
        });
    }

    showArcanoMaiorDetail(numero) {
        const card = ARCANOS_MAIORES.find(c => c.numero === numero);
        if (!card) return;

        const imgUrl = getMajorDetailImage(card.numero);
        const body = document.getElementById('modal-body');
        body.innerHTML = `
            <div class="detail-header">
                <div class="detail-image">
                    <img src="${imgUrl}" alt="${card.nome}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                    <div class="detail-image-fallback" style="display:none">${this.getArcanoMaiorEmoji(card.numero)}</div>
                </div>
                <h3>${card.numero} - ${card.nome}</h3>
                <div class="detail-subtitle">${card.keywords}</div>
            </div>
            <div class="detail-section">
                <h4><i class="fas fa-sun"></i> Significado</h4>
                <p>${card.significado}</p>
            </div>
            <div class="detail-section">
                <h4><i class="fas fa-moon"></i> Carta Invertida</h4>
                <p>${card.invertida}</p>
            </div>
            <div class="detail-section">
                <h4><i class="fas fa-fire"></i> Elemento & Planeta</h4>
                <p><strong>Elemento:</strong> ${card.elemento} | <strong>Regente:</strong> ${card.planeta}</p>
            </div>
            <div class="detail-section">
                <h4><i class="fas fa-eye"></i> Simbolismo</h4>
                <p>${card.simbolismo}</p>
            </div>
        `;

        document.getElementById('card-modal').classList.add('active');
    }

    getArcanoMaiorEmoji(num) {
        const emojis = ['🃏','🎩','🔮','👸','🏛️','⛪','💑','🏇','🦁','🏔️','🎡','⚖️','🙃','💀','⚗️','😈','🗼','⭐','🌙','☀️','📯','🌍'];
        return emojis[num] || '✨';
    }

    renderArcanosMenores(naipe) {
        const container = document.getElementById('arcanos-menores-grid');
        let cards = [];

        if (naipe === 'all') {
            Object.keys(ARCANOS_MENORES).forEach(key => {
                ARCANOS_MENORES[key].cartas.forEach(card => {
                    cards.push({ ...card, naipe: key, info: ARCANOS_MENORES[key] });
                });
            });
        } else {
            ARCANOS_MENORES[naipe].cartas.forEach(card => {
                cards.push({ ...card, naipe, info: ARCANOS_MENORES[naipe] });
            });
        }

        container.innerHTML = cards.map(card => {
            const idx = VALOR_INDEX[card.valor];
            const imgUrl = getMinorArcanaImage(card.naipe, idx);
            return `
            <div class="tarot-card has-image" data-naipe="${card.naipe}" data-valor="${card.valor}">
                <div class="card-image-wrap">
                    <img src="${imgUrl}" alt="${card.valor} de ${card.info.nome}" loading="lazy" onerror="handleImageError(this)">
                    <div class="card-image-fallback" style="display:none">
                        <span class="card-number">${card.info.simbolo}</span>
                    </div>
                </div>
                <div class="card-name">${card.valor} de ${card.info.nome}</div>
                <div class="card-keywords">${card.keywords}</div>
            </div>
        `;
        }).join('');

        container.querySelectorAll('.tarot-card').forEach(el => {
            el.addEventListener('click', () => {
                this.showArcanoMenorDetail(el.dataset.naipe, el.dataset.valor);
            });
        });
    }

    showArcanoMenorDetail(naipe, valor) {
        const info = ARCANOS_MENORES[naipe];
        const card = info.cartas.find(c => c.valor === valor);
        if (!card) return;

        const idx = VALOR_INDEX[valor];
        const imgUrl = getMinorDetailImage(naipe, idx);
        const body = document.getElementById('modal-body');
        body.innerHTML = `
            <div class="detail-header">
                <div class="detail-image">
                    <img src="${imgUrl}" alt="${card.valor} de ${info.nome}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                    <div class="detail-image-fallback" style="display:none">${info.simbolo}</div>
                </div>
                <h3>${card.valor} de ${info.nome}</h3>
                <div class="detail-subtitle">${card.keywords}</div>
            </div>
            <div class="detail-section">
                <h4><i class="fas fa-fire"></i> Naipe</h4>
                <p><strong>Elemento:</strong> ${info.elemento} | <strong>Tema:</strong> ${info.tema}</p>
            </div>
            <div class="detail-section">
                <h4><i class="fas fa-sun"></i> Significado</h4>
                <p>${card.significado}</p>
            </div>
            <div class="detail-section">
                <h4><i class="fas fa-moon"></i> Carta Invertida</h4>
                <p>${card.invertida}</p>
            </div>
        `;

        document.getElementById('card-modal').classList.add('active');
    }

    renderTiragens() {
        const container = document.getElementById('tab-tiragens');
        container.innerHTML = TIRAGENS.map((t, idx) => {
            const layoutKey = this._getTiragemLayoutKey(t, idx);
            const layout = TIRAGEM_LAYOUTS[layoutKey];
            const layoutHTML = layout ? this._buildTiragemLayout(layout, t.posicoes) : '';

            return `
            <div class="tiragem-card">
                <h3>${t.nome}</h3>
                <div class="tiragem-cards-num"><i class="fas fa-layer-group"></i> ${t.numCartas} carta${t.numCartas > 1 ? 's' : ''}</div>
                <p>${t.descricao}</p>
                ${layoutHTML}
                <div class="tiragem-positions">
                    <h4><i class="fas fa-list-ol"></i> Posições:</h4>
                    ${t.posicoes.map((p, i) => `<span class="position-tag"><strong>${i + 1}.</strong> ${p}</span>`).join('')}
                </div>
                <div class="tiragem-ideal">
                    <h4><i class="fas fa-star"></i> Ideal para:</h4>
                    <p>${t.indicada}</p>
                </div>
            </div>
        `}).join('');
    }

    _getTiragemLayoutKey(tiragem, index) {
        // Estrela e Ferradura ambas têm 7 cartas; diferenciamos pelo índice
        if (tiragem.numCartas === 7 && tiragem.nome.includes('Estrela')) return '7e';
        return tiragem.numCartas;
    }

    _buildTiragemLayout(layout, posicoes) {
        const cards = layout.cards.map((c, i) => {
            const [row, col] = c.pos.split(' / ');
            const crossClass = c.cross ? ' spread-card-cross' : '';
            const tooltip = posicoes[i] || '';
            return `<div class="spread-card${crossClass}" style="grid-row:${row};grid-column:${col}" title="${tooltip}">
                <span class="spread-card-num">${c.label}</span>
            </div>`;
        });
        return `
        <div class="spread-layout" style="grid-template-columns:repeat(${layout.cols},1fr);grid-template-rows:repeat(${layout.rows},1fr)">
            ${cards.join('')}
        </div>`;
    }

    // ===== GODS =====
    setupGods() {
        this.renderGods('all');

        document.querySelectorAll('.gods-filter .filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.gods-filter .filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.renderGods(btn.dataset.filter);
            });
        });

        document.getElementById('gods-search').addEventListener('input', (e) => {
            const activeFilter = document.querySelector('.gods-filter .filter-btn.active').dataset.filter;
            this.renderGods(activeFilter, e.target.value);
        });
    }

    renderGods(filter, search = '') {
        let gods = DEUSES;

        if (filter !== 'all') {
            gods = gods.filter(g => g.tipo === filter);
        }

        if (search) {
            const s = search.toLowerCase();
            gods = gods.filter(g =>
                g.nome.toLowerCase().includes(s) ||
                g.nomeRomano.toLowerCase().includes(s) ||
                g.dominio.toLowerCase().includes(s)
            );
        }

        const container = document.getElementById('gods-grid');
        container.innerHTML = gods.map(god => {
            const imgUrl = IMAGENS_DEUSES[god.nome];
            return `
            <div class="god-card has-image" data-nome="${god.nome}">
                <div class="card-image-wrap god-image-wrap">
                    ${imgUrl ? `<img src="${imgUrl}" alt="${god.nome}" loading="lazy" onerror="handleImageError(this)">` : ''}
                    <div class="card-image-fallback" style="${imgUrl ? 'display:none' : 'display:flex'}">
                        <span class="god-emoji">${god.emoji}</span>
                    </div>
                </div>
                <div class="god-name">${god.nome}</div>
                <div class="god-title">${god.nomeRomano} — ${god.dominio.split(',')[0]}</div>
            </div>
        `;
        }).join('');

        container.querySelectorAll('.god-card').forEach(card => {
            card.addEventListener('click', () => {
                this.showGodDetail(card.dataset.nome);
            });
        });
    }

    showGodDetail(nome) {
        const god = DEUSES.find(g => g.nome === nome);
        if (!god) return;

        const imgUrl = IMAGENS_DEUSES[god.nome];
        const body = document.getElementById('god-modal-body');
        body.innerHTML = `
            <div class="detail-header">
                <div class="detail-image god-detail-img">
                    ${imgUrl ? `<img src="${imgUrl}" alt="${god.nome}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">` : ''}
                    <div class="detail-image-fallback" style="${imgUrl ? 'display:none' : 'display:flex'}">${god.emoji}</div>
                </div>
                <h3>${god.nome}</h3>
                <div class="detail-subtitle">${god.nomeRomano} (Romano) — ${god.tipo.charAt(0).toUpperCase() + god.tipo.slice(1)}</div>
            </div>
            <div class="detail-section">
                <h4><i class="fas fa-crown"></i> Domínio</h4>
                <p>${god.dominio}</p>
            </div>
            <div class="detail-section">
                <h4><i class="fas fa-scroll"></i> História</h4>
                <p>${god.historia}</p>
            </div>
            <div class="detail-section">
                <h4><i class="fas fa-bolt"></i> Poderes</h4>
                <ul>
                    ${god.poderes.map(p => `<li>${p}</li>`).join('')}
                </ul>
            </div>
            <div class="detail-section">
                <h4><i class="fas fa-gem"></i> Símbolos</h4>
                <div>${god.simbolos.map(s => `<span class="tag">${s}</span>`).join('')}</div>
            </div>
            <div class="detail-section">
                <h4><i class="fas fa-star"></i> Curiosidade</h4>
                <p>${god.curiosidades}</p>
            </div>
        `;

        document.getElementById('god-modal').classList.add('active');
    }

    // ===== HERBS =====
    setupHerbs() {
        this.renderHerbs();

        document.getElementById('herbs-search').addEventListener('input', (e) => {
            this.renderHerbs(e.target.value);
        });
    }

    renderHerbs(search = '') {
        let herbs = ERVAS;

        if (search) {
            const s = search.toLowerCase();
            herbs = herbs.filter(h =>
                h.nome.toLowerCase().includes(s) ||
                h.nomeCientifico.toLowerCase().includes(s) ||
                h.elemento.toLowerCase().includes(s)
            );
        }

        const container = document.getElementById('herbs-grid');
        container.innerHTML = herbs.map(herb => `
            <div class="herb-card" data-nome="${herb.nome}">
                <span class="herb-emoji">${herb.emoji}</span>
                <div class="herb-name">${herb.nome}</div>
                <div class="herb-latin">${herb.nomeCientifico}</div>
            </div>
        `).join('');

        container.querySelectorAll('.herb-card').forEach(card => {
            card.addEventListener('click', () => {
                this.showHerbDetail(card.dataset.nome);
            });
        });
    }

    showHerbDetail(nome) {
        const herb = ERVAS.find(h => h.nome === nome);
        if (!herb) return;

        const body = document.getElementById('herb-modal-body');
        body.innerHTML = `
            <div class="detail-header">
                <div class="detail-icon">${herb.emoji}</div>
                <h3>${herb.nome}</h3>
                <div class="detail-subtitle">${herb.nomeCientifico}</div>
            </div>
            <div class="detail-section">
                <h4><i class="fas fa-fire"></i> Elemento & Planeta</h4>
                <p><strong>Elemento:</strong> ${herb.elemento} | <strong>Planeta:</strong> ${herb.planeta}</p>
            </div>
            <div class="detail-section">
                <h4><i class="fas fa-flask"></i> Propriedades Científicas</h4>
                <p>${herb.propriedadesCientificas}</p>
            </div>
            <div class="detail-section">
                <h4><i class="fas fa-hat-wizard"></i> Propriedades Mágicas</h4>
                <p>${herb.propriedadesMagicas}</p>
            </div>
            <div class="detail-section">
                <h4><i class="fas fa-mortar-pestle"></i> Como Usar</h4>
                <ul>
                    ${herb.comoUsar.map(u => `<li>${u}</li>`).join('')}
                </ul>
            </div>
            <div class="detail-section">
                <h4><i class="fas fa-star"></i> Curiosidade</h4>
                <p>${herb.curiosidade}</p>
            </div>
        `;

        document.getElementById('herb-modal').classList.add('active');
    }

    // ===== MOON & MAGIC =====
    setupMoon() {
        this.renderMoonPhases();
        this.renderWeekDays();
        this.renderMagicColors();

        document.querySelectorAll('.moon-tabs .tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.moon-tabs .tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                document.querySelectorAll('#moon-content .tab-content').forEach(t => t.classList.remove('active'));
                document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
            });
        });
    }

    renderMoonPhases() {
        const container = document.getElementById('tab-moon-phases');
        container.innerHTML = `
            <div class="moon-grid">
                ${FASES_LUA.map(phase => `
                    <div class="moon-card">
                        <span class="moon-icon">${phase.emoji}</span>
                        <h3>${phase.nome}</h3>
                        <p>${phase.descricao}</p>
                        <div class="moon-best">
                            <h4><i class="fas fa-wand-magic-sparkles"></i> Energia:</h4>
                            <p>${phase.energia}</p>
                        </div>
                        <div class="moon-best">
                            <h4><i class="fas fa-hat-wizard"></i> Magias Indicadas:</h4>
                            <ul style="list-style: none; padding: 0;">
                                ${phase.magias.map(m => `<li style="padding: 3px 0; padding-left: 18px; position: relative; color: var(--text-secondary); font-size: 0.9rem;"><span style="position: absolute; left: 0; color: var(--accent-gold);">✦</span>${m}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="moon-best">
                            <h4><i class="fas fa-star"></i> Melhor Para:</h4>
                            <p>${phase.melhorPara}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderWeekDays() {
        const container = document.getElementById('tab-week-days');
        container.innerHTML = `
            <div class="moon-grid">
                ${DIAS_SEMANA.map(day => `
                    <div class="day-card">
                        <span class="day-icon">${day.emoji}</span>
                        <h3>${day.nome}</h3>
                        <div class="day-planet">☆ Planeta: ${day.planeta} | Cor: ${day.cor}</div>
                        <p>${day.descricao}</p>
                        <div class="moon-best">
                            <h4><i class="fas fa-hat-wizard"></i> Magias Indicadas:</h4>
                            <ul style="list-style: none; padding: 0;">
                                ${day.magias.map(m => `<li style="padding: 3px 0; padding-left: 18px; position: relative; color: var(--text-secondary); font-size: 0.9rem;"><span style="position: absolute; left: 0; color: var(--accent-gold);">✦</span>${m}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="moon-best">
                            <h4><i class="fas fa-users"></i> Deuses Associados:</h4>
                            <p>${day.deuses}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderMagicColors() {
        const container = document.getElementById('tab-magic-colors');
        container.innerHTML = `
            <div class="moon-grid">
                ${CORES_MAGICAS.map(color => `
                    <div class="color-card" style="border-top: 4px solid ${color.hex};">
                        <div class="color-swatch" style="background-color: ${color.hex};"></div>
                        <h3 style="color: ${color.hex === '#FFFFFF' ? 'var(--text-primary)' : color.hex};">${color.nome}</h3>
                        <p><strong>Energia:</strong> ${color.energia}</p>
                        <p>${color.descricao}</p>
                        <div class="moon-best">
                            <h4><i class="fas fa-hat-wizard"></i> Usos na Magia:</h4>
                            <ul style="list-style: none; padding: 0;">
                                ${color.usos.map(u => `<li style="padding: 3px 0; padding-left: 18px; position: relative; color: var(--text-secondary); font-size: 0.9rem;"><span style="position: absolute; left: 0; color: var(--accent-gold);">✦</span>${u}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // ===== MODALS =====
    setupModals() {
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.closest('.modal').classList.remove('active');
            });
        });

        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
            }
        });
    }
}
