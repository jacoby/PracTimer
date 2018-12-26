/**
 * starting a service worker
 */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw-0.1.js')
      .then(
        function (registration) {
          console.log('reg success with scope: ', registration.scope)
        },
        function (err) {
          console.log('reg fail with scope: ', err)
        }
      )
    console.log('SERVICE WORKER!');
  });
  window.addEventListener('install', function (event) {
    event.waitUntil();
  })
} else {
  console.log('SORRY! NO SERVICE WORKER!');
}