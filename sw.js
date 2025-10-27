self.addEventListener('install', event => {
  console.log('Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker activated');
  return self.clients.claim();
});

// Obsługa push
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : { title: 'Czas Pracy', body: 'Masz powiadomienie' };
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'logo4.png',
      badge: 'logo4.png',
      data: data
    })
  );
});

// Kliknięcie w powiadomienie
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/index.html'));
});
