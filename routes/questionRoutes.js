import express from 'express';
import { addQuestion, makeQuestion } from '../controller/questionController.js';


const router = express.Router();

router.route('/').post(addQuestion);
router.route('/qp').get(makeQuestion);

export default router;