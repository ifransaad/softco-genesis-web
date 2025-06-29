
import { useEffect } from "react";
import AOS from "aos";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Clock, Globe, Heart } from "lucide-react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const teamMembers = [
    {
      name: "Rahul Ahmed",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "10+ years of experience in software development and business strategy.",
    },
    {
      name: "Fatima Khan",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9d9b618?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in full-stack development and system architecture.",
    },
    {
      name: "Sakib Hassan",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Specialized in React, Node.js, and cloud technologies.",
    },
    {
      name: "Nadia Rahman",
      role: "AI Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "PhD in Machine Learning with expertise in NLP and computer vision.",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to transform businesses through technology.",
    },
    {
      year: "2020",
      title: "First Major Project",
      description: "Delivered our first enterprise-level e-commerce platform.",
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew to a team of 10+ skilled developers and designers.",
    },
    {
      year: "2022",
      title: "AI Division Launch",
      description: "Expanded into artificial intelligence and machine learning solutions.",
    },
    {
      year: "2023",
      title: "100+ Projects",
      description: "Successfully completed over 100 projects for clients worldwide.",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Received multiple awards for innovation and client satisfaction.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners in their success.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "We maintain the highest standards in code quality and project delivery.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "We deliver projects on time and provide ongoing support.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "We serve clients worldwide with our remote-first approach.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in every project we deliver.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About SoftCo Bangladesh
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a passionate team of developers, designers, and innovators dedicated to 
              transforming businesses through cutting-edge software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card data-aos="fade-right" className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with innovative software solutions that drive growth, 
                  efficiency, and digital transformation. We believe in making technology 
                  accessible and beneficial for organizations of all sizes.
                </p>
              </CardContent>
            </Card>

            <Card data-aos="fade-left" className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading software development company in Bangladesh and beyond, 
                  known for our technical excellence, innovative solutions, and commitment 
                  to client success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These values guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} data-aos="fade-up" data-aos-delay={index * 100} className="service-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience 
              and a passion for creating exceptional software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} data-aos="fade-up" data-aos-delay={index * 200} className="service-card">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones that have shaped our company and our commitment to excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={index * 200} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card className="border-2 hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <Badge className="mb-2">{milestone.year}</Badge>
                        <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed", icon: Award },
              { number: "100+", label: "Happy Clients", icon: Users },
              { number: "15+", label: "Team Members", icon: Heart },
              { number: "5+", label: "Years Experience", icon: Clock },
            ].map((stat, index) => (
              <div key={index} data-aos="zoom-in" data-aos-delay={index * 200} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
