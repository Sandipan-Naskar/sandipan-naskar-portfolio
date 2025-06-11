
import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-portfolio-primary">
              Sandipan Naskar
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Education', 'Experience', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-portfolio-primary transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-portfolio-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                {['Home', 'About', 'Education', 'Experience', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-portfolio-primary transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-portfolio-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{' '}
                <span className="text-portfolio-primary">Sandipan Naskar</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Aspiring developer building modern web experiences and Python mini-projects.
              </p>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Constantly seeking to engage my knowledge to learn something useful and keep challenging myself to be a better performer in accordance to the company's requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white px-8 py-3"
                  onClick={() => scrollToSection('portfolio')}
                >
                  View Portfolio
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white px-8 py-3"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-full flex items-center justify-center text-white text-8xl font-bold">
                  SN
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-portfolio-secondary rounded-full opacity-20"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-portfolio-primary rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about my background and interests
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-full flex items-center justify-center text-white text-6xl font-bold mb-8">
                SN
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Constantly seeking to engage my knowledge to learn something useful and keep challenging myself to be a better performer in accordance to the company's requirements.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600">Kolkata, India</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                  <p className="text-gray-600">English, Bengali, Hindi</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Interests</h4>
                <p className="text-gray-600">Playing cricket and football, listening to music</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600">My academic journey</p>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-portfolio-primary">
              <CardHeader>
                <CardTitle className="text-xl">Heritage Institute of Technology</CardTitle>
                <CardDescription className="text-lg">B.Tech in Computer Science and Engineering</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">2021 – 2025</p>
                  <Badge variant="secondary" className="bg-portfolio-primary/10 text-portfolio-primary">
                    CGPA: 7.71
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-portfolio-secondary">
              <CardHeader>
                <CardTitle className="text-xl">EL-Bethel School</CardTitle>
                <CardDescription className="text-lg">Higher Secondary Education</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">ISC – 2021</p>
                    <Badge variant="secondary" className="bg-portfolio-secondary/10 text-portfolio-secondary">
                      81.33%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">ICSE – 2019</p>
                    <Badge variant="secondary" className="bg-portfolio-secondary/10 text-portfolio-secondary">
                      82.16%
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600">Professional experience and achievements</p>
          </div>

          <Card className="border-l-4 border-l-portfolio-primary">
            <CardHeader>
              <CardTitle className="text-xl">Intern, Euphoria GenX</CardTitle>
              <CardDescription className="text-lg">June 2024 – July 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Hands-on experience with engineering tools</li>
                <li>• Developed an e-learning platform</li>
                <li>• Used HTML, CSS, JavaScript for daily report visualization</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
            <p className="text-xl text-gray-600">Technologies and concepts I work with</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-portfolio-primary">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Java</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-portfolio-primary">Web Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-portfolio-primary">Concepts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Data Structures</Badge>
                  <Badge variant="secondary">OS</Badge>
                  <Badge variant="secondary">DBMS</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-xl text-gray-600">What I can help you with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-portfolio-primary">Front-End Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Design and develop modern, responsive websites using HTML, CSS, and JavaScript.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-portfolio-primary">Python Mini Projects/Game Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Build interactive command-line tools and games like Tic-Tac-Toe using Python.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600">Some of my recent projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-portfolio-primary">EDUVERSE</CardTitle>
                    <CardDescription className="text-lg mt-2">E-learning Platform</CardDescription>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-portfolio-primary transition-colors" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  E-learning platform with course and tutorial access.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-portfolio-primary/10 text-portfolio-primary">HTML</Badge>
                  <Badge className="bg-portfolio-primary/10 text-portfolio-primary">CSS</Badge>
                  <Badge className="bg-portfolio-primary/10 text-portfolio-primary">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-portfolio-secondary">TIC-TAC-TOE GAME</CardTitle>
                    <CardDescription className="text-lg mt-2">Python Game</CardDescription>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-portfolio-secondary transition-colors" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Python-based two-player terminal game.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-portfolio-secondary/10 text-portfolio-secondary">Python</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Let's work together on your next project</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-portfolio-primary" />
                  <a href="mailto:sandipannaskar74@gmail.com" className="text-gray-700 hover:text-portfolio-primary transition-colors">
                    sandipannaskar74@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-portfolio-primary" />
                  <a href="tel:6290410080" className="text-gray-700 hover:text-portfolio-primary transition-colors">
                    6290410080
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-portfolio-primary" />
                  <a 
                    href="https://linkedin.com/in/sandipan-naskar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-portfolio-primary transition-colors"
                  >
                    linkedin.com/in/sandipan-naskar
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-portfolio-primary" />
                  <a 
                    href="https://github.com/Sandipan-Naskar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-portfolio-primary transition-colors"
                  >
                    github.com/Sandipan-Naskar
                  </a>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Sandipan Naskar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
