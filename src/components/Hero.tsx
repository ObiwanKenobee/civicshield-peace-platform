
import { Shield, Handshake, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to CivicShield
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
          Where Law Enforcement and Communities Build Trust — Together.
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          In a world seeking safety and fairness, CivicShield pioneers a new vision:
          Ethical AI, empowered officers, and engaged citizens — protecting peace side-by-side.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="flex items-center gap-2 text-gray-700">
            <Shield className="h-6 w-6 text-[#9b87f5]" />
            <span>De-escalation before conflict</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Handshake className="h-6 w-6 text-[#9b87f5]" />
            <span>Transparency at every step</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Users className="h-6 w-6 text-[#9b87f5]" />
            <span>Justice that you can see, feel, and trust</span>
          </div>
        </div>

        <Button 
          size="lg"
          className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 text-lg rounded-lg"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;
