var deferredPrompt;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function () {
    console.log('Service worker has been registered');
  });
}

window.addEventListener('beforeinstallprompt', function(event) {
    console.log('beforeinstallprompt fired...');
    event.preventDefault();
    deferredPrompt = event;
    return false;
});

