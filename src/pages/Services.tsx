
import { useEffect } from "react";
import AOS from "aos";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Brain, Globe, Database, Shield, Zap, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const mainServices = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and technologies.",
      features: ["React & Next.js", "Node.js & Express", "Database Integration", "API Development", "Responsive Design"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "iOS Development", "Android Development", "App Store Optimization", "Push Notifications"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Brain,
      title: "AI Implementation",
      description: "Intelligent solutions powered by machine learning and artificial intelligence.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "ChatBot Development"],
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const additionalServices = [
    {
      icon: Globe,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions.",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Efficient database architecture and optimization.",
    },
    {
      icon: Shield,
      title: "Security Audits",
      description: "Comprehensive security assessment and implementation.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed and performance improvements for existing applications.",
    },
    {
      icon: Users,
      title: "Team Augmentation",
      description: "Skilled developers to extend your existing team.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide comprehensive software development services tailored to meet your business needs. 
              From web applications to AI solutions, we have the expertise to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <CardHeader className="p-8 lg:p-12">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mb-6`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl md:text-3xl mb-4">{service.title}</CardTitle>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Button asChild>
                        <Link to="/contact">Get Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </CardHeader>
                    <CardContent className="p-8 lg:p-12 bg-muted/50">
                      <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions to support your entire development journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} data-aos="fade-up" data-aos-delay={index * 100} className="service-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology to ensure project success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
              { step: "03", title: "Development", description: "Building your solution with best practices" },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" },
            ].map((phase, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 200} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">{phase.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project requirements and create something amazing together.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
