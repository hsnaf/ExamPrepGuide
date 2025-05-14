import Link from "next/link";
import { GraduationCap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-8 border-t border-border mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg text-primary">ExamPrepGuide</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Home
            </Link>
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              About
            </Link>
            <Link href="#faqs" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              FAQs
            </Link>
          </div>
        </div>
        
        <div className="border-t border-border mt-6 pt-6 text-center text-muted-foreground text-sm">
          © {currentYear} ExamPrepGuide. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;