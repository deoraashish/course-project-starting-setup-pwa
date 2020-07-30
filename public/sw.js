
self.addEventListener('install', function(event) {
    console.log('Installing ServiceWorker....', event);
    event.waitUntil(caches.open('static').then(function(cache) {
        console.log('Inside Caching....');
        cache.addAll([
            '/',
            'index.html',
            '/src/js/app.js',
            '/src/js/feed.js',
            '/src/js/fetch.js',
            '/src/js/promise.js',
            '/src/js/material.min.js',
            '/src/images/main-image.jpg',
            '/src/css/app.css',
            '/src/css/feed.css',
            'https://fonts.googleapis.com/css?family=Roboto:400,700',
            'https://fonts.googleapis.com/icon?family=Material+Icons',
            'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
        ]);
    }));
});

// Activation happens only if all the pages of the scope of current scope are closed
self.addEventListener('activate', function(event) {
    console.log('Activating Service worker...', event);
});

self.addEventListener('fetch', function(event) {
    // console.log('Fetching.....', event);
    event.respondWith(caches.match(event.request).then(function(response) {
        if (response) {
            return response;
        } else {
            return fetch(event.request);
        }
    }));
});