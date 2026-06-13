import { runCode } from "./controllers/run.controller.js";

const mockReq = {
  body: {
    language: "javascript",
    code: `console.log("Hello from testt");`
  }
};

const mockRes = {
  status(code) {
    console.log("Status:", code);
    return this;
  },
  json(data) {
    console.log("Response:", data);
  }
};

runCode(mockReq, mockRes);