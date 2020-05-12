import React from 'react';
import UsersList from './UsersList';

const users = [
    {
       
        name: 'Bob',
        age: 23,
    },
    {
        
        name: 'Tom',
        age: 24,
    },
    {
       
        name: 'John',
        age: 25
    },
    {
        
        name: 'James',
        age: 21
    },
    {
       
        name: 'Nik',
        age: 27
    },
    {
        id: 'id-5',
        name: 'Jerry',
        age: 22
    },
    {
        id: 'id-6',
        name: 'Johan',
        age: 23
    },
    {
        id: 'id-7',
        name: 'Dan',
        age: 28
    },
    {
        id: 'id-8',
        name: 'Rob',
        age: 22
    },
];

const newUsers = users.map((user, index) => {
     const newUser = { ...user, id: index};
    return newUser
    });


const App = () => {
    return <UsersList users={newUsers} />
};

export default App;