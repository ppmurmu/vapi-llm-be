//const OpenAI = require("openai");
const express = require('express');
const axios = require('axios');


require('dotenv').config();
const cors = require('cors'); 
const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json());



// const openai = new OpenAI({
//   apiKey: process.env.CHATGPT_API_KEY
// });







app.get('/chat/completions', async (req, res) => {

    try{
       console.log( req.body);
     
      res.json({ success: true, response: "good" });
    }catch(error)  {
        return res.status(401).json({ error: 'got error' });
    };
});


  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });