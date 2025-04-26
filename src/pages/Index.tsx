
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import WhyItMatters from "@/components/WhyItMatters";
import GetInvolved from "@/components/GetInvolved";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CivicShield - Building Trust, Protecting Peace</title>
        <meta name="description" content="CivicShield transforms policing into a civic partnership through ethical AI, community engagement, and innovative technology. Join the movement for better law enforcement." />
        <meta name="keywords" content="ethical policing, police reform, community policing, AI for policing, law enforcement technology, police transparency" />
        <link rel="canonical" href="https://civicshield.org/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="CivicShield - Building Trust, Protecting Peace" />
        <meta property="og:description" content="Where Law Enforcement and Communities Build Trust Together. Innovative technology for ethical policing." />
        <meta property="og:url" content="https://civicshield.org/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CivicShield - Building Trust, Protecting Peace" />
        <meta name="twitter:description" content="Where Law Enforcement and Communities Build Trust Together. Innovative technology for ethical policing." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <WhatWeDo />
        <WhyItMatters />
        <GetInvolved />
        <Footer />
      </div>
    </>
  );
};

export default Index;
