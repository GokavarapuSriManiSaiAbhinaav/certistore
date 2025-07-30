import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { X, Upload } from 'lucide-react';
import { Certificate } from './CertificatesSection';

interface AddCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (certificate: Omit<Certificate, 'id'>) => void;
}

const AddCertificateModal = ({ isOpen, onClose, onAdd }: AddCertificateModalProps) => {
  const [formData, setFormData] = useState({
    title: '',
    issuer: '',
    date: '',
    description: '',
    imageUrl: '',
    downloadUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.issuer || !formData.date || !formData.description) {
      return;
    }
    
    onAdd({
      ...formData,
      imageUrl: formData.imageUrl || undefined,
      downloadUrl: formData.downloadUrl || undefined,
    });
    
    // Reset form
    setFormData({
      title: '',
      issuer: '',
      date: '',
      description: '',
      imageUrl: '',
      downloadUrl: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card border-0 max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-gradient">
              Add New Certificate
            </DialogTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose}
              className="hover:bg-secondary"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-foreground">
                Certificate Title *
              </Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="e.g., AWS Solutions Architect"
                className="glass border-border/50 focus:border-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="issuer" className="text-foreground">
                Issuing Organization *
              </Label>
              <Input
                id="issuer"
                value={formData.issuer}
                onChange={(e) => handleChange('issuer', e.target.value)}
                placeholder="e.g., Amazon Web Services"
                className="glass border-border/50 focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="text-foreground">
              Date Earned *
            </Label>
            <Input
              id="date"
              value={formData.date}
              onChange={(e) => handleChange('date', e.target.value)}
              placeholder="e.g., 2024 or January 2024"
              className="glass border-border/50 focus:border-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-foreground">
              Description *
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Describe what this certification covers and the skills you gained..."
              className="glass border-border/50 focus:border-primary min-h-[100px]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="imageUrl" className="text-foreground">
              Certificate Image URL (Optional)
            </Label>
            <Input
              id="imageUrl"
              value={formData.imageUrl}
              onChange={(e) => handleChange('imageUrl', e.target.value)}
              placeholder="https://example.com/certificate-image.jpg"
              className="glass border-border/50 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="downloadUrl" className="text-foreground">
              Download/Verification URL (Optional)
            </Label>
            <Input
              id="downloadUrl"
              value={formData.downloadUrl}
              onChange={(e) => handleChange('downloadUrl', e.target.value)}
              placeholder="https://example.com/verify-certificate"
              className="glass border-border/50 focus:border-primary"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 glass hover:bg-secondary"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90 glow-primary"
            >
              <Upload className="w-4 h-4 mr-2" />
              Add Certificate
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCertificateModal;