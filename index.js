const express = require('express');
const puppeteer = require('puppeteer');
const { createTranslator } = require('node-translate');

const app = express();

const translator = createTranslator({
  languages: ['es'],
  defaultLanguage: 'es',
});

app.get('/', (req, res) => {
  res.json({ message: 'alive' });
});

app.get('/api/render', async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.send(translator.translate('Por favor, proporciona una URL'));
  }
  try {
    const browser = await puppeteer.launch({
      headless: true,
      ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    const pageContent = await page.content();
    console.log(translator.translate(`Mostrando los primeros 200 caracteres de ${url} : ${pageContent.substring(0, 200)}`));
    await browser.close();

    res.send(pageContent);
  } catch (err) {
    console.log(translator.translate(`Error al obtener ${url} `, err));
    res.send(translator.translate(`Error al obtener ${url}`));
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(translator.translate('Escuchando en el puerto'));
});