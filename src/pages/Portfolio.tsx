
import { useEffect, useState } from "react";
import AOS from "aos";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Food Delivery Mobile App",
      description: "Cross-platform mobile application for food delivery with real-time tracking and payment gateway.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "AI-Powered Chatbot",
      description: "Intelligent customer service chatbot with natural language processing and machine learning capabilities.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      category: "ai",
      technologies: ["Python", "TensorFlow", "OpenAI API", "React"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management platform for hospitals and clinics with patient records and appointment scheduling.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      category: "web",
      technologies: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Learning Management App",
      description: "Mobile learning platform with course management, video streaming, and progress tracking.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      category: "mobile",
      technologies: ["Flutter", "Firebase", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Predictive Analytics Dashboard",
      description: "Business intelligence dashboard with machine learning models for sales forecasting and trend analysis.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "ai",
      technologies: ["Python", "Scikit-learn", "D3.js", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Development" },
    { key: "mobile", label: "Mobile Apps" },
    { key: "ai", label: "AI Solutions" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our successful projects and see how we've helped businesses 
              transform their ideas into powerful digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={filter === category.key ? "default" : "outline"}
                onClick={() => setFilter(category.key)}
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                className="portfolio-item group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="portfolio-overlay absolute inset-0 bg-black/80 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "100+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "15+", label: "Team Members" },
            ].map((stat, index) => (
              <div key={index} data-aos="zoom-in" data-aos-delay={index * 200} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create something amazing together. Contact us to discuss your requirements.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="/contact">Get Started Today</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
