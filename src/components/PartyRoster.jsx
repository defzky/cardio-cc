import React from 'react';

const PartyRoster = () => {
    const members = [
        { name: 'Sarah "The Sprinter"', class: 'Speedster', lvl: 42, hp: '80/100' },
        { name: 'Mike "Bonk King"', class: 'Tank', lvl: 35, hp: '10/120' },
        { name: 'Jenny Climbs', class: 'Mage', lvl: 50, hp: '95/95' },
    ];

    return (
        <div className="rpg-box" style={{ marginTop: '20px' }}>
            <h2 className="rpg-title">Party Members</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                {members.map((member, idx) => (
                    <div key={idx} style={{ border: '2px solid #fff', padding: '10px', background: 'rgba(0,0,0,0.3)' }}>
                        <div style={{ color: '#f1c40f' }}>{member.name}</div>
                        <div style={{ fontSize: '0.8em', margin: '5px 0' }}>Class: {member.class}</div>
                        <div style={{ fontSize: '0.8em' }}>Lvl: {member.lvl}</div>
                        <div style={{ marginTop: '5px', background: '#e74c3c', height: '10px', width: '100%', border: '1px solid #fff' }}>
                            <div style={{ background: '#2ecc71', height: '100%', width: parseInt(member.hp) + '%' }}></div>
                        </div>
                        <div style={{ fontSize: '0.6em', textAlign: 'right' }}>HP {member.hp}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartyRoster;
