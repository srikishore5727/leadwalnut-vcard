import { motion } from 'motion/react';
import { 
  CheckCircle, 
  Award, 
  TrendingUp, 
  Globe, 
  Phone, 
  Mail, 
  Shield,
  MessageCircle,
  Users,
  Sparkles,
  Target,
  Share2,
  Download
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PageHeader } from './PageHeader';
import qrCodeImage from 'figma:asset/536bf4c44f1f45963462b80587872ae19f1636a5.png';

const whyChooseUs = [
  {
    icon: Users,
    title: 'Full Stack Digital Team',
    description: 'SEO, GEO, Web dev, Content, CRO, Analytics'
  },
  {
    icon: Sparkles,
    title: 'Proprietary AI Tools',
    description: 'From 8+ years of expertise'
  },
  {
    icon: Award,
    title: 'Deep Expertise',
    description: 'Digital reputation, backlinks, and compliance'
  },
  {
    icon: TrendingUp,
    title: 'Higher ROI Results',
    description: 'In weeks, not months'
  }
];

export function AISystemsTab() {
  const handleLetsTalk = () => {
    window.location.href = 'tel:+919741497123';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919741497123', '_blank');
  };

  // const handleSharePage = async () => {
  //   const shareData = {
  //     title: 'LeadWalnut - Digital Growth Partner',
  //     text: 'Connect with LeadWalnut for your digital growth needs',
  //     url: window.location.href
  //   };

  //   try {
  //     if (navigator.share) {
  //       await navigator.share(shareData);
  //     } else {
  //       // Fallback: copy to clipboard
  //       await navigator.clipboard.writeText(window.location.href);
  //       alert('Link copied to clipboard!');
  //     }
  //   } catch (err) {
  //     console.error('Error sharing:', err);
  //   }
  // };

  const handleSharePage = async () => {
  const shareData = {
    title: 'LeadWalnut - Digital Growth Partner',
    text: 'Connect with LeadWalnut for your digital growth needs',
    url: 'https://leadwalnut-vcard.vercel.app',
  };

  // First, check if the Web Share API is supported by the browser
  if (navigator.share) {
    try {
      // ✅ CORRECT: Always attempt to use the native share functionality.
      // The browser will use the permissions from the iframe's "allow" attribute.
      await navigator.share(shareData);
    } catch (err) {
      // This catch block will run if the user closes the share dialog
      // or if another sharing error occurs. We can safely ignore it.
      console.error('Web Share API failed:', err);
    }
  } else {
    // Fallback for browsers that do not support the Web Share API
    try {
      await navigator.clipboard.writeText(shareData.url);
      alert('Sharing not supported. Link copied to clipboard!');
    } catch (err) {
      console.error('Fallback to clipboard failed:', err);
      alert('Error: Could not share or copy the link.');
    }
  }
};


  const handleSaveContact = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:LeadWalnut
ORG:LeadWalnut
TEL;TYPE=WORK,VOICE:+919741497123
EMAIL;TYPE=INTERNET:contact@leadwalnut.com
URL:https://www.leadwalnut.com
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'LeadWalnut.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="pb-24 bg-gradient-to-b from-white via-[#F8FFF9] to-white min-h-screen">
      {/* Page Header with Logo */}
      <PageHeader variant="small" showTaglines={false} alignment="left" />
      
      {/* 1. Hero Block: About LeadWalnut */}
      <motion.div 
        className="bg-gradient-to-b from-white to-[#F5F5F5] pt-4 pb-6 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h1 className="font-inter text-[18px] font-bold text-[#2E7D32] mb-2 text-center">
          About LeadWalnut
        </h1>
        <p className="font-inter text-[14px] font-medium text-[#444] text-center mb-4">
          Your Digital Growth Partner Since 2015
        </p>
        
        {/* Team Photo */}
        <div className="mb-4 rounded-2xl overflow-hidden shadow-md">
          <ImageWithFallback
            src="https://cdn.prod.website-files.com/64c7db62bef432a73deb39fa/651d432929fb07ebf6135f7e_20230524_114926%201%20(1)-p-2000.webp"
            alt="LeadWalnut Team"
            className="w-full h-48 object-cover"
          />
        </div>
      </motion.div>

      {/* 2. Who We Are Section */}
      <motion.div 
        className="px-4 pt-2 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="bg-white rounded-2xl p-4 shadow-sm" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <p className="font-inter text-[13px] text-[#555] leading-relaxed mb-4">
            LeadWalnut is a full-service marketing agency focused on growing your sales funnel. We convert cold strangers into warm qualified leads so you can turn them into closed deals.
          </p>
          
          {/* Bullet List with Icons */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
              <p className="font-inter text-[13px] text-[#555]">
                ISO-certified digital agency
              </p>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
              <p className="font-inter text-[13px] text-[#555]">
                Experts in SEO, GEO, CRO, and multi-channel marketing
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" />
              <p className="font-inter text-[13px] text-[#555]">
                Builds world-class websites that generate qualified leads
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. Our Approach */}
      <motion.div 
        className="px-4 pt-2 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="font-inter text-[16px] font-semibold text-[#2E7D32] mb-3">
          Our Approach
        </h2>
        
        <div className="bg-gradient-to-br from-[#E8F5E9] to-white rounded-2xl p-4 shadow-sm" style={{ boxShadow: '0 2px 8px rgba(46, 125, 50, 0.08)' }}>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#2E7D32] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Target className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-inter text-[13px] font-bold text-[#2E7D32] mb-1">Sales-Focused Marketing</p>
                <p className="font-inter text-[13px] text-[#555] leading-relaxed">
                  We turn cold strangers into warm, qualified leads ready to close.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#2E7D32] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-inter text-[13px] font-bold text-[#2E7D32] mb-1">Certified Growth Experts</p>
                <p className="font-inter text-[13px] text-[#555] leading-relaxed">
                  As an ISO-certified digital agency, we help businesses scale through SEO, GEO, CRO, and multi-channel strategies.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#2E7D32] flex items-center justify-center flex-shrink-0 mt-0.5">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-inter text-[13px] font-bold text-[#2E7D32] mb-1">Results That Convert</p>
                <p className="font-inter text-[13px] text-[#555] leading-relaxed">
                  From content and video marketing to world-class websites, we build strong connections and drive high-quality leads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. Success Mantra */}
      <motion.div 
        className="px-4 pt-2 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="font-inter text-[16px] font-semibold text-[#2E7D32] mb-3">
          Success Mantra
        </h2>
        
        <motion.div 
          className="bg-gradient-to-br from-[#E8F5E9] to-white rounded-3xl p-4 shadow-sm relative overflow-hidden"
          style={{ boxShadow: '0 3px 12px rgba(46, 125, 50, 0.12)' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          {/* Small spark icon on left */}
          <div className="absolute top-3 left-3">
            <Sparkles className="w-5 h-5 text-[#2E7D32] opacity-40" />
          </div>
          
          <p className="font-inter text-[14px] font-medium text-[#333] text-center leading-relaxed pt-2">
            Daily action, Weekly movement,<br />
            Monthly progress, Quarterly results.<br />
            AI solutions driving smarter business outcomes.
          </p>
        </motion.div>
      </motion.div>

      {/* 5. ISO Certification Trust Banner */}
      <motion.div 
        className="px-4 pt-2 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div 
          className="bg-gradient-to-r from-[#F5F5F5] to-[#E8F5E9] rounded-2xl p-4 shadow-sm"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
        >
          <div className="flex items-center gap-4">
            {/* ISO Image */}
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 overflow-hidden">
              <ImageWithFallback
                src="https://cdn.prod.website-files.com/64c7db62bef432a73deb39fa/64f60227b2064353a5d2d652_iso-image.webp"
                alt="ISO Certification"
                className="w-14 h-14 object-contain"
              />
            </div>
            
            {/* Text Content */}
            <div className="flex-1">
              <p className="font-inter text-[13px] font-bold text-[#2E7D32] mb-1">
                ISO/IEC 27001:2013 Certified
              </p>
              <p className="font-inter text-[12px] text-[#555] mb-1">
                for 3 consecutive years
              </p>
              <p className="font-inter text-[11px] text-[#666] italic">
                For your data security and peace of mind.
              </p>
            </div>
            
            {/* Checkmark */}
            <CheckCircle className="w-6 h-6 text-[#4CAF50] flex-shrink-0" />
          </div>
        </div>
      </motion.div>

      {/* 6. Why Choose LeadWalnut */}
      <motion.div 
        className="px-4 pt-2 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <h2 className="font-inter text-[15px] font-semibold text-[#2E7D32] mb-3 text-center leading-tight">
          Why do billion-dollar enterprises and million-dollar start-ups choose LeadWalnut as their growth partner?
        </h2>
        
        <div className="grid grid-cols-2 gap-3">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="bg-gradient-to-br from-[#E8F5E9] to-white rounded-2xl p-3 shadow-sm"
                style={{ boxShadow: '0 2px 6px rgba(46, 125, 50, 0.08)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + (index * 0.05), duration: 0.4 }}
              >
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#4CAF50] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-inter text-[13px] font-bold text-[#2E7D32] mb-1 leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-inter text-[11px] text-[#555] leading-tight">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* 7. Get In Touch CTA Section - REDESIGNED */}
      <motion.div 
        className="px-4 pt-2 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <div 
          className="bg-gradient-to-br from-[#2E7D32] to-[#4CAF50] rounded-3xl p-5 shadow-lg"
          style={{ boxShadow: '0 4px 16px rgba(46, 125, 50, 0.25)' }}
        >
          {/* Heading */}
          <h2 className="font-inter text-[16px] font-bold text-white mb-3 text-center leading-tight">
            Partner with LeadWalnut to Drive Your Digital Growth!
          </h2>
          
          {/* Description */}
          <p className="font-inter text-[13px] text-white/90 text-center mb-5 leading-relaxed">
            Ready to transform your digital presence? Let's discuss how we can help you achieve measurable growth.
          </p>

          {/* Contact Details - Compact */}
          <div className="space-y-2 mb-5">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-2.5">
              <Globe className="w-4 h-4 text-white flex-shrink-0" />
              <a 
                href="https://www.leadwalnut.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-[12px] text-white hover:underline"
              >
                www.leadwalnut.com
              </a>
            </div>
            
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-2.5">
              <Phone className="w-4 h-4 text-white flex-shrink-0" />
              <a 
                href="tel:+919741497123"
                className="font-inter text-[12px] text-white hover:underline"
              >
                +91 97414 97123
              </a>
            </div>
            
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-2.5">
              <Mail className="w-4 h-4 text-white flex-shrink-0" />
              <a 
                href="mailto:contact@leadwalnut.com"
                className="font-inter text-[12px] text-white hover:underline"
              >
                contact@leadwalnut.com
              </a>
            </div>
          </div>
          
          {/* CTA Buttons - Horizontal Layout */}
          <div className="flex gap-3">
            {/* Let's Talk Button */}
            <button 
              className="flex-1 bg-white text-[#2E7D32] font-inter text-[14px] font-bold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
              onClick={handleLetsTalk}
            >
              Let's Talk
            </button>
            
            {/* WhatsApp Button */}
            <button 
              className="flex-1 bg-[#25D366] text-white font-inter text-[14px] font-bold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* 8. Share & Connect Section */}
      <motion.div 
        className="px-4 pt-2 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <div className="bg-white rounded-3xl p-6 shadow-lg" style={{ boxShadow: '0 4px 16px rgba(46, 125, 50, 0.15)' }}>
          <h2 className="font-inter text-[18px] font-bold text-[#2E7D32] text-center mb-2">
            Share & Connect
          </h2>
          
          <p className="font-inter text-[14px] text-[#555] text-center mb-4">
            Save <span className="text-[#2E7D32] font-semibold">contact</span> & follow us
          </p>
          
          {/* QR Code */}
          <div className="flex justify-center mb-3">
            <div className="bg-white rounded-2xl p-3 border-2 border-gray-200">
              <img 
                src={qrCodeImage} 
                alt="QR Code"
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>
          
          <p className="font-inter text-[13px] text-[#666] text-center mb-4">
            Scan to save contact
          </p>
          
          {/* Buttons */}
          <div className="space-y-3">
            <button 
              onClick={handleSharePage}
              className="w-full bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white font-inter text-[14px] font-bold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Page</span>
            </button>
            
            <button 
              onClick={handleSaveContact}
              className="w-full bg-white text-[#2E7D32] font-inter text-[14px] font-bold py-3 px-4 rounded-full border-2 border-[#2E7D32] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Save Contact</span>
            </button>
          </div>
        </div>
      </motion.div>

    </div>
  );
}