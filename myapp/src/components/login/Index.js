import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Success from './Success';
import Failure from './Failure';
function Index(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element={<LoginPage/> }/>
                    <Route path = "/success" element={<Success/> }/>
                    <Route path = "/fail" element={<Failure/> }/>
                </Routes>
            
            </BrowserRouter>
        </div>
    );
}

export default Index;