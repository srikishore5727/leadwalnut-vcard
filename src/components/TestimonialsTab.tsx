import { motion } from 'motion/react';
import { TrendingUp, CheckCircle, Quote, Star } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudy {
  client: string;
  industry: string;
  challenge: string;
  results: string;
  highlight?: string;
  logo?: string | 'text';
  logoType?: 'image' | 'svg' | 'text';
}

const caseStudies: CaseStudy[] = [
  {
    client: 'Fortinet',
    industry: 'Global Cybersecurity Leader',
    challenge: 'Improve SEO rankings and brand visibility in a competitive cybersecurity market.',
    results: '3× organic keyword growth, 20× traffic increase, and multiple Featured Snippets — now leading all competitors.',
    highlight: '20× Traffic',
    logo: 'https://cdn.prod.website-files.com/64c7db62bef432a73deb39fa/653113a6188cd884f0dd1bd7_fortinet-logo.svg',
    logoType: 'svg'
  },
  {
    client: 'House of Ekam',
    industry: 'E-Commerce',
    challenge: 'Negligible traffic to niche premium e-commerce store.',
    results: '+1800% traffic in 3 months, 40% higher organic rankings, page 1 placement for "curtain collection", and 5★ Clutch review.',
    highlight: '+1800% Traffic',
    logo: 'https://houseofekam.com/cdn/shop/files/logo_150x@2x.png?v=1710786194',
    logoType: 'image'
  },
  {
    client: 'eFax',
    industry: 'Digital Fax Provider',
    challenge: 'Ranking #12 for "IRS Fax Numbers" vs IRS.gov (DA 92).',
    results: '#1 rank in 6 weeks, Featured Snippet achieved, improved impressions, signups, and revenue.',
    highlight: '#1 Rank in 6 Weeks',
    logo: 'https://cdn-public.softwarereviews.com/production/logos/offerings/9001/original/824-8249599_the-legal-profession-relies-on-the-fax-as.png?1626199149',
    logoType: 'image'
  },
  {
    client: 'Global Montessori Network',
    industry: 'Education',
    challenge: 'Build presence and video engagement for educators.',
    results: '10× traffic, 5× YouTube growth, strong Facebook community in 6 months.',
    highlight: '10× Traffic',
    logo: 'https://scontent-maa3-1.xx.fbcdn.net/v/t1.6435-9/116346810_10101472820203721_7499667871868424134_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=2285d6&_nc_ohc=B5swOoOPqrMQ7kNvwGbZNVb&_nc_oc=Adm8L5ffg6gEAWF2_Y7DWplZoMsbBY2lZYBGhStwIl4E6A6Dd0xaQmAtfZwQI3Si9Hk&_nc_zt=23&_nc_ht=scontent-maa3-1.xx&_nc_gid=TvtXcWrmllZDQVJcli11xA&oh=00_Afj6wDvcOwKEg_Lkwc1T3-lPptAKtnNHyvyQlLjYglFEqA&oe=6933A51F',
    logoType: 'image'
  }
];

interface ClientTestimonial {
  quote: string;
  author: string;
  title: string;
  company?: string;
  imageUrl: string;
}

const clientTestimonials: ClientTestimonial[] = [
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

export function TestimonialsTab() {
  return (
    <div className="pb-24 bg-gradient-to-b from-[#F8FFF9] to-white min-h-screen">
      {/* Page Header with Logo */}
      <PageHeader variant="small" showTaglines={false} alignment="left" />
      
      {/* Section 1: Case Studies Header */}
      <motion.div 
        className="bg-gradient-to-b from-white via-[#F0F9F1] to-white pt-4 pb-5 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="text-center">
          <h1 className="font-inter text-[18px] font-bold text-[#2E7D32] mb-2">
            Proven Success Stories
          </h1>
          <p className="font-inter text-[14px] font-medium text-[#444]">
            Results That Speak for Themselves
          </p>
        </div>
      </motion.div>

      {/* Section 2: Client Success Highlights */}
      <motion.div 
        className="px-4 pt-6 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="font-inter text-[16px] font-semibold text-[#2E7D32] mb-4">
          Client Success Highlights
        </h2>
        
        <div className="space-y-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              className="bg-white rounded-2xl p-4 shadow-sm card-hover relative overflow-hidden"
              style={{ 
                boxShadow: '0 3px 8px rgba(0,0,0,0.06)',
                maxWidth: '340px',
                margin: '0 auto 12px'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
            >
              {/* Highlight badge (optional) */}
              {study.highlight && (
                <div className="absolute top-3 right-3">
                  <div className="bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white px-3 py-1.5 rounded-full shadow-md">
                    <span className="font-inter text-[12px] font-bold whitespace-nowrap">
                      {study.highlight}
                    </span>
                  </div>
                </div>
              )}

              {/* Logo Section */}
              <div className="mb-3 flex items-center justify-start h-12 bg-gradient-to-r from-[#F5F5F5] to-white rounded-lg px-3">
                {study.logoType === 'svg' && study.logo && (
                  <img 
                    src={study.logo} 
                    alt={`${study.client} logo`}
                    className="h-6 w-auto object-contain max-w-[120px]"
                  />
                )}
                {study.logoType === 'image' && study.logo && (
                  <ImageWithFallback
                    src={study.logo}
                    alt={`${study.client} logo`}
                    className="h-8 w-auto object-contain max-w-[140px]"
                  />
                )}
                {study.logoType === 'text' && (
                  <div className="font-inter font-bold text-[14px] text-[#2E7D32]">
                    {study.client}
                  </div>
                )}
              </div>
              
              {/* Industry */}
              <p className="font-inter text-[13px] font-medium text-[#666] mb-3">
                {study.industry}
              </p>
              
              {/* Challenge */}
              <div className="mb-3">
                <div className="flex items-start gap-2">
                  <span className="text-[12px] mt-0.5">⚡</span>
                  <div>
                    <span className="font-inter text-[12px] font-semibold text-[#555]">
                      Challenge:{' '}
                    </span>
                    <span className="font-inter text-[12px] text-[#555]">
                      {study.challenge}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Results */}
              <div className="flex items-start gap-2 bg-gradient-to-r from-[#E8F5E9] to-white rounded-xl p-3">
                <CheckCircle className="w-4 h-4 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-inter text-[12px] font-semibold text-[#2E7D32]">
                    Results:{' '}
                  </span>
                  <span className="font-inter text-[12px] text-[#2E7D32]">
                    {study.results}
                  </span>
                </div>
              </div>

              {/* Growth indicator */}
              <div className="mt-3 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-[#4CAF50]" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Section 3: What Does Client Say about LW? */}
      <motion.div 
        className="px-4 pt-2 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2 className="font-inter text-[16px] font-semibold text-[#2E7D32] mb-4">
          What Does Client Say about LW?
        </h2>
        
        <div className="space-y-4">
          {clientTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-sm relative overflow-hidden card-hover"
              style={{ 
                boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
                maxWidth: '340px',
                margin: '0 auto 16px'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + (index * 0.1), duration: 0.5 }}
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

              {/* Testimonial Quote */}
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
                  {testimonial.company && (
                    <p className="font-inter text-[11px] text-[#999] italic">
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}