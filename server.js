const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Zomato App</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
                .container { background: rgba(255,255,255,0.1); padding: 40px; border-radius: 15px; backdrop-filter: blur(10px); }
                h1 { color: #FFD700; margin-bottom: 20px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>?? Zomato Application Running!</h1>
                <p>? Jenkins CI/CD Pipeline Successful!</p>
                <p>?? Docker Container: ${process.env.HOSTNAME}</p>
                <p>?? Started at: ${new Date().toLocaleString()}</p>
                <p>?? Powered by Express.js</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`?? Server running on http://0.0.0.0:${PORT}`);
});
