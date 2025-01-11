import { User } from "../db-schema/user.schema.js";

const data = [
  {
    id: "T001",
    name: "Ram Kumar",
    Subject: "Mathematics",
    email: "ram.kumar@example.com",
    phone: 9876543210,
    profilepicture: "ram_profile.jpg",
    bio: "Passionate about teaching Mathematics.",
    experience: "5 years",
    classeshandled: ["Class 10", "Class 12"]
  },
  {
    id: "T002",
    name: "Kiran Reddy",
    Subject: "Physics",
    email: "kiran.reddy@example.com",
    phone: 9876543211,
    profilepicture: "kiran_profile.jpg",
    bio: "Physics enthusiast with 7 years of experience.",
    experience: "7 years",
    classeshandled: ["Class 11", "Class 12"]
  },
  {
    id: "T003",
    name: "Ganesh Rao",
    Subject: "Chemistry",
    email: "ganesh.rao@example.com",
    phone: 9876543212,
    profilepicture: "ganesh_profile.jpg",
    bio: "Dedicated Chemistry teacher.",
    experience: "8 years",
    classeshandled: ["Class 9", "Class 10"]
  },
  {
    id: "T004",
    name: "Lakshmi Devi",
    Subject: "Biology",
    email: "lakshmi.devi@example.com",
    phone: 9876543213,
    profilepicture: "lakshmi_profile.jpg",
    bio: "Expert in Botany and Zoology.",
    experience: "6 years",
    classeshandled: ["Class 11", "Class 12"]
  },
  {
    id: "T005",
    name: "Ravi Teja",
    Subject: "English",
    email: "ravi.teja@example.com",
    phone: 9876543214,
    profilepicture: "ravi_profile.jpg",
    bio: "Specialized in English Literature.",
    experience: "4 years",
    classeshandled: ["Class 8", "Class 10"]
  },
  {
    id: "T006",
    name: "Sita Ram",
    Subject: "Telugu",
    email: "sita.ram@example.com",
    phone: 9876543215,
    profilepicture: "sita_profile.jpg",
    bio: "Dedicated Telugu teacher.",
    experience: "10 years",
    classeshandled: ["Class 9", "Class 10"]
  },
  {
    id: "T007",
    name: "Anjali Naidu",
    Subject: "Social Studies",
    email: "anjali.naidu@example.com",
    phone: 9876543216,
    profilepicture: "anjali_profile.jpg",
    bio: "History and Civics expert.",
    experience: "3 years",
    classeshandled: ["Class 6", "Class 8"]
  },
  {
    id: "T008",
    name: "Naveen Chandra",
    Subject: "Computer Science",
    email: "naveen.chandra@example.com",
    phone: 9876543217,
    profilepicture: "naveen_profile.jpg",
    bio: "Programming and IT specialist.",
    experience: "5 years",
    classeshandled: ["Class 11", "Class 12"]
  },
  {
    id: "T009",
    name: "Rohit Sharma",
    Subject: "Physical Education",
    email: "rohit.sharma@example.com",
    phone: 9876543218,
    profilepicture: "rohit_profile.jpg",
    bio: "Expert in fitness and physical education.",
    experience: "7 years",
    classeshandled: ["Class 6", "Class 7"]
  },
  {
    id: "T010",
    name: "Mahesh Babu",
    Subject: "Economics",
    email: "mahesh.babu@example.com",
    phone: 9876543219,
    profilepicture: "mahesh_profile.jpg",
    bio: "Economics teacher with a strong background in finance.",
    experience: "9 years",
    classeshandled: ["Class 11", "Class 12"]
  }
];

const InsertData=async()=>{
  try{
     await User.insertMany(data);
  }catch(err){
    console.log(err);
  }
}
export const GetTeachers=async(req,res)=>{
    console.log("home page");
    await InsertData();
    res.send(data);
}