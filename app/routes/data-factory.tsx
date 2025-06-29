import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Upload, Download, Play, CheckCircle, Clock } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Data Factory - Lattice" },
    {
      name: "description",
      content: "Robot Data Factory: teach your robot a new task simply by recording a human demo of the task.",
    },
  ];
};

const robotOptions = [
  { value: "so-100", label: "SO-100" },
  { value: "so-101", label: "SO-101" },
  { value: "aloha", label: "ALOHA" },
  { value: "stretch", label: "Stretch Robot" },
  { value: "other", label: "Other" },
];

const processingSteps = [
  {
    id: 1,
    title: "Hand & object tracing",
    description: "Detecting and tracking human hands and objects in the video",
    icon: "👋",
  },
  {
    id: 2,
    title: "Inverse kinematics",
    description: "Converting hand movements to robot joint positions and actions",
    icon: "🤖",
  },
  {
    id: 3,
    title: "Hand to end-effector conversion",
    description: "Mapping human hand actions to robot end-effector movements",
    icon: "🔄",
  },
  {
    id: 4,
    title: "Imitation learning",
    description: "Training the model to replicate the demonstrated task",
    icon: "🧠",
  },
];

export default function DataFactory() {
  const [selectedRobot, setSelectedRobot] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessingComplete, setIsProcessingComplete] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("video/")) {
      setUploadedFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const startProcessing = () => {
    if (!uploadedFile || !selectedRobot) return;
    
    setIsProcessing(true);
    setCurrentStep(1);
    
    // Simulate processing steps
    const stepDuration = 2000; // 2 seconds per step
    processingSteps.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index + 1);
        if (index === processingSteps.length - 1) {
          setTimeout(() => {
            setIsProcessingComplete(true);
          }, stepDuration);
        }
      }, index * stepDuration);
    });
  };

  const handleNext = () => {
    setIsProcessing(false);
    setIsProcessingComplete(false);
    setIsComplete(true);
  };

  return (
    <div className="min-h-screen bg-transparent text-text dark:text-text-dark">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Robot Data Factory
          </h1>
          <p className="text-xl text-text dark:text-text-dark max-w-3xl mx-auto">
            Teach your robot a new task simply by recording a human demo of the task.
          </p>
        </div>

        {/* Upload Section */}
        {!isProcessing && !isComplete && (
          <div className="max-w-2xl mx-auto space-y-8">
            {/* File Upload */}
            <div className="space-y-4">
              <label className="block text-lg font-medium text-text dark:text-text-dark">
                Upload Demo Video
              </label>
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                <Upload className="mx-auto h-12 w-12 text-text dark:text-text-dark mb-4" />
                {uploadedFile ? (
                  <div>
                    <p className="text-green-400 font-medium">{uploadedFile.name}</p>
                    <p className="text-sm text-text dark:text-text-dark">Click to change file</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-text dark:text-text-dark mb-2">Drag and drop your video here, or click to select</p>
                    <p className="text-sm text-text dark:text-text-dark">Supports MP4, MOV, AVI files</p>
                  </div>
                )}
                <input
                  id="file-upload"
                  type="file"
                  accept="video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            </div>

            {/* Robot Selection */}
            <div className="space-y-4">
              <label className="block text-lg font-medium text-text dark:text-text-dark">
                Select Robot Hardware
              </label>
              <select
                value={selectedRobot}
                onChange={(e) => setSelectedRobot(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose your robot...</option>
                {robotOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Process Button */}
            <button
              onClick={startProcessing}
              disabled={!uploadedFile || !selectedRobot}
              className="w-full py-4 px-6 bg-primary text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Play className="h-5 w-5" />
              Start Processing
            </button>
          </div>
        )}

        {/* Processing Steps */}
        {isProcessing && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-text dark:text-text-dark">Processing Your Demo...</h2>
            <div className="space-y-6">
              {processingSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center p-6 rounded-lg border transition-all duration-500 ${
                    currentStep > index
                      ? "bg-primary/20 border-primary"
                      : currentStep === index + 1
                      ? "bg-primary/30 border-primary"
                      : "bg-primary/10 border-primary/50"
                  }`}
                >
                  <div className="text-3xl mr-4">{step.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text dark:text-text-dark">{step.title}</h3>
                    <p className="text-text dark:text-text-dark opacity-75">{step.description}</p>
                  </div>
                  <div className="ml-4">
                    {currentStep > index ? (
                      <CheckCircle className="h-6 w-6 text-white" />
                    ) : currentStep === index + 1 ? (
                      <Clock className="h-6 w-6 text-blue-500 animate-spin" />
                    ) : (
                      <div className="h-6 w-6 rounded-full border-2 border-gray-400"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Next Button - appears when processing is complete */}
            {isProcessingComplete && (
              <div className="text-center mt-8">
                <button
                  onClick={handleNext}
                  className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-all duration-200"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}

        {/* Completion */}
        {isComplete && (
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
              <h2 className="text-3xl font-bold text-green-600">Processing Complete!</h2>
              <p className="text-text dark:text-text-dark">
                Your robot model has been successfully trained and is ready for download.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-all duration-200">
              <Download className="h-5 w-5" />
              Download Trained Model
            </button>

            <button
              onClick={() => {
                setUploadedFile(null);
                setSelectedRobot("");
                setIsComplete(false);
                setIsProcessingComplete(false);
                setCurrentStep(0);
              }}
              className="block mx-auto text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark underline"
            >
              Process Another Demo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
