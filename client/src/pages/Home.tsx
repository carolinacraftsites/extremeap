import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Medal, Sparkles, Users, Clock } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Trophy,
      name: "Custom Trophies",
      description: "Premium trophies for every achievement and occasion",
      color: "#3070B6"
    },
    {
      icon: Award,
      name: "Plaques & Awards",
      description: "Elegant plaques with professional engraving",
      color: "#C43175"
    },
    {
      icon: Medal,
      name: "Medals & Ribbons",
      description: "Custom medals for competitions and recognition",
      color: "#FAE854"
    },
    {
      icon: Sparkles,
      name: "Personalization",
      description: "Custom engraving on gifts and personal items",
      color: "#60B25D"
    },
    {
      icon: Users,
      name: "Corporate Awards",
      description: "Professional recognition for businesses and teams",
      color: "#52ABBD"
    },
    {
      icon: Clock,
      name: "Quick Turnaround",
      description: "Fast, reliable service when you need it most",
      color: "#D85637"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <img
          src="/attached_assets/generated_images/extreme.png"
          alt="Extreme Awards & Personalization"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-white/90 backdrop-blur-sm text-[#3070B6] hover:bg-white text-base px-6 py-2">
            Arden, North Carolina's Premier Trophy Shop
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Extreme Awards & Personalization
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow">
            Custom Trophies, Plaques, Medals & Engraving Services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white/95 backdrop-blur-sm text-[#3070B6] hover:bg-white text-lg px-8 py-6 shadow-xl">
                Get a Free Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="bg-transparent backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6 shadow-xl">
                View Our Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3070B6]">
            Celebrating Excellence Since Day One
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Extreme Awards & Personalization, we specialize in creating memorable recognition pieces that celebrate achievements, honor milestones, and commemorate special moments. From sports trophies to corporate awards, from personalized gifts to custom engravings, we bring your vision to life with precision and care.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Located in the heart of Arden, North Carolina, we're proud to serve our local community with professional service, competitive pricing, and exceptional craftsmanship.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3070B6]">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to recognize and celebrate success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
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
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button size="lg" className="bg-[#C43175] hover:bg-[#C43175]/90 text-lg px-8">
                View All Products & Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#654A93] to-[#3070B6] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why Choose Extreme Awards?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2 text-[#FAE854]">10+</div>
              <p className="text-xl">Years of Excellence</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-[#B7CC5A]">1000s</div>
              <p className="text-xl">Happy Customers</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-[#60B25D]">100%</div>
              <p className="text-xl">Quality Guaranteed</p>
            </div>
          </div>
          <div className="mt-12 space-y-4">
            <p className="text-lg">
              ✓ Professional Engraving Services
            </p>
            <p className="text-lg">
              ✓ Fast Turnaround Times
            </p>
            <p className="text-lg">
              ✓ Competitive Pricing
            </p>
            <p className="text-lg">
              ✓ Proudly Serving Arden & Western North Carolina
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#C43175] to-[#D85637] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Something Special?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free quote on your custom trophy, plaque, or engraving project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#C43175] hover:bg-gray-100 text-lg px-8 py-6">
                Get Your Free Quote
              </Button>
            </Link>
            <a href="tel:+18285551234">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}