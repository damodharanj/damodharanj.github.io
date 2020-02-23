
self.addEventListener('activate', event => {
    clients.claim();
    console.log('Ready!');
});

var options = {
    body: 'This notification was generated from a push!',
    icon: 'images/example.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {action: 'explore', title: 'Explore this new world',
        icon: 'images/checkmark.png'},
      {action: 'close', title: 'Close',
        icon: 'images/xmark.png'},
    ]
  };
var i = 0;
let interval;


self.addEventListener('message', function (evt) {
    switch (evt.data.message) {
        case 'start':
              interval = setInterval((x) => {
                    i++;
                    i % 2 ?
                    self.registration.showNotification(evt.data.action2, options) :
                    self.registration.showNotification(evt.data.action1, options)
                }, evt.data.duration * 1000 * 60);
            return;
        case 'stop':
            i = 0;
            clearInterval(interval)
            return;
    }
})

self.addEventListener('push', function(e) {
  
  e.waitUntil(
    self.registration.showNotification('Hello world!', options)
  );
  
});