# Captcha Solver Web App

This simple web application allows you to input the URL of a captcha image, fetches the image, and simulates solving it by generating a dummy solution based on the filename.

## Features

- Enter any image URL and fetch the image
- Handles broken URLs and fetch errors gracefully
- Displays the image and the simulated solution
- Response latency is kept under 15 seconds
- Includes the MIT License at the root

## How to Run

1. Ensure you have Node.js installed.
2. Save all files in a directory.
3. Install dependencies:

```bash
npm init -y
npm install express node-fetch
```
4. Start the server:

```bash
node server.js
```
5. Open `index.html` in your browser and enter the URL of a captcha image (e.g., `https://gamma.example.com/image.png`).

## Notes

- This implementation simulates captcha solving by extracting a filename from the URL and prefixing it.
- To extend, replace the simulation with actual captcha solving logic.

---

## Licensing
This project is licensed under the MIT License.

---
