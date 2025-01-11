import { GetTeachers } from '../controllers/user.controller.js';
import express from 'express';
const router=express.Router();

router.get("/teachers",GetTeachers);

export default router;