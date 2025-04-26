
import {
  ShieldCheck,
  MessageSquare,
  Heart,
  Link,
  BookOpen,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "GuardianLens",
    description: "Real-time AI helping officers and citizens stay calm, safe, and respectful.",
    icon: ShieldCheck,
  },
  {
    title: "CivicPulse",
    description: "Instant community feedback driving transparency and accountability.",
    icon: MessageSquare,
  },
  {
    title: "HeroHealth",
    description: "Prioritizing officer mental health and wellness.",
    icon: Heart,
  },
  {
    title: "JusticeOS",
    description: "Blockchain-protected event logging — tamper-proof, transparent, and fair.",
    icon: Link,
  },
  {
    title: "Shield Academy",
    description: "Immersive VR training that shapes peacemakers, not just law enforcers.",
    icon: BookOpen,
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Reimagining Law Enforcement for the 21st Century
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          CivicShield transforms policing into a civic partnership through:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="h-12 w-12 text-[#9b87f5] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-semibold mb-2">We are more than a platform.</p>
          <p className="text-lg text-gray-600">
            We are the bridge to a future where protection means trust, and justice belongs to everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
