import React, { useState } from 'react';
 import { axiosWithAuth } from '../utils/axiosWithAuth';

 const initialState = {
     name: '',
     age: '',
     email: ''
 };

 const FriendForm = ({ setFriends }) => {
     const [formValue, setFormValue] = useState({ initialState });

     const handleChanges = evt => {
         setFormValue({ ...formValue, [evt.target.name]: evt.target.value });
     };

     const handleSubmit = evt => {
         evt.preventDefault();

         axiosWithAuth()
             .post('/api/friends', formValue)
             .then(res => {
                 setFriends(res.data);
             })
             .catch(err => console.log(err));
     };

     return(
         <div>
             <form onSubmit={handleSubmit}>
                 <input
                     name='name'
                     type='text'
                     value={formValue.name}
                     onChange={handleChanges}
                 />
                 <input
                     name='age'
                     type='text'
                     value={formValue.age}
                     onChange={handleChanges}
                 />
                 <input
                     name='email'
                     type='email'
                     value={formValue.email}
                     onChange={handleChanges}
                 />
                 <button type='submit'>Submit</button>
             </form>
         </div>
     );
 };

 export default FriendForm;