import React, { useState } from "react";
import {
  Leaf,
  Upload,
  MapPin,
  Calculator,
  FileText,
  Globe,
  Shield,
  Calendar,
  DollarSign,
  Users,
  Award,
  CheckCircle,
  AlertCircle,
  X,
  Plus,
  Minus,
  Eye,
  Save,
  Send,
} from "lucide-react";

const ProjectCreationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTestMode, setIsTestMode] = useState(false);

  const [formData, setFormData] = useState({
    projectName: "",
    projectType: "",
    location: "",
    projectArea: "",
    co2Stored: "",
    creditsAvailable: "",
    pricePerCredit: "",
    vintageYear: "",
    ownerAddress: "",
    description: "",
    developerName: "",
    benefits: [],
    sdgGoals: [],
    projectImages: [],
    supportingDocs: [],
  });

  const testProjectData = {
    projectName: "Sundarbans Mangrove Restoration",
    projectType: "Mangrove Restoration",
    location: "West Bengal, India",
    projectArea: "2500",
    co2Stored: "12450",
    creditsAvailable: "12450",
    pricePerCredit: "45",
    vintageYear: "2024",
    ownerAddress: "0xA41bF3d2F19c72B16B7c9D5a5Cd83D72E91C4b34",
    description:
      "Large-scale mangrove restoration project in the Sundarbans delta, focusing on biodiversity conservation and coastal protection.",
    developerName: "Sundarbans Conservation Trust",
    benefits: [
      "Biodiversity Conservation",
      "Coastal Protection",
      "Community Employment",
    ],
    sdgGoals: ["Climate Action", "Life Below Water", "Life on Land"],
    projectImages: ["sundarbans-drone-1.png"],
    supportingDocs: ["audit-report.pdf", "biodiversity-study.pdf"],
  };

  const projectTypes = [
    "Mangrove Restoration",
    "Seagrass Protection",
    "Salt Marsh Conservation",
    "Wetland Conservation",
    "Marine Conservation",
    "Coastal Restoration",
  ];

  const benefitOptions = [
    "Biodiversity Conservation",
    "Coastal Protection",
    "Community Employment",
    "Water Quality Improvement",
    "Fisheries Support",
    "Tourism Enhancement",
    "Storm Protection",
    "Carbon Sequestration",
    "Wildlife Habitat",
    "Cultural Preservation",
  ];

  const sdgOptions = [
    "No Poverty",
    "Zero Hunger",
    "Good Health and Well-being",
    "Quality Education",
    "Gender Equality",
    "Clean Water and Sanitation",
    "Affordable and Clean Energy",
    "Decent Work and Economic Growth",
    "Industry, Innovation and Infrastructure",
    "Reduced Inequalities",
    "Sustainable Cities and Communities",
    "Responsible Consumption and Production",
    "Climate Action",
    "Life Below Water",
    "Life on Land",
    "Peace, Justice and Strong Institutions",
    "Partnerships for the Goals",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleMultiSelect = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleFileUpload = (field, files) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ...Array.from(files).map((file) => file.name)],
    }));
  };

  const removeFile = (field, fileName) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((file) => file !== fileName),
    }));
  };

  const fillTestData = () => {
    setFormData(testProjectData);
    setIsTestMode(true);
  };

  const clearForm = () => {
    setFormData({
      projectName: "",
      projectType: "",
      location: "",
      projectArea: "",
      co2Stored: "",
      creditsAvailable: "",
      pricePerCredit: "",
      vintageYear: "",
      ownerAddress: "",
      description: "",
      developerName: "",
      benefits: [],
      sdgGoals: [],
      projectImages: [],
      supportingDocs: [],
    });
    setIsTestMode(false);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log("Project submitted:", formData);
  };

  const calculateTotalValue = () => {
    const credits = parseFloat(formData.creditsAvailable) || 0;
    const price = parseFloat(formData.pricePerCredit) || 0;
    return credits * price;
  };

  const steps = [
    { id: 1, title: "Basic Info", icon: FileText },
    { id: 2, title: "Project Details", icon: MapPin },
    { id: 3, title: "Carbon Metrics", icon: Calculator },
    { id: 4, title: "Benefits & SDGs", icon: Award },
    { id: 5, title: "Documents", icon: Upload },
    { id: 6, title: "Review", icon: Eye },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Project Submitted Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Your project "{formData.projectName}" has been submitted for audit.
            You'll receive updates on the verification process.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
              <span className="font-semibold text-yellow-800">
                Status: Pending Audit
              </span>
            </div>
            <p className="text-sm text-yellow-700 mt-1">
              NCCR auditors will review your project within 5-7 business days.
            </p>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false);
              clearForm();
              setCurrentStep(1);
            }}
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
          >
            Create Another Project
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="min-w-4xl mx-20 px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Leaf className="w-8 h-8 text-green-500 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Create New Carbon Project
                </h1>
                <p className="text-gray-600">
                  Onboard your blue carbon project for verification and trading
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={fillTestData}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm"
              >
                Fill Test Data
              </button>
              <button
                onClick={clearForm}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm"
              >
                Clear Form
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-4xl mx-20 px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= step.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="ml-3 hidden sm:block">
                  <div
                    className={`text-sm font-medium ${
                      currentStep >= step.id ? "text-blue-600" : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 h-0.5 mx-4 ${
                      currentStep > step.id ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Basic Project Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Name *
                  </label>
                  <input
                    type="text"
                    value={formData.projectName}
                    onChange={(e) =>
                      handleInputChange("projectName", e.target.value)
                    }
                    placeholder="Enter project name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      handleInputChange("projectType", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    placeholder="e.g., West Bengal, India"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Developer Name *
                  </label>
                  <input
                    type="text"
                    value={formData.developerName}
                    onChange={(e) =>
                      handleInputChange("developerName", e.target.value)
                    }
                    placeholder="Organization or individual name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe your carbon project, its objectives, and methodology..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Step 2: Project Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Project Location & Area
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Area (hectares) *
                  </label>
                  <input
                    type="number"
                    value={formData.projectArea}
                    onChange={(e) =>
                      handleInputChange("projectArea", e.target.value)
                    }
                    placeholder="e.g., 2500"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vintage Year *
                  </label>
                  <input
                    type="number"
                    value={formData.vintageYear}
                    onChange={(e) =>
                      handleInputChange("vintageYear", e.target.value)
                    }
                    placeholder="e.g., 2024"
                    min="2020"
                    max="2030"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ethereum Owner Address *
                </label>
                <input
                  type="text"
                  value={formData.ownerAddress}
                  onChange={(e) =>
                    handleInputChange("ownerAddress", e.target.value)
                  }
                  placeholder="0x..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                />
                <p className="text-sm text-gray-500 mt-1">
                  The Ethereum address that will own the carbon credit tokens
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Carbon Metrics */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Carbon Metrics & Pricing
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <h5>CO₂ Stored (tons) </h5>
                    <span className="text-gray-500 text-xs">
                      would be corrected by the NCCR auditor
                    </span>
                  </label>
                  <input
                    type="number"
                    value={formData.co2Stored}
                    onChange={(e) =>
                      handleInputChange("co2Stored", e.target.value)
                    }
                    placeholder="e.g., 12450"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <h5>Credits Available</h5>
                    <span className="text-gray-500 text-xs">
                      would be corrected by the NCCR auditor
                    </span>
                  </label>
                  <input
                    type="number"
                    value={formData.creditsAvailable}
                    onChange={(e) =>
                      handleInputChange("creditsAvailable", e.target.value)
                    }
                    placeholder="e.g., 12450"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-7">
                    Price per Credit (₹) *
                  </label>
                  <input
                    type="number"
                    value={formData.pricePerCredit}
                    onChange={(e) =>
                      handleInputChange("pricePerCredit", e.target.value)
                    }
                    placeholder="e.g., 45"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Total Value Display */}
              {formData.creditsAvailable && formData.pricePerCredit && (
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">
                        Total Project Value
                      </h3>
                      <p className="text-blue-700">
                        Based on available credits and price
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">
                        ₹{calculateTotalValue().toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Benefits & SDGs */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Project Benefits & SDG Goals
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Co-benefits *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {benefitOptions.map((benefit) => (
                    <label
                      key={benefit}
                      className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        checked={formData.benefits.includes(benefit)}
                        onChange={() => handleMultiSelect("benefits", benefit)}
                        className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-sm">{benefit}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  SDG Goals *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {sdgOptions.map((goal) => (
                    <label
                      key={goal}
                      className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <input
                        type="checkbox"
                        checked={formData.sdgGoals.includes(goal)}
                        onChange={() => handleMultiSelect("sdgGoals", goal)}
                        className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <span className="text-sm">{goal}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Documents */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Documentation & Evidence
                </h2>
              </div>

              {/* Drone Images */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Drone Images *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-2">
                    Upload drone images of your project area
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) =>
                      handleFileUpload("projectImages", e.target.files)
                    }
                    className="hidden"
                    id="drone-images"
                  />
                  <label
                    htmlFor="drone-images"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
                  >
                    Choose Files
                  </label>
                </div>

                {formData.projectImages.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {formData.projectImages.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                      >
                        <span className="text-sm text-gray-700">{file}</span>
                        <button
                          onClick={() => removeFile("projectImages", file)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Supporting Documents */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Supporting Documents *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-2">
                    Upload audit reports, studies, permits, etc.
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx"
                    onChange={(e) =>
                      handleFileUpload("supportingDocs", e.target.files)
                    }
                    className="hidden"
                    id="supporting-docs"
                  />
                  <label
                    htmlFor="supporting-docs"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-700 transition-colors"
                  >
                    Choose Files
                  </label>
                </div>

                {formData.supportingDocs.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {formData.supportingDocs.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                      >
                        <span className="text-sm text-gray-700">{file}</span>
                        <button
                          onClick={() => removeFile("supportingDocs", file)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 6: Review */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Review Your Project
                </h2>
                <p className="text-gray-600">
                  Please review all information before submitting for audit.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Info Card */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Basic Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Name:</strong> {formData.projectName}
                    </div>
                    <div>
                      <strong>Type:</strong> {formData.projectType}
                    </div>
                    <div>
                      <strong>Location:</strong> {formData.location}
                    </div>
                    <div>
                      <strong>Developer:</strong> {formData.developerName}
                    </div>
                    <div>
                      <strong>Vintage:</strong> {formData.vintageYear}
                    </div>
                  </div>
                </div>

                {/* Carbon Metrics Card */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Calculator className="w-5 h-5 mr-2" />
                    Carbon Metrics
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Area:</strong> {formData.projectArea} hectares
                    </div>
                    <div>
                      <strong>CO₂ Stored:</strong> {formData.co2Stored} tons
                    </div>
                    <div>
                      <strong>Credits:</strong> {formData.creditsAvailable}
                    </div>
                    <div>
                      <strong>Price:</strong> ₹{formData.pricePerCredit}/credit
                    </div>
                    <div>
                      <strong>Total Value:</strong> ₹
                      {calculateTotalValue().toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Benefits Card */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Benefits & SDGs
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-sm">Benefits:</strong>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {formData.benefits.map((benefit) => (
                          <span
                            key={benefit}
                            className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <strong className="text-sm">SDG Goals:</strong>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {formData.sdgGoals.map((goal) => (
                          <span
                            key={goal}
                            className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                          >
                            {goal}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents Card */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Upload className="w-5 h-5 mr-2" />
                    Documents
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Drone Images:</strong>{" "}
                      {formData.projectImages.length} files
                    </div>
                    <div>
                      <strong>Supporting Docs:</strong>{" "}
                      {formData.supportingDocs.length} files
                    </div>
                    <div>
                      <strong>Owner Address:</strong>{" "}
                      <span className="font-mono text-xs">
                        {formData.ownerAddress}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900">
                      Audit Process
                    </h4>
                    <p className="text-sm text-blue-700 mt-1">
                      After submission, NCCR auditors will review your project
                      for verification. This process typically takes 5-7
                      business days. You'll be notified of the results via
                      email.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-8 border-t border-gray-200 mt-2">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Previous
            </button>

            <div className="flex gap-3">
              {currentStep < 6 ? (
                <button
                  onClick={() => setCurrentStep(Math.min(6, currentStep + 1))}
                  className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
                >
                  Next Step
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-200 flex items-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit for Audit
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Test Data Info */}
        {isTestMode && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
              <span className="font-semibold text-yellow-800">
                Test Mode Active
              </span>
            </div>
            <p className="text-sm text-yellow-700 mt-1">
              Form is populated with test data from the Sundarbans Mangrove
              Restoration project.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCreationPage;
