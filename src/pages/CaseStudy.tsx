import { useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, TrendingUp, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudy = () => {
  const { projectId } = useParams();

  const projects = [
    {
      id: "bloom-botanicals",
      title: "Bloom Botanicals",
      category: "E-commerce",
      colors: ["#77cebb", "#c1a5b4", "#fee1a3"],
      description: "Natural skincare brand with earthy, calming palette designed to evoke trust and wellness",
      features: ["Product catalog", "Shopping cart", "Brand storytelling"],
      results: "40% increase in conversion rate, 65% boost in time on site",
      challenge: "Bloom Botanicals needed to establish trust and convey their natural, wellness-focused brand identity in a crowded skincare market. Their previous website felt clinical and didn't communicate the organic, nurturing qualities of their products.",
      solution: "We developed a color palette centered around mint teal (#77cebb) to evoke freshness and natural healing, complemented by soft mauve (#c1a5b4) for femininity and warmth, and creamy apricot (#fee1a3) for energy and vitality. The design emphasized organic shapes, breathing room, and earth-inspired textures.",
      impact: [
        { metric: "Conversion Rate", value: "+40%", description: "More visitors became customers" },
        { metric: "Time on Site", value: "+65%", description: "Users engaged longer with content" },
        { metric: "Cart Abandonment", value: "-28%", description: "Smoother checkout experience" }
      ],
      testimonial: {
        quote: "The new website perfectly captures our brand's essence. Customers constantly tell us how calming and trustworthy our site feels.",
        author: "Sarah Mitchell",
        role: "Founder, Bloom Botanicals"
      }
    },
    {
      id: "azure-consulting",
      title: "Azure Consulting",
      category: "Professional Services",
      colors: ["#4a90e2", "#77cebb", "#f8f9fa"],
      description: "Professional consulting firm using trust-building blues with mint accents",
      features: ["Service showcase", "Team profiles", "Client testimonials"],
      results: "3x increase in consultation bookings, improved brand perception",
      challenge: "Azure Consulting struggled with credibility issues as a new firm in a competitive market. Their website looked generic and failed to convey expertise or inspire confidence in potential clients.",
      solution: "We used strategic blues (#4a90e2) to build trust and professionalism, with mint teal accents (#77cebb) to add approachability and freshness. Clean layouts and ample white space reinforced their organized, methodical approach to consulting.",
      impact: [
        { metric: "Consultation Bookings", value: "3x", description: "Tripled lead generation" },
        { metric: "Client Inquiries", value: "+180%", description: "More qualified prospects" },
        { metric: "Brand Recognition", value: "+95%", description: "Increased market awareness" }
      ],
      testimonial: {
        quote: "Our new website positions us as the premium choice in our market. The professional design speaks to our expertise before we even say a word.",
        author: "David Chen",
        role: "Managing Partner, Azure Consulting"
      }
    },
    {
      id: "sunset-cafe",
      title: "Sunset Cafe",
      category: "Restaurant",
      colors: ["#fee1a3", "#ff6b6b", "#c1a5b4"],
      description: "Cozy restaurant using warm, appetite-enhancing colors to create inviting atmosphere",
      features: ["Menu display", "Online reservations", "Event bookings"],
      results: "25% increase in online reservations, higher customer engagement",
      challenge: "Sunset Cafe's previous website failed to convey the warm, welcoming atmosphere of their physical location. Online reservations were low, and the site didn't stimulate appetite or excitement about dining there.",
      solution: "We created a warm, appetite-stimulating palette using creamy apricot (#fee1a3) as the primary color to evoke comfort and appetite, coral (#ff6b6b) for energy and excitement, and soft mauve (#c1a5b4) for sophistication and warmth.",
      impact: [
        { metric: "Online Reservations", value: "+25%", description: "More bookings through website" },
        { metric: "Menu Views", value: "+89%", description: "Increased food interest" },
        { metric: "Event Bookings", value: "+45%", description: "Private dining growth" }
      ],
      testimonial: {
        quote: "The website now matches the cozy feeling of our restaurant. We've seen a significant increase in reservations and event bookings.",
        author: "Maria Rodriguez",
        role: "Owner, Sunset Cafe"
      }
    }
  ];

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/portfolio">
            <Button variant="ghost" className="mb-6 text-mint-teal hover:text-mint-teal-dark">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-mint-teal/10 text-mint-teal text-sm font-medium px-3 py-1 rounded-full">
              {project.category}
            </span>
            <div className="flex space-x-2">
              {project.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border-2 border-white shadow-md"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Color Palette Hero */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-64 rounded-2xl overflow-hidden shadow-xl mb-8">
            <div className="h-full flex">
              {project.colors.map((color, index) => (
                <div
                  key={index}
                  className="flex-1 relative group cursor-pointer transition-all duration-500 hover:flex-grow"
                  style={{ backgroundColor: color }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-mono text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      {color}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-6 w-6 text-mint-teal mr-3" />
                <h2 className="text-2xl font-serif font-bold text-gray-900">The Challenge</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.challenge}
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 text-mint-teal mr-3" />
                <h2 className="text-2xl font-serif font-bold text-gray-900">Our Solution</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-mint-teal mr-3" />
              <h2 className="text-3xl font-serif font-bold text-gray-900">Measurable Impact</h2>
            </div>
            <p className="text-gray-600 text-lg">
              Strategic color choices delivered tangible business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.impact.map((result, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-mint-teal mb-2">
                    {result.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {result.metric}
                  </div>
                  <div className="text-gray-600">
                    {result.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl font-serif text-gray-900 mb-8 leading-relaxed">
            "{project.testimonial.quote}"
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div>
              <div className="font-semibold text-gray-900">{project.testimonial.author}</div>
              <div className="text-gray-600">{project.testimonial.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-mint-teal to-mint-teal-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Ready for similar results?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create a website that delivers measurable impact for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-mint-teal hover:bg-gray-50">
              Start Your Project
            </Button>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-mint-teal">
                View More Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;