if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then(reg=>console.log('Service Worker zarejestrowany', reg))
    .catch(err=>console.log('Błąd rejestracji SW',err));
}
