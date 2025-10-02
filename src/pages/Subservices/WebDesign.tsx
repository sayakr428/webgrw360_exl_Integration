import React from 'react';
import { Paintbrush, Smartphone, UserCheck, FileText, BarChart3, Settings, ArrowUpCircle, Users, Eye, BookOpen, ShieldCheck } from 'lucide-react';

const designImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",  // Modern layout
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",   // Mobile friendly
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",   // UX/UI
];

const designSections = [
  {
    icon: <Paintbrush className="w-7 h-7 text-blue-500"/>,
    title: "Custom WordPress & CMS Sites",
    desc: "Built for speed, flexibility, and scalability so your digital presence grows with you."
  },
  {
    icon: <Smartphone className="w-7 h-7 text-green-500"/>,
    title: "Mobile-Responsive, User-Centered Design",
    desc: "Seamless experiences every device. Your site looks impressive and works perfectly anywhere."
  },
  {
    icon: <UserCheck className="w-7 h-7 text-orange-500"/>,
    title: "UX/UI Optimization",
    desc: "Data-driven layouts, easy navigation, clear calls-to-action—maximizing engagement at every step."
  },
  {
    icon: <FileText className="w-7 h-7 text-purple-500"/>,
    title: "Landing Pages & Conversion Funnels",
    desc: "Pages crafted to guide visitors and convert traffic into high-quality leads and sales."
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-fuchsia-500"/>,
    title: "Analytics, Integrations, & Ongoing Support",
    desc: "Performance tracking, CRM connections, and proactive maintenance so you’re always ahead."
  }
];

const processSteps = [
  {
    icon: <Users className="w-7 h-7 text-cyan-500"/>,
    title: "Discovery & Planning",
    desc: "We understand your goals, review competitor sites, and plan a design roadmap tailored for your brand."
  },
  {
    icon: <Eye className="w-7 h-7 text-green-500"/>,
    title: "Creative Wireframes",
    desc: "We design wireframes and mockups for your feedback, ensuring every page aligns with your vision."
  },
  {
    icon: <BookOpen className="w-7 h-7 text-orange-500"/>,
    title: "Development",
    desc: "Agile build using modern frameworks, best UX patterns, and robust CMS for easy updates."
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-purple-600"/>,
    title: "Launch & Support",
    desc: "Rigorous QA, fast launch, and post-delivery training/support so you keep growing with confidence."
  }
];

const testimonials = [
  {
    quote: "Our site's redesign brought immediate engagement! Clients trust us more and conversion rates have doubled.",
    author: "— S. Roy, Consultant"
  },
  {
    quote: "WebGrow360 made the process transparent and fun. Their mobile design is top notch.",
    author: "— A. Das, Startup Founder"
  },
  {
    quote: "They're creative, fast, and always available for support. Highly recommend.",
    author: "— M. Nath, Retail Business Owner"
  }
];

const faqs = [
  {
    q: "How long does a web design project usually take?",
    a: "Most sites launch in under 30 days depending on complexity and feedback. We set clear milestones and keep you updated throughout."
  },
  {
    q: "Will my site be mobile responsive?",
    a: "Every project is built for perfect performance on phones, tablets, and desktops—guaranteed."
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Absolutely! We provide proactive updates, site monitoring, and support long after launch."
  },
  {
    q: "Can you integrate my site with CRM or other tools?",
    a: "Yes. We support seamless connections to popular CRMs, analytics, and marketing platforms."
  }
];

const WebDesigning = () => (
  <div className="bg-gray-50 min-h-screen">
    {/* HERO */}
    <section className="py-16 px-4 text-center">
      <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Web Designing</h1>
      <p className="text-xl sm:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto">
        <span className="text-blue-600 font-medium">Upgrade your brand’s digital storefront</span> with stunning, fast, and conversion-driven web design.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {designImages.map((src, i) => (
          <img key={i} src={src} className="rounded-xl shadow-lg w-48 h-36 object-cover" alt="Web design visual" />
        ))}
      </div>
      <div className="max-w-2xl mx-auto text-gray-600 mb-6">
        <p>
        Is your website letting down your brand or costing you clients? Slow load times, dated layouts, awkward navigation—these frustrate users and hurt sales. <br/> <b>Modern customers expect beautiful, mobile-friendly, easy-to-use sites that inspire trust and drive decisions.</b>
        </p>
      </div>
      <a
        href="/contact"
        className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:shadow-lg duration-200 inline-block"
      >
        Book Free Strategy Session
      </a>
    </section>

    {/* WHY WEB DESIGN */}
    <section className="max-w-4xl mx-auto px-4 mb-12 text-center">
      <h2 className="text-3xl font-bold mb-3 text-gray-800">Why Companies Need Better Web Design</h2>
      <p className="text-lg text-gray-600 mb-4">
        Your website is your first and most important brand impression. It should reflect your unique value, map the ideal customer journey, and guide visitors smoothly from landing to conversion. Without strong design, even the best marketing can’t deliver results.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-gray-600 mt-5">
        <li>⭐ 75% of users judge a business’s credibility by its website.</li>
        <li>⭐ Mobile-users make up more than 60% of site visitors in many industries.</li>
        <li>⭐ Good design increases conversions by up to 200%.</li>
        <li>⭐ Fast load times improve both SEO and user experience.</li>
      </ul>
    </section>

    {/* OFFERINGS */}
    <section className="max-w-7xl mx-auto px-4 mb-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Web Design Solutions</h2>
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
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Web Design Process: Your Journey to a Winning Site</h2>
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
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Client Success Stories</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <svg width="44" height="44" className="mb-3 text-blue-400" fill="none"><circle cx="22" cy="22" r="22" fill="#dbeafe"/><text x="11" y="32" fontFamily="Arial" fontSize="32" fill="#2563eb">“</text></svg>
            <p className="italic text-lg mb-3 text-gray-800 text-center">"{t.quote}"</p>
            <span className="font-medium text-blue-700">{t.author}</span>
          </blockquote>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section className="max-w-5xl mx-auto px-4 mb-24">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">FAQ: All About Web Design</h2>
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
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3">Time to upgrade your digital storefront?</h2>
      <p className="text-lg text-blue-600 mb-6">Book a complimentary web design strategy session with WebGrow360 and start converting more visitors today!</p>
      <a
        href="/contact"
        className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 hover:shadow-lg duration-200 inline-block"
      >
        Book Your Free Strategy Session
      </a>
    </section>
  </div>
);

export default WebDesigning;
