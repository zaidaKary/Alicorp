// Cambia la ruta
const redirect = (path = '') => {
  window.location.hash = `/${path}`;
};

// Añade el contenido a nuestro div principal
const template = (view) => {
  const root = document.getElementById('root');
  root.innerHTML = view;
};
// Inserta al inicio del home
const templatePost = (view) => {
  const post = document.getElementById('post');
  post.prepend(view);
};


export { redirect, template, templatePost };