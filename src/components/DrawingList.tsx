import React from 'react';

interface Drawing {
  id: string;
  title: string;
  description: string;
}

interface DrawingListProps {
  drawings: Drawing[];
  onDrawingClick: (drawing: Drawing) => void;
}

const DrawingList: React.FC<DrawingListProps> = ({ drawings, onDrawingClick }) => {
  return (
    <ul className="space-y-4">
      {drawings.map(drawing => (
        <li
          key={drawing.id}
          className="bg-white p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-indigo-50"
          onClick={() => onDrawingClick(drawing)}
        >
          <h3 className="text-lg font-semibold text-indigo-600">{drawing.title}</h3>
          <p className="text-gray-600 mt-2">{drawing.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default DrawingList;