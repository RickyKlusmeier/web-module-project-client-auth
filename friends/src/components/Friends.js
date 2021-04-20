import React from 'react';

 export default function Friend(props) {
     console.log(props)
     return (
         <div className="Friend">
             <h3>{props.friend.name}</h3>
             <p>Age: {props.friend.age}</p>
             <p>Email: {props.friend.email}</p>
         </div>
     )
 } 