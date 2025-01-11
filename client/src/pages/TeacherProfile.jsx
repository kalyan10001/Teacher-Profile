import React from "react";

const TeacherProfile = ({ teacher }) => {
  if (!teacher) {
    return (
      <div className="text-center text-gray-500">
        Select a teacher to see their profile.
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src={teacher.profilePicture}
          alt="Teacher"
          className="rounded-full w-24 h-24 mb-4 md:mr-6 md:mb-0"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800">{teacher.name}</h2>
          <p className="text-gray-600 mt-2">{teacher.bio}</p>
          <div className="mt-4">
            <p className="text-gray-700"><strong>Subject:</strong> {teacher.subject}</p>
            <p className="text-gray-700"><strong>Email:</strong> {teacher.email}</p>
            <p className="text-gray-700"><strong>Phone:</strong> {teacher.phone}</p>
            <p className="text-gray-700"><strong>Experience:</strong> {teacher.experience}</p>
            <p className="text-gray-700"><strong>Classes:</strong> {teacher.classesHandled.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
