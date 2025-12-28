import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();

//Middleware

app.use(cors());
app.use(express.json());

//API KEYS
const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const ESV_API_KEY = process.env.ESV_API_KEY;

app.get("/", (req, res) =>{
    res.send("Bible Verse Finder");
})


app.post("/api/search", async (req, res) => {
    let fail = false;

    const { topic } = req.body;
    let finalQuery = topic;

    try{
        const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });
        const result = await model.generateContent(
            `You are a biblical scholar. The user is feeling: ${topic}. 
            Provide the 5 most relevant Bible verse references (book, chapter, and verse). 
            Respond ONLY with the references separated by commas. Example: John 3:16, Romans 8:28, Psalm 23:1`
        );
        const aiResponse = await result.response;
        finalQuery = aiResponse.text().trim();
        console.log("Gemini suggested keywords:", finalQuery);


    }catch(error){
        console.log(`GEMINI ERROR OCCOURED: ${error}`);
        fail = true;
    }

    //Ask ESV API for verses containing the keywords from 'finalQuery'
    if(fail === false){
        try{
            const esvResponse = await axios.get(`https://api.esv.org/v3/passage/html/`, {
                params: {q: finalQuery, 'include-headings': false, 'include-footnotes': false},
                headers: {'Authorization': `Token ${ESV_API_KEY}`}
            });
            res.json(esvResponse.data);
        }catch(error){
            res.status(500).json({error: "Failed to fetch from ESV."});
        }
    }else{
        res.status(500).json({error: "AI processing failed. Please try again later."});
    }
});

app.set("port", process.env.PORT || 3000);
app.listen(app.get('port'), ()=> {
    console.log(`Running server on port ${app.get('port')}`);
});