export default function GetInfoDevice() {
  /*
  console.log('Tipo de dispositivo: ' + navigator.deviceType);
   console.log('Modelo del dispositivo: ' + navigator.userAgent);
   console.log('Idioma preferido: ' + navigator.language);
   console.log('Plataforma del sistema operativo: ' + navigator.platform);
   console.log('Versión del navegador: ' + navigator.appVersion);
   console.log('Cookies habilitadas: ' + navigator.cookieEnabled);
   console.log('Versión de JavaScript: ' + navigator.javaEnabled());
   */
  // Obtener la dirección IP pública del dispositivo
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => console.log('Dirección IP: ' + data.ip))
    .catch(error => console.error('Error al obtener la dirección IP: ' + error));

  // Obtener la dirección MAC y tipo de interfaz de red activa
  // var network = require('network');
  /*
  network.get_active_interface(function (err, obj) {
    if (!err) {
      console.log('Dirección MAC: ' + obj.mac_address);
      console.log('Tipo de interfaz de red: ' + obj.type);
    } else {
      console.error('Error al obtener la dirección MAC: ' + err);
    }
  });
  */
}
