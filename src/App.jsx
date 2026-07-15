import React, { useState } from 'react';
import WelcomeCard from './components/WelcomeCard';
import Presentation from './components/presentation/Presentation';
import ProblemStatementConsumer from './components/slides/ProblemStatementConsumer';
import ProblemStatementRetailer from './components/slides/ProblemStatementRetailer';
import SolutionNukaazo from './components/slides/SolutionNukaazo';
import HowNukaazoWorks from './components/slides/HowNukaazoWorks';
import MarketValidation from './components/slides/MarketValidation';
import GrowthSignals from './components/slides/GrowthSignals';

function App() {
  const [view, setView] = useState('welcome');

  const slides = [
    ProblemStatementConsumer,
    ProblemStatementRetailer,
    SolutionNukaazo,
    HowNukaazoWorks,
    MarketValidation,
    GrowthSignals
  ];


  return (
    <div className="min-h-screen w-full bg-[#FCFCFA]">
      {view === 'welcome' ? (
        <WelcomeCard onStartSlides={() => setView('presentation')} />
      ) : (
        <Presentation 
          slides={slides} 
          onExit={() => setView('welcome')} 
        />
      )}
    </div>
  );
}

export default App;

