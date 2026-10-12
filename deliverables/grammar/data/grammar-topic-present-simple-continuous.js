(() => {
  'use strict';

  const TOPIC_ID = 'present-simple-continuous-action-nonaction';
  const GUIDE_ID = 'viktoria-grammar-guide';
  const GUIDE_VERSION = 'textbook-v1';
  const SOURCE = 'data/grammar-topic-present-simple-continuous.html';

  let guideHtmlPromise = null;

  function loadGuideHtml() {
    if (!guideHtmlPromise) {
      guideHtmlPromise = fetch(SOURCE, { cache: 'no-store' }).then((response) => {
        if (!response.ok) throw new Error('Could not load grammar guide');
        return response.text();
      });
    }
    return guideHtmlPromise;
  }

  function hideGenericBlocks(root) {
    [
      '.grammar-intro-card',
      '#grammar-at-a-glance',
      '#grammar-rule-map',
      '#grammar-tables',
      '#grammar-examples',
      '#grammar-mistakes'
    ].forEach((selector) => {
      root.querySelector(selector)?.classList.add('grammar-bespoke-hidden');
    });
  }

  async function applyGuide() {
    if (new URLSearchParams(location.search).get('id') !== TOPIC_ID) return;

    const root = document.getElementById('grammar-topic-root');
    if (!root) return;

    const practice = root.querySelector('#grammar-practice-section');
    if (!practice) return;

    hideGenericBlocks(root);

    let guide = root.querySelector('#' + GUIDE_ID);
    if (!guide) {
      guide = document.createElement('div');
      guide.id = GUIDE_ID;
      practice.insertAdjacentElement('beforebegin', guide);
    }

    if (guide.dataset.guideVersion === GUIDE_VERSION) return;

    try {
      guide.innerHTML = await loadGuideHtml();
      guide.dataset.guideVersion = GUIDE_VERSION;
    } catch (error) {
      console.error('Grammar guide:', error);
    }
  }

  function start() {
    if (new URLSearchParams(location.search).get('id') !== TOPIC_ID) return;

    const root = document.getElementById('grammar-topic-root');
    if (!root) return;

    const observer = new MutationObserver(() => applyGuide());
    observer.observe(root, { childList: true, subtree: true });

    applyGuide();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
