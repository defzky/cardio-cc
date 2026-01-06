import React from 'react';

const QuestLog = () => {
    const quests = [
        { id: 1, title: 'Morning Commute', reward: '50 XP', status: 'Complete', type: 'Daily' },
        { id: 2, title: 'The Sunday Century', reward: '500 XP + Rare Badge', status: 'Active', type: 'Weekly' },
        { id: 3, title: 'Hill Repeats of Doom', reward: 'Stamina +10', status: 'Failed', type: 'Hardcore' },
    ];

    return (
        <div className="rpg-box" style={{ flex: 1, marginLeft: '20px' }}>
            <h2 className="rpg-title">Quest Log</h2>
            <ul className="rpg-list">
                {quests.map((quest) => (
                    <li key={quest.id} className="rpg-list-item">
                        <div>
                            <div style={{ color: '#f1c40f', marginBottom: '5px' }}>{quest.title}</div>
                            <div style={{ fontSize: '0.7em', color: '#bdc3c7' }}>Reward: {quest.reward}</div>
                        </div>
                        <div style={{
                            color: quest.status === 'Complete' ? '#2ecc71' : quest.status === 'Failed' ? '#e74c3c' : '#f39c12'
                        }}>
                            [{quest.status}]
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestLog;
