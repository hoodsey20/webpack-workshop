import $ from 'jquery';
import { Greeter } from './greeter';
const greeter = new Greeter();


const message = greeter.greet('Hello', 'Webp*ckers2');
$('#app').append('<div>second div!!</div>');

