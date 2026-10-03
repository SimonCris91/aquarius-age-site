const dialog = document.querySelector('#projectDialog');
const fields = {
  visual: document.querySelector('#dialogVisual'),
  title: document.querySelector('#dialogTitle'),
  description: document.querySelector('#dialogDescription'),
  stack: document.querySelector('#dialogStack'),
  state: document.querySelector('#dialogState'),
  path: document.querySelector('#dialogPath'),
};

const projectDescriptions = {
  'Aquarius Age': 'Portfolio centrale di Simone Feo che raccoglie prodotti digitali, applicazioni, strumenti AI e progetti web in un’unica identità.',
  'AEGIS Invest AI': 'Dashboard Demo-first per leggere portafoglio, posizioni e risultati con controlli di rischio e separazione tra dati verificati e azioni autorizzate.',
  'Olbia Yachting Community': 'Centro operativo nautico per community, profili, operatori e percorsi di assistenza nel mondo della nautica.',
  'Signum Aura AI': 'App simbolica e personale che trasforma dati di nascita e percorsi scelti dall’utente in mappe, segni e interpretazioni guidate.',
  'LavorMetal': 'Centro Operativo AI per calendario, attività di officina, mezzi, attrezzature, documenti e coordinamento del lavoro.',
  'AI Remote': 'Controller AI voice-first per telefono e dispositivi remoti, con canali separati, push-to-talk e una base pronta per la voce live.',
  'NEXUS Memory Protocol': 'PWA local-first per esercizi di memoria, sessioni guidate, indizi audio e statistiche personali senza dipendere da un server pubblico.',
  'Account Finder': 'Strumento privacy-first per organizzare gli indizi relativi agli account collegati a un indirizzo email senza raccogliere credenziali.',
  'SuperEnalotto Research': 'Ambiente di ricerca per confronti storici e test prospettici con protocolli separati da qualsiasi promessa di previsione o profitto.',
};

document.querySelectorAll('.project-card').forEach((card) => {
  const summary = document.createElement('p');
  summary.className = 'project-summary';
  summary.textContent = projectDescriptions[card.dataset.project] || card.dataset.description;
  card.querySelector('.project-info').append(summary);
});

document.querySelectorAll('.open-project').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.project-card');
    fields.visual.replaceChildren(card.querySelector('.preview').cloneNode(true));
    fields.visual.querySelector('.preview').removeAttribute('aria-label');
    fields.title.textContent = card.dataset.project;
    fields.description.textContent = card.dataset.description;
    fields.stack.textContent = card.dataset.stack;
    fields.state.textContent = card.dataset.state.replace(' nel workspace', '').replace(' nel workspace', '');
    dialog.showModal();
  });
});

document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelectorAll('[data-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach((item) => item.classList.toggle('active', item === button));
    const filter = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach((card) => {
      card.hidden = filter !== 'all' && !card.dataset.category.split(' ').includes(filter);
    });
  });
});
