React JS  It is a javascript Library mainly used ot build the User Interfaces means which are the parts that user will interact that parts of website can be built using the reactjs.
React was developed by Facebook 2011
Alternate frameworks of react are – Angular, Vue, Svelte
React is a Components based  User Interfaces
Independent  we create different components then merge it form the one complete one.
Where the components(functions) that we used that can be reused again and again that makes easier to build for developers

Node js is required must and should
To see the version of the node and npm(Node Package Manager) we use  node –v & npm –v in Command prompt
Inorder to use the react we need to use create-react-app which is mainly used to create app and also to boot the react 
Babel  is mainly used to convert the modern javascript code to the older version so that the browser will understand what the actual code is that’s it.
Webpack it is mainly used to compile  raw javascript code  to the javascript bundle.
And also this both we need not need to download manually it is already get installed when we install the create-react-app itself by default. 

SPA(Single page application)/
Virtual DOM & Client side rendering
browser






when u put the url as facebook.com in browser it will goes to the server and then it return back u the single html file which consists of javascript bundle or the javascript downloadable file. Yes then the browser will download the javascript then the browser will boot the react js so that home of the url will be shown in the browser. So this is called client side rendering. 
Similarly if u give the another request that facebook.com/notification it wont be again request to the server side rather it will be handled by the react itself that was sent by the server itself earlier. So this is called the Single Page Application. 
Virtual DOM in ReactJS  Here DOM in react consists of tree like structure like root html under that element head and element body like that it will go. See in javascript any changes that done in code that will change the entire tree structure but when it comes to the virtual DOM in reactJS what changes that done in react code it will make first in the virtual DOM after the complete changes done only it will make the changes in code of what that changes done in the code that code only be changed in DOM. So it becomes more faster when compared to the other.

First create the react app
Need to install react apps so  npx create-react-app appName
We need to get into the reactapp that we created cd appName
Next to run it in the browser we use  npm start
Folder Structure
node_modules  Huge folder used to dependency function, library. No need to touch that files.
public  static folder 
inside this there is index.html this is the file you get in return to the server that contains no codes in the body even then it will show the page in the browser.
Other all inside public are not touched it is kept as it is no changes required.
src   here in this were we actually right code.
See here index.js and publics/index.html are linked to each other. Where app.js is linked in the index.js file so that is rendering.

Remove BoilerPlate
Removing all the files from src except the index.js all other files are deleted
First component
Creating components is nothing but creating function itself and next that components to be called so that it will come on the screen so we use the methid called render inside the react-dom/client that function name should be createRoot only. Where render is mainly used to display element in the screen.
So we need to create root variable to fetch where it needs to be displayed so inside the createRoot itself we need to fetch the id using document.getElmenetById() then need to be rendered later to the function/ components we created.
function Greeting() {
  return <h2>Welcome</h2>;
}

Components in Details
Here we going to study what actually the components will return need to study. 
Even if it looks like html tag it is not the actual html its JSX.
Actually the JSX files or the function looks like
function Greeting() {
  return React.createElement("h2", {}, "welcome again");
}
First we need to right what the tag that need to be displayed and empty object actually called as props, then last is the text that need to be displayed on the screen.
So this indicates that actual html line is not the pure html line rather it is the JSX line.

JSX Rules
Stands for Java Script XML. Components always returns jsx 
1.	JSX always return single element
2.	Single element can div / section / article or fragment

function Greeting() {
  return (
    <div>
      <div>
      <h2>Hello world</h2>
      </div>
      <ul>
        <li>Hello</li>
      </ul>
      <div>
      <h2>Hello world 2</h2>
      </div>
    </div>
  );
}

If you right like this then when you inspect on the browser you see like the extra or unnecessary div that has come so to over come this we use the fragment to look better and to remove that unnecessary div
function Greeting() {
  return (
    <React.Fragment>
      <div>
        <h2>Hello world</h2>
      </div>
      <ul>
        <li>Hello</li>
      </ul>
      <div>
        <h2>Hello world 2</h2>
      </div>
    </React.Fragment>
  );
}

So like this we use the fragment. And also apart from that we can also write it has the below which is also considered as the react Fragment
function Greeting() {
  return (
    <>
      <div>
        <h2>Hello world</h2>
      </div>
      <ul>
        <li>Hello</li>
      </ul>
      <div>
        <h2>Hello world 2</h2>
      </div>
    </>
  );
}

3.	Use camelCase for html attribute ie onClick, className etc 
4.	className instead of class.
Where we need to right className if have it rather than class which is already exist in the the javascript. So in react we use className to use classes.
5.	Close every element
Like in javascript we don’t have closing tag for input, image fields but in the JSX it must and should be closed like
<input></input>
6.	Formatting
Like fragmenting, brackets while using the return must be proper enough for the proper returning of the function.

Nested Components
Like how to call one component inside other component.
To debugging makes easier so we have made it as components which makes easier to understand and debugging
Index.js
import React from "react";
import { createRoot } from "react-dom/client";
function Greeting() {
  return (
    <>
      <HelloWorld />
      <Message />
    </>
  );
}

function HelloWorld() {
  return <h1>Hello World</h1>;
}

function Message() {
  return <p>Welcome to this wolrd</p>;
}
// function Greeting() {
//   return React.createElement("h2", {}, "welcome again");
// }

const root = createRoot(document.getElementById("root"));
root.render(<Greeting />);



JSX-CSS
How to implement css in react JSX. 
We can make the css inside the js file itself or else we can right it separately externally then we can import it inside the reactjs file
Index.css
* {
  padding: 0;
  margin: 0;
}

.heading {
  color: blue;
}


Index.js
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function Greeting() {
  return (
    <>
      <HelloWorld />
      <Message />
    </>
  );
}

function HelloWorld() {
  return <h1 className="heading">Hello World</h1>;
}

function Message() {
  return <p>Welcome to this wolrd</p>;
}

const root = createRoot(document.getElementById("root"));
root.render(<Greeting />);


see here we can create it for the tag itself or we can create it for the classname using the .(dot) operator itself.
We can also create the inline styling enough for the styling.
Use the style attribute for the particular tag that you want to style. Use style attribute equals to sign then the flower bracket (this is for the css styling purpose) then again flower bracket (it is for the javascript objects) then u can use the particular css properties to provide the stylling. Then the color properties values are given in the string format.
function Message() {
  return <p style={{ color: "yellow", fontSize: "4rem" }}>Welcome to this wolrd</p>;
}

“yellow” is given in string format which acts as the javascript object. Because we are writing in the javascript file so that needs to known. Similarly inorder to right the fontsize we use the camelCase to right all that should be keep in mind and value should be written in the string format itself 
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function Greeting() {
  return (
    <>
      <HelloWorld />
      <Message />
    </>
  );
}

function HelloWorld() {
  return <h1 className="heading">Hello World</h1>;
}

function Message() {
  return <p style={{ color: "yellow", fontSize: "4rem" }}>Welcome to this wolrd</p>;
}
// function Greeting() {
//   return React.createElement("h2", {}, "welcome again");
// }

const root = createRoot(document.getElementById("root"));
root.render(<Greeting />);


* {
  padding: 0;
  margin: 0;
}

.heading {
  color: blue;
  font-size: 4rem;
}


Next we here going to study about how javascript that can implemented in the JSX
Props-Intro (short form of properties)
See here props are mainly used for to get dynamic changes in the displays.
For 2nd function or the components we use the props as the arguments or the parameters inside that we has different types of title , author, age like that using props in prefix which provide the dynamic change in the display screen. And also to get changes we need to provide particular parameters values for the title, author, age while we call the components itself it can be called in the string format or the object format anything as it’s a JSX file we write.
import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
const title = "RamKatha";
const author = "Ram";
function BookiList() {
  return (
    <>
      <Book title="Hanu" author="Ram 1" age={23} />
      <Book title="Ramji" author="Ram 2" />
    </>
  );
}

function Book(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.author}</p>
      <h2>{props.age}</h2>
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<BookiList />);
Props Destructuring
Another way to access the props here we are going to study.
Here taking out the properties from the props itself is called as props-destructuring.
function Book(props) {
  const { title, author } = props;
  return (
    <>
      <h1>{title}</h1>
      <p>{author}</p>
      
    </>
  );
}

It’s a other way of destructuring like where u accept the props there itself you break down or destructure.
function Book({ title, author }) {
  
  return (
    <>
      <h1>{title}</h1>
      <p>{author}</p>
    </>
  );
}

Whole code
import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
const title = "RamKatha";
const author = "Ram";
function BookiList() {
  return (
    <>
      <Book title="Hanu" author="Ram 1" age={23} />
      <Book title="Ramji" author="Ram 2" />
    </>
  );
}

function Book({ title, author }) {
  
  return (
    <>
      <h1>{title}</h1>
      <p>{author}</p>
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<BookiList />);



Props-Children
Here we are going to study like if we have written anything between the opening  components and closing components. Then how to get that particular items or the elements is here we are going to study.
import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
const title = "RamKatha";
const author = "Ram";
function BookiList() {
  return (
    <>
      <Book title="Hanu" author="Ram 1" age={23} />
      <Book title="Ramji" author="Ram 2" />
      <Book title={"Karnataka"}>
        <h3>The book is good</h3>
      </Book>
    </>
  );
}

function Book({ title, author, children }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{author}</p>
      {children}
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<BookiList />);


here as we written the text inbetween the Book components. Inorder to fetch that we neeed to add children  keyword in the destructuring only that keyword should be added no other than that as we fetching children of the props. 
This children tags are mainly used for the particular items only for which it required other than general.

Refactoring to Better Data Structure
Here we are hard coded every thing like title and authors etc.
So now were are making it different way like storing that value in the java script object and then getting that from the data structure.
import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";

const fBook = {
  title: "Hanu",
  author: "Ram 1",
};

const sBook = {
  title: "Ramji",
  author: "Ram 2",
};
function BookiList() {
  return (
    <>
      <Book title={fBook.title} author={fBook.author} />
      <Book title={sBook.title} author={sBook.author} />
    </>
  );
}

function Book({ title, author, children }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{author}</p>
      {children}
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<BookiList />);


If we have more number of the books then we need to add for n numbers times that book has so we use the arrayOfObjects to overcome this. 

Listing of Data
Like here we are using  map function to loop through around the arrayListObjects that is written in the below do understand it.
import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";

const books = [
  {
    title: "Hanu",
    author: "Ram 1",
  },
  {
    title: "Ramji",
    author: "Ram 2",
  },
];
function BookiList() {
  return (
    <>
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </>
  );
}

function Book(props) {
  return (
    <>
      <h1>{props.book.title}</h1>
      <p>{props.book.author}</p>
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<BookiList />);


Event Basics
Event is nothing but the any user interactions like button etc etc.
Here we have used the button where when we click on the button it should be do something so we have an event handler called as onClick. Here in the onClick we used the function called as clickHandler where we have not used the parenthesis ie () because if we use the parenthesis inside the onclick button it will perform before the clicking of button so we are not using the parenthesis there so that when we click only on button then it needs to be performed so we just used the functionName itself.
import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";

const books = [
  {
    title: "Hanu",
    author: "Ram 1",
  },
  {
    title: "Ramji",
    author: "Ram 2",
  },
];
function BookiList() {
  return (
    <>
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </>
  );
}

function Book(props) {
  function clickHandler() {
    alert("hello");
  }
  return (
    <>
      <h1>{props.book.title}</h1>
      <p>{props.book.author}</p>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<BookiList />);



Import and Export Statement
It is purely javascript based its not come under react.
Here instead of writing all the codes in the single file we use the separate files and import it to the single file then perform same functionality as earlier.
Before we import the file we need to export the particular files there are 2ways to do so:
i.	Default export
ii.	Named export
Generally if we use the default export then we don’t need to use the curly braces ie {} while importing it in the file. If we are not defaultly exported then we can use it directly while importing. And also generally components are defaultly exported so its not imported using ie {}.
Index.js
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { books } from "./books.js";
import Book from "./Book.js";

function BookiList() {
  return (
    <>
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<BookiList />);

books.js
export const books = [
  {
    title: "Hanu",
    author: "Ram 1",
  },
  {
    title: "Ramji",
    author: "Ram 2",
  },
];


Book.js
function Book(props) {
  function clickHandler() {
    alert("hello");
  }
  return (
    <>
      <h1>{props.book.title}</h1>
      <p>{props.book.author}</p>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
    </>
  );
}

export default Book;



Intro to State
This is the advanced react topic which have the react Hooks topic.
Hooks are basic react functionality by those fucntions we can use for the react  functionality.
There are useState, useEffect  these are the main Hooks of the react which mainly used where in this useState is the main hook that makes the reactJS so dynamic.
State means the application state. For example at the first time we have the one state before rendering and after the user interaction the value of the application or the data will be changed that can make changes using the useState which makes the react so dynamic enough.
useState() statement
index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
function Index() {
  return (
    <div>
      <App />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Index />);


App.js
import React from "react";

function App() {
  let title = "Karthik";
  function changeHandle() {
    console.log("Ram");
    title = "Ram";
  }
  return (
    <>
      <h2>{title}</h2>
      <button type="button" onClick={changeHandle}>
        Change Title
      </button>
    </>
  );
}

export default App;


so here we wont be getting title name changed on clicking the button. So we use the useState to change the state of the application or the data.


useState Basics
useState is the function which present inside the react. and when we import that we should be using the curly braces ie {} because it is not defaultly exported so.
App.js
import React, {useState} from "react";

function App() {
  console.log(useState);
  
  return (
    <>
      
      <button type="button">
        Change Title
      </button>
    </>
  );
}

export default App;

output
 
Like when we execute we get it as array with 2 values  1 undefined, 2 function.
App.js
import React, {useState} from "react";

function App() {
  console.log(useState());
  
  return (
    <>
      
      <button type="button">
        Change Title
      </button>
    </>
  );
}

export default App;


Output
 

While anything string value is passed to the useSatte function. Then we get the output as this 
App.js
import React, { useState } from "react";

function App() {
  console.log(useState("Hello World"));

  return (
    <>
      <button type="button">Change Title</button>
    </>
  );
}

export default App;


Output
 
The function that present in the 2nd in array that is mainly used to hold(Manage) the value that present in the first.

Similarly the first need not be only string it can also be number, Boolean or anything for that matter. At the same time we can also fetch the data of arrays using index values too. Like below 
import React, { useState } from "react";

function App() {
  console.log(useState("Hello World"));
  const value = useState(1)[0];
  console.log(value);
  
  return (
    <>
      <button type="button">Change Title</button>
    </>
  );
}

export default App;


output
 

Now other way to change the value dynamically we use here destructuring like
App.js
import React, { useState } from "react";

function App() {
  //   console.log(useState("Hello World"));
  //   const value = useState(1)[0];
  //   const handler = useState(1)[1];
  //   console.log(value, handler);
  const [text, setText] = useState("Karthik");
  function handleChange() {
    setText("RAM");
  }
  return (
    <>
      <h2>{text}</h2>
      <button type="button" onClick={handleChange}>
        Change Title
      </button>
    </>
  );
}

export default App;


to make it more dynamic enough this is the below code
import React, { useState } from "react";

function App() {
  //   console.log(useState("Hello World"));
  //   const value = useState(1)[0];
  //   const handler = useState(1)[1];
  //   console.log(value, handler);
  const [text, setText] = useState("Karthik");
  function handleChange() {
    if (text === "Karthik") {
      setText("RAM");
    } else {
      setText("Karthik");
    }
  }
  return (
    <>
      <h2>{text}</h2>
      <button type="button" onClick={handleChange}>
        Change Title
      </button>
    </>
  );
}
export default App;

index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
function Index() {
  return (
    <div>
      <App />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Index />);


State with Array
This is the cool stuffs that we can do so that makes more understanding.
App.js
import React, { useState } from "react";
import { data } from "./data.js";

function App() {
  const [teams, setTeam] = useState(data);
  function clearTeam() {
    setTeam([]);
  }
  return (
    <>
      {teams.map((team) => {
        return (
          <div key={team.id}>
            <h4>{team.name}</h4>
          </div>
        );
      })}
      <button onClick={clearTeam}>Clear Team</button>
    </>
  );
}

export default App;


data.js
export const data = [
  {
    id: 1,
    name: "Karthik",
  },
  {
    id: 2,
    name: "Ram",
  },
  {
    id: 3,
    name: "Hanu",
  },
];


Index.js
import React from "react";
import { createRoot } from "react-dom/client";	
import App from "./App.js";
function Index() {
  return (
    <div>
      <App />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Index />);



useEffect Basics
useeffect is the also function where by default useEffect will run after every re-render.
useEffect it’s a react Hook which will render every time whenever the components re-renders.
useEffect which will take another function within it.
App.js
import React, { useState, useEffect } from "react";
import { data } from "./data.js";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
  });

  function countIt() {
    setCount(count + 1);
  }
  return (
    <>
    <h4>{count}</h4>
      <button onClick={countIt}>Click me</button>
    </>
  );
}

export default App;



UseEffect – Dependency List
 second parameter – it is the dependency array means if the second parameter is not there then for every re render of the components the useEffect will run.
Example given –  like here second paramneter is used as the empty array ie []. This will help the useEffect to render only at the initial point of time not every time. So useEffect only renders once in the function.
App.js
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
  }, []); //for the initial rendering only it will trigger

  function countIt() {
    setCount(count + 1);
  }
  return (
    <>
      <h4>{count}</h4>
      <button onClick={countIt}>Click me</button>
    </>
  );
}

export default App;
 
other thing if we use the second paramenter as the any element like ie [count]. Then for every update or changes in the value of the count useEffect will render that’s it.
import React, { useState, useEffect } from "react";
import { data } from "./data.js";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
  }, [count]); //for the initial rendering only it will trigger

  function countIt() {
    setCount(count + 1);
  }
  return (
    <>
      <h4>{count}</h4>
      <button onClick={countIt}>Click me</button>
    </>
  );
}

export default App;


also we can use any number of ueEffect that can be used in the components.
import React, { useState, useEffect } from "react";
import { data } from "./data.js";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
  }, [count]); //for the initial rendering only it will trigger

  useEffect(() => {
    console.log("hello");
  },[]);
  function countIt() {
    setCount(count + 1);
  }
  return (
    <>
      <h4>{count}</h4>
      <button onClick={countIt}>Click me</button>
    </>
  );
}

export default App;



index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
function Index() {
  return (
    <div>
      <App />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Index />);


also we can use the conditional loops that can be used inside the useEffect no matters in that
import React, { useState, useEffect } from "react";
import { data } from "./data.js";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 0) {
      console.log("call useEffect");
    }
  }, [count]); //for the initial rendering only it will trigger


  useEffect(() => {
    console.log("hello");
  }, []);
  function countIt() {
    setCount(count + 1);
  }
  return (
    <>
      <h4>{count}</h4>
      <button onClick={countIt}>Click me</button>
    </>
  );
}

export default App;



useEffect – fetching Data
like first we use the useEffect() inside that we create a function where that function is mainly used to fetch the data from the url that we have used. Next below that we have returned the data in user interface using map that’s what we have done till now.
App.js
import React, { useState, useEffect } from "react";
import { data } from "./data.js";

const url = "https://api.github.com/users";
function App() {
  const [gusers, setGusers] = useState([]);
  async function getData() {
    const response = await fetch(url);
    const users = await response.json();
    setGusers(users);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {gusers.map((guser) => {
        return <li>{guser.login}</li>;
      })}
    </>
  );
}

export default App;

Multiple returns
See here below we have used the 2 return statement where if we return the statement in function then the below statement that is not executed at all. So it will only display as Hello world in UI.
import React from "react";

function App() {
  return "Hello world";
  return (
    <>
      <h1>Karthik</h1>
    </>
  );
}

export default App;

So we use the conditional rendering to return the multiple statement that is the main part in the reactJS.
Now this below if to display multiple retruns statement
import React, { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return "Hello world";
  }

  return (
    <>
      <h1>Karthik</h1>
    </>
  );
}

export default App;


As we used the if statement if that statement is true then only it will execute the return statement inside that if not then the below statement will be executed.

Short Circuit Evaluation
It is the the pure javascript. By using or and and operation we create the evealuation of the JSX condition.
Like 1 thing that needs to be known is that condiction like if that cannot be written inside the return statement ie JSX. But can be rendering can be made using ternary operator.
We use the or and and for this evaluation. 
Like or which will give first non false value generally which returns the value other than empty and and which will give the first false value which gernrally is empty value.
So like when the initial value is empty string then or which will return the first non empty value and and  which will return the first empty value. SO for here  or  which gives hello as outout and for and  gives the “” ie empty string as the ouput.
App.js
import React, { useState, useEffect } from "react";
import { data } from "./data.js";

const url = "https://api.github.com/users";
function App() {
  const [text, setText] = useState("");
  //short circuit evaluation
  const firstValue = text || "hello"; //OR
  const secondValue = text && "hello"; //AND
  return (
    <>
      <h1>firstValue:{firstValue}</h1>
      <h1>secondValue:{secondValue}</h1>
    </>
  );
}

export default App;


similarly if the initial tring is non empty then  or  will give micro as ouput and and  will give the hello as output. 
import React, { useState, useEffect } from "react";
import { data } from "./data.js";

const url = "https://api.github.com/users";
function App() {
  const [text, setText] = useState("micro");
  //short circuit evaluation
  const firstValue = text || "hello"; //OR
  const secondValue = text && "hello"; //AND


  return (
    <>
      <h1>firstValue:{firstValue}</h1>
      <h1>secondValue:{secondValue}</h1>
    </>
  );
}

export default App;


Ternary Operator and Show/Hide Logic
Used ternary operator that’s it
import React, { useState, useEffect } from "react";
import { data } from "./data.js";

function App() {
  const [text, SetText] = useState("Ram");
  return <>{text ? <h1>Very Good</h1> : <h1>Very Bad!!</h1>}</>;
}

export default App;

 
Next is toggeling between the good and Bad
import React, { useState, useEffect } from "react";
import { data } from "./data.js";

function App() {
  const [text, setText] = useState("Ram");
  function handleChange() {
    setText(!text);
  }
  return (
    <>
      {text ? <h1>Very Good</h1> : <h1>Very Bad!!</h1>}
      <button onClick={handleChange}>Click me</button>
    </>
  );
}

export default App;


now if we want to display only that when is true and nothing to be displayed when it is false then we can use the short circuit evaluation. Mainly to show and hide.
import React, { useState, useEffect } from "react";
import { data } from "./data.js";

function App() {
  const [text, setText] = useState("Ram");
  const [showModel, setShowModel] = useState(false);
  function handleChange() {
    setShowModel(!showModel);
  }
  return (
    <>
      {text ? <h1>Very Good</h1> : <h1>Very Bad!!</h1>}
      <button onClick={handleChange}>Click me</button>
      // hide and show using circuit evaluation
      {showModel && <h1>My Model is here Guys!!</h1>}
    </>
  );
}

export default App;



Forms Basics
Generally creating the forms as in html using label, input tags etc where we need to add the attributes for label is htmlFor and also for input tag we has to create attributes such as type, name, id where name is the very important that we are going to study in next coming session.
We need to create the closing tags for each that created open tag and instead of creating onClick attribute for button itself there is another method that we can directly used in form itself ie onSubmit method which acts same as the onClick method. 
import React, { useState, useEffect } from "react";
import { data } from "./data.js";

function App() {
  function handleSubmit(e) {
    console.log("hello World");
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;

Controlled Inputs
Here we are using the State values to understand the changes in the values of name and age. Now here if we using the form in react then input tag which must and should have the value and onChange attribute which is mandatory while using forms in the react.
value  which indicates the statevalue ie we given as “name”.
value which incidicates the statevalue ie we given as “age.
Next to that we use the onChange event which helps to change the values in text box where we write the separate function to that using setValues for both name and age.
Then we print that values in the console.
import React, { useState, useEffect } from "react";
import { data } from "./data.js";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeAge(e) {
    setAge(e.target.value);
  }
  function handleSubmit(e) {
    console.log(name, age);
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChangeName}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={handleChangeAge}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;

React-Router 
As there are multiple pages in website so inorder to navigate from one page to other we use the react-router-dom to do so. 
We use the 3 pages ie Home, About and Contact. Where inorder to navigate we use BrowserRouter, Routes and Route to navigate and then path is used in each route which indicates the url address what it need to be and next we use the element and use the particular imported element there.
App.js
import React, { useState, useEffect } from "react";
import { data } from "./data.js";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


Home.js
import React from "react";

function Home() {
  return (
    <>
    <ul>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
      </ul>
    </>
  );
}

export default Home;


Contact.js
import React from "react";

function Contact() {
  return (
    <div>
      <h1> I am from ContactUS Page</h1>
    </div>
  );
}

export default Contact;


About.js
import React from "react";

function About() {
  return (
    <div>
      <h1>I am from About Page</h1>
    </div>
  );
}

export default About;


Router Link 
It is mainly used to navigate in the application way using Link component we can navigate. We use to  attribute to actually which page it needs to be navigated that is mentioned there where the path needs to be matched to path in the App.js Page.
Home.js
import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;



Router Switch
It is mainly like if we put the url other than the path we mentioned then it will show the blank white screen which is not best user experience so we need to create separate Error.js paeg to display error in the page such that we use the * for the path which indicates that other than all the path we mentioned it will show the error itself. 
App.js
import React, { useState, useEffect } from "react";
import { data } from "./data.js";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Error from "./Error.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


Error.js
import React from "react";

function Error() {
  return (
    <div>
      <h1>Error Page</h1>
    </div>
  );
}

export default Error;

