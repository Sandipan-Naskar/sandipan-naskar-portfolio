import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Menu, X, Code, Palette, Zap, User, Award, Briefcase, Star, Play, ArrowRight, Download, Sparkles, CheckCircle, Globe, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import emailjs from '@emailjs/browser';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_lkpfc1r',
        'template_g7e2cqt',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Sandipan Naskar',
        },
        'zZavmPQ9nkOTMMGGy'
      );
      
      alert('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-poppins overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Sandipan
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Education', 'Experience', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-purple-600 transition-all duration-200 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            <div className="hidden md:block">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Talk
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                {['Home', 'About', 'Education', 'Experience', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="pt-20 pb-16 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Modern floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-20 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-48 right-32 w-6 h-6 bg-pink-400 rounded-lg rotate-45 animate-bounce delay-300"></div>
        <div className="absolute bottom-32 right-20 w-3 h-3 bg-green-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 animate-fade-in">
              {/* Status badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
              </div>
              
              {/* Main heading with enhanced typography */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-purple-600 font-medium">
                  <Sparkles className="w-5 h-5" />
                  <span>Hello, I'm</span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
                    Sandipan
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-700 via-purple-700 to-blue-700 bg-clip-text text-transparent">
                    Naskar
                  </span>
                </h1>
                <div className="flex items-center space-x-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                  <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                    Frontend Developer & Python Enthusiast
                  </p>
                </div>
              </div>
              
              {/* Enhanced description */}
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Aspiring developer building modern web experiences and Python mini-projects. 
                <span className="block mt-2 text-purple-600 font-medium">
                  Constantly seeking to engage my knowledge to learn something useful and keep challenging myself.
                </span>
              </p>
              
              {/* Stats cards */}
              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-purple-100 shadow-lg">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-blue-100 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">3+</div>
                  <div className="text-sm text-gray-600">Years Learning</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-indigo-100 shadow-lg">
                  <div className="text-2xl font-bold text-indigo-600">100%</div>
                  <div className="text-sm text-gray-600">Passion</div>
                </div>
              </div>
              
              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => scrollToSection('portfolio')}
                >
                  <Play className="mr-2 h-5 w-5" />
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-2xl font-semibold backdrop-blur-sm bg-white/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => scrollToSection('contact')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
              
              {/* Social links */}
              <div className="flex items-center space-x-4 pt-6">
                <span className="text-sm text-gray-500 font-medium">Follow me:</span>
                <div className="flex space-x-3">
                  <a 
                    href="https://github.com/Sandipan-Naskar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 hover:scale-110 transition-all duration-300 shadow-lg border border-gray-200"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/sandipan-naskar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:scale-110 transition-all duration-300 shadow-lg border border-gray-200"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="mailto:sandipannaskar74@gmail.com"
                    className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 hover:scale-110 transition-all duration-300 shadow-lg border border-gray-200"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Enhanced profile section with actual image */}
            <div className="animate-slide-in-right">
              <div className="relative">
                {/* Main profile circle with gradient border and actual image */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-full animate-spin-slow p-1">
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-white rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src="https://i.postimg.cc/Wb6hkzQN/Sandipan-Photo.jpg"
                        alt="Sandipan Naskar"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Floating skill badges */}
                <div className="absolute -top-4 -left-8 bg-white rounded-full px-4 py-2 shadow-lg border border-purple-100 animate-bounce">
                  <span className="text-sm font-semibold text-purple-600">React</span>
                </div>
                <div className="absolute top-20 -right-8 bg-white rounded-full px-4 py-2 shadow-lg border border-blue-100 animate-bounce delay-300">
                  <span className="text-sm font-semibold text-blue-600">Python</span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg border border-indigo-100 animate-bounce delay-500">
                  <span className="text-sm font-semibold text-indigo-600">JavaScript</span>
                </div>
                <div className="absolute bottom-16 -left-6 bg-white rounded-full px-4 py-2 shadow-lg border border-green-100 animate-bounce delay-700">
                  <span className="text-sm font-semibold text-green-600">HTML/CSS</span>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-8 left-1/3 w-6 h-6 bg-yellow-400 rounded-lg opacity-80 rotate-12 animate-pulse"></div>
                <div className="absolute -bottom-8 right-1/4 w-8 h-8 bg-pink-400 rounded-full opacity-70 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-20 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full opacity-20 blur-2xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-lg mb-6">
              <Sparkles className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Services I Offer</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Expertise Services!
              <span className="block text-purple-600">Let's check it out</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Quality delivers all things at cheap rate. Transforming ideas into digital solutions with modern technologies and creative approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
              <CardHeader className="text-center relative z-10">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-10 h-10" />
                </div>
                <CardTitle className="text-2xl mb-2">UI UX Design</CardTitle>
                <div className="w-12 h-1 bg-white/30 mx-auto rounded-full"></div>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-purple-100 leading-relaxed">
                  Creating beautiful and functional user interfaces with modern design principles and user experience best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
              <CardHeader className="text-center relative z-10">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-10 h-10" />
                </div>
                <CardTitle className="text-2xl mb-2">Web Development</CardTitle>
                <div className="w-12 h-1 bg-white/30 mx-auto rounded-full"></div>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-blue-100 leading-relaxed">
                  Design and develop modern, responsive websites using HTML, CSS, and JavaScript with cutting-edge frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
              <CardHeader className="text-center relative z-10">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-10 h-10" />
                </div>
                <CardTitle className="text-2xl mb-2">Python Development</CardTitle>
                <div className="w-12 h-1 bg-white/30 mx-auto rounded-full"></div>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-indigo-100 leading-relaxed">
                  Build interactive command-line tools and games like Tic-Tac-Toe using Python and modern development practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-200 rounded-lg opacity-20 rotate-45"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-slate-100 to-white rounded-3xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://i.postimg.cc/Wb6hkzQN/Sandipan-Photo.jpg"
                    alt="Sandipan Naskar"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-70 animate-bounce delay-500"></div>
              <div className="absolute top-20 -right-8 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg opacity-60 animate-bounce delay-1000"></div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full">
                  <User className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-sm font-medium text-purple-700">ABOUT ME</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Designing Solutions,
                  <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Not Just Visuals
                  </span>
                </h2>
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Constantly seeking to engage my knowledge to learn something useful and keep challenging myself to be a better performer in accordance to the company's requirements.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border border-orange-100">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <p className="font-semibold text-gray-900">50+ Complete Projects</p>
                    <p className="text-sm text-gray-600">Various web development and Python projects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <p className="font-semibold text-gray-900">3+ Years Experience</p>
                    <p className="text-sm text-gray-600">Continuous learning and development</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-lg mb-6">
              <Award className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Academic Journey</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600">Building the foundation for excellence</p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <Card className="group border-l-8 border-l-purple-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-r from-white to-purple-50/30">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900 group-hover:text-purple-600 transition-colors">
                        Heritage Institute of Technology
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-600 mt-1">
                        B.Tech in Computer Science and Engineering
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 text-lg px-4 py-2">
                    DGPA: 7.62
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-lg">2021 – 2025</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-l-8 border-l-blue-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-r from-white to-blue-50/30">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                        EL-Bethel School
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-600 mt-1">
                        Higher Secondary Education
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">ISC – 2021</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">81.33%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">ICSE – 2019</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">82.16%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-yellow-200 rounded-full opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full border border-yellow-200 shadow-lg mb-6">
              <Briefcase className="w-5 h-5 text-yellow-600 mr-2" />
              <span className="text-sm font-medium text-yellow-700">Professional Journey</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600">Professional experience and achievements</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="group border-l-8 border-l-yellow-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-r from-white to-yellow-50/30">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900 group-hover:text-yellow-600 transition-colors">
                        Intern, Euphoria GenX
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-600 mt-1">
                        June 2024 – July 2024
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <span className="text-gray-700">Hands-on experience with engineering tools</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <span className="text-gray-700">Developed an e-learning platform</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <span className="text-gray-700">Used HTML, CSS, JavaScript for daily report visualization</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-28 h-28 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-30 blur-xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-200 shadow-lg mb-6">
              <Code className="w-5 h-5 text-indigo-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Technical Arsenal</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Skills</h2>
            <p className="text-xl text-gray-600">Technologies and concepts I work with</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50/50 border border-purple-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-purple-600">Languages</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-3 justify-center">
                  <Badge className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 px-4 py-2 text-sm">Python</Badge>
                  <Badge className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 px-4 py-2 text-sm">Java</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/50 border border-blue-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-600">Web Technologies</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-3 justify-center">
                  <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-4 py-2 text-sm">HTML</Badge>
                  <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-4 py-2 text-sm">CSS</Badge>
                  <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-4 py-2 text-sm">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-indigo-50/50 border border-indigo-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-indigo-600">Concepts</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-3 justify-center">
                  <Badge className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700 px-4 py-2 text-sm">Data Structures</Badge>
                  <Badge className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700 px-4 py-2 text-sm">OS</Badge>
                  <Badge className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700 px-4 py-2 text-sm">DBMS</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full border border-purple-200 shadow-lg mb-6">
              <Sparkles className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">PORTFOLIO</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Digital Product
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Showcases
              </span>
            </h2>
            <p className="text-xl text-gray-600">Some of my recent projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-purple-50/30 border-2 border-purple-100 hover:border-purple-300">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 -translate-x-10"></div>
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div>
                    <CardTitle className="text-3xl mb-3 group-hover:scale-105 transition-transform duration-300">EDUVERSE</CardTitle>
                    <CardDescription className="text-purple-100 text-lg">E-learning Platform</CardDescription>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-purple-100 mb-8 leading-relaxed relative z-10">
                  E-learning platform with course and tutorial access. Built with modern web technologies for seamless learning experience.
                </p>
                <div className="flex flex-wrap gap-3 relative z-10">
                  <Badge className="bg-white/20 text-white px-4 py-2">HTML</Badge>
                  <Badge className="bg-white/20 text-white px-4 py-2">CSS</Badge>
                  <Badge className="bg-white/20 text-white px-4 py-2">JavaScript</Badge>
                </div>
              </div>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-orange-50/30 border-2 border-orange-100 hover:border-orange-300">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 -translate-x-10"></div>
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div>
                    <CardTitle className="text-3xl mb-3 group-hover:scale-105 transition-transform duration-300">TIC-TAC-TOE GAME</CardTitle>
                    <CardDescription className="text-orange-100 text-lg">Python Game</CardDescription>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-orange-100 mb-8 leading-relaxed relative z-10">
                  Python-based two-player terminal game with intelligent gameplay mechanics and interactive user interface.
                </p>
                <div className="flex flex-wrap gap-3 relative z-10">
                  <Badge className="bg-white/20 text-white px-4 py-2">Python</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20 blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-lg mb-6">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">TESTIMONIALS</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">What People Say's About Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50/30 border border-purple-100">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    "Exceptionally professional and delivers quality work. Sandipan's attention to detail and technical skills are impressive."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                      C{index}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">Client Name</p>
                      <p className="text-gray-600">Position, Company</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-pink-400 rounded-lg opacity-50 rotate-45 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
                <Mail className="w-5 h-5 text-yellow-300 mr-2" />
                <span className="text-sm font-medium text-yellow-300">GOT A PROJECT? LET'S TALK</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Ready to bring your
                <span className="block text-yellow-300">ideas to life?</span>
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Let's work together on your next project and create something amazing that stands out in the digital world.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gray-900" />
                  </div>
                  <a href="mailto:sandipannaskar74@gmail.com" className="text-blue-100 hover:text-white transition-colors text-lg">
                    sandipannaskar74@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gray-900" />
                  </div>
                  <a href="tel:6290410080" className="text-blue-100 hover:text-white transition-colors text-lg">
                    +91 6290410080
                  </a>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-gray-900" />
                  </div>
                  <a 
                    href="https://linkedin.com/in/sandipan-naskar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-100 hover:text-white transition-colors text-lg"
                  >
                    linkedin.com/in/sandipan-naskar
                  </a>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center">
                    <Github className="w-6 h-6 text-gray-900" />
                  </div>
                  <a 
                    href="https://github.com/Sandipan-Naskar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-100 hover:text-white transition-colors text-lg"
                  >
                    github.com/Sandipan-Naskar
                  </a>
                </div>
              </div>

              <Button 
                onClick={() => scrollToSection('home')}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <ArrowRight className="mr-2 h-6 w-6" />
                Start a Project
              </Button>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold mb-8 text-center">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white text-lg">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-yellow-400 focus:ring-yellow-400 text-lg p-4 rounded-xl"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white text-lg">Your Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-yellow-400 focus:ring-yellow-400 text-lg p-4 rounded-xl"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white text-lg">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-yellow-400 focus:ring-yellow-400 text-lg p-4 rounded-xl resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-6 w-6" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Sandipan Naskar
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Building modern web experiences and innovative solutions with passion and dedication to excellence.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Sandipan-Naskar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/sandipan-naskar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:sandipannaskar74@gmail.com"
                  className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500 transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-xl">Quick Links</h4>
              <div className="space-y-3">
                {['Home', 'About', 'Services', 'Portfolio'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())} 
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-lg"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-xl">Services</h4>
              <div className="space-y-3 text-gray-400 text-lg">
                <p className="hover:text-white transition-colors duration-200 cursor-default">Web Development</p>
                <p className="hover:text-white transition-colors duration-200 cursor-default">UI/UX Design</p>
                <p className="hover:text-white transition-colors duration-200 cursor-default">Python Development</p>
                <p className="hover:text-white transition-colors duration-200 cursor-default">Game Development</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-lg">
                © 2024 Sandipan Naskar. All rights reserved.
              </p>
              <p className="text-gray-500 mt-4 md:mt-0">
                Made with ❤️ in Kolkata, India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
