import React from 'react';
import home from './img/home.svg';
import reports from './img/reports.svg';
import clients from './img/clients.svg';

// #00D4FF

function Sidebar() {
    return (
        <div className="sidebar">
            <a href="#" className="aHome"><img src={home} alt="home" /> </a>
            <a href="#" className="aClients"><img src={clients} alt="clients" /> </a>
            <a href="#" className="aReports"><img src={reports} alt="reports" /> </a>


        </div>
    )
}
export default Sidebar;