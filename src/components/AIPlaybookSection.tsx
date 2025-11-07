import { motion } from 'motion/react';
import { Download, Users, TrendingDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AIPlaybookSection() {
  const handleDownload = () => {
    window.open('https://www.leadwalnut.com/enterprise-seo-cmo-report-2025', '_blank');
  };

  return (
    <motion.div 
      className="px-4 pt-2 pb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      {/* Section Header */}
      <div className="text-center mb-5">
        <motion.h2 
          className="font-inter font-bold text-[20px] text-[#004A3D] mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          The AI SEO Playbook
        </motion.h2>
        
        <motion.p 
          className="font-inter font-semibold text-[14px] text-[#2E7D32] mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          What 50+ Enterprise CMOs Are Actually Doing
        </motion.p>
        
        <motion.p 
          className="font-inter text-[12px] text-[#666] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Insights from B2B SaaS leaders on what's working in the age of AI.
        </motion.p>
      </div>

      {/* Main Card */}
      <motion.div
        className="bg-gradient-to-b from-[#FAF9F6] to-white rounded-[20px] p-5 shadow-lg overflow-hidden"
        style={{ 
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
          minHeight: '380px'
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        {/* Book Cover Image */}
        <div className="mb-4 relative">
          <motion.div
            className="overflow-hidden shadow-lg mx-auto"
            style={{ 
              maxWidth: '200px',
              boxShadow: '0 6px 20px rgba(0, 74, 61, 0.2)'
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ImageWithFallback
              src="https://cdn.prod.website-files.com/64c7db62bef432a73deb39fa/68ef5a0aadb9363abb35949d_b2b-seo-report-book.webp"
              alt="AI SEO Playbook Cover"
              className="w-full h-auto object-cover"
            />
          </motion.div>
          
          {/* Subtle glow effect */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(0, 74, 61, 0.1) 0%, transparent 70%)',
              filter: 'blur(20px)',
              transform: 'translateY(10px)'
            }}
          />
        </div>

        {/* Content Section */}
        <div className="space-y-3">
          {/* Title */}
          <h3 className="font-inter font-bold text-[15px] text-[#004A3D] leading-tight text-center">
            State of B2B SEO Beyond 2025: The AI Transformation.
          </h3>
          
          {/* Tagline */}
          <p className="font-inter text-[12px] text-[#555] text-center leading-relaxed">
            Exclusive interviews with CMOs from Fortinet, you.com, and more.
          </p>

          {/* Stats Badges */}
          <div className="flex items-center justify-center gap-3 pt-2 pb-3">
            {/* CMOs Interviewed Badge */}
            <div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-sm rounded-full px-3 py-1.5 border border-[#E0E0E0]">
              <Users className="w-3.5 h-3.5 text-[#F3722C]" />
              <span className="font-inter text-[11px] font-semibold text-[#333]">
                50+ CMOs
              </span>
            </div>

            {/* Divider */}
            <div className="w-px h-4 bg-[#E0E0E0]" />

            {/* Downloads Badge */}
            <div className="flex items-center gap-1.5 bg-white/60 backdrop-blur-sm rounded-full px-3 py-1.5 border border-[#E0E0E0]">
              <TrendingDown className="w-3.5 h-3.5 text-[#2E7D32]" />
              <span className="font-inter text-[11px] font-semibold text-[#333]">
                2500+ Downloads
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={handleDownload}
            className="w-full bg-gradient-to-r from-[#2E7D32] to-[#004A3D] text-white font-inter font-bold text-[14px] py-3.5 px-5 rounded-full shadow-lg flex items-center justify-center gap-2"
            style={{ 
              boxShadow: '0 4px 12px rgba(0, 74, 61, 0.3)' 
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 6px 16px rgba(0, 74, 61, 0.4)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Download className="w-4 h-4" />
            <span>Download Free Report</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
