import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, Users, Shield, Star, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-green-500/20' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-400">
            <span className="text-white">Elb</span>Fx
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="hover:text-green-300 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('how-to-join')} className="hover:text-green-300 transition-colors">
              How to Join
            </button>
            <button onClick={() => scrollToSection('plans')} className="hover:text-green-300 transition-colors">
              Plans
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-green-300 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-green-300 transition-colors">
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
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-black"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">ElbFx</span> – Professional
            <br />
            <span className="text-green-400">Forex Signals</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Accurate signals, simple process, lifetime access.
          </p>
          <Button 
            onClick={() => scrollToSection('plans')}
            className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-3 text-lg rounded-none border-2 border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
          >
            Choose Your Plan
          </Button>
          
          {/* Animated Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            ].map((item) => (
              <Card key={item.step} className="bg-black/50 border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                    <div className="text-green-400">
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
            ].map((plan) => (
              <Card key={plan.name} className={`relative bg-black/50 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-green-400 shadow-lg shadow-green-500/25' 
                  : 'border-green-500/30 hover:border-green-400/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-black px-4 py-1 text-sm font-bold rounded-full">
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
                    className={`w-full mt-6 font-bold py-3 rounded-none border-2 transition-all duration-300 ${
                      plan.popular
                        ? 'bg-green-500 hover:bg-green-600 text-black border-green-400'
                        : 'bg-transparent hover:bg-green-500/20 text-green-400 border-green-500 hover:border-green-400'
                    }`}
                  >
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Meet <span className="text-green-400">Elbert</span>
            </h2>
            
            <div className="w-32 h-32 bg-green-500/20 rounded-full mx-auto mb-8 flex items-center justify-center border-2 border-green-500/30">
              <TrendingUp size={48} className="text-green-400" />
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
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
            <Button
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-none border-2 border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 w-full sm:w-auto"
            >
              <MessageCircle className="mr-2" />
              WhatsApp
            </Button>
            
            <Button
              onClick={() => window.open(telegramLink, '_blank')}
              className="bg-transparent hover:bg-green-500/20 text-green-400 font-bold px-8 py-4 rounded-none border-2 border-green-500 hover:border-green-400 transition-all duration-300 w-full sm:w-auto"
            >
              <Send className="mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-green-500/20 bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-green-400 mb-4">
            <span className="text-white">Elb</span>Fx
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
