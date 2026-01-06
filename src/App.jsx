import React, { useEffect, useState } from 'react';
import Inventory from './components/Inventory';
import { getClubActivities } from './services/strava';

function App() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        getClubActivities().then(data => setActivities(data));
    }, []);

    return (
        <div className="game-world">
            {/* HUD: Main Title (Top Center) */}
            <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', zIndex: 100 }}>
                <h1 style={{
                    fontSize: '3rem',
                    color: '#f1c40f',
                    textShadow: '4px 4px #000, -2px -2px #000, 2px -2px #000, -2px 2px #000',
                    margin: 0
                }}>
                    CARDIO CRISIS CREW
                </h1>
            </div>

            {/* HUD: Quest Log (Top Left) */}
            <div className="rpg-box" style={{ position: 'absolute', top: '100px', left: '20px', width: '300px' }}>
                <h2 className="rpg-title" style={{ borderBottom: '2px solid #fff', paddingBottom: '10px' }}>Quest Log</h2>
                <div>
                    <div className="quest-item">
                        <div style={{ color: '#f39c12', marginBottom: '5px' }}>WEEKLY QUEST:</div>
                        <div style={{ fontSize: '1.2rem' }}>Climb Mount Doom</div>
                        <div style={{ fontSize: '0.8rem', color: '#bdc3c7', marginTop: '5px' }}>Progress: 1,200m / 3,000m</div>
                    </div>
                    <div className="quest-item">
                        <div style={{ color: '#f39c12', marginBottom: '5px' }}>MONTHLY QUEST:</div>
                        <div style={{ fontSize: '1.2rem' }}>Century Ride</div>
                        <div style={{ fontSize: '0.8rem', color: '#bdc3c7', marginTop: '5px' }}>Status: Not Started</div>
                    </div>
                </div>
            </div>

            {/* HUD: Recent Activity Feed (Using Strava Data) */}
            <div className="rpg-box" style={{ position: 'absolute', bottom: '20px', left: '20px', width: '300px', maxHeight: '200px', overflowY: 'auto' }}>
                <h3 className="rpg-title" style={{ fontSize: '1rem' }}>Activity Feed</h3>
                {activities.map(activity => (
                    <div key={activity.id} style={{ fontSize: '0.7rem', marginBottom: '8px', borderBottom: '1px solid #555', paddingBottom: '4px' }}>
                        <span style={{ color: '#3498db' }}>{activity.athlete.firstname}</span> completed <span style={{ color: '#2ecc71' }}>{activity.name}</span>!
                    </div>
                ))}
            </div>

            {/* HUD: Inventory (Top Right) */}
            <Inventory />

            {/* HUD: Action Menu (Bottom Right) */}
            <div style={{ position: 'absolute', bottom: '20px', right: '20px', width: '200px', zIndex: 100 }}>
                <button className="rpg-btn btn-red">Join Party</button>
                <button className="rpg-btn btn-blue">View Map</button>
                <button className="rpg-btn btn-purple">Leaderboard</button>
            </div>

            {/* Player Character (Center Map) */}
            <div className="player-sprite">
                🚴
            </div>

            {/* Decorative Castles (Already in map image, but could add interactive markers here) */}
        </div>
    );
}

export default App;
