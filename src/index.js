import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import $ from "jquery";

const url = "https://swapi.dev/api/people/1";
var swapi = null;

var sample = {"name":"Luke Skywalker","height":"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male","homeworld":"http://swapi.dev/api/planets/1/","films":["http://swapi.dev/api/films/1/","http://swapi.dev/api/films/2/","http://swapi.dev/api/films/3/","http://swapi.dev/api/films/6/"],"species":[],"vehicles":["http://swapi.dev/api/vehicles/14/","http://swapi.dev/api/vehicles/30/"],"starships":["http://swapi.dev/api/starships/12/","http://swapi.dev/api/starships/22/"],"created":"2014-12-09T13:50:51.644000Z","edited":"2014-12-20T21:17:56.891000Z","url":"http://swapi.dev/api/people/1/"}

const element = <div>
  <Table />
</div>


export function Table(){
  getName(swapi);
return <table>
      <TableHeader />
      <TableRow />
       </table>
}

export function TableHeader(){
  return <thead>
    <tr>
      <th>Name</th>
      <th>Height</th>
      <th>Mass</th>
    </tr>
  </thead>
}

export function TableRow(){
  return <tr>
      <td>{ sample.name }</td>
  </tr>
}


function getName(){
  
    
    // var thing = $.ajax(url);
    // console.log(thing.responseText);
    

    const request = require('request');
  request(url, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log('Name: '+ response)
  swapi = body;
  });
    console.log("SHIT " + swapi);
  }
  
  // console.log(thing);
  // return thing.promise;
  


export default Table;


ReactDOM.render(
  element,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
