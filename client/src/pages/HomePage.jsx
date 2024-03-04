import React from 'react';

export default function HomePage() {
    return (
        <div className="homepage display-flex justify-content-center text-shadow">
            <h2>Welcome!</h2>
            <img src="/images/avatar.jpeg" alt="avatar" 
                 className="border-style border-radius" />
            <div>
                <p className="bio padding">
                    Analytical professional with a degree in Neurobiology, Physiology & Behavior, skilled in communication and equipped with a passion for learning. Transitioning into software engineering to utilize my analytical abilities in tackling coding challenges. Having resided in five different countries before the age of 18, I possess multilingual proficiency in Serbian, French, and English. My diverse background contributes to a unique perspective, fostering innovative problem-solving capabilities. Eager to contribute to the software development field.
                </p>
            </div>
        </div>
    );
}