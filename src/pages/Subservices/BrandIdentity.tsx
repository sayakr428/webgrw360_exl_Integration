import React, { useEffect } from 'react';
import { Palette, PenTool, Layers, Image, FileText, Users, Eye, Sparkles, BarChart3, BookOpen, ExternalLink, ArrowRight, Star } from 'lucide-react';

// Images chosen to directly suggest professional graphic design, drawing, digital art, branding
const designImages = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80", // Hands sketching design/branding
  "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=400&q=80", // Macbook/tablet workspace, design apps/icons
  "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?auto=format&fit=crop&w=400&q=80", // Creative color pencils and branding tools
];

const designSections = [
  {
    icon: <Palette className="w-7 h-7 text-yellow-500"/>,
    title: "Logo & Brand Identity",
    desc: "Custom logos, branding systems, style guides, and color palettes for unified, memorable recognition.",
  },
  {
    icon: <Layers className="w-7 h-7 text-green-500"/>,
    title: "Marketing Collateral",
    desc: "Social media templates, banners, flyers, brochures, ads, and print-ready assets for all your campaigns.",
  },
  {
    icon: <FileText className="w-7 h-7 text-fuchsia-500"/>,
    title: "Infographics & Presentations",
    desc: "Turn complexity into clarity with high-impact infographics and persuasive pitch decks.",
  },
  {
    icon: <Image className="w-7 h-7 text-blue-500"/>,
    title: "Website Graphics",
    desc: "Hero images, icons, and custom illustrations—driving engagement and ease at every user touchpoint.",
  },
  {
    icon: <Sparkles className="w-7 h-7 text-orange-500"/>,
    title: "AI-Powered Rapid Design",
    desc: "Leveraging advanced tools for quick, tailored, and trend-setting visuals that express your brand’s soul.",
  }
];

const processSteps = [
  {
    icon: <Users className="w-7 h-7 text-cyan-500"/>,
    title: "Discovery & Ideation",
    desc: "We explore your mission, market, and audience, gathering insights and inspiration for authentic design."
  },
  {
    icon: <Eye className="w-7 h-7 text-purple-500"/>,
    title: "Concept Creation",
    desc: "Multiple creative directions, moodboards, and sketches aligned to your message and goals."
  },
  {
    icon: <PenTool className="w-7 h-7 text-green-600"/>,
    title: "Design & Feedback",
    desc: "Focused execution, collaborative reviews, and iterative polishing until every element inspires."
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-yellow-500"/>,
    title: "Delivery & Support",
    desc: "Full asset kit, brand guidelines, and ongoing design updates keep you fresh, consistent, and ahead."
  },
];

const testimonials = [
  {
    quote: "Our new logo and templates receive compliments everywhere. The team elevated our brand instantly!",
    author: "— S. Choudhury, Tech Startup"
  },
  {
    quote: "Their infographics and presentations made our pitch 10x more convincing. Fast communication and standout creativity.",
    author: "— K. Prasad, Educational Enterprise"
  },
  {
    quote: "Professional, collaborative, and very flexible with ideas. Our social posts and flyers have transformed!",
    author: "— D. Saha, Hospitality Business"
  }
];

const faqs = [
  {
    q: "What design formats do you deliver?",
    a: "We provide everything needed—vector logos, high-res graphics, editable templates, and ready-to-use web assets."
  },
  {
    q: "Can you help modernize our old brand?",
    a: "Absolutely—we refresh, rebrand, and update existing assets for instant new impact without losing your business legacy."
  },
  {
    q: "How fast is turnaround?",
    a: "Most projects complete in 7-14 business days, with express options for urgent launches or campaigns."
  },
  {
    q: "Will our team get usage guidance?",
    a: "Yes, we deliver clear style guides, usage tips, and even design training so your brand stays sharp."
  }
];

const BrandIdentity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
          Brand Identity & Graphic Design
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto">
          <span className="text-yellow-600 font-medium">
            Stand out with visuals that captivate, convert, and build trust—wherever your brand appears.
          </span>
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {designImages.map((src, i) => (
            <img key={i} src={src} className="rounded-xl shadow-lg w-48 h-36 object-cover" alt="Graphic design visual" />
          ))}
        </div>
        <div className="max-w-2xl mx-auto text-gray-600 mb-6">
          <p>
            Is your branding falling flat or losing customers because your visuals get ignored? The digital marketplace is a battle of first impressions. <b>Modern, memorable design boosts engagement, recognition, and sales on every campaign.</b>
          </p>
        </div>
        <a
          href="/contact"
          className="bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-600 hover:shadow-lg duration-200 inline-block"
        >
          Free Design Consultation
        </a>
      </section>

    {/* WHY DESIGN */}
    <section className="max-w-4xl mx-auto px-4 mb-12 text-center">
      <h2 className="text-3xl font-bold mb-3 text-gray-800">Why Companies Need Expert Graphic Design</h2>
      <p className="text-lg text-gray-600 mb-4">
        From logos to infographics and presentations, design communicates value instantly. Well-crafted visuals get you noticed, tell your brand story, and make every campaign more effective. Bad graphics, on the other hand, erode trust and campaign impact.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-gray-600 mt-5">
        <li>⭐ 80% of people remember a brand by its logo and style.</li>
        <li>⭐ Well-designed campaigns show 2-3× higher engagement and conversion.</li>
        <li>⭐ Good design builds trust and motivates action in seconds.</li>
        <li>⭐ Consistency in visuals multiplies recognition across platforms.</li>
      </ul>
    </section>

    {/* OFFERINGS */}
    <section className="max-w-7xl mx-auto px-4 mb-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Graphic Design Services We Deliver</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {designSections.map((section, i) => (
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
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Design Process: From Vision to Delivery</h2>
      <ol className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {processSteps.map((step, i) => (
          <li key={i} className="bg-gradient-to-tr from-yellow-100 to-yellow-50 rounded-2xl shadow p-6 flex flex-col items-center">
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
            <svg width="44" height="44" className="mb-3 text-yellow-400" fill="none"><circle cx="22" cy="22" r="22" fill="#fef9c3"/><text x="11" y="32" fontFamily="Arial" fontSize="32" fill="#eab308">“</text></svg>
            <p className="italic text-lg mb-3 text-gray-800 text-center">"{t.quote}"</p>
            <span className="font-medium text-yellow-700">{t.author}</span>
          </blockquote>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section className="max-w-5xl mx-auto px-4 mb-24">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">FAQ: All About Graphic Design and Branding</h2>
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
    <section className="py-14 bg-yellow-50 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-3">Ready to refresh your brand visuals?</h2>
        <p className="text-lg text-yellow-600 mb-6">Connect now for a free design consultation and portfolio review! Give your business the visual edge it deserves.</p>
        <a
          href="/contact"
          className="bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-700 hover:shadow-lg duration-200 inline-block"
        >
          Get My Design Proposal
        </a>
      </section>
    </div>
  );
};

export default BrandIdentity;
