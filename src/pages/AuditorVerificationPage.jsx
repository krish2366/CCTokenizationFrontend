import React, { useState, useEffect } from "react";
import {
  Shield,
  Eye,
  Bot,
  CheckCircle,
  XCircle,
  AlertTriangle,
  FileText,
  Camera,
  Satellite,
  Calculator,
  User,
  MapPin,
  Calendar,
  Leaf,
  TrendingUp,
  Clock,
  Edit3,
  Save,
  ChevronDown,
  ChevronUp,
  History,
  Flag,
  Zap,
  Award,
  Globe,
} from "lucide-react";

const AuditorVerificationPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [aiAnalysisStatus, setAiAnalysisStatus] = useState("analyzing");
  const [showAiDetails, setShowAiDetails] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [auditorDecision, setAuditorDecision] = useState("pending");
  const [creditAdjustment, setCreditAdjustment] = useState("");
  const [auditorComments, setAuditorComments] = useState("");
  const [finalCredits, setFinalCredits] = useState("");

  // Mock project data
  const project = {
    id: 1,
    name: "Sundarbans Mangrove Restoration",
    type: "Mangrove Restoration",
    location: "West Bengal, India",
    developer: "Sundarbans Conservation Trust",
    submissionDate: "2024-09-01",
    projectArea: "2,500 hectares",
    vintageYear: "2024",
    co2Stored: "12,450 tons",
    creditsRequested: 12450,
    ownerAddress: "0xA41bF3d2F19c72B16B7c9D5a5Cd83D72E91C4b34",
    description:
      "Large-scale mangrove restoration project in the Sundarbans delta, focusing on biodiversity conservation and coastal protection.",
    status: "Under Review",
    priority: "High",
    supportingDocs: [
      {
        name: "audit-report.pdf",
        type: "Report",
        size: "2.4 MB",
        uploaded: "2024-09-01",
      },
      {
        name: "biodiversity-study.pdf",
        type: "Study",
        size: "1.8 MB",
        uploaded: "2024-09-01",
      },
      {
        name: "permits.pdf",
        type: "Legal",
        size: "0.9 MB",
        uploaded: "2024-09-01",
      },
    ],
    droneImages: [
      {
        name: "sundarbans-drone-1.png",
        type: "Drone",
        coordinates: "22.4°N, 89.1°E",
        date: "2024-08-15",
      },
      {
        name: "sundarbans-drone-2.png",
        type: "Drone",
        coordinates: "22.5°N, 89.2°E",
        date: "2024-08-15",
      },
      {
        name: "sundarbans-satellite.jpg",
        type: "Satellite",
        coordinates: "22.4°N, 89.1°E",
        date: "2024-08-20",
      },
    ],
  };

  const aiInsights = {
    status: "completed",
    confidence: 94,
    landAreaAnalysis: {
      measuredArea: 2480,
      requestedArea: 2500,
      accuracy: 99.2,
      discrepancy: -20,
      status: "verified",
    },
    vegetationAnalysis: {
      saplingCount: 148500,
      estimatedSurvivalRate: 89,
      maturityProjection: 132165,
      growthStage: "Early Growth",
      status: "good",
    },
    carbonAnalysis: {
      estimatedCO2: 11890,
      requestedCO2: 12450,
      confidenceLevel: 91,
      discrepancy: -560,
      suggestedCredits: 11890,
      status: "adjustment_needed",
    },
    complianceCheck: {
      documentation: "complete",
      permits: "verified",
      methodology: "approved",
      standards: "Gold Standard compliant",
      status: "passed",
    },
    riskFactors: [
      {
        type: "Environmental",
        level: "Low",
        description: "Cyclone risk minimal for current season",
      },
      { type: "Regulatory", level: "Low", description: "All permits in order" },
      {
        type: "Technical",
        level: "Medium",
        description: "Minor discrepancy in area measurement",
      },
    ],
    recommendations: [
      "Approve with 11,890 credits (4.5% reduction)",
      "Request additional ground verification for area discrepancy",
      "Monitor project progress quarterly for first year",
    ],
  };

  const verificationHistory = [
    {
      date: "2024-08-15",
      auditor: "Dr. Sarah Chen",
      project: "Kerala Backwaters Blue Carbon",
      decision: "Approved",
      creditsIssued: 15200,
      notes: "Excellent documentation and verification",
    },
    {
      date: "2024-08-10",
      auditor: "Dr. Sarah Chen",
      project: "Chilika Lake Seagrass Conservation",
      decision: "Approved with Adjustment",
      creditsIssued: 8500,
      notes: "Reduced credits due to area measurement discrepancy",
    },
    {
      date: "2024-08-05",
      auditor: "Dr. Sarah Chen",
      project: "Goa Coastal Wetland Protection",
      decision: "Rejected",
      creditsIssued: 0,
      notes: "Insufficient evidence of carbon sequestration methodology",
    },
  ];

  useEffect(() => {
    // Simulate AI analysis loading
    setTimeout(() => {
      setAiAnalysisStatus("completed");
      setFinalCredits(aiInsights.carbonAnalysis.suggestedCredits.toString());
    }, 2000);
  }, []);

  const handleDecisionChange = (decision) => {
    setAuditorDecision(decision);
    if (decision === "approve_ai") {
      setFinalCredits(aiInsights.carbonAnalysis.suggestedCredits.toString());
    } else if (decision === "approve_original") {
      setFinalCredits(project.creditsRequested.toString());
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "verified":
        return "text-green-600 bg-green-50";
      case "good":
        return "text-green-600 bg-green-50";
      case "adjustment_needed":
        return "text-yellow-600 bg-yellow-50";
      case "passed":
        return "text-green-600 bg-green-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getRiskColor = (level) => {
    switch (level) {
      case "Low":
        return "text-green-600 bg-green-50";
      case "Medium":
        return "text-yellow-600 bg-yellow-50";
      case "High":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Auditor Verification Dashboard
                </h1>
                <p className="text-gray-600">
                  AI-powered verification with human oversight
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-500">Current Auditor</div>
                <div className="font-semibold text-gray-900">
                  Dr. Sarah Chen
                </div>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Project Details */}
          <div className="lg:col-span-1 space-y-6">
            {/* Project Overview */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">
                  Project Overview
                </h2>
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {project.status}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500">Type</div>
                    <div className="font-medium text-gray-900">
                      {project.type}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Developer</div>
                    <div className="font-medium text-gray-900">
                      {project.developer}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Location</div>
                    <div className="font-medium text-gray-900">
                      {project.location}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Vintage</div>
                    <div className="font-medium text-gray-900">
                      {project.vintageYear}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Area</div>
                    <div className="font-medium text-gray-900">
                      {project.projectArea}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">CO₂ Claimed</div>
                    <div className="font-medium text-gray-900">
                      {project.co2Stored}
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-gray-500 text-sm">Credits Requested</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {project.creditsRequested.toLocaleString()}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-gray-500 text-sm">Owner Address</div>
                  <div className="font-mono text-xs text-gray-700 break-all">
                    {project.ownerAddress}
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Documents */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Supporting Documents
              </h2>

              <div className="space-y-3">
                {project.supportingDocs.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-gray-400 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900 text-sm">
                          {doc.name}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {doc.type} • {doc.size}
                        </div>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Evidence Images */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Visual Evidence
              </h2>

              <div className="space-y-3">
                {project.droneImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-center">
                      {image.type === "Drone" ? (
                        <Camera className="w-5 h-5 text-green-500 mr-3" />
                      ) : (
                        <Satellite className="w-5 h-5 text-blue-500 mr-3" />
                      )}
                      <div>
                        <div className="font-medium text-gray-900 text-sm">
                          {image.name}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {image.coordinates} • {image.date}
                        </div>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column - AI Analysis */}
          <div className="lg:col-span-1 space-y-6">
            {/* AI Analysis Header */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl shadow-sm p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Bot className="w-8 h-8 mr-3" />
                  <h2 className="text-xl font-bold">
                    AI Verification Insights
                  </h2>
                </div>
                <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                  {aiInsights.confidence}% Confidence
                </div>
              </div>

              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                <span>Analysis completed in 1.2 seconds</span>
              </div>
            </div>

            {/* Land Area Analysis */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Land Area Analysis</h3>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    aiInsights.landAreaAnalysis.status
                  )}`}
                >
                  Verified
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500">Measured Area</div>
                  <div className="font-bold text-gray-900">
                    {aiInsights.landAreaAnalysis.measuredArea} ha
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">Requested Area</div>
                  <div className="font-bold text-gray-900">
                    {aiInsights.landAreaAnalysis.requestedArea} ha
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">Accuracy</div>
                  <div className="font-bold text-green-600">
                    {aiInsights.landAreaAnalysis.accuracy}%
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">Discrepancy</div>
                  <div className="font-bold text-yellow-600">
                    {aiInsights.landAreaAnalysis.discrepancy} ha
                  </div>
                </div>
              </div>
            </div>

            {/* Vegetation Analysis */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Vegetation Analysis</h3>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    aiInsights.vegetationAnalysis.status
                  )}`}
                >
                  Good
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500">Sapling Count</div>
                    <div className="font-bold text-gray-900">
                      {aiInsights.vegetationAnalysis.saplingCount.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Survival Rate</div>
                    <div className="font-bold text-green-600">
                      {aiInsights.vegetationAnalysis.estimatedSurvivalRate}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Maturity Projection</div>
                    <div className="font-bold text-gray-900">
                      {aiInsights.vegetationAnalysis.maturityProjection.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Growth Stage</div>
                    <div className="font-bold text-blue-600">
                      {aiInsights.vegetationAnalysis.growthStage}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carbon Analysis */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Carbon Analysis</h3>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    aiInsights.carbonAnalysis.status
                  )}`}
                >
                  Adjustment Needed
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500">AI Estimate</div>
                    <div className="font-bold text-blue-600">
                      {aiInsights.carbonAnalysis.estimatedCO2.toLocaleString()}{" "}
                      tons
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Requested</div>
                    <div className="font-bold text-gray-900">
                      {aiInsights.carbonAnalysis.requestedCO2.toLocaleString()}{" "}
                      tons
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Confidence</div>
                    <div className="font-bold text-green-600">
                      {aiInsights.carbonAnalysis.confidenceLevel}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Discrepancy</div>
                    <div className="font-bold text-red-600">
                      {aiInsights.carbonAnalysis.discrepancy} tons
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                    <span className="font-semibold text-yellow-800">
                      AI Recommendation
                    </span>
                  </div>
                  <p className="text-sm text-yellow-700 mt-1">
                    Suggested credits:{" "}
                    <strong>
                      {aiInsights.carbonAnalysis.suggestedCredits.toLocaleString()}
                    </strong>{" "}
                    (4.5% reduction)
                  </p>
                </div>
              </div>
            </div>

            {/* Risk Assessment */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Risk Assessment</h3>

              <div className="space-y-3">
                {aiInsights.riskFactors.map((risk, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between p-3 border border-gray-100 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <span className="font-medium text-gray-900 text-sm">
                          {risk.type}
                        </span>
                        <div
                          className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(
                            risk.level
                          )}`}
                        >
                          {risk.level}
                        </div>
                      </div>
                      <p className="text-gray-600 text-xs">
                        {risk.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Auditor Decision */}
          <div className="lg:col-span-1 space-y-6">
            {/* AI Recommendations */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                AI Recommendations
              </h3>

              <div className="space-y-3">
                {aiInsights.recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 bg-blue-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-blue-800">{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Auditor Decision Panel */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Auditor Decision</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Verification Decision
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="decision"
                        value="approve_ai"
                        checked={auditorDecision === "approve_ai"}
                        onChange={(e) => handleDecisionChange(e.target.value)}
                        className="mr-3 h-4 w-4 text-green-600 focus:ring-green-500"
                      />
                      <div>
                        <div className="font-medium text-green-700">
                          Approve AI Recommendation
                        </div>
                        <div className="text-sm text-green-600">
                          Issue{" "}
                          {aiInsights.carbonAnalysis.suggestedCredits.toLocaleString()}{" "}
                          credits
                        </div>
                      </div>
                    </label>

                    <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="decision"
                        value="approve_original"
                        checked={auditorDecision === "approve_original"}
                        onChange={(e) => handleDecisionChange(e.target.value)}
                        className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <div>
                        <div className="font-medium text-blue-700">
                          Approve Original Request
                        </div>
                        <div className="text-sm text-blue-600">
                          Issue {project.creditsRequested.toLocaleString()}{" "}
                          credits
                        </div>
                      </div>
                    </label>

                    <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="decision"
                        value="custom"
                        checked={auditorDecision === "custom"}
                        onChange={(e) => handleDecisionChange(e.target.value)}
                        className="mr-3 h-4 w-4 text-yellow-600 focus:ring-yellow-500"
                      />
                      <div>
                        <div className="font-medium text-yellow-700">
                          Custom Adjustment
                        </div>
                        <div className="text-sm text-yellow-600">
                          Specify custom credit amount
                        </div>
                      </div>
                    </label>

                    <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="decision"
                        value="reject"
                        checked={auditorDecision === "reject"}
                        onChange={(e) => handleDecisionChange(e.target.value)}
                        className="mr-3 h-4 w-4 text-red-600 focus:ring-red-500"
                      />
                      <div>
                        <div className="font-medium text-red-700">
                          Reject Application
                        </div>
                        <div className="text-sm text-red-600">
                          Insufficient evidence or non-compliance
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {auditorDecision === "custom" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Custom Credit Amount
                    </label>
                    <input
                      type="number"
                      value={creditAdjustment}
                      onChange={(e) => {
                        setCreditAdjustment(e.target.value);
                        setFinalCredits(e.target.value);
                      }}
                      placeholder="Enter custom credit amount"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Final Credits to Mint
                  </label>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">
                      {finalCredits
                        ? parseInt(finalCredits).toLocaleString()
                        : "0"}{" "}
                      Credits
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Auditor Comments
                  </label>
                  <textarea
                    value={auditorComments}
                    onChange={(e) => setAuditorComments(e.target.value)}
                    placeholder="Add your verification notes and comments..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Blockchain Signature */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Digital Signature
              </h3>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-2">
                  <Globe className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-blue-800">
                    Blockchain Logging
                  </span>
                </div>
                <p className="text-sm text-blue-700">
                  Your verification decision will be permanently recorded on the
                  blockchain for transparency and immutability.
                </p>
              </div>

              <div className="text-sm text-gray-600 space-y-2">
                <div className="flex justify-between">
                  <span>Auditor ID:</span>
                  <span className="font-mono">AUD-2024-SC-001</span>
                </div>
                <div className="flex justify-between">
                  <span>Timestamp:</span>
                  <span>{new Date().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Hash:</span>
                  <span className="font-mono text-xs">0xa1b2c3d4...</span>
                </div>
              </div>
            </div>

            {/* Final Action */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <button
                disabled={
                  !auditorDecision ||
                  auditorDecision === "pending" ||
                  !auditorComments.trim()
                }
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                  auditorDecision &&
                  auditorDecision !== "pending" &&
                  auditorComments.trim()
                    ? "bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700 transform hover:scale-105"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                {auditorDecision === "reject" ? (
                  <>
                    <XCircle className="w-6 h-6 mr-2 inline" />
                    Reject & Log Decision
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-6 h-6 mr-2 inline" />
                    Approve & Mint Credits
                  </>
                )}
              </button>

              <div className="mt-4 text-center text-sm text-gray-500">
                This action will be permanently recorded on blockchain
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
            <div className="text-gray-600 text-sm">AI Confidence</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1.2s</div>
            <div className="text-gray-600 text-sm">Analysis Time</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">99.2%</div>
            <div className="text-gray-600 text-sm">Area Accuracy</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-gray-600 text-sm">Risk Factors</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditorVerificationPage;
