import React from 'react';

const UserContext=React.createContext();
//Context is providing a variable to all the components in the tree
//The value is passed to the components in the tree



export default UserContext;

//if we wrap the app component with the provider then all the components in the tree will have access to the value
//JUST LIKE THIS
{/* <UserContext>
    <Login/>
    <Dashboard/>
    <Profile/>
    <Settings/>
</UserContext> */}
//To do this we also need to make a provider 
