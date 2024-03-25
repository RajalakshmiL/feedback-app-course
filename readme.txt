Project create -> npx create-react-app project_name --use npm
JSX - Javascript XML
React develop tool -> extension installed (debug)
--------------------------------------------
Default Export:
comp file ==> export default comp_name
using file ==> import comp_name from "path"

Named Export:
comp file ==> export  comp_name
useing file ==> import {comp_name} from "path"
-----------------------------
1.jsx elements should be wrapped in an enclosing tag

2. class -html
   className --react

3.for ---html 
htmlFor---react
----------------------------------
rafce -> enter this -> gives default set of statement from the build

<> </> - Fragments tag

props -> Data passing from Parent to child component through properties name and value (string,numeric,obj etc)

destructuring -> props.text ==> {text} ---> using only the needed props and using.

components -> Two types -> Functional component And Class Component
-----------------------------------------------------------------------
state : -> State generally refers to data or properties  in an application.-> current variable.
using -> useStateHook
// Implementation of useStateHook:
import { useState } from "react";
const [color, setColor] = useState(""); // color -> current vaue, setColor - updated value
-------------------------------------------------------------------------
Props drilling ->occurs when a parent component generates its state and passes it down as props to its children components that do not consume the props – instead, they only pass it down to another component that finally consumes it
------------------------------------------------------------------------------------------

Virtual DOM
Real DOM

Children (Key word) Props -> Special Property to get the content inside the start and end tag.

- Conditional Class => Based on the Condition, it gets applied.

- Conditional Style 

- Template literal => `static ${dynamic value-any valid JS variable}`

-  third party library
    npm i <Thirdparty> -> npm(node package manager) install react-icons
    npm i uuid

-function
   onClick={handleClick}

   onClick={() => handleClick(id)} -> while passing syntax
   ------------------------------------------------------

- Controlled component -> Which controls the text  (local component and state in sync)

11. when object props name and variable holding the value are same
{
   text: text,
   rating: rating,
};

shortform
{
   text,
   rating,
};

-------------------------------------------------------------------
> Routing -> library -> react-router-dom

> Link -> <Link/> is the element you could use to navigate through routes.
<Route/>, its most basic responsibility is to render some UI when a location matches the route’s path.
They are used separately. Link is dependent to Route's locations. But Route can be used without Link.

> Navlink -> similar to link but we can apply active class when active. Using this we can create menu bars
active class is written in css. The react engine automatically apply this class(active) to the Link which is displayed indicating it has a active link

> Parameter -> UseParams (:id)
> Navigate -> Rediretion
> navigate() => onclick event
----------------------------------------------------------------

Problem Statement:
Props drilling becomes difficult when you need to share data to many components and many levels
Concepts:
React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store.
Implementation
2step process --- adding data to context & getting data from context
1.	adding data to context
a.	create context
b.	create provider based on context
c.	using provider share the data
2.	getting data from context
a.	useContext()

----------------------------------------------------
Life Cycle events:
useEffect - useEffect(arrow function,dependency)
----------------------------------------------

to take build for deployment -> npm run build

for production server -> npm i -g serve

Actual deploy and Run production server-> serve -s build

--------------------------------------

-> fetch or axios to use api
-> mock backend server: 
1. npm i json-server
2. package.json under scripts : "server": "json-server --watch db.json --port 5000"
3. Run -> npm run server -> to text in postman also

-> To combine  both FE and BE app (npm start and npm server(backend json)):
1. Use package To run 3000 and 5000 at the same link.. -> npm i concurrently
2. package.json under scripts : "dev": "concurrently \"npm run server\"  \"npm start\""
3. Run -> npm run dev
------------------------------------------------
Asynchronous Methods:
1. Callback
2. Promises
3. async await
synchronous
sequential one process after that another process

Asynchronous
one process runs in parallel and when done do a callback to intimate the main process that it is over

--------------------------------------------------------

fetch()

Proxy - instead of domain name
1. package.json under private : "proxy":"http://localhost:5000",

----------------------------------------------------------------

Class - Life Cycle compoments:
1. Mounting
2. Updating
3. Unmounting

ClassComponent
Constructor()
Lifecycle methods
   componentDidMount()
   componentDidUpdate(preProps,preState) -> will run after changing the setter
   componentWillUnmount() 
   render()---------mandatory(display UI)

this.state = {topic: "Class Component",date: new Date()}
this.setState({topic: "Class Component- updated"});

FunctionalComponent
useEffect(callback fn, [])----------mounting Phase
useEffect(callback fn, [state1,state2])----updating Phase
return---------mandatory(display UI)
useEffect(callbackfn return shd be implemented and that return fn will be called ,[])


Property: is only for sharing the data between parent to child

-------------------------------------------------------------------

fetch or axios
Axios install -> npm i axios

---------------------------------------------------------------

- Redux -> npm i @reduxjs/toolkit react-redux
react-redux(driver)
- chrome Redux debugger tool -> redux devtool extension

- store--> wrap app
- helper  method is Slice -> for each module
Slice -> State and Reducer
- UI --- state, dispatch(actions)