
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-[#9b87f5]" />
          <Link to="/" className="text-xl font-bold text-gray-900">CivicShield</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-gray-700 hover:text-[#9b87f5] transition-colors">About Us</Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-[#9b87f5] transition-colors">How It Works</Link>
          <Link to="/success-stories" className="text-gray-700 hover:text-[#9b87f5] transition-colors">Success Stories</Link>
          <Link to="/resources" className="text-gray-700 hover:text-[#9b87f5] transition-colors">Resources</Link>
          <Link to="/blog" className="text-gray-700 hover:text-[#9b87f5] transition-colors">Innovation Lab</Link>
        </div>
        
        <Button 
          className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
          asChild
        >
          <Link to="/get-involved">Get Involved</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
