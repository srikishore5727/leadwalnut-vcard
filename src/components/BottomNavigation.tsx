import { Home, Briefcase, Users, Bot, MessageSquareQuote, FileText, Brain, ArrowUpToLine } from 'lucide-react';
import { motion } from 'motion/react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'AI Systems', icon: Brain },
    { id: 'case-studies', label: 'Success Stories', icon: FileText },
    { id: 'ai-systems', label: 'Get in Touch', icon: Bot },
  ];

  return (
    <nav
    style={{
      border:"1px solid red",
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      margin: '0 auto',
      width: '100%',
      maxWidth: '375px',
      boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08)',
      paddingBottom: 'env(safe-area-inset-bottom)',
      backgroundColor: '#fff',
      zIndex: 9999,
      transform: 'translateZ(0)', // ✅ prevents "disappearing" on scroll inside iframe
  }}
>

      <div className="max-w-md mx-auto h-16 px-1 flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center justify-center relative flex-1 h-full transition-all"
            >
              {/* Active background */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div 
                    className="w-[82px] h-12 rounded-xl"
                    style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}
                  />
                </motion.div>
              )}
              
              {/* Icon */}
              <div className="relative z-10">
                <Icon
                  className="w-5 h-5 mb-1"
                  style={{ 
                    color: isActive ? '#2E7D32' : '#999',
                    strokeWidth: isActive ? 2.5 : 2
                  }}
                />
              </div>
              
              {/* Label */}
              <span
                className="font-inter text-[9px] relative z-10 text-center leading-tight"
                style={{ 
                  color: isActive ? '#2E7D32' : '#999',
                  fontWeight: isActive ? 600 : 500
                }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}