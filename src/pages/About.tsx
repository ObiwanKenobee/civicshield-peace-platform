
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Shield, Award, Globe, Users } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About CivicShield - Our Mission and Vision</title>
        <meta name="description" content="Learn about CivicShield's mission to transform law enforcement through ethical technology, community engagement, and innovative solutions." />
        <meta name="keywords" content="about civicshield, ethical policing, police reform mission, law enforcement innovation" />
        <link rel="canonical" href="https://civicshield.org/about" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-purple-50 to-white py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
                Building trust between law enforcement and communities through
                ethical technology and genuine partnership.
              </p>
            </div>
          </section>
          
          {/* Our Story */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-6">
                  CivicShield was born from a simple but powerful idea: what if technology could help bridge the divide between law enforcement and the communities they serve?
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Founded in 2023 by a diverse team of technologists, former law enforcement officers, and community advocates, we set out to reimagine policing for the 21st century.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our journey began in Nairobi, Kenya, where we witnessed firsthand the challenges of building trust between citizens and police in rapidly urbanizing environments. What started as a local initiative quickly expanded to cities across Africa, Latin America, and North America.
                </p>
                <p className="text-lg text-gray-700">
                  Today, CivicShield is a global movement dedicated to creating technology that empowers both officers and citizens, making communities safer through transparency, accountability, and true collaboration.
                </p>
              </div>
            </div>
          </section>
          
          {/* Our Values */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-6">
                    <Shield className="h-8 w-8 text-[#9b87f5]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                  <p className="text-gray-600">
                    We believe transparency builds trust. Our solutions are designed with ethics at their core.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-6">
                    <Users className="h-8 w-8 text-[#9b87f5]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Inclusion</h3>
                  <p className="text-gray-600">
                    All voices matter in creating safe communities. We design with and for diverse stakeholders.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-6">
                    <Award className="h-8 w-8 text-[#9b87f5]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p className="text-gray-600">
                    We're committed to building world-class technology that makes a real difference in communities.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-6">
                    <Globe className="h-8 w-8 text-[#9b87f5]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
                  <p className="text-gray-600">
                    We design for diverse contexts, recognizing that safety challenges cross borders.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Team Section - Simplified for now */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
                CivicShield brings together experts from law enforcement, technology, community organizing, and human rights to build solutions that work for everyone.
              </p>
              {/* Team members would go here */}
              <div className="text-center">
                <p className="text-gray-600">
                  Interested in joining our mission? <a href="/careers" className="text-[#9b87f5] hover:underline">View our open positions</a>.
                </p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default About;
