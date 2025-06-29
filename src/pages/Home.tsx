
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Smartphone, Brain, Users, Award, Clock } from "lucide-react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent systems and machine learning solutions for your business.",
    },
  ];

  const stats = [
    { icon: Users, number: "100+", label: "Happy Clients" },
    { icon: Award, number: "150+", label: "Projects Completed" },
    { icon: Clock, number: "5+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-bg hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up" className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Transform Your Ideas Into
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              We are SoftCo Bangladesh, your trusted partner in custom software development, 
              specializing in web applications, mobile apps, and AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link to="/portfolio">
                  View Our Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive software development services to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} data-aos="fade-up" data-aos-delay={index * 200} className="service-card border-2 hover:border-primary/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Button asChild size="lg">
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} data-aos="zoom-in" data-aos-delay={index * 200} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-muted-foreground">
              We've worked with businesses of all sizes across various industries.
            </p>
          </div>

          <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground">Client {i}</span>
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
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help transform your ideas into reality.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
