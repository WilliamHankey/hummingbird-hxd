
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Monitor, Lightbulb, Zap } from "lucide-react";
import { useServices } from "@/hooks/use-sanity";

const Services = () => {
  const { data: services, isLoading, error } = useServices();

  // Icon mapping for dynamic icons
  const iconMap = {
    Monitor,
    Palette,
    Lightbulb,
    Zap
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            What we do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We help small businesses work smarter and show up better online. 
          From websites to workflows to AI tools, we make things simpler for you 
          and smoother for your customers.
          </p>
        </div>

        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mint-teal mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading services...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-600">Error loading services. Please try again later.</p>
          </div>
        )}

        {services && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Monitor;
              return (
                <Card key={service._id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 ${
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
                    <CardTitle className="text-xl font-serif font-semibold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
