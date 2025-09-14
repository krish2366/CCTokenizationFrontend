import React, { useState, useEffect } from "react";
import {
  Shield,
  Eye,
  Bot,
  CheckCircle,
  XCircle,
  Clock,
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
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  MoreVertical,
  Award,
  Globe,
  ArrowUpDown,
  Download,
  RefreshCw,
  Star,
  Flag,
  Users,
  DollarSign,
} from "lucide-react";

const AuditorDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("submission_date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [currentView, setCurrentView] = useState("table"); // table or grid

  // Mock pending projects data
  const pendingProjects = [
    {
      id: 1,
      name: "Sundarbans Mangrove Restoration",
      type: "Mangrove Restoration",
      location: "West Bengal, India",
      developer: "Sundarbans Conservation Trust",
      submissionDate: "2024-09-15",
      daysWaiting: 3,
      projectArea: 2500,
      creditsRequested: 12450,
      pricePerCredit: 45,
      status: "AI Analysis Complete",
      priority: "High",
      aiConfidence: 94,
      estimatedCredits: 11890,
      discrepancy: -560,
      completeness: 95,
      supportingDocs: 6,
      droneImages: 8,
      riskLevel: "Low",
      complexity: "Medium",
    },
    {
      id: 2,
      name: "Kerala Backwaters Blue Carbon",
      type: "Mangrove Restoration",
      location: "Kerala, India",
      developer: "Kerala Marine Foundation",
      submissionDate: "2024-09-12",
      daysWaiting: 6,
      projectArea: 3200,
      creditsRequested: 15200,
      pricePerCredit: 48,
      status: "Document Review",
      priority: "Medium",
      aiConfidence: null,
      estimatedCredits: null,
      discrepancy: null,
      completeness: 78,
      supportingDocs: 4,
      droneImages: 12,
      riskLevel: "Medium",
      complexity: "High",
    },
    {
      id: 3,
      name: "Chilika Lake Seagrass Conservation",
      type: "Seagrass Protection",
      location: "Odisha, India",
      developer: "Marine Conservation Society",
      submissionDate: "2024-09-10",
      daysWaiting: 8,
      projectArea: 1800,
      creditsRequested: 8920,
      pricePerCredit: 52,
      status: "Ready for Review",
      priority: "High",
      aiConfidence: 89,
      estimatedCredits: 8650,
      discrepancy: -270,
      completeness: 92,
      supportingDocs: 8,
      droneImages: 15,
      riskLevel: "Low",
      complexity: "Medium",
    },
    {
      id: 4,
      name: "Pulicat Lake Salt Marsh Recovery",
      type: "Salt Marsh",
      location: "Tamil Nadu, India",
      developer: "Coastal Restoration Initiative",
      submissionDate: "2024-09-08",
      daysWaiting: 10,
      projectArea: 1200,
      creditsRequested: 5630,
      pricePerCredit: 38,
      status: "Initial Submission",
      priority: "Low",
      aiConfidence: null,
      estimatedCredits: null,
      discrepancy: null,
      completeness: 65,
      supportingDocs: 3,
      droneImages: 6,
      riskLevel: "Medium",
      complexity: "Low",
    },
    {
      id: 5,
      name: "Goa Coastal Wetland Protection",
      type: "Wetland Conservation",
      location: "Goa, India",
      developer: "Goa Environmental Trust",
      submissionDate: "2024-09-14",
      daysWaiting: 4,
      projectArea: 1600,
      creditsRequested: 7850,
      pricePerCredit: 42,
      status: "AI Analysis Complete",
      priority: "Medium",
      aiConfidence: 91,
      estimatedCredits: 7200,
      discrepancy: -650,
      completeness: 88,
      supportingDocs: 5,
      droneImages: 9,
      riskLevel: "Low",
      complexity: "Medium",
    },
    {
      id: 6,
      name: "Andaman Coral Reef Conservation",
      type: "Marine Conservation",
      location: "Andaman & Nicobar, India",
      developer: "Island Conservation Alliance",
      submissionDate: "2024-09-07",
      daysWaiting: 11,
      projectArea: 900,
      creditsRequested: 6740,
      pricePerCredit: 65,
      status: "Compliance Review",
      priority: "High",
      aiConfidence: 96,
      estimatedCredits: 6740,
      discrepancy: 0,
      completeness: 100,
      supportingDocs: 12,
      droneImages: 20,
      riskLevel: "Low",
      complexity: "High",
    },
  ];

  const filteredProjects = pendingProjects
    .filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.developer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.type.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || project.status === statusFilter;
      const matchesPriority =
        priorityFilter === "all" || project.priority === priorityFilter;

      return matchesSearch && matchesStatus && matchesPriority;
    })
    .sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case "submission_date":
          aValue = new Date(a.submissionDate);
          bValue = new Date(b.submissionDate);
          break;
        case "credits_requested":
          aValue = a.creditsRequested;
          bValue = b.creditsRequested;
          break;
        case "days_waiting":
          aValue = a.daysWaiting;
          bValue = b.daysWaiting;
          break;
        case "priority":
          const priorityOrder = { High: 3, Medium: 2, Low: 1 };
          aValue = priorityOrder[a.priority];
          bValue = priorityOrder[b.priority];
          break;
        case "ai_confidence":
          aValue = a.aiConfidence || 0;
          bValue = b.aiConfidence || 0;
          break;
        default:
          aValue = a[sortBy];
          bValue = b[sortBy];
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  const handleProjectSelect = (projectId) => {
    setSelectedProjects((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "AI Analysis Complete":
        return "bg-green-100 text-green-800";
      case "Ready for Review":
        return "bg-blue-100 text-blue-800";
      case "Document Review":
        return "bg-yellow-100 text-yellow-800";
      case "Compliance Review":
        return "bg-purple-100 text-purple-800";
      case "Initial Submission":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case "Low":
        return "text-green-600";
      case "Medium":
        return "text-yellow-600";
      case "High":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const totalCreditsRequested = filteredProjects.reduce(
    (sum, project) => sum + project.creditsRequested,
    0
  );
  const avgProcessingTime = Math.round(
    filteredProjects.reduce((sum, project) => sum + project.daysWaiting, 0) /
      filteredProjects.length
  );
  const highPriorityCount = filteredProjects.filter(
    (p) => p.priority === "High"
  ).length;
  const aiAnalysisComplete = filteredProjects.filter(
    (p) => p.aiConfidence !== null
  ).length;

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
                  Auditor Dashboard
                </h1>
                <p className="text-gray-600">
                  Manage pending carbon credit verifications
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {filteredProjects.length}
                  </div>
                  <div className="text-sm text-gray-500">Pending</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">
                    {highPriorityCount}
                  </div>
                  <div className="text-sm text-gray-500">High Priority</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {avgProcessingTime}
                  </div>
                  <div className="text-sm text-gray-500">Avg Days</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">
                    Dr. Sarah Chen
                  </div>
                  <div className="text-sm text-gray-500">Senior Auditor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {filteredProjects.length}
                </div>
                <div className="text-gray-600 text-sm">Total Projects</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {totalCreditsRequested.toLocaleString()}
                </div>
                <div className="text-gray-600 text-sm">Credits Requested</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100">
                <Bot className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {aiAnalysisComplete}
                </div>
                <div className="text-gray-600 text-sm">AI Analysis Done</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-100">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {avgProcessingTime}
                </div>
                <div className="text-gray-600 text-sm">Avg Wait Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="flex-1 relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects, developers, locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="Initial Submission">Initial Submission</option>
                <option value="Document Review">Document Review</option>
                <option value="AI Analysis Complete">
                  AI Analysis Complete
                </option>
                <option value="Ready for Review">Ready for Review</option>
                <option value="Compliance Review">Compliance Review</option>
              </select>

              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Priority</option>
                <option value="High">High Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="Low">Low Priority</option>
              </select>

              <button className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-5 h-5" />
              </button>

              <button className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort("name")}
                      className="flex items-center text-sm font-semibold text-gray-700 hover:text-blue-600"
                    >
                      Project Details
                      <ArrowUpDown className="w-4 h-4 ml-1" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort("submission_date")}
                      className="flex items-center text-sm font-semibold text-gray-700 hover:text-blue-600"
                    >
                      Submission
                      <ArrowUpDown className="w-4 h-4 ml-1" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort("credits_requested")}
                      className="flex items-center text-sm font-semibold text-gray-700 hover:text-blue-600"
                    >
                      Credits
                      <ArrowUpDown className="w-4 h-4 ml-1" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort("ai_confidence")}
                      className="flex items-center text-sm font-semibold text-gray-700 hover:text-blue-600"
                    >
                      AI Analysis
                      <ArrowUpDown className="w-4 h-4 ml-1" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort("priority")}
                      className="flex items-center text-sm font-semibold text-gray-700 hover:text-blue-600"
                    >
                      Priority
                      <ArrowUpDown className="w-4 h-4 ml-1" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedProjects.includes(project.id)}
                        onChange={() => handleProjectSelect(project.id)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">
                          {project.name}
                        </div>
                        <div className="text-sm text-gray-600 flex items-center mb-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {project.location}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {project.developer}
                        </div>
                        <div className="text-xs text-blue-600 mt-1">
                          {project.type}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {project.submissionDate}
                      </div>
                      <div className="text-xs text-gray-500">
                        {project.daysWaiting} days ago
                      </div>
                      {project.daysWaiting > 7 && (
                        <div className="text-xs text-red-600 flex items-center mt-1">
                          <Clock className="w-3 h-3 mr-1" />
                          Overdue
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-gray-900">
                        {project.creditsRequested.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">
                        {project.projectArea.toLocaleString()} ha
                      </div>
                      <div className="text-xs text-green-600">
                        ₹{project.pricePerCredit}/credit
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {project.aiConfidence ? (
                        <div>
                          <div className="flex items-center mb-1">
                            <Bot className="w-4 h-4 text-blue-600 mr-1" />
                            <span className="text-sm font-semibold text-green-600">
                              {project.aiConfidence}%
                            </span>
                          </div>
                          <div className="text-xs text-gray-600">
                            Est: {project.estimatedCredits?.toLocaleString()}
                          </div>
                          {project.discrepancy !== 0 && (
                            <div className="text-xs text-red-600">
                              Δ {project.discrepancy}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-sm text-gray-400">Pending</div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {project.completeness}% complete
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div
                          className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                            project.priority
                          )}`}
                        >
                          {project.priority}
                        </div>
                        <div
                          className={`ml-2 text-xs ${getRiskColor(
                            project.riskLevel
                          )}`}
                        >
                          {project.riskLevel} Risk
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            (window.location.href = "#verification")
                          }
                          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                          title="Review Project"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="bg-gray-100 text-gray-600 p-2 rounded-lg hover:bg-gray-200 transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Batch Actions */}
        {selectedProjects.length > 0 && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-lg flex items-center space-x-4">
            <span className="font-semibold">
              {selectedProjects.length} projects selected
            </span>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-colors">
              Bulk Review
            </button>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-colors">
              Export Data
            </button>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-colors">
              Assign Priority
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuditorDashboard;
