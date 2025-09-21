import { useState, useEffect, useRef } from 'react';
import { Menu, X, TrendingUp, Users, Shield, Star, MessageCircle, Send, BarChart3, DollarSign, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import './styles.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const whatsappLink = "https://wa.me/6281362097651";
  const telegramLink = "https://t.me/Elbertkentz";

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-black to-green-800/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-green-400/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/2 w-48 h-48 bg-green-600/4 rounded-full blur-xl animate-pulse delay-2000"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-green-500/30 shadow-lg shadow-green-500/10' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-400 transform hover:scale-105 transition-transform duration-300">
            <span className="text-white glow-text">Elb</span><span className="glow-text-green">Fx</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="hover:text-green-300 transition-all duration-300 hover:scale-110 hover:glow-text-green">
              Home
            </button>
            <button onClick={() => scrollToSection('how-to-join')} className="hover:text-green-300 transition-all duration-300 hover:scale-110 hover:glow-text-green">
              How to Join
            </button>
            <button onClick={() => scrollToSection('plans')} className="hover:text-green-300 transition-all duration-300 hover:scale-110 hover:glow-text-green">
              Plans
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-green-300 transition-all duration-300 hover:scale-110 hover:glow-text-green">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-green-300 transition-all duration-300 hover:scale-110 hover:glow-text-green">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-green-500/20">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left hover:text-green-300 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('how-to-join')} className="block w-full text-left hover:text-green-300 transition-colors">
                How to Join
              </button>
              <button onClick={() => scrollToSection('plans')} className="block w-full text-left hover:text-green-300 transition-colors">
                Plans
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-green-300 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-green-300 transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-black to-green-800/20"></div>
        
        {/* Trading Chart Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-64 h-32">
            <div className="w-full h-full relative">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-green-400 opacity-60 animate-pulse"
                  style={{
                    left: `${(i * 8)}%`,
                    bottom: 0,
                    width: '4px',
                    height: `${20 + Math.sin(i * 0.8) * 40}px`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transform transition-all duration-1000 ${
            visibleSections.includes('hero') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="text-white glow-text animate-pulse">ElbFx</span> – Professional
            <br />
            <span className="text-green-400 glow-text-green animate-pulse delay-300">Forex Signals</span>
          </h1>
          <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${
            visibleSections.includes('hero') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Accurate signals, simple process, lifetime access.
          </p>
          <Button 
            onClick={() => scrollToSection('plans')}
            className={`bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-3 text-lg rounded-none border-2 border-green-400 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-110 hover:-translate-y-1 transform ${
              visibleSections.includes('hero') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ animationDelay: '600ms' }}
          >
            <Target className="mr-2 animate-spin" />
            Choose Your Plan
          </Button>
          
          {/* Floating Stats */}
          <div className="absolute top-20 left-10 hidden lg:block">
            <div className="bg-black/80 border border-green-500/30 rounded-lg p-4 backdrop-blur-sm animate-bounce">
              <div className="text-green-400 text-sm">Success Rate</div>
              <div className="text-white text-2xl font-bold">89.5%</div>
            </div>
          </div>
          
          <div className="absolute bottom-32 right-10 hidden lg:block">
            <div className="bg-black/80 border border-green-500/30 rounded-lg p-4 backdrop-blur-sm animate-bounce delay-1000">
              <div className="text-green-400 text-sm">Active Traders</div>
              <div className="text-white text-2xl font-bold">2,500+</div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section id="how-to-join" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            How to <span className="text-green-400">Join</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Choose a Plan", desc: "Select from Beginner, Pro, or Premium", icon: <Star /> },
              { step: 2, title: "Contact Admin", desc: "Reach out via WhatsApp or Telegram", icon: <MessageCircle /> },
              { step: 3, title: "Make Payment", desc: "Pay for Pro or Premium plans", icon: <Shield /> },
              { step: 4, title: "Get Access", desc: "Join our private signal channels", icon: <Users /> }
            ].map((item, index) => (
              <Card key={item.step} className={`bg-black/50 border-green-500/30 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 transform ${
                visibleSections.includes('how-to-join') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`} style={{ animationDelay: `${index * 200}ms` }}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30 hover:bg-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-110 hover:rotate-12">
                    <div className="text-green-400 animate-pulse">
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-green-400 mb-2">
                    Step {item.step}
                  </div>
                  <CardTitle className="text-white text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">
                    {item.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans & Pricing Section */}
      <section id="plans" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Plans & <span className="text-green-400">Pricing</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Beginner",
                price: "Free",
                signals: "4 signals per week",
                features: ["Basic forex signals", "Community support", "Educational content"],
                popular: false
              },
              {
                name: "Pro",
                price: "Rp 300,000",
                priceNote: "lifetime",
                signals: "3 signals per day",
                features: ["Daily forex signals", "Priority support", "Market analysis", "Risk management tips"],
                popular: true
              },
              {
                name: "Premium",
                price: "Rp 559,000",
                priceNote: "lifetime",
                signals: "8 signals per day",
                features: ["Multiple daily signals", "VIP support", "Advanced strategies", "1-on-1 guidance", "Market insights"],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={plan.name} className={`relative bg-black/50 border-2 transition-all duration-500 hover:scale-110 hover:-translate-y-2 transform ${
                plan.popular 
                  ? 'border-green-400 shadow-xl shadow-green-500/40 animate-pulse' 
                  : 'border-green-500/30 hover:border-green-400/50 hover:shadow-xl hover:shadow-green-500/20'
              } ${
                visibleSections.includes('plans') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`} style={{ animationDelay: `${index * 200}ms` }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-black px-4 py-1 text-sm font-bold rounded-full animate-bounce shadow-lg shadow-green-500/50">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    {plan.price}
                  </div>
                  {plan.priceNote && (
                    <div className="text-gray-400 text-sm">{plan.priceNote}</div>
                  )}
                  <div className="text-green-300 font-semibold mt-2">
                    {plan.signals}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  
                  <Button 
                    onClick={() => window.open(whatsappLink, '_blank')}
                    className={`w-full mt-6 font-bold py-3 rounded-none border-2 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-xl ${
                      plan.popular
                        ? 'bg-green-500 hover:bg-green-600 text-black border-green-400 hover:shadow-green-500/50'
                        : 'bg-transparent hover:bg-green-500/20 text-green-400 border-green-500 hover:border-green-400 hover:shadow-green-500/30'
                    }`}
                  >
                    <MessageCircle className="mr-2 animate-pulse" />
                    Contact Admin to Join
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
            visibleSections.includes('about') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Meet <span className="text-green-400">Elbert</span>
            </h2>
            
            <div className="w-32 h-32 bg-green-500/20 rounded-full mx-auto mb-8 flex items-center justify-center border-2 border-green-500/30 hover:border-green-400/50 transition-all duration-500 hover:scale-110 hover:rotate-12 hover:bg-green-500/30">
              <TrendingUp size={48} className="text-green-400 animate-pulse" />
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm Elbert, a 13-year-old trader passionate about forex, technology, and the financial markets. 
              Beyond trading, I'm also a digital entrepreneur and software developer. With ElbFx, my mission 
              is to provide clear, actionable signals to help traders of all levels achieve their financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            Ready to <span className="text-green-400">Start Trading?</span>
          </h2>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto transform transition-all duration-1000 ${
            visibleSections.includes('contact') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <Button
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-none border-2 border-green-400 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-110 hover:-translate-y-2 w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 animate-bounce" />
              WhatsApp
            </Button>
            
            <Button
              onClick={() => window.open(telegramLink, '_blank')}
              className="bg-transparent hover:bg-green-500/20 text-green-400 font-bold px-8 py-4 rounded-none border-2 border-green-500 hover:border-green-400 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/30 hover:scale-110 hover:-translate-y-2 w-full sm:w-auto"
            >
              <Send className="mr-2 animate-bounce delay-200" />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-green-500/20 bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-green-400 mb-4 hover:scale-110 transition-transform duration-300">
            <span className="text-white glow-text">Elb</span><span className="glow-text-green">Fx</span>
          </div>
          <p className="text-gray-400 mb-2">© 2025 ElbFx. All rights reserved.</p>
          <p className="text-sm text-gray-500">
            <strong>Disclaimer:</strong> Trading forex involves risk. Signals are for educational purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
}
