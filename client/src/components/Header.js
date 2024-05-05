// Code review: Simplify Header component
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/workout-recommendations">Workouts</Link></li>
                    <li><Link to="/nutrition-recommendations">Nutrition</Link></li>
                    <li><Link to="/sleep-recommendations">Sleep</Link></li>
                    <li><Link to="/personalized-workouts">Personalized Workouts</Link></li>
                    <li><Link to="/ab-test">A/B Test</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;