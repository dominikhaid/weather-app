import "../../../public/css/main.css";
//import '../../../public/less/main.less';
// import '../public/scss/style.scss'

function component() {
  const element = document.querySelector("#root");

  element.innerHTML = "<p>Hello :D webpack</p>";
  element.classList.add("hello");

  return element;
}

if (module.hot) {
  module.hot.accept();
}

// navigator.serviceWorker.getRegistrations().then(function (registrations) {
//   for (let registration of registrations) {
//     registration.unregister();
//   }
// });

// if ('serviceWorker' in navigator) {
// window.addEventListener('load', () => {
//   navigator.serviceWorker
//     .register('/service-worker.js')
//     .then((registration) => {
//       console.debug('SW registered: ', registration);
//     })
//     .catch((registrationError) => {
//       console.debug('SW registration failed: ', registrationError);
//     });
// });
// }

document.body.appendChild(component());
