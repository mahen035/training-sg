import React, { useState } from 'react';

function FetchData(props) {

    const myStyle = {
        backgroundColor: 'green',
        color:'white',
        padding:'10px',
        
    }

    const[data, setData] = useState([])

    const getData = function(){
        fetch('http://localhost:8484/home/users')
        .then(response=>response.json())
        .then(data=>setData(data))
    }
    return (
        <div>
            <button onClick={getData}>Get Data from API</button>
            <table border="1" style={myStyle}>
                <thead>
                    <tr>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>AGE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0
                        ?
                        data.map((item) =>{
                            return(
                                <tr key={item.firstName}>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.age}</td>
                                </tr>
                            )
                        })
                        :
                        'Click to fetch Data'
                    }
                </tbody>
            </table>

        </div>
    );
}

export default FetchData;