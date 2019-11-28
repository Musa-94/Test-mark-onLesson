import View from './view';
import Model from './model';
import Controller from './controller';

const init = () => {
    const view = new View();
    const model = new Model();
    const controller = new Controller();
}




// const first = document.getElementById('first');

// first.onchange = e => {
//     const { value } = e.target;
//     const jsonValue = JSON.stringify({ first: value })

//     sessionStorage.setItem('first', jsonValue);
// }

// const firstValue = sessionStorage.getItem('first') || '';

// first.value = firstValue && (JSON.parse(firstValue || "{}"));