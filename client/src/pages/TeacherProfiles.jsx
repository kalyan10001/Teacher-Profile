import React, { useState, useEffect } from "react";
import TeacherDropdown from "../components/TeacherDropdown";
import TeacherProfile from "./TeacherProfile";
import axios from "axios";

const TeacherProfiles = () => {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/teachers");
        setTeachers(response.data); 
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };
  
    fetchTeachers();
  }, []);
  
  const handleSelect = (id) => {
    const teacher = teachers.find((t) => t.id === id);
    setSelectedTeacher(teacher);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mb-6">Teacher Profiles</h1>
        <TeacherDropdown teachers={teachers} onSelect={handleSelect} />
        <TeacherProfile teacher={selectedTeacher} />
      </div>
    </div>
  );
};

export default TeacherProfiles;
