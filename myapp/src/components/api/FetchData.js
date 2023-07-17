import React from 'react';

function FetchData(props) {

    const getData = function(){
        fetch('http://localhost:8484/home/users')
        .then(response=>response.json())
        .then(data=>console.log(data))
    }
    return (
        <div>
            <button onClick={getData}>Get Data from API</button>
        </div>
    );
}

export default FetchData;