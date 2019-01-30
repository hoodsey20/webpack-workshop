import { Greeter } from './greeter';

import logo from './cat.jpeg'

import './styles.scss';

const greeter = new Greeter();


const message = greeter.greet('Hello', 'Webp*ckers');
console.log('TCL: message', message)
const app = document.querySelector('#app');
const h1 = document.createElement('h1');
h1.textContent = message; 

const img = document.createElement('img');
img.src = logo;


app.appendChild(img);
app.appendChild(h1);

