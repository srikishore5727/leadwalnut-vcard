import { useState } from 'react';
import { HomeTab } from './components/HomeTab';
import { ServicesTab } from './components/ServicesTab';
import { TestimonialsTab } from './components/TestimonialsTab';
import { AISystemsTab } from './components/AISystemsTab';
import { BottomNavigation } from './components/BottomNavigation';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab onNavigate={setActiveTab} />;
      case 'services':
        return <ServicesTab />;
      case 'case-studies':
        return <TestimonialsTab />;
      case 'ai-systems':
        return <AISystemsTab />;
      default:
        return <HomeTab onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FFF9]">
      {/* Mobile viewport container - iPhone 13/14 Pro dimensions */}
      <main 
        className="mx-auto bg-white shadow-2xl min-h-screen overflow-y-auto"
        style={{
          width: '375px',
          maxWidth: '100vw',
          minHeight: '812px'
        }}
      >
        {renderActiveTab()}
      </main>
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab}  />
    </div>
  );
}