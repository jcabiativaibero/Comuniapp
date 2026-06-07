# ComuniApp 🏘️

> Directorio digital comunitario que conecta residentes con microempresarios y prestadores de servicios locales.

[![Deploy](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel)](https://comuniapp.vercel.app)
[![Supabase](https://img.shields.io/badge/backend-Supabase-3ECF8E?logo=supabase)](https://supabase.com)
[![React](https://img.shields.io/badge/frontend-React%20+%20Vite-61DAFB?logo=react)](https://react.dev)

---

## 📋 Descripción del proyecto

ComuniApp es una plataforma web que permite a los microempresarios de una comunidad publicar sus servicios en un directorio digital accesible para todos los residentes. Los usuarios pueden explorar el catálogo, filtrar por categoría y contactar directamente al prestador de servicios mediante WhatsApp.

**Problema que resuelve:** la desconexión entre residentes que necesitan servicios locales y microempresarios que no tienen canal digital para darse a conocer en su comunidad.

---

## 🏗️ Arquitectura general del sistema

```
┌─────────────────────────────────────────────────┐
│                   Cliente (Browser)              │
│              React + Vite (Vercel)               │
└────────────────────┬────────────────────────────┘
                     │ HTTPS
┌────────────────────▼────────────────────────────┐
│                  Supabase                        │
│  ┌─────────────┐  ┌──────────┐  ┌────────────┐ │
│  │ Auth (JWT)  │  │PostgreSQL│  │  Storage   │ │
│  └─────────────┘  └──────────┘  └────────────┘ │
└─────────────────────────────────────────────────┘
```

**Flujo principal:**
1. El usuario se registra/inicia sesión mediante Supabase Auth (JWT)
2. El frontend React consume la API REST de Supabase directamente
3. Las políticas RLS (Row Level Security) de PostgreSQL controlan el acceso a los datos
4. El deploy se realiza automáticamente en Vercel al hacer merge a `main`

---

## 🛠️ Tecnologías utilizadas

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Frontend | React | 18.x |
| Build tool | Vite | 5.x |
| Backend / BD | Supabase (PostgreSQL) | — |
| Autenticación | Supabase Auth (JWT) | — |
| Estilos | CSS Modules / CSS puro | — |
| Deploy frontend | Vercel | — |
| CI/CD | GitHub Actions | — |
| Testing | Jest + React Testing Library | — |
| E2E | Playwright | — |

---

## 📦 Estructura del proyecto

```
comuniapp/
├── public/
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── pages/             # Vistas principales (Home, Login, Registro, Dashboard)
│   ├── services/          # Lógica de acceso a Supabase
│   │   ├── authService.js
│   │   ├── serviciosService.js
│   │   └── categoriasService.js
│   ├── hooks/             # Custom hooks
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .github/
│   └── workflows/
│       └── ci.yml
├── Dockerfile
├── docker-compose.yml
├── swagger.yaml
└── README.md
```

---

## ⚙️ Variables de entorno

Crea un archivo `.env` en la raíz del proyecto basado en `.env.example`:

```env
VITE_SUPABASE_URL=https://[tu-proyecto].supabase.co
VITE_SUPABASE_ANON_KEY=[tu-anon-key]
```

> ⚠️ Nunca subas el archivo `.env` al repositorio. Está incluido en `.gitignore`.

---

## 🚀 Instrucciones para ejecutar el proyecto localmente

### Prerrequisitos

- Node.js >= 18.x
- npm >= 9.x
- Cuenta en [Supabase](https://supabase.com) con el proyecto configurado

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/[tu-usuario]/comuniapp.git
cd comuniapp

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Edita .env con tus credenciales de Supabase

# 4. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Comandos disponibles

```bash
npm run dev        # Servidor de desarrollo
npm run build      # Build de producción
npm run preview    # Vista previa del build
npm run lint       # Verificar estilo del código (ESLint)
npm test           # Ejecutar pruebas unitarias
npm run test:e2e   # Ejecutar pruebas End-to-End con Playwright
npm run coverage   # Reporte de cobertura de pruebas
```

---

## 🐳 Ejecución con Docker (local)

```bash
# Construir y levantar los contenedores
docker-compose up --build

# La app estará disponible en http://localhost:4173
```

---

## 🌐 Aplicación en producción

La aplicación está desplegada en Vercel:

🔗 **[https://comuniapp.vercel.app](https://comuniapp.vercel.app)** ← *actualiza con la URL real*

---

## 📚 Documentación adicional

- [Documentación de la API (Swagger)](./swagger.yaml)
- [Wiki del proyecto](../../wiki)
- [Decisiones de arquitectura (ADR)](./docs/adr/)

---

## 👥 Equipo

| Nombre | Rol |
|--------|-----|
| [Integrante 1] | Frontend / Documentación |
| [Integrante 2] | Backend / CI-CD |
| [Integrante 3] | Pruebas / QA |

---

## 📄 Licencia

Proyecto académico — [Universidad / Institución] · 2025
