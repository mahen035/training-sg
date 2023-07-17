import React from 'react';

function Success(props) {
    var user = localStorage.getItem('user')
    return (
        <div>
            <h1>Welcome, {user} Login Successful!!</h1>
        </div>
    );
}

export default Success;