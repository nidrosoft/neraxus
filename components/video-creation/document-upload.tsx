"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload } from "lucide-react";
import { useState } from "react";

interface DocumentUploadProps {
  onUpload?: (file: File) => void;
}

export function DocumentUpload({ onUpload }: DocumentUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
    
    const file = e.dataTransfer.files[0];
    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
      'application/rtf'
    ];
    
    if (file && validTypes.includes(file.type)) {
      setSelectedFile(file);
      onUpload?.(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onUpload?.(file);
    }
  };

  return (
    <Card 
      className={`p-6 border-2 border-dashed transition-colors ${
        isDragging ? 'border-purple-500 bg-purple-50/50' : 'border-gray-200'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
        {selectedFile ? (
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
              <FileText className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <p className="font-medium">{selectedFile.name}</p>
              <p className="text-sm text-muted-foreground">
                {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
            <Button
              variant="outline"
              className="bg-white hover:bg-purple-50"
              onClick={() => {
                setSelectedFile(null);
                onUpload?.(null as any);
              }}
            >
              Choose Different File
            </Button>
          </div>
        ) : (
          <>
            <Upload className="w-10 h-10 text-purple-500 mb-4" />
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
              onChange={handleFileSelect}
            />
            <p className="mt-4 text-xs text-muted-foreground">
              Supported formats: PDF, DOC, DOCX, TXT, RTF (max. 10MB)
            </p>
          </>
        )}
      </div>
    </Card>
  );
}