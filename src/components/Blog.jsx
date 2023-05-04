import React from 'react';

const Blog = () => {
    return (
      <div className="card w-full bg-slate-800 text-primary-content p-5">
      <div className="my-4">
        <h2 className="card-title">1. Tell us the differences between uncontrolled and controlled components?</h2>
        <p><span className='font-bold text-xl underline'>Uncontrolled components:</span> In an uncontrolled component, the state of the user interface is managed by the browser. This means that the browser itself is responsible for keeping track of the current values of input fields, checkboxes, and other user interface elements. Developers typically use uncontrolled components when they want to write less code, because there is no need to write code to manage the state of the user interface.</p>
        <p><span className='font-bold text-xl underline'>Controlled components:</span>  In a controlled component, the state of the user interface is managed by the developer. This means that the developer writes code to keep track of the current values of input fields, checkboxes, and other user interface elements. Developers typically use controlled components when they want more control over the behavior of the user interface. For example, they might want to validate user input, or they might want to perform some other action when the user interacts with the interface.</p>
        
      </div>
      <div className="mb-8">
        
        <h2 className="card-title">2.Tell us the difference between nodejs and express js.?</h2>
        <p> <span className='text-xl font-bold underline text-purple-500'>Node.js:</span> Node.js is a JavaScript runtime built on the Chrome V8 engine that allows developers to run JavaScript on the server-side. It provides the ability to execute JavaScript code outside of a browser and provides access to built-in modules such as http, fs, and path that allow developers to build server-side applications.</p>
        <p> <span className='text-xl font-bold underline text-purple-500'>Express.js:  </span> Express.js is a popular web framework built on top of Node.js that provides a set of tools and features for building web applications and APIs. It simplifies the process of building server-side applications by providing a set of middleware and routing features that allow developers to quickly and easily define routes, handle requests and responses, and perform other common web development tasks.</p>
        
        
      </div>
      <div className="mb-8">
      <h2 className="card-title">3. How to validate React props using PropTypes?</h2>

        <p> React PropTypes is a built-in library that is used to validate the props that are passed to a React component. PropType validation helps to ensure that the data being passed to a component conforms to the expected types and shapes. In this way, PropType</p>
        
        
      </div>


      <div className="mb-8">
      <h2 className="card-title">4. How to validate React props using PropTypes?</h2>

        <p>A custom hook is simply a JavaScript function that uses one or more of the built-in hooks provided by React, such as useState, useEffect, useContext, and useRef. Custom hooks are prefixed with the word use to indicate that they follow the rules of React hooks.

        Here are some reasons why you might want to create a custom hook:</p>
        <li>Reusability: If you have a piece of code that is used across multiple components, creating a custom hook allows you to reuse that code in a single location and keep your code DRY (Don't Repeat Yourself).</li>

        <li>Abstraction: Custom hooks enable you to abstract away complex logic into a single function, making your code more modular and easier to reason about.</li>
        
        <li>Code organization: By creating a custom hook, you can organize your code into logical modules and promote separation of concerns.</li>

        <li>Code sharing: Custom hooks can be shared across different projects and teams, enabling code sharing and collaboration.</li>
        
      </div>
    </div>
    );
};

export default Blog;