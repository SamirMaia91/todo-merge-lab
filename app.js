const form = document.getElementById('form');
const input = document.getElementById('newItem');
const list = document.getElementById('list');
const title = document.getElementById('title');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addItem(text);
  input.value = '';
});

function addItem(text) {
  const li = document.createElement('li');
  li.dataset.text = text;
  li.textContent = text;
  li.addEventListener('click', () => toggleDone(li));
  list.appendChild(li);
  updateTitle();
}

function toggleDone(li) {
  li.classList.toggle('done');
  li.textContent = li.classList.contains('done')
    ? `${li.dataset.text} ✅`
    : li.dataset.text;
}

function updateTitle() {
  title.textContent = `taskBoard - equipe a (${list.children.length})`;
}
