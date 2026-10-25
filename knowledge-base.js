(() => {
  const items = window.KNOWLEDGE_BASE_DATA || [];
  const root = document.getElementById('kb-root');
  const search = document.getElementById('kb-search');
  const count = document.getElementById('kb-count');
  let category = 'all';
  let unit = 'all';
  let query = '';

  if (!root) return;

  const icons = {grammar:'📐', vocabulary:'💥', pronunciation:'🗣️', quick:'⚡'};

  const esc = (v) => String(v ?? '')
    .replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')
    .replaceAll('"','&quot;');

  function wordList(words = []) {
    if (!words.length) return '';
    return `<div class="kb-word-list">${words.map(([en,ru]) =>
      `<div class="kb-word"><b>${esc(en)}</b><span>${esc(ru)}</span></div>`
    ).join('')}</div>`;
  }

  function patterns(list = []) {
    if (!list.length) return '';
    return `<h3 class="kb-subtitle">Useful patterns</h3>
      <div class="kb-patterns">${list.map(([en,ru]) =>
        `<div><b>${esc(en)}</b><span>${esc(ru)}</span></div>`
      ).join('')}</div>`;
  }

  function searchable(item) {
    return [
      item.title,item.summary,item.unit,item.category,
      ...(item.words || []).flat(), ...(item.patterns || []).flat()
    ].join(' ').toLowerCase();
  }

  function render() {
    const q = query.trim().toLowerCase();
    const visible = items.filter(item =>
      (category === 'all' || item.category === category) &&
      (unit === 'all' || item.unit === unit) &&
      (!q || searchable(item).includes(q))
    );

    if (count) count.textContent = visible.length;

    root.innerHTML = visible.length ? visible.map(item => `
      <article class="kb-item">
        <button class="kb-head" type="button" aria-expanded="false">
          <span class="kb-icon">${icons[item.category] || '📚'}</span>
          <span class="kb-copy">
            <small>${esc(item.unit)} · ${esc(item.category)}</small>
            <strong>${esc(item.title)}</strong>
            <span>${esc(item.summary)}</span>
          </span>
          <span class="kb-arrow">⌄</span>
        </button>
        <div class="kb-body" hidden>
          ${item.body || ''}
          ${wordList(item.words)}
          ${patterns(item.patterns)}
          <div class="kb-actions">
            ${item.id === 'present-simple-continuous'
              ? '<a href="grammar-topic.html?id=present-simple-continuous-action-nonaction">Полное объяснение грамматики →</a>' : ''}
            ${item.category === 'vocabulary'
              ? '<a href="vocabulary-hub.html">Открыть Vocabulary Hub →</a>' : ''}
          </div>
        </div>
      </article>
    `).join('') : `
      <div class="kb-empty">
        <div>🔎</div><h3>Ничего не найдено</h3>
        <p>Попробуй другое слово или убери один из фильтров.</p>
      </div>
    `;

    root.querySelectorAll('.kb-head').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.kb-item');
        const body = item.querySelector('.kb-body');
        const open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        body.hidden = open;
        item.classList.toggle('open', !open);
      });
    });
  }

  document.querySelectorAll('[data-kb-category]').forEach(btn => {
    btn.addEventListener('click', () => {
      category = btn.dataset.kbCategory;
      document.querySelectorAll('[data-kb-category]').forEach(x => x.classList.toggle('active', x === btn));
      render();
    });
  });

  document.querySelectorAll('[data-kb-unit]').forEach(btn => {
    btn.addEventListener('click', () => {
      unit = btn.dataset.kbUnit;
      document.querySelectorAll('[data-kb-unit]').forEach(x => x.classList.toggle('active', x === btn));
      render();
    });
  });

  search?.addEventListener('input', () => { query = search.value; render(); });
  render();
})();
