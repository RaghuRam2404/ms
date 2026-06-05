async function loadPartial(url, placeholderId) {
  const placeholder = document.getElementById(placeholderId);
  if (!placeholder) return;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
    const html = await res.text();
    placeholder.outerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadPartial('/partials/footer.html', 'footer-placeholder');
});
