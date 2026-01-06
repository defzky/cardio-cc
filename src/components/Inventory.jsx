import React from 'react';
import banana from '../assets/banana.png';
import energyBar from '../assets/energy_bar.png';
import potion from '../assets/potion.png';
import waterBottle from '../assets/water_bottle.png';

const Inventory = () => {
    return (
        <div className="rpg-box" style={{ width: '250px', position: 'absolute', top: '20px', right: '20px' }}>
            <h2 className="rpg-title" style={{ fontSize: '1rem', marginBottom: '10px' }}>Snacks</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
                <div className="rpg-item-slot" title="Banana: Potassium Boost">
                    <img src={banana} alt="Banana" style={{ width: '40px', height: '40px' }} />
                </div>
                <div className="rpg-item-slot" title="Energy Bar: +50 Stamina">
                    <img src={energyBar} alt="Energy Bar" style={{ width: '40px', height: '40px' }} />
                </div>
            </div>

            <h2 className="rpg-title" style={{ fontSize: '1rem', marginBottom: '10px' }}>Bottles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div className="rpg-item-slot" title="Health Potion">
                    <img src={potion} alt="Potion" style={{ width: '40px', height: '40px' }} />
                </div>
                <div className="rpg-item-slot" title="Water: Hydration">
                    <img src={waterBottle} alt="Water" style={{ width: '40px', height: '40px' }} />
                </div>
            </div>
        </div>
    );
};

export default Inventory;
