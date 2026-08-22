# 🦡 Starter Project Eleventy (11ty) — Modern SSG Template

<p align="center">
  <img src="https://raw.githubusercontent.com/11ty/11ty-website/master/src/img/mascots/possum.png" alt="Eleventy Possum" width="180">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Eleventy-v2.0+-5c46eb?style=for-the-badge&logo=eleventy" alt="11ty">
  <img src="https://img.shields.io/badge/Diseño-Modern_CSS-00F5D4?style=for-the-badge&logo=css3&logoColor=black" alt="Modern CSS">
  <img src="https://img.shields.io/badge/Temas-Dark_%26_Light-8b5cf6?style=for-the-badge" alt="Temas">
  <img src="https://img.shields.io/badge/GitHub_Pages-Listo-10b981?style=for-the-badge&logo=github" alt="GitHub Pages">
</p>

---

## 🌟 Descripción General

Esta es una plantilla inicial (*starter template*) moderna, ultrarrápida y lista para producción, construida con el generador de sitios estáticos **Eleventy (11ty)** y el motor de plantillas **Nunjucks**.

Diseñada para desarrolladores y creadores de contenido que buscan una arquitectura limpia con **cero sobrecarga de frameworks pesados**, diseño responsivo con estética moderna, alternador de temas claro/oscuro y un sistema dinámico de blog con buscador y filtros en tiempo real.

---

## ✨ Características Destacadas

- ⚡ **Rendimiento Puro:** Salida HTML/CSS 100% estática optimizada para puntuaciones perfectas en Google Lighthouse (100/100).
- 🌓 **Modo Oscuro & Claro:** Detección automática del tema del sistema (`prefers-color-scheme`) y botón con persistencia en `localStorage`.
- 🔍 **Buscador & Filtros en Vivo:** Motor de búsqueda interactivo en la sección de blog con filtrado por categorías (Libros / Películas).
- 📖 **Barra de Progreso de Lectura:** Indicador dinámico en la parte superior para artículos.
- 🎨 **Estética Visual de Alta Calidad:** Glassmorphism, tarjetas con resplandor (*glow effects*), tipografía con *Plus Jakarta Sans* y *JetBrains Mono*.
- 📁 **Arquitectura Modular Nunjucks:** Componentes reutilizables (`header`, `menu`, `footer`, `layouts`) y datos centralizados en `_data/site.json`.
- 🚀 **Despliegue Simple:** Compatible con GitHub Pages (carpeta `docs/` o GitHub Actions), Netlify, Vercel o Cloudflare Pages.

---

## 🛠️ Instalación y Uso Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/FrankUsqAbant/starter-project-eleventy.git
cd starter-project-eleventy
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run start
```
Abre tu navegador en **[http://localhost:7777](http://localhost:7777)** para ver el sitio con recarga en vivo (*hot-reload*).

---

## 📜 Scripts Disponibles en `package.json`

| Comando | Acción |
| :--- | :--- |
| `npm run start` | Inicia el servidor de desarrollo local de Eleventy en el puerto `7777`. |
| `npm run deploy` | Compila el sitio estático para producción en la carpeta `docs/` con prefijo `/`. |
| `npm run deploy-subdomain` | Compila con prefijo para despliegue en subrutas de GitHub Pages (`/starter-project-eleventy/`). |
| `npm run clean` | Limpia la carpeta `docs/` generada anteriormente. |

---

## 📂 Estructura del Proyecto

```text
starter-project-eleventy/
├── code/
│   ├── _data/                 # Datos globales (site.json)
│   ├── _includes/             # Plantillas y componentes (header, footer, menu, layouts)
│   ├── css/                   # Sistema de estilos (styles.css)
│   ├── js/                    # Lógica interactiva (main.js)
│   ├── img/                   # Recursos visuales y logotipos
│   ├── index.njk              # Página de Inicio
│   ├── blog.njk               # Página principal del Blog con buscador
│   ├── acerca.njk             # Página de Acerca de
│   ├── contacto.njk           # Página de Contacto
│   └── *.md                   # Artículos en Markdown organizados por colecciones
├── .eleventy.js               # Configuración oficial de 11ty
├── package.json               # Dependencias y scripts del proyecto
└── README.md                  # Documentación
```

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE). Siéntete libre de adaptarlo y usarlo en tus proyectos personales o profesionales.
