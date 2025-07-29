import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const { blogId } = useParams();

  const blogPosts = {
    "color-psychology-web-design": {
      title: "What's Slowing You Down?",
      date: "04 Jul 2024",
      readTime: "5 min read",
      category: "Productivity",
      content: `
        <p class="text-lg text-muted-foreground mb-6">Small inefficiencies compound over time, creating bigger problems that drain your energy and slow your progress. Here's how to identify and eliminate them before they become major roadblocks.</p>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">The Hidden Cost of Small Problems</h2>
        <p class="mb-6">Every day, small friction points accumulate in our workflows. A confusing file structure here, an unclear process there, and suddenly you're spending hours on tasks that should take minutes.</p>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">Common Productivity Killers</h2>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Disorganized digital files and folders</li>
          <li>Unclear communication channels</li>
          <li>Manual processes that could be automated</li>
          <li>Constantly switching between too many tools</li>
          <li>Lack of standardized procedures</li>
        </ul>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">The 5-Minute Rule</h2>
        <p class="mb-6">If something consistently takes longer than expected, spend 5 minutes analyzing why. Often, a small upfront investment in organization or process improvement can save hours down the line.</p>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">Quick Wins</h2>
        <p class="mb-4">Start with these immediate improvements:</p>
        <ol class="list-decimal pl-6 mb-6 space-y-2">
          <li>Create a consistent file naming convention</li>
          <li>Set up email templates for common responses</li>
          <li>Use keyboard shortcuts for frequent actions</li>
          <li>Batch similar tasks together</li>
          <li>Document processes as you do them</li>
        </ol>

        <p class="text-lg font-medium text-foreground">Remember: The goal isn't perfection, it's progress. Small improvements compound into significant time savings.</p>
      `
    },
    "improve-user-work": {
      title: "Ways to Improve How You Work",
      date: "28 Jun 2024", 
      readTime: "5 min read",
      category: "Workflow",
      content: `
        <p class="text-lg text-muted-foreground mb-6">Simple adjustments to your daily workflow can dramatically improve both your productivity and your customers' experience. Here are proven strategies that deliver immediate results.</p>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">Time-Saving Communication</h2>
        <p class="mb-6">Clear communication prevents misunderstandings and reduces back-and-forth emails. Create templates for common scenarios and establish clear expectations upfront.</p>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">Organization Systems</h2>
        <p class="mb-4">A well-organized workspace—both physical and digital—reduces stress and increases efficiency:</p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Use consistent folder structures across all projects</li>
          <li>Implement a clear file naming system</li>
          <li>Keep your desktop and downloads folder clean</li>
          <li>Use project management tools to track progress</li>
        </ul>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">Customer Setup Best Practices</h2>
        <p class="mb-6">The way you onboard new customers sets the tone for the entire relationship. Create a smooth process that makes them feel confident and informed from day one.</p>

        <p class="text-lg font-medium text-foreground">Small changes in how you work can create big improvements in both your efficiency and customer satisfaction.</p>
      `
    },
    "truth-about-admin": {
      title: "Truth That Help You Do Less Admin",
      date: "25 Jun 2024",
      readTime: "5 min read",
      category: "Automation",
      content: `
        <p class="text-lg text-muted-foreground mb-6">Administrative tasks don't have to consume your day. With the right tools and mindset, you can reduce admin work without adding complexity to your life.</p>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">The Admin Trap</h2>
        <p class="mb-6">Many people think more tools equals more efficiency. The truth is, the right tools—used consistently—are far better than many tools used sporadically.</p>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">Everyday Tools That Actually Help</h2>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Calendar scheduling apps that let clients book directly</li>
          <li>Email templates for common responses</li>
          <li>Automated invoice reminders</li>
          <li>Cloud storage with automatic syncing</li>
          <li>Password managers for secure, quick access</li>
        </ul>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">The Keep-It-Simple Approach</h2>
        <p class="mb-6">The best admin solutions are often the simplest ones. Focus on tools that integrate well with what you already use and don't require a steep learning curve.</p>

        <p class="text-lg font-medium text-foreground">Less admin time means more time for the work that truly matters—and the work you actually enjoy.</p>
      `
    },
    "improve-offers": {
      title: "Start Small, Improve Often",
      date: "24 Jun 2024",
      readTime: "3 min read",
      category: "Growth",
      content: `
        <p class="text-lg text-muted-foreground mb-6">Sustainable improvement comes from consistent small changes, not dramatic overhauls. Here's why the incremental approach wins every time.</p>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">The Power of 1% Better</h2>
        <p class="mb-6">Small improvements compound over time. A 1% improvement every day leads to being 37 times better after a year. It's mathematics, not motivation.</p>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">Why Big Changes Fail</h2>
        <p class="mb-6">Major overhauls are disruptive, overwhelming, and often unsustainable. They require perfect conditions and heroic effort—neither of which are reliable long-term.</p>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">The Small Change Strategy</h2>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Pick one thing to improve each week</li>
          <li>Make the change so small it feels almost silly</li>
          <li>Focus on consistency over intensity</li>
          <li>Celebrate small wins to build momentum</li>
        </ul>

        <p class="text-lg font-medium text-foreground">Progress isn't about perfection—it's about direction. Small steps in the right direction beat standing still while planning the perfect leap.</p>
      `
    },
    "business-essentials": {
      title: "Which Business Essentials Run",
      date: "31 mai 2024",
      readTime: "3 min read",
      category: "Business Strategy",
      content: `
        <p class="text-lg text-muted-foreground mb-6">Not all business activities are created equal. Understanding which essentials actually move your business forward helps you focus your energy where it matters most.</p>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">Revenue-Generating Activities</h2>
        <p class="mb-6">These are the activities that directly contribute to your bottom line. Everything else should support these core functions.</p>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">The Essential Few</h2>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Customer acquisition and retention</li>
          <li>Product or service delivery</li>
          <li>Financial management and planning</li>
          <li>Team communication and coordination</li>
        </ul>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">Simple Shifts, Big Impact</h2>
        <p class="mb-6">Often, small changes to how your team works together can free up significant time and improve outcomes across all your essential functions.</p>

        <p class="text-lg font-medium text-foreground">Focus on the essentials, and let everything else serve those priorities.</p>
      `
    },
    "progress-not-perfection": {
      title: "Progress, Not Perfection",
      date: "05 mai 2024",
      readTime: "5 min read",
      category: "Mindset",
      content: `
        <p class="text-lg text-muted-foreground mb-6">Perfectionism is the enemy of progress. Learning to start small, focus on what matters, and fix things as you go is the key to sustainable success.</p>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">The Perfectionism Trap</h2>
        <p class="mb-6">Waiting for the perfect moment, perfect plan, or perfect conditions means never starting. Perfectionism masquerades as high standards but often results in paralysis.</p>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">The Progress Mindset</h2>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Done is better than perfect</li>
          <li>Feedback improves what planning alone cannot</li>
          <li>Small actions create momentum</li>
          <li>Iteration beats ideation</li>
        </ul>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">What Matters Most Right Now</h2>
        <p class="mb-6">Instead of trying to fix everything, identify the one thing that would make the biggest difference and focus there. You can always improve other areas later.</p>

        <h2 class="text-2xl font-serif font-semibold text-foreground mb-4">Start Where You Are</h2>
        <p class="mb-6">You don't need perfect conditions to begin. You need clarity on the next small step and the willingness to take it.</p>

        <p class="text-lg font-medium text-foreground">Progress compounds. Perfection procrastinates. Choose progress.</p>
      `
    }
  };

  const post = blogPosts[blogId as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Blog Post Not Found</h1>
          <Link to="/" className="text-mint-teal hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-mint-teal hover:text-mint-teal/80 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <Card className="border-0 shadow-xl bg-card">
          <CardContent className="p-8 lg:p-12">
            <div className="mb-8">
              <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                <span className="bg-mint-teal/10 text-mint-teal px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                {post.title}
              </h1>
            </div>

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Ready to improve your website's color strategy?
                </h3>
                <Link 
                  to="/contact" 
                  className="inline-block bg-gradient-to-r from-mint-teal to-soft-mauve text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;