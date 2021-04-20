import React, { useState, useEffect } from 'react';
 import { axiosWithAuth } from '../utils/axiosWithAuth';
 import Friends from './Friends';
 import NewFriend from './NewFriend';

 const FriendsList = () => {
     const [friends, setFriends] = useState([]);

     useEffect(() => {
         axiosWithAuth()
             .get('/api/friends')
             .then(res => {
                 setFriends(res.data);
             })
             .catch(error => console.error(error));
     },[]);

     return (
         <div>
             <NewFriend setFriends={setFriends} />
             {friends.map((friend, index) => (
                 <Friends props={friend} />
             ))}
         </div>
     );
 };

 export default FriendsList;