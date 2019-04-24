import testImage from './../../img/test.png';

let app = document.getElementById('app');
let text = document.createTextNode('hello webpack!');
app.appendChild(text);
const test = document.createElement('img');
test.src = testImage;
document.body.appendChild(test);
