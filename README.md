# GuitarLA — Backend API REST

API RESTful desarrollada con Node.js, Express y PostgreSQL para el proyecto GuitarLA.

## Tecnologías

- Node.js + TypeScript
- Express.js
- Sequelize ORM
- PostgreSQL (Render)
- CORS

## Requisitos previos

- Node.js v18 o superior
- npm
- Una base de datos PostgreSQL (local o en Render)

## Instalación

1. Clona el repositorio:

```bash
git clone <url-del-repo>
cd guitarras-back
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea el archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
DATABASE_URL=postgresql://usuario:contraseña@host/nombre_db
```

> Si usas Render, copia el **External Database URL** desde el dashboard de tu base de datos.

4. Crea la tabla en tu base de datos PostgreSQL:

```sql
CREATE TABLE guitarra (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    precio INTEGER NOT NULL,
    img VARCHAR(255) NOT NULL
);
```

## Arrancar el servidor

Modo desarrollo:

```bash
npm run dev
```

El servidor corre en `http://localhost:4000`

## Endpoints disponibles

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/guitarras` | Obtener todas las guitarras |
| GET | `/api/guitarras/:id` | Obtener una guitarra por ID |
| POST | `/api/guitarras` | Crear una guitarra |
| PUT | `/api/guitarras/:id` | Actualizar una guitarra |
| DELETE | `/api/guitarras/:id` | Eliminar una guitarra |

## Estructura del proyecto

```
src/
├── config/
│   └── db.ts           # Configuración de Sequelize
├── handlers/
│   └── guitarra.ts     # Controladores
├── middleware/
│   └── index.ts        # Validación de errores
├── models/
│   └── Guitarra.model.ts  # Modelo Sequelize
├── router.ts           # Rutas
├── server.ts           # Configuración de Express
└── index.ts            # Punto de entrada
```

## Ejemplo de body para POST/PUT

```json
{
    "nombre": "Lukather",
    "descripcion": "Descripción de la guitarra",
    "precio": 299,
    "img": "guitarra_01"
}
```
