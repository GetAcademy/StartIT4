import React from 'react';
import './App.css';
import header from './Header';

function Grid() {
    return (
    <div className="grid">
        <div className="title"> 
        <h2> Workout App </h2> 
        </div>

        <div className="header">Header
        </div>

        <div className="sidebar">Sidebar
        </div>

        <div className="content">
        <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
        </div>
      </div>
    </div>

        <div className="footer">Footer
    </div>
    </div>
    );
}

export default Grid;