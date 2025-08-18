import { useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ExternalLink, TrendingUp, Users, Target, Clock, Palette, Eye, MousePointer, Heart, Lightbulb, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useCaseStudy } from "@/hooks/use-sanity";

const CaseStudy = () => {
  const { projectId } = useParams();
  const { data: caseStudy, isLoading, error } = useCaseStudy(projectId || "");

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case "TrendingUp": return TrendingUp;
      case "Clock": return Clock;
      case "CheckCircle": return CheckCircle;
      case "Heart": return Heart;
      case "MousePointer": return MousePointer;
      case "Eye": return Eye;
      case "Users": return Users;
      case "Target": return Target;
      default: return TrendingUp;
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-mint-teal mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading case study...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <p className="text-red-600">Error loading case study: {error.message}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/portfolio">
            <Button variant="ghost" className="mb-6 text-mint-teal hover:text-mint-teal-dark">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge variant="secondary" className="bg-mint-teal/10 text-mint-teal border-mint-teal/20">
                  {caseStudy.category}
                </Badge>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{caseStudy.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>{caseStudy.team}</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {caseStudy.overview || caseStudy.description}
              </p>
              
              {caseStudy.problemStatement && (
                <div className="bg-gradient-to-r from-mint-teal/5 to-soft-mauve/5 p-6 rounded-xl border-l-4 border-mint-teal">
                  <h3 className="font-semibold text-gray-900 mb-2">Design Challenge</h3>
                  <p className="text-gray-700 italic">"{caseStudy.problemStatement}"</p>
                </div>
              )}
            </div>
            
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Project Details</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-500">Duration:</span>
                      <span className="ml-2 font-medium">{caseStudy.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Team:</span>
                      <span className="ml-2 font-medium">{caseStudy.team}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Platforms:</span>
                      <span className="ml-2 font-medium">{caseStudy.platforms}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Colour Palette</h4>
                    <div className="flex space-x-2 mb-3">
                      {caseStudy.colorPalette?.map((colorInfo, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-lg border-2 border-white shadow-md"
                          style={{ 
                            backgroundColor: colorInfo.color || '#cccccc',
                            border: '1px solid #e5e7eb'
                          }}
                          title={colorInfo.color || 'No color specified'}
                        />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      {caseStudy.colorPalette?.map((colorInfo, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ 
                              backgroundColor: colorInfo.color || '#cccccc',
                              border: '1px solid #e5e7eb'
                            }}
                          />
                          <span className="font-medium">{colorInfo.name || 'Unnamed Color'}:</span>
                          <span>{colorInfo.psychology || 'No description'}</span>
                        </div>
                      ))}
                    </div>
                    {(!caseStudy.colorPalette || caseStudy.colorPalette.length === 0) && (
                      <p className="text-xs text-gray-400 italic">No color palette data available</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Mockup Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block">
            <div className="w-full max-w-4xl mx-auto">
              <div className="relative">
                <img 
                  src="/assets/desktop-mockup.svg" 
                  alt="Desktop mockup"
                  className="w-full h-auto"
                />
                {/* Case Study Image Overlay on Screen */}
                {caseStudy.image && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-4/5 h-3/5 max-w-3xl">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.imageAlt || caseStudy.title}
                        className="w-full h-full object-cover rounded-lg"
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '80%',
                          height: '70%',
                          objectFit: 'cover',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <Button className="bg-mint-teal text-white hover:bg-mint-teal-dark">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Explore Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Research & Personas */}
      {caseStudy.userPersonas && caseStudy.userPersonas.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">User Research</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Understanding our users' motivations and pain points guided every design decision.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudy.userPersonas.map((persona, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{persona.name}</h3>
                    <p className="text-mint-teal font-medium mb-4">Age: {persona.age}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                          <Target className="h-4 w-4 mr-2 text-mint-teal" />
                          Goals
                        </h4>
                        <p className="text-sm text-gray-600">{persona.goals}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-soft-mauve" />
                          Pain Points
                        </h4>
                        <p className="text-sm text-gray-600">{persona.painPoints}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                          <MousePointer className="h-4 w-4 mr-2 text-creamy-apricot" />
                          Behavior
                        </h4>
                        <p className="text-sm text-gray-600">{persona.behavior}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Design Process */}
      {caseStudy.designProcess && caseStudy.designProcess.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Design Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A structured approach ensuring user needs drive every design decision.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.designProcess.map((phase, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-mint-teal text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <CardContent className="p-6 pt-8">
                    <h3 className="font-semibold text-gray-900 mb-2">{phase.phase}</h3>
                    <p className="text-sm text-mint-teal font-medium mb-3">{phase.duration}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-gray-700 mb-2">Activities:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {phase.activities?.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-mint-teal rounded-full"></div>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="text-xs font-medium text-gray-700 mb-1">Key Insight:</h4>
                      <p className="text-xs text-gray-600 italic">"{phase.insights}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenge & Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-6 w-6 text-mint-teal mr-3" />
                <h2 className="text-2xl font-serif font-bold text-gray-900">The Challenge</h2>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {caseStudy.challenge}
                </p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <Lightbulb className="h-6 w-6 text-mint-teal mr-3" />
                <h2 className="text-2xl font-serif font-bold text-gray-900">Our Solution</h2>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {caseStudy.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      {caseStudy.keyInsights && caseStudy.keyInsights.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Key Insights</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Research-backed insights that shaped our design decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.keyInsights.map((insight, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-mint-teal/5 to-soft-mauve/5">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-mint-teal text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{insight}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      {caseStudy.measurableImpact && caseStudy.measurableImpact.length > 0 && (
        <section className="py-16 bg-white">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.measurableImpact.map((result, index) => {
                const IconComponent = getIcon(result.icon || "TrendingUp");
                return (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-mint-teal/10 rounded-full flex items-center justify-center group-hover:bg-mint-teal/20 transition-colors">
                          <IconComponent className="h-6 w-6 text-mint-teal" />
                        </div>
                      </div>
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
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Lessons Learned & Next Steps */}
      {(caseStudy.lessonsLearned || caseStudy.nextSteps) && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {caseStudy.lessonsLearned && caseStudy.lessonsLearned.length > 0 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                    <Lightbulb className="h-6 w-6 text-mint-teal mr-3" />
                    Lessons Learned
                  </h2>
                  <div className="space-y-4">
                    {caseStudy.lessonsLearned.map((lesson, index) => (
                      <Card key={index} className="border-0 shadow-md">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-mint-teal mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700">{lesson}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
              
              {caseStudy.nextSteps && caseStudy.nextSteps.length > 0 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                    <Target className="h-6 w-6 text-mint-teal mr-3" />
                    Next Steps
                  </h2>
                  <div className="space-y-4">
                    {caseStudy.nextSteps.map((step, index) => (
                      <Card key={index} className="border-0 shadow-md">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-mint-teal text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <p className="text-gray-700">{step}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {caseStudy.clientFeedback && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-mint-teal/5 to-soft-mauve/5">
              <CardContent className="p-12 text-center">
                <blockquote className="text-2xl font-serif text-gray-900 mb-8 leading-relaxed">
                  "{caseStudy.clientFeedback.quote}"
                </blockquote>
                {caseStudy.clientFeedback.details && (
                  <p className="text-gray-600 mb-6 italic">
                    {caseStudy.clientFeedback.details}
                  </p>
                )}
                <div className="flex items-center justify-center space-x-4">
                  <div>
                    <div className="font-semibold text-gray-900">{caseStudy.clientFeedback.author}</div>
                    <div className="text-gray-600">{caseStudy.clientFeedback.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-mint-teal to-mint-teal-dark text-white">
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