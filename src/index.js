// const element = document.createElement('h1');
// element.innerText = 'Hello, world!';
// const container = document.getElementById('root');
// container.appendChild(element);


import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firstName: "Johen",
  lastName: "Doe",
  age: 50,
  avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
};

const nombre = "Stiven";	
const element = <h1>hola {nombre}</h1>; ;
const container = document.getElementById("root");

ReactDOM.render(element, container)