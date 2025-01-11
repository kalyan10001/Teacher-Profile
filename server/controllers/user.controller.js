import { User } from "../db-schema/user.schema.js";

const teacherData = [
  {
    id: "T001",
    name: "Ram Kumar",
    subject: "Mathematics",
    email: "ram.kumar@example.com",
    phone: 9876543210,
    profilePicture: "ram_profile.jpg",
    bio: "Passionate about teaching Mathematics.",
    experience: "5 years",
    classesHandled: ["Class 10", "Class 12"],
  },
  {
    id: "T002",
    name: "Kiran Reddy",
    subject: "Physics",
    email: "kiran.reddy@example.com",
    phone: 9876543211,
    profilePicture: "kiran_profile.jpg",
    bio: "Physics enthusiast with 7 years of experience.",
    experience: "7 years",
    classesHandled: ["Class 11", "Class 12"],
  },
  {
    id: "T003",
    name: "Ganesh Rao",
    subject: "Chemistry",
    email: "ganesh.rao@example.com",
    phone: 9876543212,
    profilePicture: "ganesh_profile.jpg",
    bio: "Dedicated Chemistry teacher.",
    experience: "8 years",
    classesHandled: ["Class 9", "Class 10"],
  },
  {
    id: "T004",
    name: "Lakshmi Devi",
    subject: "Biology",
    email: "lakshmi.devi@example.com",
    phone: 9876543213,
    profilePicture: "lakshmi_profile.jpg",
    bio: "Expert in Botany and Zoology.",
    experience: "6 years",
    classesHandled: ["Class 11", "Class 12"],
  },
  {
    id: "T005",
    name: "Ravi Teja",
    subject: "English",
    email: "ravi.teja@example.com",
    phone: 9876543214,
    profilePicture: "ravi_profile.jpg",
    bio: "Specialized in English Literature.",
    experience: "4 years",
    classesHandled: ["Class 8", "Class 10"],
  },
  {
    id: "T006",
    name: "Sita Ram",
    subject: "Telugu",
    email: "sita.ram@example.com",
    phone: 9876543215,
    profilePicture: "sita_profile.jpg",
    bio: "Dedicated Telugu teacher.",
    experience: "10 years",
    classesHandled: ["Class 9", "Class 10"],
  },
  {
    id: "T007",
    name: "Anjali Naidu",
    subject: "Social Studies",
    email: "anjali.naidu@example.com",
    phone: 9876543216,
    profilePicture: "anjali_profile.jpg",
    bio: "History and Civics expert.",
    experience: "3 years",
    classesHandled: ["Class 6", "Class 8"],
  },
  {
    id: "T008",
    name: "Naveen Chandra",
    subject: "Computer Science",
    email: "naveen.chandra@example.com",
    phone: 9876543217,
    profilePicture: "naveen_profile.jpg",
    bio: "Programming and IT specialist.",
    experience: "5 years",
    classesHandled: ["Class 11", "Class 12"],
  },
  {
    id: "T009",
    name: "Rohit Sharma",
    subject: "Physical Education",
    email: "rohit.sharma@example.com",
    phone: 9876543218,
    profilePicture: "rohit_profile.jpg",
    bio: "Expert in fitness and physical education.",
    experience: "7 years",
    classesHandled: ["Class 6", "Class 7"],
  },
  {
    id: "T010",
    name: "Mahesh Babu",
    subject: "Economics",
    email: "mahesh.babu@example.com",
    phone: 9876543219,
    profilePicture: "mahesh_profile.jpg",
    bio: "Economics teacher with a strong background in finance.",
    experience: "9 years",
    classesHandled: ["Class 11", "Class 12"],
  },
];


const InsertData=async()=>{
  try{
     const dataa=await User.insertMany(teacherData);
     console.log(dataa);
  }catch(err){
    console.log(err);
  }
}

const deleteAllUsers = async () => {
  try {
    await User.deleteMany({});
    console.log("All users deleted successfully.");
  } catch (err) {
    console.log("Error deleting users:", err);
  }
};


export const GetTeachers=async(req,res)=>{
    // await  InsertData();
  //  await  deleteAllUsers();
     
    const response=await User.find({});
    res.status(200).json(response);
}