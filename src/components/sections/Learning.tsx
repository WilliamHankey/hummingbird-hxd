import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useArticles } from "@/hooks/use-sanity";
import { format } from "date-fns";

const Learning = () => {
  const { data: articles, isLoading, error } = useArticles();

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Learning Space
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Welcome to our learning space. Read through practical articles on improving customer 
            journeys, websites, and the way things run behind the scenes.
            Start at 1 and end with 6. It's a path to greater success.
          </p>
        </div>

        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mint-teal mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading articles...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-600">Error loading articles. Please try again later.</p>
          </div>
        )}

        {articles && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link key={article._id} to={`/blog/${article.slug.current}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden bg-card">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-mint-teal/20 to-soft-mauve/20 flex items-center justify-center">
                      <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-mint-teal flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{index + 1}</span>
                      </div>
                      {article.image ? (
                        <img 
                          src={article.image} 
                          alt={article.imageAlt || article.title}
                          className="w-full h-full object-cover opacity-50"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-mint-teal/10 to-soft-mauve/10"></div>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3 text-sm text-muted-foreground">
                      <span>{article.publishedAt ? format(new Date(article.publishedAt), 'dd MMM yyyy') : 'Coming soon'}</span>
                      <span>{article.readTime || '5 min read'}</span>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-mint-teal transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {article.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Learning;