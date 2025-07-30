import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = ({ onViewCertificates }: { onViewCertificates: () => void }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(138, 90, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(138, 90, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Main Content */}
      <div className="glass-card p-12 max-w-4xl mx-auto text-center relative z-10 glow-primary">
        <div data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-6 text-gradient">
            Alex Chen
          </h1>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="200">
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Digital Creator & Certified Professional
          </p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="300">
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Showcasing my journey through professional certifications and achievements. 
            Each certificate represents a milestone in my continuous learning path.
          </p>
        </div>
        
        <div data-aos="zoom-in" data-aos-delay="400">
          <Button 
            onClick={onViewCertificates}
            size="lg"
            className="px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 glow-primary transition-all duration-300 hover:scale-105 rounded-full"
          >
            View My Certificates
            <span className="ml-2 animate-pulse">✨</span>
          </Button>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;