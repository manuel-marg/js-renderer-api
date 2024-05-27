const express = require('express');
const puppeteer = require('puppeteer');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'alive' });
});

app.get('/api/render', async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.send('Por favor, proporciona una URL');
  }
  try {
    const browser = await puppeteer.launch({
      headless: true,
      ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    const pageContent = await page.content();
    console.log(`Mostrando los primeros 200 caracteres de ${url} : ${pageContent.substring(0, 200)}`);
    await browser.close();

    res.send(pageContent);
  } catch (err) {
    console.log(`Error al obtener ${url} `, err);
    res.send(`Error al obtener ${url}`);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Servidor listo!');
});