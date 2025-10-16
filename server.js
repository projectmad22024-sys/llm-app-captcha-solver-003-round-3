const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/solve', async (req, res) => {
  const imageUrl = req.query.url;
  if (!imageUrl) {
    return res.json({ error: 'No URL provided' });
  }

  // Validate URL - basic check
  try {
    new URL(imageUrl);
  } catch {
    return res.json({ error: 'Invalid URL' });
  }

  // Try fetching the image with timeout and handle errors
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => {
      controller.abort();
    }, 15000); // 15 seconds timeout

    await fetch(imageUrl, { signal: controller.signal });
    clearTimeout(timeout);
  } catch (err) {
    return res.json({ error: 'Failed to fetch image or timeout' });
  }

  // Simulate captcha solving: extract filename from URL
  const fname = imageUrl.substring(imageUrl.lastIndexOf('/') + 1).split('.')[0];
  const solution = `captcha_${fname}`;

  res.json({ solution });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});