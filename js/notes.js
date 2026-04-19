class NotesManager {
    constructor() {
        this.notes = this.loadNotes();
        this.currentNoteId = null;
    }

    loadNotes() {
        const saved = localStorage.getItem('grimorio-notes');
        return saved ? JSON.parse(saved) : [];
    }

    saveNotes() {
        localStorage.setItem('grimorio-notes', JSON.stringify(this.notes));
    }

    createNote() {
        const note = {
            id: Date.now(),
            title: 'Nova Página',
            content: '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        this.notes.unshift(note);
        this.saveNotes();
        return note;
    }

    updateNote(id, title, content) {
        const note = this.notes.find(n => n.id === id);
        if (note) {
            note.title = title;
            note.content = content;
            note.updatedAt = new Date().toISOString();
            this.saveNotes();
        }
        return note;
    }

    deleteNote(id) {
        this.notes = this.notes.filter(n => n.id !== id);
        this.saveNotes();
    }

    getNote(id) {
        return this.notes.find(n => n.id === id);
    }

    formatDate(isoString) {
        const date = new Date(isoString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    renderNotesList() {
        const listEl = document.getElementById('notes-list');
        if (!listEl) return;

        if (this.notes.length === 0) {
            listEl.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 20px; font-style: italic;">Nenhuma página criada ainda...</p>';
            return;
        }

        listEl.innerHTML = this.notes.map(note => `
            <div class="note-item ${note.id === this.currentNoteId ? 'active' : ''}" data-id="${note.id}">
                <h4>${this.escapeHtml(note.title)}</h4>
                <div class="note-date">${this.formatDate(note.updatedAt)}</div>
                <div class="note-preview">${this.escapeHtml(note.content.substring(0, 80))}</div>
            </div>
        `).join('');

        listEl.querySelectorAll('.note-item').forEach(item => {
            item.addEventListener('click', () => {
                this.selectNote(parseInt(item.dataset.id));
            });
        });
    }

    selectNote(id) {
        this.currentNoteId = id;
        const note = this.getNote(id);
        if (!note) return;

        document.getElementById('note-placeholder').style.display = 'none';
        document.getElementById('note-edit-area').style.display = 'flex';
        document.getElementById('note-title').value = note.title;
        document.getElementById('note-content').value = note.content;
        this.renderNotesList();
    }

    clearEditor() {
        this.currentNoteId = null;
        document.getElementById('note-placeholder').style.display = 'flex';
        document.getElementById('note-edit-area').style.display = 'none';
        document.getElementById('note-title').value = '';
        document.getElementById('note-content').value = '';
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    init() {
        this.renderNotesList();

        document.getElementById('btn-new-note').addEventListener('click', () => {
            const note = this.createNote();
            this.selectNote(note.id);
        });

        document.getElementById('btn-save-note').addEventListener('click', () => {
            if (this.currentNoteId) {
                const title = document.getElementById('note-title').value || 'Sem título';
                const content = document.getElementById('note-content').value;
                this.updateNote(this.currentNoteId, title, content);
                this.renderNotesList();
            }
        });

        document.getElementById('btn-delete-note').addEventListener('click', () => {
            if (this.currentNoteId && confirm('Tem certeza que deseja excluir esta página?')) {
                this.deleteNote(this.currentNoteId);
                this.clearEditor();
                this.renderNotesList();
            }
        });

        // Auto-save on typing (debounced)
        let saveTimeout;
        const autoSave = () => {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(() => {
                if (this.currentNoteId) {
                    const title = document.getElementById('note-title').value || 'Sem título';
                    const content = document.getElementById('note-content').value;
                    this.updateNote(this.currentNoteId, title, content);
                    this.renderNotesList();
                }
            }, 1000);
        };

        document.getElementById('note-title').addEventListener('input', autoSave);
        document.getElementById('note-content').addEventListener('input', autoSave);
    }
}
