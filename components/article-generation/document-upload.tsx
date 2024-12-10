"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useState } from "react";

export function DocumentUpload() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop
  };

  return (
    <Card 
      className={`p-6 border-2 border-dashed transition-colors ${
        isDragging ? 'border-purple-500 bg-purple-50' : 'border-gray-200'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
        <FileText className="w-10 h-10 text-purple-500 mb-4" />
        <h3 className="text-lg font-medium mb-2">Upload Your Document</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Drag and drop your document here, or click to browse
        </p>
        <Button 
          variant="outline" 
          className="bg-white hover:bg-purple-50"
          onClick={() => document.getElementById('document-upload')?.click()}
        >
          Choose File
        </Button>
        <input 
          id="document-upload"
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx,.txt,.rtf"
          onChange={(e) => {
            // Handle file selection
          }}
        />
        <p className="mt-2 text-xs text-muted-foreground">
          Supported formats: PDF, DOC, DOCX, TXT, RTF (max. 10MB)
        </p>
      </div>
    </Card>
  );
}