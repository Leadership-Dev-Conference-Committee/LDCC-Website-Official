const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");  // Allow frontend requests
const { Dropbox } = require("dropbox");
require("dotenv").config({ path: './.env' });

const app = express();
app.use(cors());  // Enable cross-origin requests
app.use(express.json()); // Parse JSON requests
app.use(fileUpload());

const SECRET_UPLOAD_CODE = process.env.SECRET_UPLOAD_CODE || "LDC_SECRET_2025"; // Set in .env file

const dbx = new Dropbox({
    accessToken: process.env.DROPBOX_ACCESS_TOKEN,
    fetch: require("node-fetch")
});

// Validate Dropbox token
dbx.usersGetCurrentAccount()
  .then(response => console.log("Token is valid:", response))
  .catch(error => console.error("Invalid Token:", JSON.stringify(error, null, 2)));

app.post("/upload", async (req, res) => {
    console.log("Received upload request");

    // 1. Check if the secret code is provided
    const providedCode = req.body.secretCode;
    if (!providedCode || providedCode !== SECRET_UPLOAD_CODE) {
        console.log("Unauthorized attempt to upload");
        return res.status(403).json({ error: "Invalid upload code" });
    }

    // 2. Check if a file is uploaded
    if (!req.files || !req.files.resume) {
        console.log("No file received");
        return res.status(400).json({ error: "No file uploaded" });
    }

    console.log("File received:", req.files.resume.name);
    const resume = req.files.resume;
    const uploadPath = `/LDC_Resumes/${resume.name}`;

    try {
        const response = await dbx.filesUpload({ path: uploadPath, contents: resume.data });
        console.log("Dropbox Response:", response);
        res.json({ success: true, message: "Resume uploaded successfully!" });
    } catch (error) {
        console.error("Dropbox Upload Error:", error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
