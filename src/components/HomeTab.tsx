import { motion } from 'motion/react';
import { Zap, Target, TrendingUp, Users, FileText, BarChart3, Globe, Rocket } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AIPlaybookSection } from './AIPlaybookSection';
import reviewsImage from 'figma:asset/88a1f9074ecb0f6fb7d52d5b3e4ee7b8d289ae8c.png';
import googleIcon from 'figma:asset/ba0125944a03ca97b1ed406352aed35dd6c674cb.png';
import clutchIcon from 'figma:asset/423426ff622a32f0c1c0b3368dd7ee1f5a9d440b.png';

const trustedBrands = [
  { 
    name: 'Fortinet', 
    type: 'logo' as const,
    logoUrl: 'https://cdn.prod.website-files.com/64c7db62bef432a73deb39fa/653113a6188cd884f0dd1bd7_fortinet-logo.svg'
  },
  { 
    name: 'eFax', 
    type: 'logo' as const,
    logoUrl: 'https://cdn-public.softwarereviews.com/production/logos/offerings/9001/original/824-8249599_the-legal-profession-relies-on-the-fax-as.png?1626199149'
  },
  { 
    name: 'Splashtop', 
    type: 'logo' as const,
    logoUrl: 'https://old.roi4cio.com/fileadmin/user_upload/splashtop_logo.png'
  },
  { 
    name: '8X8', 
    type: 'logo' as const,
    logoUrl: 'https://assets.techrepublic.com/uploads/2024/08/8x8.jpg'
  },
  { 
    name: 'ITT Digital', 
    type: 'logo' as const,
    logoUrl: 'https://www.drupal.org/files/logo-blue_2.png'
  },
  { 
    name: 'Maarga', 
    type: 'logo' as const,
    logoUrl: 'https://www.maargasystems.com/wp-content/uploads/2024/04/logo.png'
  },
  { 
    name: 'Connect', 
    type: 'logo' as const,
    logoUrl: 'https://cdn.prod.website-files.com/64c7db62bef432a73deb39fa/65128609f573485383ed5ef5_connectel-logo.webp'
  },
  { 
    name: 'Flipkart', 
    type: 'logo' as const,
    logoUrl: 'https://deep-image.ai/blog/content/images/2023/01/Flipkart-logo.png'
  },
  { 
    name: 'APA Engineering', 
    type: 'logo' as const,
    logoUrl: 'https://cdn.prod.website-files.com/64c7db62bef432a73deb39fa/680f632aaf004869b182fd98_apa-25-logo.webp'
  },
  { 
    name: 'Trailblazer', 
    type: 'logo' as const,
    logoUrl: 'https://cdn.prod.website-files.com/64c7db62bef432a73deb39fa/64f5d61eb5805eb6fd81e171_trailblazer.webp'
  }
];

interface HomeTabProps {
  onNavigate: (tab: string) => void;
}

export function HomeTab({ onNavigate }: HomeTabProps) {
  const offerings = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "SEO-Optimized Content at Scale"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Engine Visibility (ChatGPT, Gemini, Perplexity)"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Search Experience & Conversion Optimization"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Quality Backlinks & Domain Authority"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Multi-Channel Content Repurposing"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Analytics & Strategic Insights"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "YouTube & Reddit Traffic Optimization"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Topical Authority via Content Hubs"
    }
  ];

  return (
    <div className="pb-24 bg-gradient-to-b from-[#F8FFF9] to-white min-h-screen">
      {/* Brand Header Section */}
      <PageHeader variant="large" showTaglines={true} />

      {/* Key Offerings Section */}
      <motion.div 
        className="px-4 pt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="font-inter text-[16px] font-semibold text-[#2E7D32] mb-4">
          Key Offerings
        </h2>
        
        {/* 2x4 Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-3 shadow-sm card-hover flex flex-col items-center justify-center text-center"
              style={{ 
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                minHeight: '100px'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.05), duration: 0.4 }}
            >
              <div className="text-[#2E7D32] mb-2">
                {offering.icon}
              </div>
              <h3 className="font-inter text-[13px] font-bold text-[#333] leading-tight font-normal">
                {offering.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Trusted By Industry Leaders Section */}
      <motion.div 
        className="px-4 pt-2 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="font-inter text-[16px] font-semibold text-[#2E7D32] mb-4">
          Trusted By Industry Leaders
        </h2>
        
        {/* Horizontal scrollable logo chips */}
        <div className="overflow-x-auto pb-2">
          <div className="flex flex-wrap gap-2 justify-center">
            {trustedBrands.map((brand, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-full px-4 py-2 shadow-sm border border-[#E0E0E0] whitespace-nowrap flex items-center justify-center min-h-[36px]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + (index * 0.04), duration: 0.4 }}
              >
                {brand.name === 'Fortinet' ? (
                  <img 
                    src={brand.logoUrl} 
                    alt={`${brand.name} logo`}
                    className="h-4 w-auto object-contain max-w-[100px]"
                  />
                ) : (
                  <ImageWithFallback
                    src={brand.logoUrl}
                    alt={`${brand.name} logo`}
                    className="h-5 w-auto object-contain max-w-[100px]"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Reviews & Ratings Section */}
      <motion.div 
        className="px-4 pt-2 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <h2 className="font-inter text-[16px] font-semibold text-[#2E7D32] mb-4">
          Reviews & Ratings
        </h2>
        
        <div className="grid grid-cols-2 gap-3">
          {/* Google Reviews Card */}
          <motion.div
            className="bg-gradient-to-br from-[#FFFDE7] via-[#FFF9C4] to-white rounded-2xl p-4 shadow-md"
            style={{ boxShadow: '0 3px 14px rgba(251, 192, 45, 0.15)' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.4 }}
          >
            <div className="flex flex-col items-center text-center">
              {/* Google Logo */}
              <div className="mb-2">
                <img src={googleIcon} alt="Google" className="w-10 h-10" />
              </div>
              
              {/* Rating Number */}
              <div className="font-inter text-[36px] font-extrabold text-[#202124] leading-none mb-2">
                4.5
              </div>
              
              {/* Platform Name */}
              <p className="font-inter text-[14px] font-semibold text-[#5F6368] mb-1">
                Google Reviews
              </p>
              
              {/* Review Count */}
              <p className="font-inter text-[11px] text-[#80868B]">
                Verified Reviews
              </p>
            </div>
          </motion.div>

          {/* Clutch Reviews Card */}
          <motion.div
            className="bg-gradient-to-br from-[#E8F5E9] via-[#C8E6C9] to-white rounded-2xl p-4 shadow-md"
            style={{ boxShadow: '0 3px 14px rgba(46, 125, 50, 0.15)' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.4 }}
          >
            <div className="flex flex-col items-center text-center">
              {/* Clutch Logo */}
              <div className="mb-2">
                <img src={clutchIcon} alt="Clutch" className="w-10 h-10" />
              </div>
              
              {/* Rating Number */}
              <div className="font-inter text-[36px] font-extrabold text-[#2E7D32] leading-none mb-2">
                4.9
              </div>
              
              {/* Platform Name */}
              <p className="font-inter text-[14px] font-semibold text-[#1B5E20] mb-1">
                Clutch Reviews
              </p>
              
              {/* Review Count */}
              <p className="font-inter text-[11px] text-[#558B2F]">
                9+ Reviews
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* AI SEO Playbook Section */}
      <AIPlaybookSection />
    </div>
  );
}