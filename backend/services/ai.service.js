import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
  //apiVersion: "v1",  latest stable
});

export async function generateContent(prompt) {
  try {
      const response = await ai.models.generateContent({
     model: "gemini-2.5-flash",
     contents: "Write a code of add two number in java using integer",
   });
   console.log(response.text); 
   return response.text;
  } catch (error) {
    console.error("❌ Error generating content:", error);
    // return JSON.stringify({
      // text: 
      return "An error occurred while generating content";
    // });
  // }
  }
}



// import { GoogleGenAI } from "@google/genai";
//  import "dotenv/config";

// const ai = new GoogleGenAI({
//     apiKey : process.env.GOOGLE_API_KEY
// });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "How does AI work?",
//   });
//   console.log(response.text);
// }

// await main();


// import { GoogleGenAI } from "@google/genai";
// import "dotenv/config";

// const ai = new GoogleGenAI({
//   apiKey: process.env.GOOGLE_API_KEY,
//   apiVersion: "v1", // latest stable
// });

// export async function generateContent(prompt) {
//   try {
//     const response = await ai.models.generateContent({
//        model: "models/gemini-2.0-flash-001",
//       generationConfig: {
//         temperature: 0.4,
//         responseMimeType: "application/json",
//       },
//       systemInstruction: `
// You are a highly intelligent and versatile AI assistant capable of helping users with any kind of task.

// Your output format must ALWAYS be a valid JSON object with these keys:

// {
//   "text": "Clear explanation or answer",
//   "fileTree": {}
// }

// Rules:
// - Always include "text".
// - Include "fileTree" ONLY if code or project structure is requested.
// - Follow best practices and clean structure.
// - Do NOT break existing working code unless asked.
//       `,
//       contents: [
//         {
//           role: "user",
//           parts: [{ text: prompt }],
//         },
//       ],
//     });

//     // Safely extract text from the response
//     const text = response?.text ?? "No response text received.";
//     console.log("Model output:", text);

//     return text;
//   } catch (error) {
//     console.error("❌ Error generating content:", error);
//     return JSON.stringify({
//       text: "An error occurred while generating content.",
//     });
//   }
// }



