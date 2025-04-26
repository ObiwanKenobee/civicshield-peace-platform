
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { 
  ShieldCheck, 
  MessageSquare, 
  Heart, 
  Link,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How CivicShield Works | Innovative Policing Solutions</title>
        <meta name="description" content="Discover how CivicShield's technology platform transforms policing through AI assistance, community feedback, blockchain verification, and immersive training." />
        <meta name="keywords" content="ethical AI policing, police technology, community feedback system, blockchain for law enforcement, police VR training" />
        <link rel="canonical" href="https://civicshield.org/how-it-works" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-purple-50 to-white py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                How CivicShield Works
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
                Our integrated platform transforms policing into a true civic partnership.
              </p>
            </div>
          </section>
          
          {/* Platform Overview */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold text-center mb-12">Our Integrated Solution</h2>
              
              {/* GuardianLens */}
              <div className="mb-20">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center">
                      <ShieldCheck className="h-16 w-16 text-[#9b87f5]" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-3">GuardianLens</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Real-time AI helping officers and citizens stay calm, safe, and respectful during interactions.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                      <li>AI-assisted de-escalation guidance through officer devices</li>
                      <li>Real-time translation capabilities for diverse communities</li>
                      <li>Emotion detection alerts to help maintain professional interactions</li>
                      <li>Privacy-first design with transparent recording policies</li>
                    </ul>
                    <Button variant="link" className="text-[#9b87f5] p-0 flex items-center">
                      Learn more about GuardianLens
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* CivicPulse */}
              <div className="mb-20">
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-8">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-16 w-16 text-[#9b87f5]" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-3">CivicPulse</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Instant community feedback driving transparency and accountability.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                      <li>Simple feedback system for every police interaction</li>
                      <li>Anonymous reporting options for sensitive situations</li>
                      <li>Data analytics dashboard for departments to identify trends</li>
                      <li>Public-facing metrics showing community satisfaction levels</li>
                    </ul>
                    <Button variant="link" className="text-[#9b87f5] p-0 flex items-center">
                      Learn more about CivicPulse
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* HeroHealth */}
              <div className="mb-20">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center">
                      <Heart className="h-16 w-16 text-[#9b87f5]" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-3">HeroHealth</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Prioritizing officer mental health and wellness.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                      <li>Stress monitoring and early intervention systems</li>
                      <li>Access to mental health resources and confidential support</li>
                      <li>Trauma-informed care after critical incidents</li>
                      <li>Work-life balance tools and resources</li>
                    </ul>
                    <Button variant="link" className="text-[#9b87f5] p-0 flex items-center">
                      Learn more about HeroHealth
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* JusticeOS */}
              <div className="mb-20">
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-8">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center">
                      <Link className="h-16 w-16 text-[#9b87f5]" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-3">JusticeOS</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Blockchain-protected event logging — tamper-proof, transparent, and fair.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                      <li>Immutable record of police interactions and evidence</li>
                      <li>Cryptographically secured chain of custody</li>
                      <li>Transparent audit trails for oversight bodies</li>
                      <li>Privacy-preserving access controls for sensitive data</li>
                    </ul>
                    <Button variant="link" className="text-[#9b87f5] p-0 flex items-center">
                      Learn more about JusticeOS
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Shield Academy */}
              <div className="mb-12">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center">
                      <BookOpen className="h-16 w-16 text-[#9b87f5]" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-3">Shield Academy</h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Immersive VR training that shapes peacemakers, not just law enforcers.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                      <li>Realistic de-escalation scenarios in virtual reality</li>
                      <li>Culture and bias training for diverse communities</li>
                      <li>Performance analytics to identify training needs</li>
                      <li>Regular certification and skill refreshers</li>
                    </ul>
                    <Button variant="link" className="text-[#9b87f5] p-0 flex items-center">
                      Learn more about Shield Academy
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Integration Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center max-w-3xl">
              <h2 className="text-3xl font-bold mb-6">All Systems Working Together</h2>
              <p className="text-lg text-gray-700 mb-8">
                What makes CivicShield unique is how our technologies integrate to create a comprehensive ecosystem for police-community trust building.
              </p>
              <Button 
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
              >
                Request a Demo
              </Button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default HowItWorks;
