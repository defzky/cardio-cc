import React from 'react';
import banana from '../assets/banana.png';
import energyBar from '../assets/energy_bar.png';
import potion from '../assets/potion.png';
import waterBottle from '../assets/water_bottle.png';
// New icons
import dumbbell from '../assets/dumbbell.png';
import swimGoggles from '../assets/swim_goggles.png';

const Inventory = () => {
    return (
        <div className="rpg-box" style={{ width: '250px', position: 'absolute', top: '20px', right: '20px' }}>
            <h2 className="rpg-title" style={{ fontSize: '1rem', marginBottom: '10px' }}>Gear Bag</h2>

            {/* Cycling / Main */}
            <div style={{ marginBottom: '10px' }}>
                <h3 style={{ fontSize: '0.7rem', color: '#bdc3c7', marginBottom: '5px' }}>Cycling</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px' }}>
                    <div className="rpg-item-slot" title="Banana: Potassium Boost">
                        <img src={banana} alt="Banana" style={{ width: '40px', height: '40px' }} />
                    </div>
                    <div className="rpg-item-slot" title="Water: Hydration">
                        <img src={waterBottle} alt="Water" style={{ width: '40px', height: '40px' }} />
                    </div>
                </div>
            </div>

            {/* Multi-Sport */}
            <div>
                <h3 style={{ fontSize: '0.7rem', color: '#bdc3c7', marginBottom: '5px' }}>Cross-Training</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px' }}>
                    <div className="rpg-item-slot" title="Gym: Strength +10">
                        <img src={dumbbell} alt="Dumbbell" style={{ width: '40px', height: '40px' }} />
                    </div>
                    <div className="rpg-item-slot" title="Swim: Lung Capacity">
                        <img src={swimGoggles} alt="Goggles" style={{ width: '40px', height: '40px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
