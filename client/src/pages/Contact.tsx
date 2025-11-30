import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#C43175] to-[#D85637] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-white/90 backdrop-blur-sm text-[#C43175] text-base px-6 py-2">
            Free Quotes Available
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl opacity-95">
            We're here to help bring your vision to life
          </p>
        </div>
      </section>

      {/* Main Contact Info */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-8 text-[#3070B6]">
                Contact Information
              </h2>

              {/* Phone Card */}
              <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-[#3070B6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-[#3070B6]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Phone</h3>
                      <a
                        href="tel:+18285551234"
                        className="text-2xl font-bold text-[#3070B6] hover:text-[#52ABBD] transition-colors"
                      >
                        (828) 555-1234
                      </a>
                      <p className="text-gray-600 mt-2">
                        Call us for immediate assistance or questions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-[#C43175]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 text-[#C43175]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Email</h3>
                      <a
                        href="mailto:info@extremeawards.com"
                        className="text-xl font-semibold text-[#C43175] hover:text-[#D85637] transition-colors break-all"
                      >
                        info@extremeawards.com
                      </a>
                      <p className="text-gray-600 mt-2">
                        Send us an email and we'll get back to you promptly
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-[#60B25D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-[#60B25D]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Location</h3>
                      <p className="text-lg font-semibold text-gray-800">
                        Arden, North Carolina
                      </p>
                      <p className="text-gray-600 mt-2">
                        Serving Arden and all of Western North Carolina
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hours Card */}
              <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-[#FAE854]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-[#D85637]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">Business Hours</h3>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex justify-between">
                          <span className="font-medium">Monday - Friday:</span>
                          <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Saturday:</span>
                          <span>10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Sunday:</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Info & Form */}
            <div>
              <div className="bg-gradient-to-br from-[#3070B6] to-[#52ABBD] rounded-lg p-8 text-white mb-8">
                <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-lg mb-6 opacity-95">
                  Contact us today for a free quote on your custom trophy, plaque, or engraving project. We're here to help you create something truly special.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">✓</span>
                    </div>
                    <span className="text-lg">Free design consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">✓</span>
                    </div>
                    <span className="text-lg">Competitive pricing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">✓</span>
                    </div>
                    <span className="text-lg">Quick turnaround available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">✓</span>
                    </div>
                    <span className="text-lg">100% satisfaction guaranteed</span>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#3070B6]">
                    Service Area
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We proudly serve customers throughout Western North Carolina, including:
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-gray-700">
                    <div className="flex items-center">
                      <span className="text-[#60B25D] mr-2">•</span>
                      <span>Arden</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#52ABBD] mr-2">•</span>
                      <span>Asheville</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#C43175] mr-2">•</span>
                      <span>Hendersonville</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#3070B6] mr-2">•</span>
                      <span>Fletcher</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#654A93] mr-2">•</span>
                      <span>Brevard</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#D85637] mr-2">•</span>
                      <span>& Surrounding Areas</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ/Common Questions Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#3070B6]">
            Common Questions
          </h2>
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  How long does it take to complete an order?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Most standard orders are completed within 5-7 business days. Rush services are available for urgent needs, often with same-day or next-day turnaround options.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Do you offer bulk discounts?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! We offer competitive pricing for bulk orders. Contact us with your quantity and requirements for a custom quote.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Can you help with design?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Absolutely! Our team can help you create the perfect design, whether you have a clear vision or need guidance from start to finish.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We accept cash, all major credit cards, and can arrange invoicing for business accounts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#654A93] to-[#3070B6] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Call or email us today to discuss your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18285551234">
              <button className="bg-white text-[#3070B6] hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg shadow-xl transition-all hover:scale-105 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>(828) 555-1234</span>
              </button>
            </a>
            <a href="mailto:info@extremeawards.com">
              <button className="border-2 border-white text-white hover:bg-white/20 font-semibold text-lg px-8 py-4 rounded-lg shadow-xl transition-all hover:scale-105 flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}