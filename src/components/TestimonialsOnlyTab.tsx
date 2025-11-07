import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PageHeader } from './PageHeader';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Lead generation for a startup is never easy. I have been working with Nattu at LeadWalnut for the past year. They definitely rank amongst the best I have seen in the business. Got us quality meetings within 2 months and opened doors with big businesses. The secret to their success is a clear strategy, persistence & leadership attention. Seems obvious but rare to find.",
    author: "Balakrishnan Kavikkal",
    title: "Co-Founder & CEO",
    company: "Autonom8 Inc.",
    imageUrl: "https://cdn.prod.website-files.com/64d3611234cca03f258c29ec/6502e044ee7ef498f986c34a_BalaKrishnan.webp"
  },
  {
    quote: "It was a breeze working with Ajay and his team to transform my website from just an e-business card to a 360-degree digital presence. All the finer details were dealt with care and the quality is top-notch. The main thing I liked is the approach to ensuring the online version adequately reflects the work being done. My students are very happy and I wish to see increased traffic to the website in the future.",
    author: "Mahesh Panchagnula",
    title: "Dean & Board Member",
    company: "IIT Madras",
    imageUrl: "https://cdn.prod.website-files.com/64d3611234cca03f258c29ec/6502de3eca9c356cb65dc4a3_Mahesh.webp"
  },
  {
    quote: "Within 3-4 months, LeadWalnut has been able to generate quality meetings with our target accounts. Their website revamp & e-mail campaigns have been exceptional in reaching out to prospective customers as well as getting our company name out. We have enjoyed working with Ajay & his team. I clearly see business growing in the near future.",
    author: "Terry Dixon",
    title: "Sales Manager",
    company: "V-J Electronic",
    imageUrl: "https://cdn.prod.website-files.com/64d3611234cca03f258c29ec/6502ddcb2c472930322eb6fa_Terry.webp"
  },
  {
    quote: "What attracted me to LeadWalnut was their consultative approach to lead generation & digital marketing. We rely heavily on conferences around the world to build the sales pipeline. LeadWalnut's diligent & smart campaigning through e-mail and LinkedIn helped us to get value from every event in which we participated. Ajay & team: Thank you so much!",
    author: "Siva Vajjhala",
    title: "Co-Founder & CEO",
    company: "Tech4TH Solutions",
    imageUrl: "https://cdn.prod.website-files.com/64d3611234cca03f258c29ec/6502dc5e20fa45a7b23dadc3_Siva.webp"
  },
  {
    quote: "Ajay. Thank you and your team for a focused lead generation campaign. It's given 3x increase in qualified leads and Sales is delighted. Also getting us on Google ranking position ONE for our target keywords is great stuff. Keep it going...",
    author: "Venkat Nagaswamy",
    title: "CEO",
    company: "MarianaIQ",
    imageUrl: "https://cdn.prod.website-files.com/64d3611234cca03f258c29ec/65028ced202da9cf0aa32667_venkat.webp"
  },
  {
    quote: "To generate leads for a startup in the aviation sector is not easy. We threw the challenge at LeadWalnut and results far exceeded expectations. Uma Shankar, Sr. Demand Analyst from LeadWalnut owned the project and applied innovative communication to get us meetings with major airlines.",
    author: "John Whyte",
    title: "Sales Director, US Region",
    company: "TPF Software",
    imageUrl: "https://cdn.prod.website-files.com/64c7db62bef432a73deb39fa/690e39edb16b53c8267b774d_John%20Whyte.webp"
  }
];

export function TestimonialsOnlyTab() {
  return (
    <div className="pb-24 bg-gradient-to-b from-white via-[#F8FFF9] to-white min-h-screen">
      {/* Page Header with Logo */}
      <PageHeader variant="small" showTaglines={false} />
      
      {/* Testimonials Header */}
      <motion.div 
        className="bg-gradient-to-b from-white via-[#F0F9F1] to-white pt-4 pb-4 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="text-center">
          <h1 className="font-inter text-[18px] font-bold text-[#2E7D32] mb-2">
            What Do Clients Say About LW?
          </h1>
          <p className="font-inter text-[14px] font-medium text-[#444]">
            Hear from our satisfied clients
          </p>
        </div>
      </motion.div>

      {/* Testimonials Cards */}
      <div className="px-4 space-y-4 pb-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-5 shadow-sm relative overflow-hidden card-hover"
            style={{ boxShadow: '0 3px 10px rgba(0,0,0,0.08)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + (index * 0.1), duration: 0.5 }}
          >
            {/* Quote Icon */}
            <div className="absolute top-3 right-3 opacity-10">
              <Quote className="w-12 h-12 text-[#2E7D32]" />
            </div>

            {/* Star Rating */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
            
            {/* Quote Text */}
            <p className="font-inter text-[13px] text-[#333] italic mb-4 leading-relaxed relative z-10">
              "{testimonial.quote}"
            </p>
            
            {/* Author Section with Image */}
            <div className="border-t border-gray-100 pt-3 flex items-center gap-3">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <ImageWithFallback
                  src={testimonial.imageUrl}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                />
              </div>
              
              {/* Author Info */}
              <div className="flex-1">
                <p className="font-inter text-[13px] font-bold text-[#2E7D32]">
                  {testimonial.author}
                </p>
                <p className="font-inter text-[11px] text-[#666]">
                  {testimonial.title}
                </p>
                <p className="font-inter text-[11px] text-[#999] italic">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        className="px-4 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="bg-gradient-to-br from-[#E8F5E9] to-white rounded-2xl p-5 text-center shadow-sm" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <p className="font-inter text-[14px] text-[#2E7D32] font-semibold mb-2">
            Join Our Satisfied Clients
          </p>
          <p className="font-inter text-[12px] text-[#555] leading-relaxed">
            Experience the LeadWalnut difference and transform your digital growth journey.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
