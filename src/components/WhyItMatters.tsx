
import { Users, Heart, BarChart4, GlobeCheck } from "lucide-react";

const WhyItMatters = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Why It Matters
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Imagine a city where...
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-6">
              <Heart className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Officers feel respected — and act with empathy</h3>
            <p className="text-gray-600">
              When officers are supported with the right tools and training, they can focus on building meaningful connections with the communities they serve.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-6">
              <Users className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Citizens feel heard — and trust public servants</h3>
            <p className="text-gray-600">
              Through transparency and accountability, we rebuild the foundation of trust between citizens and those sworn to protect them.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mb-6">
              <GlobeCheck className="h-8 w-8 text-[#9b87f5]" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Communities and police innovate together for peace</h3>
            <p className="text-gray-600">
              When collaboration replaces confrontation, we create innovative solutions that work for everyone.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl font-semibold mb-2">CivicShield isn't just possible — it's happening.</p>
          <p className="text-lg text-gray-600">
            And you are part of it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
