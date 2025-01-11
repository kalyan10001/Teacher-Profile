import React from "react";

const TeacherDropdown = ({ teachers, onSelect }) => {
  return (
    <div className="w-full max-w-md mx-auto mb-4">
      <select
        className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">Select a Teacher</option>
        {teachers.map((teacher) => (
          <option key={teacher.id} value={teacher.id}>
            {teacher.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TeacherDropdown;
