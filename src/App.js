import React from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
    return (
        <div className="App">
            <h1>SecureTalk</h1>
            <UserForm />
            <UserList />
        </div>
    );
}

export default App;