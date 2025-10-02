import React from 'react';
import { Video, Film, MessageSquare, PlaySquare, Edit2, Users, Sparkles, BarChart3, BookOpen, Layers } from 'lucide-react';

// Highly relevant images for AI video content, editing, creative process
const videoImages = [
  // Video editor at work (dynamic creative process)
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
  // Multi-screen editing with storyboard and timeline
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  // Designer sketching video frames/animation concepts
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
];

const videoSections = [
  {
    icon: <Film className="w-7 h-7 text-blue-500"/>,
    title: "Promo & Explainer Videos",
    desc: "Short, impactful clips that generate leads, educate viewers, and make your brand unforgettable."
  },
  {
    icon: <MessageSquare className="w-7 h-7 text-green-500"/>,
    title: "Testimonial & Case Study Videos",
    desc: "Turn real customer stories into persuasive proof—build trust and credibility fast."
  },
  {
    icon: <PlaySquare className="w-7 h-7 text-pink-500"/>,
    title: "Social Media Clips & Animations",
    desc: "Platform-ready reels, stories, and motion graphics for viral engagement and shareability."
  },
  {
    icon: <BookOpen className="w-7 h-7 text-orange-500"/>,
    title: "Scriptwriting & Storyboarding",
    desc: "Professional narrative structure and messaging for clear, compelling brand stories."
  },
  {
    icon: <Layers className="w-7 h-7 text-fuchsia-500"/>,
    title: "SEO Video Optimization",
    desc: "Rich metadata, captions, and schema markups for maximum visibility and findability."
  }
];

const processSteps = [
  {
    icon: <Users className="w-7 h-7 text-indigo-500"/>,
    title: "Consulting & Creative Planning",
    desc: "We define your brand goals, audience, and the ideal message for each channel and campaign."
  },
  {
    icon: <Sparkles className="w-7 h-7 text-green-500"/>,
    title: "AI-Enhanced Production",
    desc: "Advanced AI video tools and creative direction deliver rapid, high-quality results—often in days, not weeks."
  },
  {
    icon: <Edit2 className="w-7 h-7 text-blue-500"/>,
    title: "Review & Revisions",
    desc: "You get iterative previews, collaborative feedback, and unlimited creative tweaks."
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-yellow-500"/>,
    title: "Launch & Performance Analytics",
    desc: "Optimized delivery, SEO tagging, and full reporting for maximum reach, retention, and ROI."
  }
];

const testimonials = [
  {
    quote: "Our promo videos boosted engagement 5x! The process was unbelievably fast and creative.",
    author: "— T. Majumdar, SaaS Startup"
  },
  {
    quote: "We converted testimonials into high-impact reels and our followers doubled in 2 months.",
    author: "— L. Ghosh, Fitness Brand"
  },
  {
    quote: "Great scripts, dynamic visuals, and all delivered ahead of schedule. Highly recommend their AI editing team!",
    author: "— P. Deb, Ecommerce Owner"
  }
];

const faqs = [
  {
    q: "How quickly can you deliver a video project?",
    a: "AI-enhanced production means most projects deliver in 3-7 days, with rapid revisions if needed."
  },
  {
    q: "Can you make videos for Instagram, YouTube, and Facebook?",
    a: "Absolutely! We tailor video formats, lengths, and visuals for each platform's best performance."
  },
  {
    q: "Will my video be fully custom or use stock?",
    a: "Every video is custom to your brand with relevant voice, color, and visuals—stock is used only as needed and at your direction."
  },
  {
    q: "Do you provide scripts and consult on story?",
    a: "Yes, professional scriptwriting and storyboarding are included for powerful narrative and messaging."
  }
];

const VideoEditing = () => (
  <div className="bg-gray-50 min-h-screen">
    {/* HERO */}
    <section className="py-16 px-4 text-center">
      <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">AI Video Content & Editing</h1>
      <p className="text-xl sm:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto">
        <span className="text-blue-600 font-medium">Make your brand move—with next-gen video storytelling, faster and smarter than ever.</span>
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {videoImages.map((src, i) => (
          <img key={i} src={src} className="rounded-xl shadow-lg w-48 h-36 object-cover" alt="Video editing visual" />
        ))}
      </div>
      <div className="max-w-2xl mx-auto text-gray-600 mb-6">
        <p>
          Still stuck with static images when your competition tells stories with video? <b>AI-powered video creation bridges the gap—delivering top quality and speed, without sacrificing creativity or brand impact.</b>
        </p>
      </div>
      <a
        href="/contact"
        className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:shadow-lg duration-200 inline-block"
      >
        Schedule Free Demo
      </a>
    </section>

    {/* WHY VIDEO */}
    <section className="max-w-4xl mx-auto px-4 mb-12 text-center">
      <h2 className="text-3xl font-bold mb-3 text-gray-800">Why AI Video Content Matters</h2>
      <p className="text-lg text-gray-600 mb-4">
        Video brings your brand to life, holding attention and prompting action. Businesses using smart, relevant video content see better retention, higher trust, and more conversions.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-gray-600 mt-5">
        <li>⭐ 82% of online traffic is video by 2025.</li>
        <li>⭐ Videos improve conversion rates by up to 80% vs. text-only pages.</li>
        <li>⭐ AI video creation cuts cost and speeds up production dramatically.</li>
        <li>⭐ Optimized videos enhance SEO and brand recall on every platform.</li>
      </ul>
    </section>

    {/* OFFERINGS */}
    <section className="max-w-7xl mx-auto px-4 mb-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">AI Video Content Services We Deliver</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {videoSections.map((section, i) => (
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
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our AI Video Creation Process</h2>
      <ol className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {processSteps.map((step, i) => (
          <li key={i} className="bg-gradient-to-tr from-blue-100 to-blue-50 rounded-2xl shadow p-6 flex flex-col items-center">
            {step.icon}
            <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-800">{step.title}</h4>
            <p className="text-gray-600 text-sm text-center">{step.desc}</p>
          </li>
        ))}
      </ol>
    </section>

    {/* TESTIMONIALS */}
    <section className="max-w-6xl mx-auto px-4 my-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <svg width="44" height="44" className="mb-3 text-blue-400" fill="none"><circle cx="22" cy="22" r="22" fill="#bfdbfe"/><text x="11" y="32" fontFamily="Arial" fontSize="32" fill="#2563eb">“</text></svg>
            <p className="italic text-lg mb-3 text-gray-800 text-center">"{t.quote}"</p>
            <span className="font-medium text-blue-700">{t.author}</span>
          </blockquote>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section className="max-w-5xl mx-auto px-4 mb-24">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">FAQ: About AI Video Editing & Content</h2>
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
    <section className="py-14 bg-blue-50 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3">Make your brand move—start your first AI video!</h2>
      <p className="text-lg text-blue-600 mb-6">Schedule a free demo today, and unlock next-level results for your business.</p>
      <a
        href="/contact"
        className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 hover:shadow-lg duration-200 inline-block"
      >
        Get My Free Video Demo
      </a>
    </section>
  </div>
);

export default VideoEditing;
