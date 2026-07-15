import React, { useState } from 'react';
import WelcomeCard from './components/WelcomeCard';
import Presentation from './components/presentation/Presentation';
import ProblemStatementConsumer from './components/slides/ProblemStatementConsumer';
import ProblemStatementRetailer from './components/slides/ProblemStatementRetailer';
import SolutionNukaazo from './components/slides/SolutionNukaazo';
import HowNukaazoWorks from './components/slides/HowNukaazoWorks';
import MarketValidation from './components/slides/MarketValidation';
import GrowthSignals from './components/slides/GrowthSignals';
import DataIntelligence from './components/slides/DataIntelligence';

function App() {
  const [view, setView] = useState('welcome');

  const slides = [
    ProblemStatementConsumer,
    ProblemStatementRetailer,
    SolutionNukaazo,
    HowNukaazoWorks,
    MarketValidation,
    GrowthSignals,
    DataIntelligence
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

