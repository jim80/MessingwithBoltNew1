import React, { useState, useEffect } from 'react';
import DrawingList from './components/DrawingList';
import DrawingCard from './components/DrawingCard';
import SearchForm from './components/SearchForm';

interface Drawing {
  id: string;
  title: string;
  description: string;
  project: string;
  category: string;
  uploaded_date: string;
  file_url: string;
}

function App() {
  const [drawings, setDrawings] = useState<Drawing[]>([]);
  const [filteredDrawings, setFilteredDrawings] = useState<Drawing[]>([]);
  const [selectedDrawing, setSelectedDrawing] = useState<Drawing | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://65ea11eec9bf92ae3d3b07d0.mockapi.io/api/v1/documents')
      .then(response => response.json())
      .then(data => {
        setDrawings(data);
        setFilteredDrawings(data);
      })
      .catch(error => console.error('Error fetching drawings:', error));
  }, []);

  useEffect(() => {
    const filtered = drawings.filter(drawing =>
      drawing.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDrawings(filtered);
  }, [searchTerm, drawings]);

  const handleDrawingClick = (drawing: Drawing) => {
    setSelectedDrawing(drawing);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-indigo-600">Drawing Gallery</h1>
        <SearchForm onSearch={handleSearch} />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <DrawingList drawings={filteredDrawings} onDrawingClick={handleDrawingClick} />
          </div>
          <div className="w-full md:w-1/2">
            {selectedDrawing && <DrawingCard drawing={selectedDrawing} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;