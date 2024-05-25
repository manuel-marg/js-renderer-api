# js-renderer-api
**js-renderer-api**  es un servicio en línea que permite renderizar páginas web con JavaScript (JS) utilizando la biblioteca Puppeteer. Es una herramienta ideal para tareas de scraping web, ya que no depende de Splash y ofrece una ejecución rápida y eficiente.

**¿Qué es el scraping web?**

El scraping web es una técnica que consiste en extraer información de páginas web de forma automatizada. Esto se puede hacer para recopilar datos para análisis, investigación o incluso para automatizar tareas repetitivas.

**¿Por qué utilizar js-renderer-api para scraping web?**

js-renderer-api ofrece varias ventajas para el scraping web:

-   **Ejecución con JavaScript:**  Al utilizar Puppeteer, js-renderer-api permite ejecutar JavaScript en el contexto de las páginas web, lo que proporciona un mayor control sobre el proceso de scraping.
-   **Rapidez y eficiencia:**  js-renderer-api está optimizado para la velocidad y la eficiencia, lo que lo convierte en una herramienta ideal para tareas de scraping a gran escala.
-   **Independencia de Splash:**  A diferencia de otras herramientas de scraping web, js-renderer-api no depende de Splash, lo que simplifica su uso y reduce la complejidad de la configuración.

# Instalación

Para utilizar este proyecto, por favor asegúrese de tener Node.js y npm instalados en su computadora.

`npm install` 

# Instalar dependencies  
Para instalar las dependencias necesarias, ejecute el comando anterior.

    npm install

## Uso

Para utilizar este proyecto, puede hacerlo enviando solicitudes HTTP a los siguientes endpoints:

    http://localhost:8080/api/render?url=https://www.example.com

### `/`  (GET)

Responde con un mensaje que indica que el servicio está activo.

### `/api/render`  (GET)

Para renderizar una página web, envíe un parámetro  `url`  en la query string. Por ejemplo:  `http://localhost:8080/api/render?url=https://www.example.com`

Responde con el contenido de la página renderizada.

# Configuración

Para cambiar el puerto en el que el servicio se ejecuta, puede hacerlo configurando la variable de entorno  `PORT`  en el archivo  `package.json`. Por ejemplo:

`"scripts": {
  "start": "node index.js --port 8081"
}` 


# Autor 

El proyecto original fue creado por Geshan, sin embargo esta versión es una modificación del código original. Se realizaron cambios para mejorar los siguientes aspectos:

**Modificación en español**  
Esta es una modificación del proyecto original que utiliza  `puppeteer`  en lugar de  `puppeteer-core`. Al utilizar  `puppeteer`, obtendrá las siguientes ventajas:

-   Mejora la estabilidad y la escalabilidad del servicio
-   Permite utilizar navegadores más recientes y seguros
-   Ofrece más control sobre la configuración de la navegación y la renderización de páginas web
-   Es compatible con diferentes sistemas operativos y arquitecturas

**Originalmente basado en puppeteer-core**  
El proyecto original utilizaba  `puppeteer-core`, que es una versión ligeramente modificada de  `puppeteer`. Aunque  `puppeteer-core`  es una excelente opción para proyectos pequeños y medianos,  `puppeteer`  ofrece más funcionalidades y mejoras para proyectos más grandes y complejos.