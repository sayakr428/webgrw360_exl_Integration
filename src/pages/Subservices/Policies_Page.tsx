import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Policies_Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Added missing closing brace and dependency array

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          WebGrow360 – Legal Policies Pack
        </h1>

        {/* Privacy Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">1. Privacy Policy</h2>
          <p className="mb-2"><span className="font-bold">Introduction:</span> WebGrow360 respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard information when you use our website and services.</p>
          <p className="mb-2"><span className="font-bold">Information We Collect:</span> We may collect information such as your name, email address, phone number, and business details.</p>
          <p className="mb-2"><span className="font-bold">Use of Information:</span> The collected data is used to provide services, improve offerings, communicate with users, and comply with legal obligations.</p>
          <p className="mb-2"><span className="font-bold">Data Protection:</span> We implement security measures to safeguard your information against unauthorized access or disclosure.</p>
          <p className="mb-2"><span className="font-bold">Contact:</span> For privacy questions, email <a href="mailto:support@webgrow360.online" className="text-blue-500 underline">support@webgrow360.online</a>.</p>
        </section>
        
        {/* Terms & Conditions */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">2. Terms and Conditions</h2>
          <p className="mb-2"><span className="font-bold">Acceptance of Terms:</span> By accessing or using WebGrow360, you agree to these terms.</p>
          <p className="mb-2"><span className="font-bold">Services:</span> We provide AI-powered digital marketing services. The scope may change from time to time.</p>
          <p className="mb-2"><span className="font-bold">User Obligations:</span> Provide accurate information, comply with laws, and do not misuse our platform.</p>
          <p className="mb-2"><span className="font-bold">Limitation of Liability:</span> WebGrow360 is not liable for indirect or consequential damages.</p>
          <p className="mb-2"><span className="font-bold">Governing Law:</span> Governed by the laws of India; disputes to be resolved in Tripura courts.</p>
        </section>

        {/* Service Agreement */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">3. Service Agreement</h2>
          <p className="mb-2"><span className="font-bold">Parties:</span> Between WebGrow360 and the Client.</p>
          <p className="mb-2"><span className="font-bold">Scope:</span> Includes SEO, web development, social media management, etc., as agreed in writing.</p>
          <p className="mb-2"><span className="font-bold">Fees & Payment:</span> Pay per invoice within the agreed timeframe.</p>
          <p className="mb-2"><span className="font-bold">Confidentiality:</span> Both parties keep business information confidential unless required by law.</p>
          <p className="mb-2"><span className="font-bold">Termination:</span> Either party can terminate with written notice; settle outstanding obligations.</p>
        </section>

        {/* NDA */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">4. Non-Disclosure Agreement (NDA)</h2>
          <p className="mb-2"><span className="font-bold">Parties:</span> WebGrow360 and the Receiving Party.</p>
          <p className="mb-2"><span className="font-bold">Confidential Information:</span> Includes business strategies, client data, technical processes, etc.</p>
          <p className="mb-2"><span className="font-bold">Obligations:</span> Do not disclose, copy, or use info except for the business relationship.</p>
          <p className="mb-2"><span className="font-bold">Exclusions:</span> Public or independently developed information is excluded.</p>
          <p className="mb-2"><span className="font-bold">Term:</span> Effective for 2 years from signing unless otherwise agreed.</p>
          <p className="mb-2"><span className="font-bold">Governing Law:</span> The NDA is governed by Indian law.</p>
        </section>

        {/* Refund & Cancellation Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">5. Refund & Cancellation Policy</h2>
          <p className="mb-2"><span className="font-bold">Introduction:</span> Outlines the terms for cancellations and refunds.</p>
          <p className="mb-2"><span className="font-bold">Service Cancellation:</span> Request via written notice. Cancellations within 7 days may be partially refunded depending on usage.</p>
          <p className="mb-2"><span className="font-bold">Non-Refundable Services:</span> Some services are non-refundable after initiation.</p>
          <p className="mb-2"><span className="font-bold">Refund Process:</span> Eligible refunds processed within 7–10 business days via original payment mode.</p>
          <p className="mb-2"><span className="font-bold">Disputes:</span> Subject to Tripura courts, India.</p>
          <p className="mb-2"><span className="font-bold">Contact:</span> For inquiries, email <a href="mailto:support@webgrow360.online" className="text-blue-500 underline">support@webgrow360.online</a>.</p>
        </section>

        {/* Disclaimer Policy */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Disclaimer Policy</h2>
          <p className="mb-2"><span className="font-bold">Introduction:</span> This policy refers to content and info on WebGrow360.</p>
          <p className="mb-2"><span className="font-bold">No Professional Advice:</span> Content is general and not legal/financial advice.</p>
          <p className="mb-2"><span className="font-bold">Accuracy:</span> WebGrow360 does not guarantee completeness/reliability/timeliness.</p>
          <p className="mb-2"><span className="font-bold">External Links:</span> Not responsible for third-party site content or policies.</p>
          <p className="mb-2"><span className="font-bold">Limitation of Liability:</span> Not liable for losses/damages from use of information.</p>
          <p className="mb-2"><span className="font-bold">Contact:</span> Email <a href="mailto:support@webgrow360.online" className="text-blue-500 underline">support@webgrow360.online</a> for questions.</p>
        </section>
      </div>
    </div>
  );
};

export default Policies_Page;