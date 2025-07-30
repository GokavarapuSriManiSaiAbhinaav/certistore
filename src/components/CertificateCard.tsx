import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, Award } from 'lucide-react';
import { Certificate } from './CertificatesSection';

interface CertificateCardProps {
  certificate: Certificate;
  delay?: number;
}

const CertificateCard = ({ certificate, delay = 0 }: CertificateCardProps) => {
  return (
    <div 
      data-aos="zoom-in" 
      data-aos-delay={delay}
      className="group"
    >
      <Card className="glass-card hover:glow-primary transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden border-0">
        <div className="relative">
          {/* Certificate Image/Preview */}
          <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
            {certificate.imageUrl ? (
              <img 
                src={certificate.imageUrl} 
                alt={certificate.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Award className="w-16 h-16 text-primary/60 group-hover:text-primary transition-colors duration-300" />
              </div>
            )}
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Floating action buttons */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <Button 
                size="sm" 
                variant="secondary"
                className="glass rounded-full w-10 h-10 p-0 hover:glow-accent"
              >
                <Eye className="w-4 h-4" />
              </Button>
              {certificate.downloadUrl && (
                <Button 
                  size="sm" 
                  variant="secondary"
                  className="glass rounded-full w-10 h-10 p-0 hover:glow-primary"
                >
                  <Download className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          <CardContent className="p-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                {certificate.title}
              </h3>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-primary font-medium">{certificate.issuer}</span>
                <span className="text-muted-foreground">{certificate.date}</span>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {certificate.description}
              </p>
              
              <div className="flex gap-2 pt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 glass hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View
                </Button>
                {certificate.downloadUrl && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 glass hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default CertificateCard;