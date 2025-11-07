import { motion } from 'motion/react';
import logoImage from 'figma:asset/7642873fe83ca46edf415cac41cb187586a8628e.png';

interface PageHeaderProps {
  variant?: 'large' | 'small';
  showTaglines?: boolean;
  alignment?: 'center' | 'left';
}

export function PageHeader({ variant = 'large', showTaglines = true, alignment = 'center' }: PageHeaderProps) {
  if (variant === 'large') {
    return (
      <motion.div 
        className="bg-gradient-to-b from-[#E8F5E9] to-white pt-6 pb-8 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          {/* Logo with walnut icon */}
          <div className="flex items-center justify-center mb-3">
            <img 
              src={logoImage} 
              alt="LeadWalnut - SEO & CRO Services for B2B Tech" 
              className="h-16 w-auto object-contain"
            />
          </div>
          
          {/* Taglines */}
          {showTaglines && (
            <>
              <p className="font-inter text-[12px] font-medium text-[#555] mb-1 font-bold">
                Helping busy marketers grow revenue from their website.
              </p>
              <p className="font-inter text-[14px] text-[#666] font-bold">
                Transform Your Website Into a 24×7 Sales Engine
              </p>
            </>
          )}
        </div>
      </motion.div>
    );
  }

  // Small variant for other pages
  return (
    <motion.div 
      className="bg-gradient-to-b from-[#E8F5E9] to-white pt-3 pb-3 px-4 shadow-sm"
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={`flex items-center ${alignment === 'left' ? 'justify-start' : 'justify-center'}`}>
        <img 
          src={logoImage} 
          alt="LeadWalnut" 
          className={alignment === 'left' ? 'h-8 w-auto object-contain' : 'h-10 w-auto object-contain'}
        />
      </div>
    </motion.div>
  );
}
