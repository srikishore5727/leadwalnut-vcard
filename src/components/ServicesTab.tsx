import { motion } from 'motion/react';
import { 
  Cpu, 
  Link2, 
  Target, 
  Shield, 
  Search, 
  MessageSquare,
  Zap,
  Brain,
  Building2,
  Award,
  DollarSign
} from 'lucide-react';
import { PageHeader } from './PageHeader';

interface AITool {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const aiTools: AITool[] = [
  {
    icon: Cpu,
    title: 'ReTitle IQ',
    description: 'Optimize page titles for maximum click-through rates using AI-driven insights.',
    color: '#2E7D32'
  },
  {
    icon: Link2,
    title: 'Smart Internal Linking',
    description: 'Automatically identify and implement strategic internal link opportunities.',
    color: '#2E7D32'
  },
  {
    icon: Target,
    title: 'Inbound Powered Outbound',
    description: 'Leverage inbound signals to power targeted outbound campaigns.',
    color: '#2E7D32'
  },
  {
    icon: Shield,
    title: 'G2 Analyzer',
    description: 'Competitive intelligence tool for tracking G2 reviews and market positioning.',
    color: '#2E7D32'
  },
  {
    icon: Search,
    title: 'Digital QA Checker',
    description: 'Automated quality assurance for website health and technical SEO.',
    color: '#2E7D32'
  },
  {
    icon: MessageSquare,
    title: 'Reddit Alerts',
    description: 'Real-time monitoring of brand mentions and engagement opportunities.',
    color: '#2E7D32'
  }
];

const trustElements = [
  {
    icon: Shield,
    text: 'ISO/IEC 27001:2013 Certified for 3 consecutive years',
    color: '#0091EA'
  },
  {
    icon: Building2,
    text: '30+ enterprises and 400+ entrepreneurs served since 2015',
    color: '#2E7D32'
  },
  {
    icon: Award,
    text: '4.9/5.0 rating on Clutch from verified client reviews',
    color: '#FBBC04'
  },
  {
    icon: DollarSign,
    text: 'Guaranteed results or 100% money back',
    color: '#00A676'
  }
];

export function ServicesTab() {
  return (
    <div className="pb-24 bg-gradient-to-b from-[#F8FFF9] to-white min-h-screen">
      {/* Page Header with Logo */}
      <PageHeader variant="small" showTaglines={false} alignment="left" />
      
      {/* Section 1: AI-Powered Growth */}
      <motion.div 
        className="bg-gradient-to-b from-white via-[#F0F9F1] to-white pt-4 pb-5 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="relative">
          
          <div className="text-center pt-2">
            <h2 className="font-inter text-[18px] font-bold text-[#2E7D32] mb-2">
              AI-Powered Growth
            </h2>
            <p className="font-inter text-[14px] font-semibold text-[#333] mb-2">
              Stay Ahead of Competition
            </p>
            <p className="font-inter text-[13px] text-[#555] leading-relaxed">
              LeadWalnut leverages AI tools to accelerate growth and maintain competitive advantage.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Section 2: Proprietary In-House Tools */}
      <motion.div 
        className="px-4 pt-6 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="font-inter text-[16px] font-semibold text-[#2E7D32] mb-4">
          Proprietary In-House Tools
        </h2>
        
        <div className="space-y-3">
          {aiTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.title}
                className="bg-white rounded-2xl p-4 shadow-sm card-hover"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (index * 0.05), duration: 0.4 }}
                whileHover={{ 
                  boxShadow: '0 4px 16px rgba(200, 230, 201, 0.4)',
                  borderColor: '#C8E6C9'
                }}
              >
                <div className="flex items-start gap-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${tool.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: tool.color }} />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-inter text-[14px] font-bold text-[#222] mb-1">
                      {tool.title}
                    </h3>
                    <p className="font-inter text-[12px] text-[#555] leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Section 3: Trust Elements */}
      <motion.div 
        className="px-4 pt-2 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >

        
        <div className="grid grid-cols-2 gap-3">
          {trustElements.map((element, index) => {
            const Icon = element.icon;
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#E8F5E9] to-white rounded-xl p-3 shadow-sm flex flex-col items-center justify-center text-center"
                style={{ 
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                  minHeight: '90px'
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + (index * 0.05), duration: 0.4 }}
              >
                {/* Icon */}
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                  style={{ backgroundColor: `${element.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: element.color }} />
                </div>
                
                {/* Text */}
                <p className="font-inter text-[10px] font-medium text-[#222] leading-tight">
                  {element.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Closing Punch Line */}
      <motion.div 
        className="px-4 pt-2 pb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <p className="font-inter text-[13px] text-[#666] text-center italic">
          Precision-driven AI for measurable business impact.
        </p>
      </motion.div>
    </div>
  );
}
