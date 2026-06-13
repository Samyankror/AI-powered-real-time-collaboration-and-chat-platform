// import { exec } from "child_process";
// import fs from "fs";




// export const runCode = async (req, res) => {
//   try {
//     const { language, code } = req.body;

//     let fileName = "";
//     let command = "";
//     const projectPath = process.cwd().replace(/\\/g, "/");

//     if (language === "javascript") {
//       fileName = "temp.js";
//       fs.writeFileSync(fileName, code);
//       command = `docker run --rm -v ${projectPath}:/app -w /app node:18 node temp.js`;
//       const content = fs.readFileSync(fileName, "utf8");
//   console.log("File Content:");
//   console.log(content);

//     }

//     if (language === "python") {
//       fileName = "temp.py";
//       fs.writeFileSync(fileName, code);
//       command = `docker run --rm -v ${projectPath}:/app -w /app python:3.10 python temp.py`;
//     }

//     if (language === "cpp") {
//       fileName = "temp.cpp";
//       fs.writeFileSync(fileName, code);
//       command = `docker run --rm -v ${projectPath}:/app -w /app gcc sh -c "g++ temp.cpp -o temp && ./temp"`;
//     }

//     if (language === "java") {
//       fileName = "Main.java";
//       fs.writeFileSync(fileName, code);
//       command = `docker run --rm -v ${projectPath}:/app -w /app openjdk sh -c "javac Main.java && java Main"`;
//     }

//     if (!command) {
//       return res.status(400).json({ output: "Invalid language" });
//     }
//     console.log("hello");
//     console.log("Running command:", command);

//     exec(command, (err, stdout, stderr) => {
//         console.log('result',stdout);
//         console.log('Error',stderr);
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ output: stderr || err.message });
//       }

//       res.json({ output: stdout || stderr });
//     });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ output: "Server error" });
//   }
// };

// import { exec } from "child_process";
// import fs from "fs";

// export const runCode = async (req, res) => {
//   try {
//     const { language, code } = req.body;

//     let fileName = "";
//     let command = "";

//     const projectPath = process.cwd().replace(/\\/g, "/");

//     if (language === "javascript") {
//       fileName = "temp.js";
//       fs.writeFileSync(fileName, code);

//       command = `docker run --rm -v ${projectPath}:/app -w /app node:18 node temp.js`;
//     }

//     else if (language === "python") {
//       fileName = "temp.py";
//       fs.writeFileSync(fileName, code);

//       command = `docker run --rm -v ${projectPath}:/app -w /app python:3.10 python temp.py`;
//     }

//     else if (language === "cpp") {
//       fileName = "temp.cpp";
//       fs.writeFileSync(fileName, code);

//       command = `docker run --rm -v ${projectPath}:/app -w /app gcc sh -c "g++ temp.cpp -o temp && ./temp"`;
//     }

//     else if (language === "java") {
//       fileName = "Main.java";
//       fs.writeFileSync(fileName, code);

//       command = `docker run --rm -v ${projectPath}:/app -w /app openjdk sh -c "javac Main.java && java Main"`;
//     }

//     else {
//       return res.status(400).json({ output: "Invalid language" });
//     }

//     console.log("Running command:", command);

//     exec(`cmd /c ${command}`, (err, stdout, stderr) => {

//       console.log("STDOUT:", stdout);
//       console.log("STDERR:", stderr);

//       if (err) {
//         console.error(err);
//         return res.status(500).json({
//           output: stderr || err.message
//         });
//       }

//       res.json({
//         output: stdout || stderr
//       });

//     });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ output: "Server error" });
//   }
// };

// import { exec } from "child_process";
// import fs from "fs";

// export const runCode = async (req, res) => {
//   try {
//     const { language, code } = req.body;

//     let fileName = "";
//     let command = "";

//     const projectPath = process.cwd().replace(/\\/g, "/");

//     if (language === "javascript") {
//       fileName = "temp.js";
//       fs.writeFileSync(fileName, code);

//       command = `docker run --rm -v ${projectPath}:/app -w /app node:18 node temp.js`;
//     }

//     else if (language === "python") {
//       fileName = "temp.py";
//       fs.writeFileSync(fileName, code);

//       command = `docker run --rm -v ${projectPath}:/app -w /app python:3.10 python temp.py`;
//     }

//     else if (language === "cpp") {
//       fileName = "temp.cpp";
//       fs.writeFileSync(fileName, code);

//       command = `docker run --rm -v ${projectPath}:/app -w /app gcc sh -c "g++ temp.cpp -o temp && ./temp"`;
//     }

//     else if (language === "java") {
//       fileName = "Main.java";
//       fs.writeFileSync(fileName, code);

//       command = `docker run --rm -v ${projectPath}:/app -w /app openjdk sh -c "javac Main.java && java Main"`;
//     }

//     else {
//       return res.status(400).json({ output: "Invalid language" });
//     }

//     console.log("Running command:", command);

//     exec(`cmd /c ${command}`, (err, stdout, stderr) => {

//       console.log("STDOUT:", stdout);
//       console.log("STDERR:", stderr);

//       if (err) {
//         console.error(err);
//         return res.status(500).json({
//           output: stderr || err.message
//         });
//       }

//       res.json({
//         output: stdout || stderr
//       });

//     });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ output: "Server error" });
//   }
// };

// import { spawn } from "child_process";
// import fs from "fs";

// export const runCode = async (req, res) => {
//   try {
//     const { language, code } = req.body;

//     let fileName = "";
//     let dockerImage = "";
//     let runCommand = [];

//     const projectPath = process.cwd().replace(/\\/g, "/");

//     if (language === "javascript") {
//       fileName = "temp.js";
//       fs.writeFileSync(fileName, code);
//       dockerImage = "node:18";
//       runCommand = ["node", "temp.js"];
//     }

//     else if (language === "python") {
//       fileName = "temp.py";
//       fs.writeFileSync(fileName, code);
//       dockerImage = "python:3.10";
//       runCommand = ["python", "temp.py"];
//     }

//     else if (language === "cpp") {
//       fileName = "temp.cpp";
//       fs.writeFileSync(fileName, code);
//       dockerImage = "gcc";
//       runCommand = ["sh", "-c", "g++ temp.cpp -o temp && ./temp"];
//     }

//     else if (language === "java") {
//       fileName = "Main.java";
//       fs.writeFileSync(fileName, code);
//       dockerImage = "openjdk";
//       runCommand = ["sh", "-c", "javac Main.java && java Main"];
//     }

//     else {
//       return res.status(400).json({ output: "Invalid language" });
//     }

//     const dockerArgs = [
//       "run",
//       "--rm",
//       "-v",
//       `${projectPath}:/app`,
//       "-w",
//       "/app",
//       dockerImage,
//       ...runCommand
//     ];

//     const dockerProcess = spawn("docker", dockerArgs);

//     let output = "Hel";
//     let error = "hc";

//     dockerProcess.stdout.on("data", (data) => {
//       output += data.toString();
//       console.log("STDOUT:", data.toString());
//     });

//     dockerProcess.stderr.on("data", (data) => {
//       error += data.toString();
//       console.log("STDERR:", data.toString());
//     });

//     dockerProcess.on("close", (code) => {
//       if (code !== 0) {
//         return res.status(500).json({ output: "hm" });
//       }
//       console.log("Final output:", output);
//       console.log(error);

//       res.json({ output });
//     });

//   } catch (err) {
//     console.error("Server error:", err);
//     res.status(500).json({ output: "Server error" });
//   }
// };

// import { spawn } from "child_process";
// import fs from "fs";

// export const runCode = async (req, res) => {
//   try {
//     console.log("API /run called");

//     const { language, code } = req.body;

//     if (!language || !code) {
//       return res.status(400).json({ output: "Language or code missing" });
//     }

//     let fileName = "";
//     let dockerImage = "";
//     let runCommand = [];

//     const projectPath = process.cwd().replace(/\\/g, "/");

//     console.log("Project Path:", projectPath);
//     console.log("Language:", language);

//     // JAVASCRIPT
//     if (language === "javascript") {
//       fileName = "temp.js";
//       fs.writeFileSync(fileName, code);

//       dockerImage = "node:18";
//       runCommand = ["node", "temp.js"];
//     }

//     // PYTHON
//     else if (language === "python") {
//       fileName = "temp.py";
//       fs.writeFileSync(fileName, code);

//       dockerImage = "python:3.10";
//       runCommand = ["python", "temp.py"];
//     }

//     // C++
//     else if (language === "cpp") {
//       fileName = "temp.cpp";
//       fs.writeFileSync(fileName, code);

//       dockerImage = "gcc";
//       runCommand = ["sh", "-c", "g++ temp.cpp -o temp && ./temp"];
//     }

//     // JAVA
//     else if (language === "java") {
//       fileName = "Main.java";
//       fs.writeFileSync(fileName, code);

//       dockerImage = "openjdk";
//       runCommand = ["sh", "-c", "javac Main.java && java Main"];
//     }

//     else {
//       return res.status(400).json({ output: "Invalid language" });
//     }

//     console.log("File created:", fileName);

//     const dockerArgs = [
//       "run",
//       "--rm",
//       "-v",
//       `${projectPath}:/app`,
//       "-w",
//       "/app",
//       dockerImage,
//       ...runCommand
//     ];

//     console.log("Running Docker command:");
//     console.log("docker", dockerArgs.join(" "));

//     // Spawn docker process
//     const dockerProcess = spawn("docker", dockerArgs);

//     let output = "";
//     let error = "";

//     // Capture STDOUT
//     dockerProcess.stdout.on("data", (data) => {
//       const text = data.toString();
//       console.log("STDOUT:", text);
//       output += text;
//     });

//     // Capture STDERR
//     dockerProcess.stderr.on("data", (data) => {
//       const text = data.toString();
//       console.log("STDERR:", text);
//       error += text;
//     });

//     // Spawn error
//     dockerProcess.on("error", (err) => {
//       console.error("Spawn error:", err);
//       return res.status(500).json({
//         output: "Failed to start Docker process"
//       });
//     });

//     // Process finished
//     dockerProcess.on("close", (code) => {
//       console.log("Process exited with code:", code);

//       if (code !== 0) {
//         return res.status(500).json({
//           output: error || "Execution failed"
//         });
//       }

//       res.json({
//         output: output || "No output"
//       });
//     });

//   } catch (err) {
//     console.error("Server error:", err);

//     res.status(500).json({
//       output: "Server error"
//     });
//   }
// };

import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { debugCode } from "../services/aiDebugger.js";

export const runCode = async (req, res) => {
  try {
    console.log("API /run called");

    const { language, code } = req.body;
    console.log(language);

    const runsDir = path.join(process.cwd(), "runs");

    if (!fs.existsSync(runsDir)) {
      fs.mkdirSync(runsDir);
    }

    let fileName = "";
    let dockerImage = "";
    let runCommand = [];

    if (language === "javascript") {
      fileName = "temp.js";
      dockerImage = "node:18";
      runCommand = ["node", fileName];
    }

    else if (language === "python") {
      fileName = "temp.py";
      dockerImage = "python:3.10";
      runCommand = ["python", fileName];
    }

    else if (language === "cpp") {
      fileName = "temp.cpp";
      dockerImage = "gcc";
      runCommand = ["sh", "-c", "g++ temp.cpp -o temp && ./temp"];
    }

    else if (language === "java") {
      console.log(req.body.fileName);
      console.log("Hey");
      fileName = req.body.fileName || "Main.java";
      dockerImage = "eclipse-temurin:21-jdk"; 
      runCommand = ["sh", "-c", "javac " + fileName + " && java " + fileName.replace(".java", "")];
    }

    else {
      return res.status(400).json({ output: "Invalid language" });
    }

       const filePath = path.join(runsDir, fileName);

    fs.writeFileSync(filePath, code);

    const projectPath = runsDir.replace(/\\/g, "/");

    const dockerArgs = [
      "run",
      "--rm",
      "-v",
      `${projectPath}:/app`,
      "-w",
      "/app",
      dockerImage,
      ...runCommand
    ];

    console.log("Running docker:", dockerArgs.join(" "));

    const dockerProcess = spawn("docker", dockerArgs);

    let output = "";
    let error = "";

    dockerProcess.stdout.on("data", (data) => {
      const text = data.toString();
      console.log("STDOUT:", text);
      output += text;
    });

    dockerProcess.stderr.on("data", (data) => {
      const text = data.toString();
      console.log("STDERR:", text);
      error += text;
    });

    dockerProcess.on("close", async (code) => {

  console.log("Exit code:", code);

  if (code !== 0) {

    try {

      const aiDebug = await debugCode(code, error);

      return res.status(200).json({
        error: error,
        aiDebug: aiDebug
      });

    } catch (aiErr) {

      console.error("AI Debug failed:", aiErr);

      return res.status(500).json({
        error: error,
        aiDebug: "AI debugging failed"
      });

    }

  }

  res.json({ output });

});

  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ output: "Server error" });
  }
};
