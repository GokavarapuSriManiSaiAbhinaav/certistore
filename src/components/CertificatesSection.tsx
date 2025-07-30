import { forwardRef } from 'react';
import CertificateCard from './CertificateCard';

const mockCertificates = [
  {
    id: '1',
    title: 'Advanced React Development',
    issuer: 'Meta',
    date: '2024',
    description: 'Comprehensive certification covering advanced React patterns, hooks, performance optimization, and state management.',
    downloadUrl: '#'
  },
  {
    id: '2',
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    description: 'Professional-level certification demonstrating expertise in designing distributed systems on AWS.',
    downloadUrl: '#'
  },
  {
    id: '3',
    title: 'TypeScript Fundamentals',
    issuer: 'Microsoft',
    date: '2023',
    description: 'Mastery of TypeScript language features, type system, and integration with modern development workflows.',
    downloadUrl: '#'
  },
  {
    id: '4',
    title: 'UI/UX Design Professional',
    issuer: 'Google',
    date: '2023',
    description: 'Comprehensive training in user experience design, interface design principles, and design thinking methodologies.',
    downloadUrl: '#'
  },
  {
    id: '5',
    title: 'Cybersecurity Specialist',
    issuer: 'CompTIA',
    date: '2023',
    description: 'Security+ certification covering network security, compliance, operational security, and threat management.',
    downloadUrl: '#'
  },
  {
    id: '6',
    title: 'Digital Marketing Analytics',
    issuer: 'Google Analytics',
    date: '2022',
    description: 'Advanced certification in digital marketing measurement, data analysis, and marketing optimization strategies.',
    downloadUrl: '#'
  }
];

const CertificatesSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-gradient">
            My Certificates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of my professional achievements and continuous learning journey. 
            Each certification represents dedication to excellence and expertise in cutting-edge technologies.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCertificates.map((certificate, index) => (
            <CertificateCard 
              key={certificate.id} 
              certificate={certificate} 
              delay={index * 100}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
          <div className="glass-card p-8 max-w-2xl mx-auto glow-accent">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">
              Always Learning
            </h3>
            <p className="text-muted-foreground mb-6">
              This collection grows as I continue to expand my skills and knowledge. 
              Follow my journey as I tackle new challenges and earn new certifications.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 glass rounded-full text-sm text-primary">Next: Machine Learning</span>
              <span className="px-4 py-2 glass rounded-full text-sm text-accent">Next: Blockchain</span>
              <span className="px-4 py-2 glass rounded-full text-sm text-primary">Next: DevOps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

CertificatesSection.displayName = 'CertificatesSection';

export default CertificatesSection;