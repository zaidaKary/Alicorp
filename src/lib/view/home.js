export default () => {
  const divElem = document.createElement('div');
  const viewHome = `
  <div>
  <p>HOLA ARIANNA</p>
  </div>`;
  divElem.innerHTML = viewHome;
  return divElem;
};