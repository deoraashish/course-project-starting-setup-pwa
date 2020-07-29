var deferredPrompt;

if (!window.Promise) {
  window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function () {
    console.log('Service worker has been registered');
  }).catch(function(err) {
    console.log(err);
  });
}

window.addEventListener('beforeinstallprompt', function(event) {
    console.log('beforeinstallprompt fired...');
    event.preventDefault();
    deferredPrompt = event;
    return false;
});

// Get request by Fetch
// fetch('https://httpbin.org/ip')
//   .then(function(response) {
//     console.log(response);
//     return response.json();
// }).then(function(data) {
//   console.log(JSON.stringify(data));
// }).catch(function(err) {
//   console.log(err);
// });

// Post request by Fetch
fetch('https://httpbin.org/post',{
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  mode: 'no-cors',
  body: JSON.stringify({
    message: "Does this works?"
  })
}).then(function(response) {
  console.log(response);
  return response.json();
}).then(function(data) {
  console.log(JSON.stringify(data));
}).catch(function(err) {
  console.log(err);
});

