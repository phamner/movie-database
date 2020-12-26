import React, { useState, useEffect } from 'react';

// function Example() {
//     const [count, setCount] = useState(0);

//     // Similar to componentDidMount and componentDidUpdate:
//     useEffect(() => {
//         // Update the document title using the browser API
//         document.title = `You clicked ${count} times`;
//         console.log('React has updated the DOM')
//     });

//     return (
//         <div>
//             <p>You clicked the button {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//         </button>
//         </div>
//     );
// }

function Example(props) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState('banana');
    console.log('example: ', props.movieData)

    return (
        <div>
            <p>{count}</p>
            {/* <button onClick={() => setCount(count + ' banana')}>
                Click me
            </button> */}
        </div>
    );
}


export default Example;