import React from 'react';

const CommandMenu = () => {
    const commands = ['Quest Log', 'Party', 'Items', 'Save Game'];

    return (
        <div className="rpg-box" style={{ width: '250px' }}>
            <ul className="rpg-list">
                {commands.map((cmd) => (
                    <li key={cmd} className="rpg-list-item" style={{ cursor: 'pointer' }}>
                        <span>{cmd}</span>
                        <span style={{ opacity: 0.5 }}>►</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommandMenu;
