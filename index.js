// ================================
//  CLEAN & WORKING INDEX.JS
// ================================

"use strict";

// Express setup
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Root route (UptimeRobot friendly)
app.get("/", (req, res) => {
    res.send("Bot is running successfully!");
});

// Port setup (BEST universal method)
const PORT = process.env.PORT || 2006;

app.listen(PORT, () => {
    console.log(`🌐 Server running on port ${PORT}`);
});

// ================================
// MAIN BOT LOADER
// ================================
const path = require("path");
const mainFile = path.join(__dirname, "main.js");

try {
    console.log("📦 Loading bot engine...");
    require(mainFile);
} catch (error) {
    console.error("❌ Error loading main.js:", error);
}
