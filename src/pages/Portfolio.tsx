
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useCaseStudies } from "@/hooks/use-sanity";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { data: caseStudies, isLoading, error } = useCaseStudies();

  // Extract unique categories from case studies
  const categories = caseStudies 
    ? ["All", ...new Set(caseStudies.map(cs => cs.category).filter(Boolean))]
    : ["All", "E-commerce", "Professional Services", "Restaurant", "Healthcare", "Agency", "Technology"];

  // Filter case studies based on selected category
  const filteredCaseStudies = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies?.filter(cs => cs.category === selectedCategory);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-mint-teal mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading portfolio...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <p className="text-red-600">Error loading portfolio: {error.message}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mint-mauve opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore how strategic color choices have transformed businesses across industries, 
            creating emotional connections and driving measurable results.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 flex-wrap gap-2">
            <Filter className="h-5 w-5 text-gray-500 mr-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-mint-teal hover:bg-mint-teal-dark text-white"
                    : "border-mint-teal text-mint-teal hover:bg-mint-teal hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCaseStudies && filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((caseStudy, index) => (
                <Link key={caseStudy._id || index} to={`/case-study/${caseStudy.slug?.current}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden cursor-pointer">
                    <div className="h-48 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      {/* Color Palette Display */}
                      {caseStudy.colorPalette && caseStudy.colorPalette.length > 0 ? (
                        <div className="absolute inset-0 flex">
                          {caseStudy.colorPalette.map((colorInfo, colorIndex) => (
                            <div
                              key={colorIndex}
                              className="flex-1 transition-all duration-300 group-hover:scale-105"
                              style={{ backgroundColor: colorInfo.color }}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-mint-teal to-soft-mauve opacity-20" />
                      )}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ExternalLink className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-mint-teal text-xs font-medium px-2 py-1 rounded-full">
                          {caseStudy.category || "Case Study"}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 flex space-x-1">
                        {caseStudy.colorPalette?.map((colorInfo, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="w-4 h-4 rounded-full border-2 border-white shadow-md"
                            style={{ backgroundColor: colorInfo.color }}
                          />
                        ))}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {caseStudy.description}
                      </p>
                      
                      {caseStudy.features && caseStudy.features.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Features:</h4>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {caseStudy.features.slice(0, 3).map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-mint-teal rounded-full"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {caseStudy.results && (
                        <div className="border-t pt-4">
                          <h4 className="font-medium text-gray-900 mb-1 text-sm">Results:</h4>
                          <p className="text-xs text-mint-teal font-medium">
                            {caseStudy.results}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No case studies found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "60%", label: "Average Conversion Increase" },
              { number: "12+", label: "Industries Served" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-mint-teal mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Ready to join our success stories?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let's create a website that not only looks stunning but delivers 
            measurable results for your business through strategic color design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-mint-teal hover:bg-mint-teal-dark text-white">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-mint-teal text-mint-teal hover:bg-mint-teal hover:text-white">
              Request Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
