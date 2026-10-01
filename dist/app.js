const dialog = document.querySelector('#projectDialog');
const fields = {
  title: document.querySelector('#dialogTitle'),
  description: document.querySelector('#dialogDescription'),
  stack: document.querySelector('#dialogStack'),
  state: document.querySelector('#dialogState'),
  path: document.querySelector('#dialogPath'),
};

document.querySelectorAll('.open-project').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.project-card');
    fields.title.textContent = card.dataset.project;
    fields.description.textContent = card.dataset.description;
    fields.stack.textContent = card.dataset.stack;
    fields.state.textContent = card.dataset.state;
    fields.path.textContent = card.dataset.path;
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
