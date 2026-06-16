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
  loadPartial('partials/footer.html', 'footer-placeholder');
});

function bodyLoad() {
  var minDelay = new Promise(function (resolve) { setTimeout(resolve, 500); });

  var images = Array.from(document.images);
  var imagePromises = images.map(function (img) {
    return new Promise(function (resolve) {
      if (img.complete) { resolve(); return; }
      img.addEventListener('load', resolve);
      img.addEventListener('error', resolve); // don't block on broken images
    });
  });

  Promise.all([minDelay].concat(imagePromises)).then(function () {
    var holder = document.getElementById('loading_holder');
    if (!holder) return;
    holder.style.opacity = '0';
    holder.style.transition = 'opacity 0.4s ease';
    setTimeout(function () {
      holder.style.display = 'none';
      var body = document.querySelector('.body');
      if (body) body.style.display = 'block';
      
      // Handle hash navigation after body is visible
      if (window.location.hash) {
        var target = document.querySelector(window.location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 400);
  });
}
