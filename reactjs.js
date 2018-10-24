// JSX= HTML + JS

// Atributes 
const p1 = <p id = "large">foo</p>
const p2 = <p id = "small">bar</p>

// Nested elements like in HTLM
let myDiv = (
<div>
    <h1>Hello world</h1>
</div>
);

/* JSX expressions always have an outermost element
* <div> to fix problems asociated</div>
*/
const blog = (
    <div>
        <img src="pics/192940u73.jpg" />
        <h1>
        Welcome to Dan's Blog!
        </h1>
        <article>
        Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
        </article>
    </div>
  );


  // Rendering JSX
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

