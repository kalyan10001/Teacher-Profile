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
          alt="Teacher pic"
          className="rounded-full w-24 h-24 mb-4 md:mr-6 md:mb-0"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800">{teacher.name}</h2>
          <p className="text-gray-600 mt-2">{teacher.bio || "No bio available."}</p>
          <div className="mt-4">
            <p className="text-gray-700">
              <strong>Subject:</strong> {teacher.subject || "Not specified"}
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> {teacher.email || "Not provided"}
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> {teacher.phone || "Not provided"}
            </p>
            <p className="text-gray-700">
              <strong>Experience:</strong> {teacher.experience || "Not mentioned"}
            </p>
            <p className="text-gray-700">
              <strong>Classes:</strong>{" "}
              {teacher.classesHandled?.length > 0
                ? teacher.classesHandled.join(", ")
                : "No classes specified"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
