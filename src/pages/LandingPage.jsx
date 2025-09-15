import React, { useState, useEffect } from "react";
import {
  Leaf,
  Shield,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Eye,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  // Animated counter effect
  const [counters, setCounters] = useState({
    credits: 0,
    projects: 0,
    co2: 0,
    organizations: 0,
  });

  const navigate = useNavigate()


  const handleGetStarted = ()=>{
    const token = localStorage.getItem("accessToken")
    if(token){
      navigate('/marketplace')
    } else {
      navigate('/auth')
    }
  }

  const finalStats = {
    credits: 250000,
    projects: 45,
    co2: 180000,
    organizations: 120,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        credits:
          prev.credits < finalStats.credits
            ? prev.credits + 5000
            : finalStats.credits,
        projects:
          prev.projects < finalStats.projects
            ? prev.projects + 1
            : finalStats.projects,
        co2: prev.co2 < finalStats.co2 ? prev.co2 + 3600 : finalStats.co2,
        organizations:
          prev.organizations < finalStats.organizations
            ? prev.organizations + 2
            : finalStats.organizations,
      }));
    }, 100);

    const timeout = setTimeout(() => clearInterval(interval), 3000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Immutable records powered by distributed ledger technology",
    },
    {
      icon: Zap,
      title: "AI Verification",
      description: "Drone-based monitoring and automated verification systems",
    },
    {
      icon: Globe,
      title: "Global Trading",
      description: "Seamless international carbon credit marketplace",
    },
    {
      icon: Eye,
      title: "Real-time Transparency",
      description:
        "Complete visibility into project progress and credit lifecycle",
    },
  ];

  const partners = [
    { name: "Ministry of Environment", logo: "🏛️" },
    { name: "NCCR", logo: "🌊" },
    { name: "Climate Ministry", logo: "🌱" },
    { name: "Blockchain Council", logo: "🔗" },
    { name: "Marine Board", logo: "⚓" },
    { name: "Green Fund", logo: "💚" },
  ];

  const benefits = [
    "Verified blue carbon projects with 99.9% accuracy",
    "Instant settlement through smart contracts",
    "Complete audit trail and regulatory compliance",
    "AI-powered project monitoring and reporting",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Leaf className="w-8 h-8 text-green-500 mr-2" />
              <span className="text-xl font-bold text-gray-900">
                BlueCarbon Registry
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/project-creation"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Projects
              </Link>
              <Link
                to="/marketplace"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Marketplace
              </Link>
              <button
                onClick={handleGetStarted}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700">
                Projects
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700">
                Marketplace
              </a>

              <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="mb-8">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                India's First Blockchain Carbon Registry
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              India's Blockchain-Powered
              <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Blue Carbon Registry
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Revolutionizing ecosystem restoration through verified,
              transparent, and tradeable carbon credits. Powered by blockchain
              technology and AI-driven verification.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={() => navigate("/project-creation")}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Register Your Project
                <ArrowRight className="inline w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => navigate("/marketplace")}
                className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
              >
                Browse Credits
                <Globe className="inline w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {counters.credits.toLocaleString()}+
                </div>
                <div className="text-gray-600 font-medium">Credits Issued</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">
                  {counters.projects}+
                </div>
                <div className="text-gray-600 font-medium">Active Projects</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">
                  {counters.co2.toLocaleString()}t
                </div>
                <div className="text-gray-600 font-medium">CO₂ Stored</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">
                  {counters.organizations}+
                </div>
                <div className="text-gray-600 font-medium">Organizations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Registry?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology meets environmental impact with our
              comprehensive blockchain solution for blue carbon projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Trusted by Leading Organizations
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join the ecosystem of verified blue carbon projects with
                transparent, immutable records and real-time monitoring.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Real-Time Impact
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Mangrove Restoration</span>
                    <span className="text-blue-600 font-bold">
                      +12,450t CO₂
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-teal-50 rounded-lg">
                    <span className="text-gray-700">Seagrass Protection</span>
                    <span className="text-teal-600 font-bold">+8,920t CO₂</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="text-gray-700">Salt Marsh Recovery</span>
                    <span className="text-green-600 font-bold">
                      +5,630t CO₂
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Trusted Partners & Regulators
            </h2>
            <p className="text-gray-600">
              Working with leading government bodies and organizations to ensure
              compliance and credibility
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-4xl mb-3">{partner.logo}</div>
                <div className="text-sm font-medium text-gray-700 text-center">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Join the Future of Carbon Trading?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Start your verified blue carbon project or purchase credits from our
            transparent marketplace today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => navigate("/project-creation")}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Register Project
              <Award className="inline w-5 h-5 ml-2" />
            </button>
            <button
              onClick={() => navigate("/marketplace")}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Buy Credits
              <Users className="inline w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Leaf className="w-8 h-8 text-green-400 mr-2" />
                <span className="text-xl font-bold">BlueCarbon Registry</span>
              </div>
              <p className="text-gray-400 mb-4">
                India's first blockchain-powered blue carbon registry, enabling
                transparent and verified carbon credit trading for marine
                ecosystem restoration.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <div className="space-y-2 text-gray-400">
                <div>Projects</div>
                <div>Marketplace</div>
                <div>Verification</div>
                <div>Documentation</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-gray-400">
                <div>Help Center</div>
                <div>Contact Us</div>
                <div>API Docs</div>
                <div>Status</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>
              &copy; 2025 BlueCarbon Registry. All rights reserved. Powered by
              blockchain technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
