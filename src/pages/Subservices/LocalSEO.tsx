import React, { useEffect } from 'react';
import { Search, BarChart3, MapPin, Globe, TrendingUp, Users, Lightbulb, ShieldCheck, Stars, ExternalLink, ArrowRight, Star } from 'lucide-react';

const seoImages = [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80",
];

const seoSections = [
  {
    icon: <Search className="w-7 h-7 text-green-500"/>,
    title: "On-Page SEO",
    desc: "From keyword research to content optimization, meta tags, images, schema and site layout—our experts ensure your site is search-ready and compelling for real visitors.",
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-blue-500"/>,
    title: "Technical SEO",
    desc: "Lightning fast loading, robust mobile support, advanced crawlability, and fixing backend errors to keep you ahead in search performance.",
  },
  {
    icon: <MapPin className="w-7 h-7 text-red-500"/>,
    title: "Local SEO",
    desc: "Rank in 'near me' searches, manage your Google Business Profile, earn powerful citations, and rise to the top in Agartala and the Northeast.",
  },
  {
    icon: <Globe className="w-7 h-7 text-purple-500"/>,
    title: "Off-Page SEO",
    desc: "Authoritative, ethical link building, PR strategy, and reputation enhancement for long-lasting domain trust and rankings.",
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-yellow-500"/>,
    title: "Continuous Audit & Reporting",
    desc: "Transparent, actionable SEO reports, competitor tracking, monthly audits, and clear ROI so you always know your growth.",
  },
];

const steps = [
  {
    icon: <Users className="w-7 h-7 text-cyan-500"/>,
    title: "Discovery Call",
    desc: "We begin by understanding your goals, business model, and current digital landscape."
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-yellow-400"/>,
    title: "Site Audit & Strategy",
    desc: "We thoroughly audit your site, research your competition and keywords, and deliver a roadmap for rapid, sustainable results."
  },
  {
    icon: <Stars className="w-7 h-7 text-pink-500"/>,
    title: "Implementation",
    desc: "Our SEO pros execute technical and content updates, launch campaigns, and monitor progress daily."
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-green-600"/>,
    title: "Review & Growth",
    desc: "You receive detailed reports, consulting, and regular check-ins to refine your trajectory as your rankings rise."
  }
];

const testimonials = [
  {
    quote: "Within 3 months, we shot to the top of Google for our local industry. WebGrow360 is the real deal.",
    author: "— R. Dey, Restaurant Owner"
  },
  {
    quote: "Their audit found issues even my developers missed. The ROI on our SEO investment is amazing.",
    author: "— N. Biswas, eCommerce Marketer"
  },
  {
    quote: "Our enquiries have doubled. They're knowledgeable, transparent, and always proactive.",
    author: "— K. Singh, Legal Consultant"
  }
];

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "Most clients see noticeable ranking and traffic improvements within 90 days. Results grow over time as our efforts compound."
  },
  {
    q: "Is your SEO work Google compliant?",
    a: "Absolutely! We use only white-hat, industry-approved optimization techniques."
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes, we provide continuous SEO management, reporting, and consulting to help you adapt as algorithms shift."
  },
  {
    q: "Will I be locked into a contract?",
    a: "No long-term lock-ins. We earn your business every month. Cancel anytime with 30 days' notice."
  }
];

const LocalSEO = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  <div className="bg-gray-50 min-h-screen">
    {/* HERO */}
    <section className="py-16 px-4 text-center">
      <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">SEO Services</h1>
      <p className="text-xl sm:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto">
        <span className="text-green-600 font-medium">Outrank, outshine and outgrow</span> your competition with proven strategies that drive genuine leads and lasting visibility.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {seoImages.map((src, i) => (
          <img key={i} src={src} className="rounded-xl shadow-lg w-48 h-36 object-cover" alt="SEO visual" />
        ))}
      </div>
      <div className="max-w-2xl mx-auto text-gray-600 mb-6">
        <p>Is your website buried on search engines, losing traffic and leads? Modern buyers rely on search to make decisions—and if you’re not seen, you don’t exist in their minds. WebGrow360’s SEO gets you in front of ready-to-act customers, slashing ad costs while building real authority and trust.</p>
      </div>
      <a
        href="/contact"
        className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 hover:shadow-lg duration-200 inline-block"
      >
        Free SEO Audit
      </a>
    </section>

    {/* WHY SEO */}
    <section className="max-w-4xl mx-auto px-4 mb-12 text-center">
      <h2 className="text-3xl font-bold mb-3 text-gray-800">Why Companies Need SEO Services</h2>
      <p className="text-lg text-gray-600 mb-4">
        Without strong SEO, companies suffer from dwindling web traffic, high ad costs, and missed customers. Effective SEO builds your ranking, increases organic visitors, and delivers more conversions reliably—month after month.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-gray-600 mt-5">
        <li>⭐ 93% of online experiences begin with a search engine.</li>
        <li>⭐ Top rankings earn over 60% of all organic clicks.</li>
        <li>⭐ Organic SEO delivers long-term ROI vs. ads.</li>
        <li>⭐ Local search intent = high conversion rates.</li>
      </ul>
    </section>

    {/* OFFERINGS */}
    <section className="max-w-7xl mx-auto px-4 mb-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Comprehensive SEO Offerings</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {seoSections.map((section, i) => (
          <div key={i} className="bg-white rounded-2xl p-7 shadow-md text-left flex flex-col items-start hover:scale-105 hover:shadow-lg transition-all duration-200">
            {section.icon}
            <h3 className="mt-4 text-xl font-semibold text-gray-800">{section.title}</h3>
            <p className="mt-2 text-gray-600">{section.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* SEO PROCESS */}
    <section className="max-w-6xl mx-auto px-4 mb-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our SEO Process: How Success Happens</h2>
      <ol className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {steps.map((step, i) => (
          <li key={i} className="bg-gradient-to-tr from-green-100 to-green-50 rounded-2xl shadow p-6 flex flex-col items-center">
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
            <svg width="44" height="44" className="mb-3 text-green-400" fill="none"><circle cx="22" cy="22" r="22" fill="#d1fae5"/><text x="11" y="32" fontFamily="Arial" fontSize="32" fill="#10b981">“</text></svg>
            <p className="italic text-lg mb-3 text-gray-800 text-center">"{t.quote}"</p>
            <span className="font-medium text-green-700">{t.author}</span>
          </blockquote>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section className="max-w-5xl mx-auto px-4 mb-24">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">FAQ: Your SEO Questions Answered</h2>
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
    <section className="py-14 bg-green-50 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-3">Ready to rise above the noise?</h2>
      <p className="text-lg text-green-600 mb-6">Contact WebGrow360 for a free, in-depth SEO audit and let’s unlock the growth your business deserves!</p>
      <a
        href="/contact"
        className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 hover:shadow-lg duration-200 inline-block"
      >
        Get Your Free Audit
      </a>
    </section>
   </div>
  );
};

export default LocalSEO;