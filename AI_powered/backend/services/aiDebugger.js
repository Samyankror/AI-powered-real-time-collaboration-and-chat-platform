import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const genAI = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
  //apiVersion: "v1",  latest stable
});
export async function debugCode(code, errorMessage) {
    return  "gemini down";

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-pro"
  });

  const prompt = `
You are an expert software debugger.

Analyze the following code and runtime error.

Code:
${code}

Error:
${errorMessage}

Provide:
1. Cause of the bug
2. Corrected code
3. Explanation
`;
 
return "Hello";
 //  const result = await model.generateContent(prompt);

//   return result.response.text();
}