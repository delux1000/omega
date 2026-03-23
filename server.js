const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'public', 'about.html')));
app.get('/services', (req, res) => res.sendFile(path.join(__dirname, 'public', 'services.html')));
app.get('/testimonials', (req, res) => res.sendFile(path.join(__dirname, 'public', 'testimonials.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'public', 'contact.html')));
app.get('/chat', (req, res) => res.sendFile(path.join(__dirname, 'public', 'chat.html')));
app.get('/blog', (req, res) => res.sendFile(path.join(__dirname, 'public', 'blog.html')));
app.get('/gallery', (req, res) => res.sendFile(path.join(__dirname, 'public', 'gallery.html')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(PORT, () => {
    console.log('\x1b[32m%s\x1b[0m', '╔══════════════════════════════════════════════════════════════╗');
    console.log('\x1b[32m%s\x1b[0m', '║     🏥 Omegar Care Limited - Enhanced Healthcare Website      ║');
    console.log('\x1b[32m%s\x1b[0m', '╠══════════════════════════════════════════════════════════════╣');
    console.log('\x1b[36m%s\x1b[0m', `║     🌐 Local: http://localhost:${PORT}                          ║`);
    console.log('\x1b[36m%s\x1b[0m', `║     📱 Network: http://192.168.1.x:${PORT}                      ║`);
    console.log('\x1b[32m%s\x1b[0m', '╠══════════════════════════════════════════════════════════════╣');
    console.log('\x1b[33m%s\x1b[0m', '║     📍 13, Austen Close, Tilbury RM18 8DB                    ║');
    console.log('\x1b[33m%s\x1b[0m', '║     📞 +44 7348360754                                         ║');
    console.log('\x1b[33m%s\x1b[0m', '║     ✉️ Omegarcareltd@gmail.com                                 ║');
    console.log('\x1b[32m%s\x1b[0m', '╚══════════════════════════════════════════════════════════════╝');
});
