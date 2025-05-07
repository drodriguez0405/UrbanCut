
# 💈 UrbanCut - Sistema de Reservas para Barbería

**UrbanCut** es una aplicación web desarrollada en React para la gestión de citas en una barbería. Permite a los usuarios registrarse, iniciar sesión, reservar servicios con barberos disponibles y visualizar sus citas. Además, los administradores pueden gestionar la información desde un panel exclusivo.

---

## 🚀 Tecnologías utilizadas

- **React JS** – Librería principal para la interfaz de usuario.
- **React Router DOM** – Para la navegación entre páginas.
- **JSON Server + Render** – Fake API RESTful alojada en Render para simular backend.
- **CSS personalizado** – Maquetación y estilos manuales usando Flexbox.
- **LocalStorage** – Persistencia de sesión del usuario y token falso.
- **fetch API** – Para consumir los datos desde la fake API.
- **Git & GitHub** – Control de versiones y repositorio remoto.

---

## ⚙️ Funcionalidades principales

- Inicio de sesión con validación de rol (`cliente`, `barbero`, `admin`).
- Registro y visualización de citas personalizadas.
- Página de confirmación de reserva con detalles.
- Panel exclusivo para administradores.
- Perfil personalizado para clientes y barberos.
- Botón de cerrar sesión.
- Validaciones de acceso con token en `localStorage`.

---

## 🎨 Paleta de Colores

| Elemento            | Color      | Código     |
|---------------------|------------|------------|
| Fondo principal     | Gris oscuro| `#121212`  |
| Contenedores        | Gris medio| `#2a2a2a`  |
| Botones principales | Rojo       | `#d32f2f`  |
| Confirmaciones      | Verde      | `#4CAF50`  |
| Texto primario      | Blanco     | `#ffffff`  |
| Texto secundario    | Gris claro| `#bbbbbb`  |
| Bordes              | Gris       | `#444444`  |
| Errores             | Rojo claro | `#ff6b6b`  |

---

## 🖋 Tipografía

- **Fuente principal**: `Arial, sans-serif`

| Tipo de texto  | Tamaño     |
|----------------|------------|
| Títulos        | `1.8rem`   |
| Subtítulos     | `1.5rem`   |
| Texto normal   | `1rem`     |
| Texto pequeño  | `0.9rem`   |

---

## 📁 Estructura de carpetas (simplificada)

```
src/
│
├── components/           # Componentes reutilizables
├── pages/                # Páginas completas (Login, Reserva, Perfil, etc.)
├── App.jsx               # Rutas principales
├── index.js              # Punto de entrada
├── assets/               # Imágenes, íconos y logos

```

---

## 🛠 Cómo iniciar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/urban-cut.git
   cd urban-cut
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar la aplicación localmente:
   ```bash
   npm run dev
   ```

4. Asegúrate de que la fake API esté activa en Render:
   - URL: `https://urbancut.onrender.com/`

---

## 🔐 Accesos de prueba

| Rol       | Usuario     | Contraseña |
|-----------|-------------|------------|
| Admin     | admin       | 1234       |
| Cliente   | cliente1    | 1234       |


---

## 🧠 Estado del proyecto

✅ Citas se guardan en la API  
🔄 Vista pública con login funcional  
🔜 Perfil y paneles están en desarrollo final  
⚠️ Próximo paso: Refactor para mejorar persistencia del botón de perfil

---

## 📌 Autor

Desarrollado por Douglas Rodriguez Polo como proyecto académico.