
import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Menu, X, Code, Palette, Zap, User, Award, Briefcase, Star, Play, ArrowRight, Download, Sparkles } from 'lucide-react';
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
            
            {/* Enhanced profile section */}
            <div className="animate-slide-in-right">
              <div className="relative">
                {/* Main profile circle with gradient border */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-full animate-spin-slow p-1">
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-white rounded-full flex items-center justify-center text-6xl lg:text-7xl font-bold">
                      <span className="bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        SN
                      </span>
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expertise Services! Let's check it out</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality delivers all things at cheap rate. Lorem ipsum dolor sit amet, consectetur adipiscing lorem magna magna dolere tempor magna tempor aliquyam.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">UI UX Design</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-purple-100">
                  Creating beautiful and functional user interfaces with modern design principles and user experience best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">Webflow Develop</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-100">
                  Design and develop modern, responsive websites using HTML, CSS, and JavaScript with cutting-edge frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">Product Design</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-indigo-100">
                  Build interactive command-line tools and games like Tic-Tac-Toe using Python and modern development practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-6xl font-bold relative overflow-hidden">
                SN
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-6 h-6 bg-white/20 rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-lg opacity-70 rotate-12"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-pink-500 rounded-full opacity-60"></div>
            </div>
            
            <div className="space-y-6">
              <div className="text-sm font-medium text-purple-600 mb-4">ABOUT ME</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Designing Solutions, Not Just Visuals
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Constantly seeking to engage my knowledge to learn something useful and keep challenging myself to be a better performer in accordance to the company's requirements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>50 Complete Project</strong> - Various web development and Python projects completed successfully</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-700"><strong>3+ Years Experience</strong> - Continuous learning and development in programming</span>
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600">My academic journey</p>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Award className="mr-3 text-purple-500" />
                  Heritage Institute of Technology
                </CardTitle>
                <CardDescription className="text-lg">B.Tech in Computer Science and Engineering</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">2021 – 2025</p>
                  <Badge className="bg-purple-100 text-purple-700">
                    CGPA: 7.71
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Award className="mr-3 text-blue-500" />
                  EL-Bethel School
                </CardTitle>
                <CardDescription className="text-lg">Higher Secondary Education</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">ISC – 2021</p>
                    <Badge className="bg-blue-100 text-blue-700">
                      81.33%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">ICSE – 2019</p>
                    <Badge className="bg-blue-100 text-blue-700">
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
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600">Professional experience and achievements</p>
          </div>

          <Card className="border-l-4 border-l-yellow-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Briefcase className="mr-3 text-yellow-500" />
                Intern, Euphoria GenX
              </CardTitle>
              <CardDescription className="text-lg">June 2024 – July 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3"></div>
                  Hands-on experience with engineering tools
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3"></div>
                  Developed an e-learning platform
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3"></div>
                  Used HTML, CSS, JavaScript for daily report visualization
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
            <p className="text-xl text-gray-600">Technologies and concepts I work with</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-purple-600 flex items-center">
                  <Code className="mr-2" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-100 text-purple-700">Python</Badge>
                  <Badge className="bg-purple-100 text-purple-700">Java</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-blue-600 flex items-center">
                  <Palette className="mr-2" />
                  Web Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-700">HTML</Badge>
                  <Badge className="bg-blue-100 text-blue-700">CSS</Badge>
                  <Badge className="bg-blue-100 text-blue-700">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-indigo-600 flex items-center">
                  <Zap className="mr-2" />
                  Concepts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-indigo-100 text-indigo-700">Data Structures</Badge>
                  <Badge className="bg-indigo-100 text-indigo-700">OS</Badge>
                  <Badge className="bg-indigo-100 text-indigo-700">DBMS</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-purple-600 mb-4">PORTFOLIO</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Digital Product Showcases</h2>
            <p className="text-xl text-gray-600">Some of my recent projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-8 text-white">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">EDUVERSE</CardTitle>
                    <CardDescription className="text-purple-100">E-learning Platform</CardDescription>
                  </div>
                  <ExternalLink className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-purple-100 mb-6">
                  E-learning platform with course and tutorial access. Built with modern web technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-white/20 text-white">HTML</Badge>
                  <Badge className="bg-white/20 text-white">CSS</Badge>
                  <Badge className="bg-white/20 text-white">JavaScript</Badge>
                </div>
              </div>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">TIC-TAC-TOE GAME</CardTitle>
                    <CardDescription className="text-orange-100">Python Game</CardDescription>
                  </div>
                  <ExternalLink className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-orange-100 mb-6">
                  Python-based two-player terminal game with intelligent gameplay mechanics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-white/20 text-white">Python</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-medium text-purple-600 mb-4">TESTIMONIALS</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say's About Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Exceptionally professional and delivers quality work. Sandipan's attention to detail and technical skills are impressive."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Client Name</p>
                      <p className="text-sm text-gray-600">Position, Company</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-pink-400 rounded-lg opacity-50 rotate-45"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-medium text-yellow-300 mb-4">GOT A PROJECT? LET'S TALK</div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to bring your ideas to life?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Let's work together on your next project and create something amazing.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <a href="mailto:sandipannaskar74@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                    sandipannaskar74@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <a href="tel:6290410080" className="text-blue-100 hover:text-white transition-colors">
                    6290410080
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-yellow-400" />
                  <a 
                    href="https://linkedin.com/in/sandipan-naskar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    linkedin.com/in/sandipan-naskar
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-yellow-400" />
                  <a 
                    href="https://github.com/Sandipan-Naskar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    github.com/Sandipan-Naskar
                  </a>
                </div>
              </div>

              <Button 
                onClick={() => scrollToSection('home')}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold"
              >
                Start a Project
              </Button>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-gray-900 text-6xl font-bold">
                SN
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-pink-400 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sandipan</h3>
              <p className="text-gray-400">
                Building modern web experiences and innovative solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">About</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors">Services</button>
                <button onClick={() => scrollToSection('portfolio')} className="block text-gray-400 hover:text-white transition-colors">Portfolio</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-gray-400">
                <p>Web Development</p>
                <p>UI/UX Design</p>
                <p>Python Development</p>
                <p>Game Development</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Kolkata, India</p>
                <p>sandipannaskar74@gmail.com</p>
                <p>+91 6290410080</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
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
