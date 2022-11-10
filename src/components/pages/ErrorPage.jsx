import React from 'react';
import error from '../assets/error.gif';

function ErrorPage() {
    return (
        <div className="carousel w-full">
            <div className="carousel-item w-full">
                <h2 style={{textAlign:'center'}}>OOps! 404</h2>
                <img className="w-full" src={error} alt="" />
            </div>
        </div >
    );
}

export default ErrorPage;
