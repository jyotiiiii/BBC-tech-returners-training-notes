/*

React - Props, State and Events

To utilise any one of these, you need to use all of them. 
We’ll have a tour of what each thing does. 

Udemy - Stephen Gryder - course to understand React. 

PROPS
When we pass data to our components and we can then do something with that data

* Components return what should be displayed on the screen
* Components accept arbitrary inputs which are called “props”
* Props are read only - once within the component they will not change

Means properties. Called props in React. 
Think of them as passing information to your components. 

The parent is the App.js and in James’ App, the children are AddTask, TaskCount, TaskList (which also has a child called Task)

THE TASK COUNTER PART OF THE APP

So James’ taskCounter component needs to know a certain piece of information - it needs to know how many tasks are left to do. All the component needs to care about is how to display that piece of information i.e. h1 bold, 

Component worries about the display
The Props you pass to it are the data. 

[Parse is when  computer goes through data and interpret it]

For Props, the value can be JS data types such as strings, numbers, boolean, null, undefined, and also objects like arrays and also functions. 

The property for taskCounter needs a key and a value. You can give it whatever prop name you want. 

Props are ‘read only’, you can’t change them. So once they are in the component, they are rendered  as they are. The component can only display what the prop is. 

A “Single Source of Truth”

PROPS AND PURE FUNCTIONS 

Props should always use Pure Functions that will always return the same data, the expected result. Below is an example of a pure function. 

*/

function sum (a, b)  {
return a + b;
}

/*
* Does not change the inputs
* Always returns the exact same result for the same two inputs
* React components act the same. 
You should never attempt to change your props. If in React, you put props in and then add methods to it or something, React will come back with an error. 

PROPS IN CODE

*/
class Welcome extends Component  {
	render() {
		return <h1>Hello, {this.props.propName}</h1>;
		}
	}
// prints Hello Susan

<Welcome propName=‘Susan’ />
<Welcome propName=‘Lisa’ />
<Welcome propName=‘Stanley’ />

/*
React says I’ll get the Welcome component, then render the H1 and then put in the propname. 

propName is read only

So can’t have this.props.propName.add

For a login, the name would be passed in the parent component. 

STATE
Is when we want something to change i.e. that state of our application as a user, uses it. Add Tasks is the state changing. 

In React, State is always contains JSON object/s .

If we want something to change in the component, then we use State. And when we restart our App, the states will have disappeared, as they are held in memory. When we have the database and back end connected to our App, it will be that that sends the data to App.js but App.js will still cascade that info down to the children. 

[You do form validation in the front end - things like limiting characters etc.]

When a task gets added, App.js needs to tell TaskCount (which adds on another number) and TaskList (which adds another row)

When a state changes, React asks that particular component that the change relates to, to render again, which refreshes just that info. It’s quicker as it doesn’t render the whole page again, it just renders the components that the state change relates to. 

STATE IN CODE

* If something will change in the component then we use **state**
* We use the react function **setState** to update what is currently in state
* When we call **setState** it implicitly calls **render()**for us
* **render()** is called on ALL components that rely on that state

INITIAL STATE

Every component will have an initial state, a starting state. 
 
You’d want the initial state to be zero, i.e. if there are no tasks added yet, there are no tasks left to do. 
tasksRemaining is the key, 0 is the object

*/ 
class TaskRemaining extends Component {
    constructor(props) {
        super(props);

        // Initial state
        this.state = {
            tasksRemaining: 0
        }
    }

    addTask() {
        // Updating state
        let tasksLeft = this.state.tasksRemaining + 1;
        this.setState({tasksRemaining: tasksLeft});
    }

    render() {
        return <h2>You have {this.state.tasksRemaining} tasks left</h2>;
    }
}

/*

DOM EVENTS

DOM - document object model - all the objects on the page that you see. 

ACTIONS
When we want something to happen when the user does something. 

* There are various DOM events that we can ‘hook into’ and run some code when they are triggered.
* For example when someone clicks a button we can ‘hook into’ that and run a piece of code.
* We do this by attaching **event handlers**

With Applications, you can get something to fire when something happens.  An Event. So when someone clicks the Add button, you want a piece of code to run. It’s a function waiting to be called. 

SOME COMMON EVENTS

They are usually called ‘on’ something. Such as onClick or onFocus or onBlur. There are a whole series of handles that are common events:

* **onClick** - Fired when someone clicks a DOM element. Used regularly. Doesn’t have to be on a button, it could be on a div or a span or an image. 
* **onFocus** - Fired when someone gives focus to a DOM element such as clicking into a text field
* **onBlur** - Fired when someone leaves the focus on a DOM element such as clicking AWAY from a text field
* **onChange** - Fired when the DOM element changes such as entering a key into a text field. User for checking the length of an input for example. 
* onMouseover - used to apply some CSS

FULL LIST OF ALL AVAILABLE DOM EVENTS
https://www.w3schools.com/jsref/dom_obj_event.asp~

With AddTask, the child AddTask tells the parent App.js that a new task has been added and App.js tells the other children TaskCount and TaskList. 

Jobs and Counter are the names of the Props - that we chose

HOW WE DO DOM EVENTS IN CODE: 

A React-specific example:

*/
// In constructor
this.onButtonClicked = this.onButtonClicked.bind(this);

// onButtonClicked function
onButtonClicked() {
    alert(“You clicked the button”);
}

// In render function, the onClick attributes specifies the function
// to be called when the button isClicked
<button type=”button” onClick={this.onButtonClicked}>
 Click Me
</button>

/*


THE BIND CODE LOOKS WEIRD

There’s actually quite a debate on the best way to bind the events in React
~https://medium.freecodecamp.org/the-best-way-to-bind-event-handlers-in-react-282db2cf1530~

But… there are some useful supporting guides on **bind**
~https://reactjs.org/docs/handling-events.html~
~https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/~


HOMEWORK 

Completion of your React ToDo list - By 23rd Jan 2020
* Styled how you want it 
* Responsive elements (Bootstrap Grid)
* Ability to ‘Add’ a task
* Ability to ‘Delete’ a task
* Ability to ‘Mark Complete’ a task
Add your own information to the README file
Add your own info to the ReadMe file
~https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet~