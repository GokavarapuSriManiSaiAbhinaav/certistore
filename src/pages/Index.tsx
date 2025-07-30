import { useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import CertificatesSection from '@/components/CertificatesSection';

const Index = () => {
  const certificatesRef = useRef<HTMLElement>(null);

  const scrollToCertificates = () => {
    certificatesRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen">
      <HeroSection onViewCertificates={scrollToCertificates} />
      <CertificatesSection ref={certificatesRef} />
    </div>
  );
};

export default Index;
