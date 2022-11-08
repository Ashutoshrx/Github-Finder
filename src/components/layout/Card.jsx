import React from 'react';

function Card({ avatar, userName }) {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${avatar})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{userName}</h1>
                </div>
            </div>
        </div>
    );
}

export default Card;
