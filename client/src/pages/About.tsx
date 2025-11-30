import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Clock, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#654A93] to-[#3070B6] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Extreme Awards
          </h1>
          <p className="text-xl md:text-2xl opacity-95">
            Your trusted partner for recognition and personalization
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3070B6]">
                Celebrating Success in Arden, NC
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  For over a decade, Extreme Awards & Personalization has been the go-to destination for custom trophies, awards, and engraving services in Arden and throughout Western North Carolina.
                </p>
                <p>
                  We believe that every achievement deserves to be celebrated with something special. Whether it's a championship trophy, a corporate recognition award, or a personalized gift, we bring craftsmanship and attention to detail to every project.
                </p>
                <p>
                  Our team combines traditional engraving expertise with modern technology to create pieces that truly stand out. From sports leagues and schools to businesses and individuals, we've helped thousands of customers commemorate their most important moments.
                </p>
                <p className="font-semibold text-[#C43175] text-xl">
                  "We don't just make awards – we create lasting memories."
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#3070B6] to-[#52ABBD] rounded-lg shadow-2xl flex items-center justify-center text-white">
                <div className="text-center p-8">
                  <Award className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-xl font-semibold">Owner Photo</p>
                  <p className="text-sm opacity-75 mt-2">Professional Portrait</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#FAE854] to-[#B7CC5A] rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#3070B6]">
            Our Commitment to You
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-[#3070B6]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-[#3070B6]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Quality Craftsmanship</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every piece we create meets our rigorous standards for quality and durability. We stand behind our work with a complete satisfaction guarantee.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-[#C43175]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-[#C43175]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Personal Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  We take time to understand your needs and vision. From concept to completion, we're with you every step of the way.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-[#60B25D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-[#60B25D]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Fast Turnaround</h3>
                <p className="text-gray-600 leading-relaxed">
                  We know your timeline matters. We offer quick turnaround on most orders, with rush services available when you need it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <MapPin className="w-16 h-16 text-[#52ABBD] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3070B6]">
            Proud to Serve Our Community
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Located in beautiful Arden, North Carolina, we're proud to be part of this vibrant community. We've had the honor of creating awards for local schools, sports leagues, businesses, and countless special events throughout Western North Carolina.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When you choose Extreme Awards, you're not just getting a product – you're supporting a local business that cares about this community and the people in it.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#B7CC5A] to-[#60B25D] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Experience You Can Trust</h3>
              <ul className="space-y-3 text-lg">
                <li>✓ Over 10 years in the awards industry</li>
                <li>✓ State-of-the-art engraving equipment</li>
                <li>✓ Extensive product knowledge and expertise</li>
                <li>✓ Professional design assistance available</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Serving Diverse Needs</h3>
              <ul className="space-y-3 text-lg">
                <li>✓ Sports teams and leagues</li>
                <li>✓ Schools and universities</li>
                <li>✓ Corporate and business clients</li>
                <li>✓ Individual customers and families</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#C43175] to-[#D85637] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 opacity-95">
            We'd love to help you create something meaningful. Stop by our shop or reach out today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="bg-white text-[#C43175] hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg shadow-xl transition-all hover:scale-105">
                Contact Us
              </button>
            </a>
            <a href="/services">
              <button className="border-2 border-white text-white hover:bg-white/20 font-semibold text-lg px-8 py-4 rounded-lg shadow-xl transition-all hover:scale-105">
                View Our Services
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}