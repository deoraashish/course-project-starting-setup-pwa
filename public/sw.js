
self.addEventListener('install', function(event) {
    console.log('Installing ServiceWorker....', event);
});

// Activation happens only if all the pages of the scope of current scope are closed
self.addEventListener('activate', function(event) {
    console.log('Activating Service worker...', event);
});

self.addEventListener('fetch', function(event) {
    // console.log('Fetching.....', event);
    event.respondWith(fetch(event.request));
});