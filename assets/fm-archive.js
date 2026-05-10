(function () {
  document.body.classList.add('fm-internal');

  const cursor = document.createElement('div');
  cursor.id = 'fm-cursor';
  cursor.textContent = '0.00 / 0.00';
  document.body.appendChild(cursor);

  window.addEventListener('mousemove', function (event) {
    const nx = event.clientX / window.innerWidth;
    const ny = event.clientY / window.innerHeight;
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
    cursor.textContent = nx.toFixed(2) + ' / ' + ny.toFixed(2);
  });

  window.addEventListener('keydown', function (event) {
    const key = event.key.toLowerCase();
    if (key === 'a') document.body.classList.toggle('archive-mode');
    if (key === 'i') document.body.classList.toggle('invert');
    if (event.key === 'Escape') {
      const back = document.getElementById('back-link');
      if (back && back.href) window.location.href = back.href;
    }
  });
})();
