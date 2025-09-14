import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  MapPin,
  DollarSign,
  TrendingUp,
  Shield,
  Leaf,
  Calendar,
  Users,
  Award,
  X,
  ChevronDown,
  ArrowUpRight,
  ArrowRightLeft,
  Trash2,
  Eye,
  CheckCircle,
  Star,
  Globe,
  Zap,
} from "lucide-react";

const CarbonMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    projectType: "all",
    location: "all",
    priceRange: "all",
    verificationStatus: "all",
  });

  // Mock data for carbon credit projects
  const projects = [
    {
      id: 1,
      name: "Sundarbans Mangrove Restoration",
      type: "Mangrove Restoration",
      location: "West Bengal, India",
      creditsAvailable: 12450,
      pricePerCredit: 45,
      totalValue: 560250,
      verificationBadge: "Gold Standard",
      rating: 4.9,
      description:
        "Large-scale mangrove restoration project in the Sundarbans delta, focusing on biodiversity conservation and coastal protection.",
      projectImage: "🌿",
      verificationDate: "2024-08-15",
      co2Stored: "12,450 tons",
      projectArea: "2,500 hectares",
      developer: "Sundarbans Conservation Trust",
      blockchain: "Verified on Ethereum",
      priceHistory: [40, 42, 44, 45, 43, 45],
      benefits: [
        "Biodiversity Conservation",
        "Coastal Protection",
        "Community Employment",
      ],
      sdgGoals: ["Climate Action", "Life Below Water", "Life on Land"],
      vintage: "2024",
    },
    {
      id: 2,
      name: "Chilika Lake Seagrass Conservation",
      type: "Seagrass Protection",
      location: "Odisha, India",
      creditsAvailable: 8920,
      pricePerCredit: 52,
      totalValue: 463840,
      verificationBadge: "VCS",
      rating: 4.7,
      description:
        "Seagrass meadow conservation and restoration in Asia's largest brackish water lagoon.",
      projectImage: "🌊",
      verificationDate: "2024-07-22",
      co2Stored: "8,920 tons",
      projectArea: "1,800 hectares",
      developer: "Marine Conservation Society",
      blockchain: "Verified on Polygon",
      priceHistory: [48, 50, 51, 52, 53, 52],
      benefits: ["Marine Biodiversity", "Fisheries Support", "Water Quality"],
      sdgGoals: ["Climate Action", "Life Below Water", "Clean Water"],
      vintage: "2024",
    },
    {
      id: 3,
      name: "Pulicat Lake Salt Marsh Recovery",
      type: "Salt Marsh",
      location: "Tamil Nadu, India",
      creditsAvailable: 5630,
      pricePerCredit: 38,
      totalValue: 213940,
      verificationBadge: "CAR",
      rating: 4.6,
      description:
        "Restoration of salt marsh ecosystems in Pulicat Lake, India's second largest brackish water lagoon.",
      projectImage: "🏞️",
      verificationDate: "2024-06-10",
      co2Stored: "5,630 tons",
      projectArea: "1,200 hectares",
      developer: "Coastal Restoration Initiative",
      blockchain: "Verified on BSC",
      priceHistory: [35, 36, 37, 38, 39, 38],
      benefits: ["Flood Control", "Wildlife Habitat", "Tourism"],
      sdgGoals: ["Climate Action", "Life Below Water", "Sustainable Cities"],
      vintage: "2024",
    },
    {
      id: 4,
      name: "Kerala Backwaters Blue Carbon",
      type: "Mangrove Restoration",
      location: "Kerala, India",
      creditsAvailable: 15200,
      pricePerCredit: 48,
      totalValue: 729600,
      verificationBadge: "Gold Standard",
      rating: 4.8,
      description:
        "Comprehensive blue carbon project in Kerala's famous backwater ecosystem with community participation.",
      projectImage: "🚤",
      verificationDate: "2024-09-05",
      co2Stored: "15,200 tons",
      projectArea: "3,200 hectares",
      developer: "Kerala Marine Foundation",
      blockchain: "Verified on Ethereum",
      priceHistory: [44, 45, 47, 48, 49, 48],
      benefits: ["Tourism Enhancement", "Fisheries", "Cultural Preservation"],
      sdgGoals: ["Climate Action", "Life Below Water", "Decent Work"],
      vintage: "2024",
    },
    {
      id: 5,
      name: "Goa Coastal Wetland Protection",
      type: "Wetland Conservation",
      location: "Goa, India",
      creditsAvailable: 7850,
      pricePerCredit: 42,
      totalValue: 329700,
      verificationBadge: "VCS",
      rating: 4.5,
      description:
        "Protection and restoration of coastal wetlands along Goa's pristine coastline.",
      projectImage: "🏖️",
      verificationDate: "2024-05-18",
      co2Stored: "7,850 tons",
      projectArea: "1,600 hectares",
      developer: "Goa Environmental Trust",
      blockchain: "Verified on Polygon",
      priceHistory: [39, 40, 41, 42, 43, 42],
      benefits: ["Water Filtration", "Storm Protection", "Recreation"],
      sdgGoals: ["Climate Action", "Clean Water", "Life Below Water"],
      vintage: "2024",
    },
    {
      id: 6,
      name: "Andaman Coral Reef Conservation",
      type: "Marine Conservation",
      location: "Andaman & Nicobar, India",
      creditsAvailable: 6740,
      pricePerCredit: 65,
      totalValue: 438100,
      verificationBadge: "Gold Standard",
      rating: 4.9,
      description:
        "Innovative coral reef restoration with blue carbon co-benefits in pristine Andaman waters.",
      projectImage: "🐠",
      verificationDate: "2024-08-30",
      co2Stored: "6,740 tons",
      projectArea: "900 hectares",
      developer: "Island Conservation Alliance",
      blockchain: "Verified on Ethereum",
      priceHistory: [60, 62, 63, 65, 66, 65],
      benefits: ["Marine Biodiversity", "Dive Tourism", "Research"],
      sdgGoals: ["Climate Action", "Life Below Water", "Responsible Tourism"],
      vintage: "2024",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.type.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      filters.projectType === "all" || project.type === filters.projectType;
    const matchesLocation =
      filters.location === "all" || project.location.includes(filters.location);
    const matchesPrice =
      filters.priceRange === "all" ||
      (filters.priceRange === "low" && project.pricePerCredit < 40) ||
      (filters.priceRange === "medium" &&
        project.pricePerCredit >= 40 &&
        project.pricePerCredit < 55) ||
      (filters.priceRange === "high" && project.pricePerCredit >= 55);

    return matchesSearch && matchesType && matchesLocation && matchesPrice;
  });

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleAction = (action) => {
    console.log(`${action} action for project:`, selectedProject?.name);
    closeModal();
  };

  const totalMarketValue = projects.reduce(
    (sum, project) => sum + project.totalValue,
    0
  );
  const totalCredits = projects.reduce(
    (sum, project) => sum + project.creditsAvailable,
    0
  );
  const avgPrice = totalMarketValue / totalCredits;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Leaf className="w-8 h-8 text-green-500 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Carbon Credits Marketplace
                </h1>
                <p className="text-gray-600">
                  Browse, buy, transfer, and retire verified blue carbon credits
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {totalCredits.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">Available Credits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  ₹{avgPrice.toFixed(0)}
                </div>
                <div className="text-sm text-gray-500">Avg Price/Credit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">
                  ₹{(totalMarketValue / 100000).toFixed(1)}L
                </div>
                <div className="text-sm text-gray-500">Market Value</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects, locations, or types..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <select
                value={filters.projectType}
                onChange={(e) =>
                  setFilters({ ...filters, projectType: e.target.value })
                }
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="Mangrove Restoration">Mangrove</option>
                <option value="Seagrass Protection">Seagrass</option>
                <option value="Salt Marsh">Salt Marsh</option>
                <option value="Wetland Conservation">Wetlands</option>
                <option value="Marine Conservation">Marine</option>
              </select>

              <select
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Locations</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Odisha">Odisha</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Goa">Goa</option>
                <option value="Andaman">Andaman</option>
              </select>

              <select
                value={filters.priceRange}
                onChange={(e) =>
                  setFilters({ ...filters, priceRange: e.target.value })
                }
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="low">Under ₹40</option>
                <option value="medium">₹40 - ₹55</option>
                <option value="high">Above ₹55</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProjects.length} of {projects.length} verified
            projects
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Project Image/Icon */}
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 text-center">
                <div className="text-6xl mb-4">{project.projectImage}</div>
                <div className="flex items-center justify-center">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Shield className="w-4 h-4 mr-1" />
                    {project.verificationBadge}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pr-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium text-gray-700 ml-1">
                      {project.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Available Credits</div>
                      <div className="font-bold text-gray-900">
                        {project.creditsAvailable.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500">Price per Credit</div>
                      <div className="font-bold text-blue-600">
                        ₹{project.pricePerCredit}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(project)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105"
                  >
                    Buy Credits
                  </button>
                  <button
                    onClick={() => openModal(project)}
                    className="bg-gray-100 text-gray-700 p-3 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center">
                <div className="text-4xl mr-4">
                  {selectedProject.projectImage}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedProject.name}
                  </h2>
                  <div className="flex items-center text-gray-600 mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{selectedProject.location}</span>
                    <div className="mx-3 w-1 h-1 bg-gray-400 rounded-full"></div>
                    <span className="text-sm">{selectedProject.type}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Project Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Project Overview
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Project Area:</span>
                      <span className="font-medium">
                        {selectedProject.projectArea}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">CO₂ Stored:</span>
                      <span className="font-medium text-green-600">
                        {selectedProject.co2Stored}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Developer:</span>
                      <span className="font-medium">
                        {selectedProject.developer}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Vintage:</span>
                      <span className="font-medium">
                        {selectedProject.vintage}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Verification & Pricing
                  </h3>

                  <div className="bg-green-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-semibold text-green-800">
                        Verified by {selectedProject.verificationBadge}
                      </span>
                    </div>
                    <div className="text-sm text-green-700">
                      Verified on: {selectedProject.verificationDate}
                    </div>
                    <div className="text-sm text-green-700">
                      {selectedProject.blockchain}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="text-center mb-3">
                      <div className="text-3xl font-bold text-blue-600">
                        ₹{selectedProject.pricePerCredit}
                      </div>
                      <div className="text-sm text-blue-700">per credit</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-gray-900">
                          {selectedProject.creditsAvailable.toLocaleString()}
                        </div>
                        <div className="text-gray-500">Available</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900">
                          ₹{selectedProject.totalValue.toLocaleString()}
                        </div>
                        <div className="text-gray-500">Total Value</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits and SDG Goals */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Co-benefits
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.benefits.map((benefit, index) => (
                      <span
                        key={index}
                        className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    SDG Alignment
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.sdgGoals.map((goal, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                      >
                        {goal}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="border-t border-gray-100 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button
                    onClick={() => handleAction("buy")}
                    className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center"
                  >
                    <ArrowUpRight className="w-5 h-5 mr-2" />
                    Buy Credits
                  </button>
                  <button
                    onClick={() => handleAction("transfer")}
                    className="bg-gray-100 text-gray-700 py-4 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center"
                  >
                    <ArrowRightLeft className="w-5 h-5 mr-2" />
                    Transfer
                  </button>
                  <button
                    onClick={() => handleAction("retire")}
                    className="bg-red-100 text-red-700 py-4 px-6 rounded-xl font-semibold hover:bg-red-200 transition-colors flex items-center justify-center"
                  >
                    <Trash2 className="w-5 h-5 mr-2" />
                    Retire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarbonMarketplace;
