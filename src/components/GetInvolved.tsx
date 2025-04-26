
import { Shield, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GetInvolved = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Get Involved
        </h2>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Join the CivicShield movement and help shape the future of community safety and trust.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">For Law Enforcement</h3>
            <p className="text-gray-600 mb-4">
              Empower your teams with the latest training and technology. Transform your department into a model of ethical, effective policing.
            </p>
            <Button 
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              asChild
            >
              <Link to="/get-involved/law-enforcement">Learn More</Link>
            </Button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">For Communities</h3>
            <p className="text-gray-600 mb-4">
              Co-create better safety solutions with us. Ensure your voice is heard in shaping the future of policing in your neighborhood.
            </p>
            <Button 
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50"
              asChild
            >
              <Link to="/get-involved/communities">Learn More</Link>
            </Button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">For Innovators</h3>
            <p className="text-gray-600 mb-4">
              Build the next generation of peace technology. Join our ecosystem of developers creating tools for a safer, more just world.
            </p>
            <Button 
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
              asChild
            >
              <Link to="/get-involved/innovators">Learn More</Link>
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 text-lg"
          >
            Join the CivicShield Movement
          </Button>
          <p className="mt-4 text-gray-600">Protect the future. Together.</p>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
