// src/App.jsx
import React from 'react';
import Sidebar from './Sidebar';
import './index.css';
import AppHeader from './AppHeader';
import JobCards from './JobCards';

const App = () => {
  return (
    <div className="App flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <AppHeader />
        <main className="p-4 flex-grow bg-n1-white">

        <div className='flex flex-col w-80 h-72 bg-n1-blue'>
            <div>{ logo }</div>
            <div>
                <p>{ postDate }</p>
                <h2>{ position }</h2>
                <CiBookmark />
            </div>

            <div>
                <p>{ industry }</p>
                <p>{ projectSummary }</p>
            </div>

            <div>
                <p>{ billingRateW2 }</p>
                <p>{ billingRateIC }</p>
            </div>

            <div>
                <button>View Details</button>
                <button>Apply Now</button>
            </div>

        </div>
       
        </main>
      </div>
    </div>
  );
};

export default App;
