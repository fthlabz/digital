const express = require('express');
const path = require('path');
const app = express();

// 1. DİKKAT: 'public' klasörünü statik dosya deposu olarak tanıtıyoruz
// __dirname + 'public' diyerek yolun kesinlikle doğru olmasını sağlıyoruz.
app.use(express.static(path.join(__dirname, 'public')));

// 2. Ana Sayfa İsteği Geldiğinde ('/')
app.get('/', (req, res) => {
    // Sunucuya diyoruz ki: "public klasörünün içindeki index.html'i gönder"
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
