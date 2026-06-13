import Bytez from "bytez.js";
const key = "f05407203eb3442655ff68d2dbf6f3d1" 
const sdk = new Bytez(key);


const model = sdk.model("anthropic/claude-sonnet-4-20250514");

export async function autoFixCode(buggyCode) {
  const prompt = `
You are an expert software engineer.

Fix the following code.

Rules:
- Return ONLY the corrected code
- Do NOT add explanation
- Do NOT add markdown (no \`\`\`)
- Keep same language
- Keep formatting clean

Code:
${buggyCode}
`;

  const { error, output } = await model.run([
    {
      role: "user",
      content: prompt
    }
  ]);

  if (error) {
    console.error(error);
    return;
  }

  return output;
}


