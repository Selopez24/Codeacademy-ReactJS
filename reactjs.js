// JSX= HTML + JS

// Atributes 
const p1 = <p id = "large">foo</p>
const p2 = <p id = "small">bar</p>

// Nested elements like in HTLM, use parenthesis if expression takes more than one line
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

/*
 * Advanced JSX 
 */

 // Class is a reserved word in JS, so for JSX className must be used

 let myDiv = <div className='big'> I AM A BIG DIV</div>

 ReactDOM.render(myDiv, document.getElementById('app'));

 // in JSX self-closing tags must end with a slash

 const profile = (
    <div>
      <h1>I AM JENKINS</h1>
      <img src="images/jenkins.png"/> 
      <article>
        I LIKE TO SIT
        <br/>
        JENKINS IS MY NAME
        <br/>
        THANKS HA LOT
      </article>
    </div>
  );

 // JS in JSX in a JS file, fot this to be interpreted 
 // it is necesary to wrap the code in curly braces
 ReactDOM.render( <h1>{2 + 3}</h1>, document.getElementById('app') );

 const math = <h1>2 + 3 = {2 + 3}</h1>;

 ReactDOM.render(math, document.getElementById('app')
 );

 // Variables in JSX
 const theBestString = 'tralalalala i am da best';

  ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));

  // Variable atributes in JSX

  const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

  const gooseImg = 
  <img
    src = {goose}

  />;

  ReactDOM.render(gooseImg,document.getElementById('app'))


    // Events listeners

  function makeDoggy(e) {
    // Call this extremely useful function on an <img>.
    // The <img> will become a picture of a doggy.
    e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
    e.target.setAttribute('alt', 'doggy');
  }

  const kitty = (
    <img 
      src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
      alt="kitty"
      onClick={makeDoggy} />
  );

  ReactDOM.render(kitty, document.getElementById('app'));

  // JSX Conditionals: If Statements That Do Work

  let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);

//

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:

if (coinToss() === 'heads'){
  img = (
  <img
  src = {pics.kitty}/>
  );
} else{
  img = (
    <img
    src = {pics.doggy}
    />
  );
}

ReactDOM.render(
  img, 
  document.getElementById('app')
  );

  // Ternary Operator

  function coinToss () {
    // Randomly return either 'heads' or 'tails'.
    return Math.random() < 0.5 ? 'heads' : 'tails';
  }
  
  const pics = {
    kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
    doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
  };
  
  const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;  
  // note above the notation pics[method/attribute]
  ReactDOM.render(
    img, 
    document.getElementById('app')
  );

  // JSX Conditionals: &&

  const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
     {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);

// .map in JSX

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  // expression goes here:
  <li>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(
  <ul>{peopleLis}</ul>,
  document.getElementById('app')
);

// Keys  

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
  <li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app')); 

// React.createElement beside using JSX

const greatestDivEver = React.createElement(
	'div',
  null,
  'i am div'
);

// First React Component

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// component goes here:
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);


// Use a Variable Attribute in a Component

const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};

class Owl extends React.Component{
  render(){
    return (
    <div>
      <h1>{owl.title}</h1>
      <img src = {owl.src} alt = {owl.alt} />
    </div>  
    );
  }
}

ReactDOM.render(<Owl/>, document.getElementById('app'));


// Put Logic in a Render Function

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

class Friend extends React.Component{
  render(){

    let friend = friends[2]

    return(
      <div>
        <h1>{friend.title}</h1>
        <img src = {friend.src}/>
      </div>
    );
  }
}

ReactDOM.render(<Friend/>, document.getElementById('app'));

// Use a Conditional in a Render Function

const fiftyFifty = Math.random() < 0.5;

class TonightsPlan extends React.Component{
  render(){

    let plan;

    if (!fiftyFifty){
      plan = 'Tonight I\'m going out WOOO'
    }
    else{
      plan = 'Tonight I\'m going to bed WOOO'
    }
    return(
      <h1>{plan}</h1>
    );
  }
}

ReactDOM.render(<TonightsPlan/>, document.getElementById('app'));

// Use this in a Component 

class MyName extends React.Component {
	// name property goes here:
  get name(){
    return 'Maryan'
  }

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));

// Use an Event Listener in a Component

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick ={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(<Button/>, document.getElementById('app'));

/*
 *    COMPONENTS RENDER OTHER COMPONENTS
 */

 // Apply a Component in a Render Function

 export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

 class ProfilePage extends React.Component {
  render() {
    return (
      <div>
				<NavBar/>
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

ReactDOM.render(<ProfilePage/>,document.getElementById('app'));

/*
 *THIS.PROPS 
*/

//Access a Component's props

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer/>, document.getElementById('app'));

// Pass `props` to a Component

ReactDOM.render(<PropsDisplayer myProp = "Hello"/>, document.getElementById('app'));

// Render a Component's props

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Maryan' />, 
  document.getElementById('app')
);

// Pass props From Component To Component

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
      	<Greeting name = "Maryan"/>
        
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

// Render Different UI Based on props

export class Greeting extends React.Component {
  render() {
  	if (this.props.signedIn == false) { // make a decison 
  	  return <h1>GO AWAY</h1>;
  	} else {
  	  return <h1>Hi there, {this.props.name}!</h1>;
  	}
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Alison" signedIn = {true} />
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

// Put an Event Handler in a Component Class

class Example extends React.Component {
  handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }

  render() {
    return (
      <h1 onClick={this.handleEvent}>
        Hello world
      </h1>
    );
  }
}

// Pass an Event Handler as a prop

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk} />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

// Receive an Event Handler as a prop

export class Button extends React.Component {
  render() {
    return (
      <button onClick = {this.props.talk}>
        Click me!
      </button>
    );
  }
}

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.handleClick} />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

// handleEvent{function/method}, onEvent{props}, and this.props.onEvent //


// this.props.children will return everything in between a component's opening and closing JSX tags.

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) { // adds a "s" if there are more than one element in list
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);


// defaultProps

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = { text: 'I am a button' };

ReactDOM.render(
  <Button text="" />, //overwrittes the prop
  document.getElementById('app')
);

/*this.props Recap
That completes our lesson on props!

props is quite possibly the longest and most difficult lesson in all of our React courses. Congratulations on getting this 
far!

Here are some of the skills that you have learned:

Passing a prop by giving an attribute to a component instance
Accessing a passed-in prop via this.props.prop-name
Displaying a prop
Using a prop to make decisions about what to display
Defining an event handler in a component class
Passing an event handler as a prop
Receiving a prop event handler and attaching it to an event listener
Naming event handlers and event handler attributes according to convention
this.props.children
getDefaultProps */




/**
 *  
 * THIS.STATE
 * 
 * */

 // Setting Initial State



class App extends React.Component {
	// constructor method begins here:
  constructor(props){
    super(props)
    this.state = {title: 'Best App'}
  }
	
  render() {
    return (
      <h1>
        Wow this entire app is just an h1.
      </h1>
    );
  }
}

// Access a Component's state

class App extends React.Component {
	// constructor method begins here: q
  constructor(props){
    super(props)
    this.state = {title: 'Best App'}
  }
	
  render() {
    return (
      // just like in props
      <h1> 
       {this.state.title}
      </h1>
    );
  }
}

// Update state with this.setstate

this.setState({ hungry: true });

// Call this.setState from Another Function
//  When you write a component class method that uses this, 
// then you need to bind that method inside of your constructor function!

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props)
    this.state = {color : green}
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(){
    const newColor = this.state.color == green ? yellow : green;
    this.setState({color: newColor});
  }
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick ={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

// this.setState Automatically Calls render

//Any time that you call this.setState(), this.setState() AUTOMATICALLY calls .render() as soon as the state has changed.

/**
 * Components Interacting Recap
In this unit, you learned how to use import and export to access one file from another. You learned about props and state, and the countless variations on how they work.

Before this unit, you learned about JSX, components, and how they can work together.

A React app is basically just a lot of components, setting state and passing props to one another. Now that you have a real understanding of how to use props and state, you have by far the most important tools that you need!

In future lessons, the focus will shift slightly outward. In addition to learning more new skills, you'll also learn your first programming patterns. These large-scale strategies will help you combine what you've learned and really start building.
*/



 /*Learn ReactJS: Part II */

 // STATELESS COMPONENTS FROM STATEFUL COMPONENTS

 // Stateless Components Inherit From Stateful Components

 // In our pattern, a stateful component passes its state down to a stateless component.

 // Stateful

 class Parent extends React.Component{
   constructor(props){
     super(props)
     this.state = {name: 'Frarthur'}
   }
   render(){
    return <div></div>;
  }
}

// Stateless

export class Child extends React.Component{
  render(){
    return <h1>Hey, my name is {this.props.name}</h1>
  }
}

// Pass a Component's State

class Parent extends React.Component{
  constructor(props){
    super(props)
    this.state = {name: 'Frarthur'}
  }
  render(){
   return <Child name={this.state.name}/>;
 }
}
ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);

/* CHILD COMPONENTS UPDATE THEIR PARENTS' STATE*/

//Define an Event Handler

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this)
  }

  changeName(newName){
    this.setState({name: newName});
  }

  render() {
    return <Child name={this.state.name} onChange ={this.changeName} />
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);

export class Child extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    const name = e.target.value;
    this.props.onChange(name);
  }
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}> 
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}

/**Child Components Update Sibling Components*/

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child onChange={this.changeName} />
        <Sibling name = {this.state.name}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);
export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}

export class Sibling extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}


/* STYLE */


const styleMe = <h1 style={{background: 'lightblue', color: 'darkred'}}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);

// Make A Style Object Variable

 const styles ={
  background: 'lightblue',
  color:  'darkred'
};

const styleMe = <h1 style={}styles>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);

//Style Name Syntax

// regular JS
const styles = {
  'margin-top':       "20px",
  'background-color': "green"
};

// ReactJS
const styles = {
  marginTop:       "20px",
  backgroundColor: "green"
};

// Share Styles Across Multiple Components

const fontFamily = 'Comic Sans MS, Lucida Handwriting, cursive';
const background = 'pink url("https://media.giphy.com/media/oyr89uTOBNVbG/giphy.gif") fixed';
const fontSize = '4em';
const padding = '45px 0';
const color = 'green';

export const styles = {  // export all in an object
  fontFamily: fontFamily,
  background: background,
  fontSize:   fontSize,
  padding:    padding,
  color:      color
};

//Separate Container Components From Presentational Components: Explanation

// Presentational component always rendered by a container component

//BEFORE:

import React from 'react';
import ReactDOM from 'react-dom';

const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

export class GuineaPigs extends React.Component { // this does too many things!
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = GUINEAPATHS[this.state.currentGP];
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}

ReactDOM.render(
  <GuineaPigs />, 
  document.getElementById('app')
);

// AFTER: 

const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

class GuineaPigsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = GUINEAPATHS[this.state.currentGP];
    return <GuineaPigs src={src}/>;
  }
}

ReactDOM.render(
  <GuineaPigsContainer />,
  document.getElementById('app')
);


export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}


// Stateless Functional Components

export class Friend extends React.Component {
	render() {
		return <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-octopus.jpg' />;
	}
}

ReactDOM.render(
	<Friend />,
	document.getElementById('app')
);

// new

export const Friend = () => {
  return <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-octopus.jpg' />;
}

// Stateless Functional Components and Props

export const GuineaPigs = (props) =>{
  let src = props.src;
  return(
    <div>
      <h1>Cute Guinea Pigs</h1>
      <img src={src}/>
    </div>
  );
}

/* propTypes */

export class BestSeller extends React.Component {
  render() {
    return (
      <li>
        Title: <span>
          {this.props.title}
        </span><br />
        
        Author: <span>
          {this.props.author}
        </span><br />
        
        Weeks: <span>
          {this.props.weeksOnList}
        </span>
      </li>
    );
  }
}

BestSeller.propTypes = {
  title:   React.PropTypes.string.isRequired,
  author:	 React.PropTypes.string.isRequired,
  weeksOnList: React.PropTypes.number.isRequired

};

/*REACT FORMS*/

// Input OnChange


export class Input extends React.Component {
  constructor(props){
    super(props)
    this.state ={ userInput :''}
    this.handleUserInput = this.handleUserInput.bind(this)
  }
  handleUserInput(e){ // event listener
    this.setState({userInput : e.target.value})
  }
  render() { // Value = set value on input
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} value={this.state.userInput} /> 
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);


/* MOUNTING LIFECYCLE METHODS */

// A component "mounts" when it renders for the first time. 

