import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Medal, Star, Gift, Briefcase, Users, Heart, Sparkles, Crown, Target, Zap } from "lucide-react";

export default function Services() {
  const trophiesAndAwards = [
    {
      icon: Trophy,
      name: "Sports Trophies",
      description: "Championship trophies for every sport and competition level",
      color: "#3070B6"
    },
    {
      icon: Award,
      name: "Academic Awards",
      description: "Honor student achievements and scholastic excellence",
      color: "#C43175"
    },
    {
      icon: Star,
      name: "Corporate Recognition",
      description: "Professional awards for employee achievement and milestones",
      color: "#52ABBD"
    },
    {
      icon: Crown,
      name: "Custom Trophies",
      description: "Unique designs tailored to your specific event or occasion",
      color: "#FAE854"
    },
    {
      icon: Medal,
      name: "Medals & Ribbons",
      description: "Premium medals with custom ribbons and engraving",
      color: "#60B25D"
    },
    {
      icon: Target,
      name: "Achievement Plaques",
      description: "Elegant wall plaques for lasting recognition",
      color: "#654A93"
    }
  ];

  const personalizationServices = [
    {
      icon: Gift,
      name: "Gift Engraving",
      description: "Personalize watches, jewelry, and keepsake items",
      color: "#D85637"
    },
    {
      icon: Briefcase,
      name: "Business Items",
      description: "Engrave nameplates, desk accessories, and office gifts",
      color: "#3070B6"
    },
    {
      icon: Heart,
      name: "Special Occasions",
      description: "Wedding, anniversary, and milestone celebration items",
      color: "#C43175"
    },
    {
      icon: Users,
      name: "Team Recognition",
      description: "Bulk orders for teams, clubs, and organizations",
      color: "#B7CC5A"
    },
    {
      icon: Sparkles,
      name: "Custom Designs",
      description: "Bring your unique vision to life with custom engraving",
      color: "#52ABBD"
    },
    {
      icon: Zap,
      name: "Rush Services",
      description: "Express turnaround when you need it fast",
      color: "#FAE854"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#3070B6] to-[#52ABBD] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Products & Services
          </h1>
          <p className="text-xl md:text-2xl opacity-95">
            Quality awards, trophies, and personalization services for every occasion
          </p>
        </div>
      </section>

      {/* Trophies & Awards Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3070B6] flex items-center">
              <Trophy className="mr-3 w-10 h-10" />
              Trophies & Awards
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3070B6] to-[#52ABBD] rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trophiesAndAwards.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200"
                >
                  <CardContent className="p-8">
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: service.color + '20' }}
                    >
                      <Icon className="w-8 h-8" style={{ color: service.color }} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Personalization Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#C43175] flex items-center">
              <Sparkles className="mr-3 w-10 h-10" />
              Personalization & Engraving
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C43175] to-[#D85637] rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalizationServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200"
                >
                  <CardContent className="p-8">
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: service.color + '20' }}
                    >
                      <Icon className="w-8 h-8" style={{ color: service.color }} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#654A93] to-[#3070B6] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Simple Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose Your Product</h3>
              <p className="opacity-90">
                Browse our selection or describe your custom vision
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Customize & Approve</h3>
              <p className="opacity-90">
                Work with us on personalization and design details
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Pick Up or Deliver</h3>
              <p className="opacity-90">
                Receive your finished product with our quality guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Options Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#3070B6]">
            Materials & Customization Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border-2 border-gray-200">
              <h3 className="text-2xl font-semibold mb-4 text-[#3070B6]">Materials</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#60B25D] mr-2 text-xl">•</span>
                  <span>Crystal & Glass Awards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#52ABBD] mr-2 text-xl">•</span>
                  <span>Acrylic & Lucite</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#C43175] mr-2 text-xl">•</span>
                  <span>Wood & Walnut Plaques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D85637] mr-2 text-xl">•</span>
                  <span>Metal Trophies (Gold, Silver, Bronze)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#654A93] mr-2 text-xl">•</span>
                  <span>Marble & Stone</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border-2 border-gray-200">
              <h3 className="text-2xl font-semibold mb-4 text-[#C43175]">Customization</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#FAE854] mr-2 text-xl">•</span>
                  <span>Laser Engraving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#B7CC5A] mr-2 text-xl">•</span>
                  <span>Full Color Printing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#60B25D] mr-2 text-xl">•</span>
                  <span>Custom Logos & Graphics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3070B6] mr-2 text-xl">•</span>
                  <span>Multiple Font Styles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#52ABBD] mr-2 text-xl">•</span>
                  <span>Individual Packaging Available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#C43175] to-[#D85637] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Our team is here to help you find the perfect award or create a custom solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="bg-white text-[#C43175] hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg shadow-xl transition-all hover:scale-105">
                Request a Quote
              </button>
            </a>
            <a href="tel:+18285551234">
              <button className="border-2 border-white text-white hover:bg-white/20 font-semibold text-lg px-8 py-4 rounded-lg shadow-xl transition-all hover:scale-105">
                Call for Questions
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}