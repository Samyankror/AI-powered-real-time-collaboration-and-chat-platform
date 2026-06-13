import { generateContent } from "../services/ai.service.js"
import { autoFixCode } from "../services/autofix.service.js";

export const getResult = async(req,res,next)=>{
    try{
     const {prompt} = req.query;
     const result = await generateContent(prompt);
     return res.send(result);
    }catch(error){
       next(error);
    }
}

export const autoFix  = async(req,res,next)=>{
    try{
        const {code} = req.body;
       const result = await autoFixCode(code);
       console.log(result);
      return res.status(200).json({
  fixedCode: result.content
});
    }catch(error){
        next(error);
    }
}