import React from 'react';
import { Instagram, Facebook, Linkedin, Users, Sparkles, Video, DollarSign, HeartHandshake, MessageCircle, BarChart3, TrendingUp, ArrowUpCircle, BookOpen, PieChart } from 'lucide-react';

// New more stylistically diverse images for fresh visual impact
const smmImages = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80", // Young influencers/brand content creation
  "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&w=400&q=80", // Laptops/phones/social engagement
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80"  // Social apps/branding
];

const smmSections = [
  {
    icon: <Instagram className="w-7 h-7 text-pink-500"/>,
    title: "Cross-Platform Presence",
    desc: "Strategic planning, scheduling, and posting on Instagram, Facebook, LinkedIn, and more—all in your brand’s voice."
  },
  {
    icon: <Sparkles className="w-7 h-7 text-indigo-500"/>,
    title: "Creative Campaign Development",
    desc: "Graphics, videos, reels, stories, and posts designed to spark conversations and grow your audience."
  },
  {
    icon: <DollarSign className="w-7 h-7 text-green-500"/>,
    title: "Paid Social Advertising",
    desc: "Audience targeting, A/B testing, and budget optimization for efficient clicks, leads, and real conversions."
  },
  {
    icon: <HeartHandshake className="w-7 h-7 text-orange-400"/>,
    title: "Influencer Partnerships",
    desc: "Team up with trusted industry and local influencers for authentic reach and engagement."
  },
  {
    icon: <MessageCircle className="w-7 h-7 text-blue-500"/>,
    title: "Community Management",
    desc: "Responsive moderation, customer support, and daily engagement—building trust and lasting relationships."
  },
];

const processSteps = [
  {
    icon: <Users className="w-7 h-7 text-pink-500"/>,
    title: "Audit & Discovery",
    desc: "We analyze your audience, current channels, and competition to set clear, actionable goals."
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-green-500"/>,
    title: "Content & Campaign Strategy",
    desc: "We craft your brand voice, calendar, and campaign blueprint for maximum reach and engagement."
  },
  {
    icon: <BookOpen className="w-7 h-7 text-indigo-500"/>,
    title: "Creation & Launch",
    desc: "Eye-catching posts, videos, and ads go live—optimized for every platform and audience segment."
  },
  {
    icon: <PieChart className="w-7 h-7 text-yellow-500"/>,
    title: "Analysis & Growth",
    desc: "We measure results, adjust tactics, and provide transparent reporting to grow your social impact month after month."
  }
];

const testimonials = [
  {
    quote: "We went from random followers to an active, loyal community. Their campaigns deliver real engagement.",
    author: "— P. Banik, Fashion Brand Owner"
  },
  {
    quote: "The creative posts and influencer tie-ups actually drove leads. Highly collaborative and data driven.",
    author: "— J. Adhikari, Health Startup"
  },
  {
    quote: "Our social presence went from silent to buzzing. WebGrow360 listens, experiments, and delivers.",
    author: "— B. Singh, Restaurant Franchise"
  }
];

const faqs = [
  {
    q: "Can you help us on several platforms at once?",
    a: "Yes! We manage integrated campaigns across Instagram, Facebook, LinkedIn, and emerging social networks."
  },
  {
    q: "How do you measure ROI?",
    a: "We track every like, share, comment, lead, and sale—tying activity to business results with detailed reports."
  },
  {
    q: "Do you handle all content creation?",
    a: "Absolutely: graphics, copy, video, even influencer outreach and daily engagement are all included."
  },
  {
    q: "How do you keep up with changing algorithms?",
    a: "We continuously adapt, test new approaches, and keep your campaigns ahead of platform shifts."
  }
];

const ContentCreation = () => (
  <div className="bg-gray-50 min-h-screen">
    {/* HERO */}
    <section className="py-16 px-4 text-center">
      <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Social Media Marketing</h1>
      <p className="text-xl sm:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto">
        <span className="text-pink-600 font-medium">Transform your social channels into communities, conversations, and conversions!</span>
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {smmImages.map((src, i) => (
          <img key={i} src={src} className="rounded-xl shadow-lg w-48 h-36 object-cover" alt="Social media visual" />
        ))}
      </div>
      <div className="max-w-2xl mx-auto text-gray-600 mb-6">
        <p>
        Are your social channels a missed opportunity, or filled with posts that no one engages with? Today’s brands wrestle with shrinking reach, disconnected messaging, and audience burnout. <br/> <b>Without a clear and adaptive strategy, you risk losing ground to competitors who turn followers into loyal customers.</b>
        </p>
      </div>
      <a
        href="/contact"
        className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-600 hover:shadow-lg duration-200 inline-block"
      >
        Launch My Campaign
      </a>
    </section>

    {/* WHY SMM */}
    <section className="max-w-4xl mx-auto px-4 mb-12 text-center">
      <h2 className="text-3xl font-bold mb-3 text-gray-800">Why Companies Need Social Media Marketing</h2>
      <p className="text-lg text-gray-600 mb-4">
        People spend hours daily shaping opinions on social platforms—yet most brands struggle to turn scattered attention into real conversations, advocates, and loyal customers. Smart social marketing builds communities, amplifies your story, and pushes scrollers down the funnel.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-gray-600 mt-5">
        <li>⭐ Over 4 billion people use social media worldwide.</li>
        <li>⭐ Brands that engage daily see 3x more conversions.</li>
        <li>⭐ Social ads deliver targeted reach and measurable ROI.</li>
        <li>⭐ Influencer collaborations boost credibility and organic engagement.</li>
      </ul>
    </section>

    {/* OFFERINGS */}
    <section className="max-w-7xl mx-auto px-4 mb-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Social Media Marketing Services</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {smmSections.map((section, i) => (
          <div key={i} className="bg-white rounded-2xl p-7 shadow-md text-left flex flex-col items-start hover:scale-105 hover:shadow-lg transition-all duration-200">
            {section.icon}
            <h3 className="mt-4 text-xl font-semibold text-gray-800">{section.title}</h3>
            <p className="mt-2 text-gray-600">{section.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* PROCESS */}
    <section className="max-w-6xl mx-auto px-4 mb-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">How Our Social Campaigns Work</h2>
      <ol className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {processSteps.map((step, i) => (
          <li key={i} className="bg-gradient-to-tr from-pink-100 to-pink-50 rounded-2xl shadow p-6 flex flex-col items-center">
            {step.icon}
            <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-800">{step.title}</h4>
            <p className="text-gray-600 text-sm text-center">{step.desc}</p>
          </li>
        ))}
      </ol>
    </section>

    {/* TESTIMONIALS */}
    <section className="max-w-6xl mx-auto px-4 my-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Client Success Stories</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <svg width="44" height="44" className="mb-3 text-pink-400" fill="none"><circle cx="22" cy="22" r="22" fill="#ffe4e6"/><text x="11" y="32" fontFamily="Arial" fontSize="32" fill="#ec4899">“</text></svg>
            <p className="italic text-lg mb-3 text-gray-800 text-center">"{t.quote}"</p>
            <span className="font-medium text-pink-700">{t.author}</span>
          </blockquote>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section className="max-w-5xl mx-auto px-4 mb-24">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">FAQ: All About Social Media Marketing</h2>
      <dl className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i}>
            <dt className="font-semibold text-gray-900">{faq.q}</dt>
            <dd className="text-gray-700 ml-2">{faq.a}</dd>
          </div>
        ))}
      </dl>
    </section>

    {/* FINAL CTA */}
    <section className="py-14 bg-pink-50 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-pink-700 mb-3">Let’s transform your social influence!</h2>
      <p className="text-lg text-pink-600 mb-6">Get in touch to launch a results-driven campaign that makes your brand stand out where it matters most.</p>
      <a
        href="/contact"
        className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-700 hover:shadow-lg duration-200 inline-block"
      >
        Start My Social Campaign
      </a>
    </section>
  </div>
);

export default ContentCreation;
