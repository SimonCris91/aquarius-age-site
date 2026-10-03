const dialog = document.querySelector('#projectDialog');
const fields = {
  visual: document.querySelector('#dialogVisual'),
  title: document.querySelector('#dialogTitle'),
  description: document.querySelector('#dialogDescription'),
  stack: document.querySelector('#dialogStack'),
  state: document.querySelector('#dialogState'),
  path: document.querySelector('#dialogPath'),
};

const publicLinks = {
  'Aquarius Age': 'https://aquariusageai.com',
  'AEGIS Invest AI': 'https://aegis.aquariusageai.com',
  'Signum Aura AI': 'https://signum.aquariusageai.com',
  'Olbia Yachting Community': 'https://yachting.aquariusageai.com',
  'LavorMetal': 'https://lavormetal.aquariusageai.com',
};

document.querySelectorAll('.project-card').forEach((card) => {
  const url = publicLinks[card.dataset.project];
  if (!url) return;
  const link = document.createElement('a');
  link.className = 'site-link';
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Apri sito ↗';
  link.setAttribute('aria-label', `Apri il sito pubblico di ${card.dataset.project}`);
  card.querySelector('.project-info').append(link);
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
