import React from 'react';
import { Calendar, Folder, Tag, FileImage } from 'lucide-react';

interface Drawing {
  id: string;
  title: string;
  description: string;
  project: string;
  category: string;
  uploaded_date: string;
  file_url: string;
}

interface DrawingCardProps {
  drawing: Drawing;
}

const DrawingCard: React.FC<DrawingCardProps> = ({ drawing }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">{drawing.title}</h2>
      <p className="text-gray-600 mb-4">{drawing.description}</p>
      <div className="space-y-2">
        <div className="flex items-center">
          <Folder className="w-5 h-5 text-indigo-500 mr-2" />
          <span className="text-gray-700">Project: {drawing.project}</span>
        </div>
        <div className="flex items-center">
          <Tag className="w-5 h-5 text-indigo-500 mr-2" />
          <span className="text-gray-700">Category: {drawing.category}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-5 h-5 text-indigo-500 mr-2" />
          <span className="text-gray-700">Uploaded: {new Date(drawing.uploaded_date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center">
          <FileImage className="w-5 h-5 text-indigo-500 mr-2" />
          <a href={drawing.file_url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
            View File
          </a>
        </div>
      </div>
    </div>
  );
};

export default DrawingCard;