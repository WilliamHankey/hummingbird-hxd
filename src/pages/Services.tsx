
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Monitor, Palette, Lightbulb, Zap, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Website Design",
      description: "Complete custom website design and development.",
      features: [
        "Custom design tailored to your brand",
        "Mobile-ready and user-friendly layouts", 
        "Engaging copy written for clarity and trust",
        "SEO foundations to help you get found",
        "Easy integrations (e.g. bookings, forms, payments)",
        "Basic on-site analytics setup"
      ],
      price: "Starting at R5,750",
      color: "mint-teal"
    },
    {
      icon: Palette,
      title: "Service Design",
      description: "Smarter ways of working, shaped around your customers and goals.",
      features: [
        "Look at how your business runs day to day",
        "Review how customers experience your service",
        "Find what's causing delays or confusion",
        "Suggest ways of doing things",
        "Prioritise what to fix first",
        "Get a simple plan you can act onCompetitor analysis"
      ],
      price: "Starting at R20,000 p/m",
      color: "soft-mauve"
    },
    {
      icon: Lightbulb,
      title: "Digital Integration",
      description: "Simple tools and smooth systems to support how you work.",
      features: [
        "Review your current tools",
        "Recommend better-fit options",
        "Prioritise what matters most",
        "Turn scattered tools into a smooth system",
        "Help with setup and integration",
        "Support through the change"
      ],
      price: "Starting at R15,000 p/m",
      color: "creamy-apricot"
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Use AI in practical ways to save time and do more with less",
      features: [
        "Look at how your business runs day to day",
        "Identify bottlenecks and frustrations",
        "Formulate practical ways to use AI day to day",
        "Help with setup and first use",
        "Support to build your confidence"
      ],
      price: "Starting at R15,000",
      color: "mint-teal"
    }
  ];

  const packages = [
    {
      name: "Essential",
      price: "$3,500",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page Wix website",
        "Basic color strategy",
        "Mobile responsive design",
        "SEO optimization",
        "1 month support"
      ]
    },
    {
      name: "Professional",
      price: "$6,500", 
      description: "Ideal for growing businesses",
      features: [
        "10-page Wix website",
        "Comprehensive color strategy",
        "Custom brand elements",
        "E-commerce integration",
        "Advanced SEO",
        "3 months support"
      ],
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large businesses with complex needs",
      features: [
        "Unlimited pages",
        "Full brand identity",
        "Custom integrations",
        "Multi-language support",
        "Advanced analytics",
        "6 months support"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mint-mauve opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From color strategy to complete website design, we offer comprehensive 
            services to help your brand make a lasting impression through the power of color.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                      service.color === 'mint-teal' ? 'bg-mint-teal/10' :
                      service.color === 'soft-mauve' ? 'bg-soft-mauve/10' :
                      'bg-creamy-apricot/10'
                    }`}>
                      <Icon className={`h-8 w-8 ${
                        service.color === 'mint-teal' ? 'text-mint-teal' :
                        service.color === 'soft-mauve' ? 'text-soft-mauve' :
                        service.color === 'creamy-apricot' ? 'text-yellow-600' :
                        'text-mint-teal'
                      }`} />
                    </div>
                    <CardTitle className="text-2xl font-serif font-semibold">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                    <div className="text-2xl font-bold text-mint-teal mt-2">
                      {service.price}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="h-5 w-5 text-mint-teal flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-mint-teal hover:bg-mint-teal-dark text-white group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Complete Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a comprehensive package that combines multiple services 
              for maximum impact and value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-lg hover:shadow-xl transition-shadow ${
                  pkg.featured ? 'ring-2 ring-mint-teal' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-mint-teal text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-serif font-semibold">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-mint-teal mt-4">
                    {pkg.price}
                  </div>
                  <CardDescription className="text-gray-600 mt-2">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-mint-teal flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full group ${
                      pkg.featured 
                        ? 'bg-mint-teal hover:bg-mint-teal-dark text-white' 
                        : 'border-mint-teal text-mint-teal hover:bg-mint-teal hover:text-white'
                    }`}
                    variant={pkg.featured ? 'default' : 'outline'}
                  >
                    Choose Plan
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures every project delivers 
              exceptional results through strategic color implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your brand, audience, and goals through detailed consultation."
              },
              {
                step: "02", 
                title: "Strategy",
                description: "Developing color psychology insights and strategic recommendations."
              },
              {
                step: "03",
                title: "Design",
                description: "Creating beautiful, functional designs that implement our color strategy."
              },
              {
                step: "04",
                title: "Launch",
                description: "Testing, refining, and launching your new website with ongoing support."
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 gradient-mint-mauve rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let's discuss your project and create a custom solution that perfectly 
            fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-mint-teal hover:bg-mint-teal-dark text-white">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
