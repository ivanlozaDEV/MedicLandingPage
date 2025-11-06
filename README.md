# Dr. David Dañin - Oftalmólogo Especialista

Una landing page moderna profesional para el Dr. David Dañin, oftalmólogo especialista, construida con Next.js 14+, TypeScript y TailwindCSS.

## 🚀 Características

- ⚡ Next.js 14+ con App Router
- 👁️ Diseño especializado para oftalmología
- 🎨 TailwindCSS para estilos modernos
- 📱 Diseño totalmente responsive
- ♿ Accesible (WCAG 2.1 AA)
- 🔍 SEO optimizado para servicios oftalmológicos
- 🎯 TypeScript para type safety
- ⭐ Sistema de reseñas integrado
- 💬 WhatsApp para contacto directo

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desarrollo

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea la versión de producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🎨 Estructura del Proyecto

```
MedicLandingPage/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Página home
│   │   └── globals.css        # Estilos globales
│   └── components/
│       ├── Navbar.tsx         # Navegación con scroll effects
│       ├── Hero.tsx           # Sección hero
│       ├── Services.tsx       # Sección de servicios
│       ├── About.tsx          # Sección sobre nosotros
│       ├── GoogleReviews.tsx  # Carrusel de reseñas
│       ├── Contact.tsx        # Formulario de contacto
│       ├── Footer.tsx         # Footer
│       └── WhatsAppButton.tsx # Botón flotante de WhatsApp
├── public/                    # Archivos estáticos
├── next.config.js            # Configuración de Next.js
├── tailwind.config.js        # Configuración de Tailwind
└── tsconfig.json             # Configuración de TypeScript
```

## 🎯 Secciones

La landing page incluye las siguientes secciones:

1. **Navbar** - Navegación moderna con efectos de scroll y menú móvil
2. **Hero** - Sección principal con estadísticas del oftalmólogo
3. **Especialidades** - 6 servicios oftalmológicos detallados (LASIK, Cataratas, Glaucoma, etc.)
4. **Sobre el Doctor** - Certificaciones y experiencia del especialista
5. **Reseñas de Google** - Testimonios reales de pacientes
6. **Contacto** - Formulario y datos de ubicación
7. **Footer** - Información y especialidades
8. **WhatsApp Button** - Contacto directo para agendar citas

## 🌈 Personalización

### Colores

Los colores se pueden modificar en `tailwind.config.js`:

```js
colors: {
  medical: {
    light: '#f0f9ff',
    DEFAULT: '#0ea5e9',
    dark: '#0369a1',
  }
}
```

### Contenido

Edita los componentes en `src/components/` para cambiar el contenido, imágenes y textos.

### Navbar

El navbar incluye:
- 🎨 Efecto de transparencia al inicio, fondo blanco al hacer scroll
- 📱 Menú hamburguesa responsive para móvil
- ✨ Animaciones suaves en hover
- 🔗 Navegación con scroll suave entre secciones
- 🎯 Botón CTA destacado "Agendar Cita"

### Google Reviews

Carrusel de reseñas con:
- ⭐ Calificación promedio y total de reseñas
- 🎠 Carrusel interactivo (desktop y móvil)
- 👤 Avatares de usuarios
- 📱 Totalmente responsive
- 🔗 Link a Google Maps para ver más reseñas

Para personalizar las reseñas, edita el array `reviews` en `src/components/GoogleReviews.tsx` y cambia el link de Google Maps.

### WhatsApp

Para configurar el botón de WhatsApp, edita el archivo `src/components/WhatsAppButton.tsx`:

```typescript
const phoneNumber = '5215551234567' // Cambia por tu número (código de país + número sin +)
const message = 'Tu mensaje personalizado aquí'
```

## 📱 Responsive

El diseño está optimizado para:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🚀 Deploy

### Vercel (Recomendado)

La forma más fácil de deployar es usando [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

### Otras plataformas

También puedes deployar en:
- Netlify
- AWS
- Digital Ocean
- Cualquier hosting que soporte Node.js

## 📄 Licencia

MIT

## 👨‍💻 Autor

Tu nombre aquí

---

Hecho con ❤️ y Next.js
