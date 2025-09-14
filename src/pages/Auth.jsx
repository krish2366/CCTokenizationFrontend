
import React, { useState } from 'react';
import { Eye, EyeOff, Leaf, Shield, Globe, Zap } from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    organizationType: 'company',
    organizationName: '',
    agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle authentication logic here
  };

  const features = [
    { icon: Shield, title: "Blockchain Security", desc: "Immutable carbon credit records" },
    { icon: Leaf, title: "Blue Carbon Focus", desc: "Marine ecosystem restoration" },
    { icon: Globe, title: "Global Trading", desc: "Worldwide carbon credit marketplace" },
    { icon: Zap, title: "AI Verification", desc: "Drone-powered monitoring" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex">
      {/* Left Side - Features */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-teal-600 p-12 flex-col justify-between text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white rounded-full"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-8">
            <Leaf className="w-10 h-10 text-green-400 mr-3" />
            <h1 className="text-3xl font-bold">BlueCarbon Registry</h1>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                Decentralized Carbon Credit Platform for India's Blue Carbon Projects
              </h2>
              <p className="text-xl text-blue-100">
                Blockchain-powered transparency meets AI-driven verification for marine ecosystem restoration.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <feature.icon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-blue-100 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative z-10 text-center">
          <p className="text-blue-200">
            Join the future of carbon credit trading with verified, transparent, and immutable records.
          </p>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center mb-8">
            <Leaf className="w-8 h-8 text-green-500 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">BlueCarbon Registry</h1>
          </div>

          {/* Auth Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                isLogin 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                !isLogin 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-gray-600">
                {isLogin 
                  ? 'Sign in to access your carbon registry dashboard' 
                  : 'Join the decentralized carbon credit ecosystem'}
              </p>
            </div>

            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Type
                  </label>
                  <select
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="company">Company</option>
                    <option value="ngo">NGO</option>
                    <option value="community">Community Organization</option>
                    <option value="government">Government Entity</option>
                    <option value="individual">Individual</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    placeholder="Your organization name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            {!isLogin && (
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>, and understand the blockchain-based nature of carbon credit transactions.
                </label>
              </div>
            )}

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
            >
              {isLogin ? 'Sign In to Registry' : 'Create Registry Account'}
            </button>


           

            <div className="text-center text-sm text-gray-600">
              By signing {isLogin ? 'in' : 'up'}, you acknowledge that carbon credits are blockchain-based digital assets and transactions are immutable.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;