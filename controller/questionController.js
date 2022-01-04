import asyncHandler from 'express-async-handler'
import Question from '../models/questionModel.js';
import Paper from '../models/paperModel.js';


const addQuestion = asyncHandler(async(req,res) => {

    const { que, subject, topic, difficulty, marks } = req.body;

    const question = await Question.create({
        que,
        subject,
        topic,
        difficulty,
        marks 
    })

    if(question){
        res.json({
            _id : question._id,
            que : question.que,
            subject : question.subject,
            topic: question.topic,
            difficulty : question.difficulty,
            marks : question.marks
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid question')
    }
})

const makeQuestion = asyncHandler(async(req, res) => {
    const {  subject, topic, marksTotal, easyRatio, mediumRatio, hardRatio, esMrk, mdMrk, hdMrk } = req.query;

    const quessEasy = {  };

    //What we do is we define what easy,medium and haard questions have weightage (as in easy questions have 2 marks each)
    let easyn = (marksTotal * easyRatio)/100;
    let medn = (marksTotal * mediumRatio)/100;
    let hardn = (marksTotal * hardRatio)/100;

    let esQues = easyn/esMrk;
    let mdQues = medn/mdMrk;
    let hrdQues = hardn/ hdMrk;

    quessEasy.easy = await Question.find({subject: subject , topic: topic, difficulty: "Easy", marks:esMrk }).limit(esQues);
    quessEasy.medium =  await Question.find({subject: subject , topic: topic, difficulty: "Medium", marks:mdMrk }).limit(mdQues);
    quessEasy.hard = await Question.find({subject: subject , topic: topic, difficulty: "Hard", marks:hdMrk}).limit(hrdQues)

    if(quessEasy){
        res.json(quessEasy);
    }else{
        res.status(400)
        throw new Error('Invalid !!!!!!!')
    }
    // res.send({ quessEasy });
})

export { addQuestion, makeQuestion }

// ?subject=Physics&topic=Waves&marksTotal=100&easyRatio=20&mediumRatio=30&hardRatio=50&esMrk=2&mdMrk=3&hdMrk=5