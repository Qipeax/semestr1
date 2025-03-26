React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

@vitejs/plugin-react uses Babel for Fast Refresh
@vitejs/plugin-react-swc uses SWC for Fast Refresh
Expanding the ESLint configuration
If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the TS template to integrate TypeScript and typescript-eslint in your project.

Инструкция

Скачиваем файлы. git clone https://github.com/Germanchik01/my-shop3.git
открываем их.
npm install
npm install @reduxjs/toolkit react-redux @mui/material @emotion/react @emotion/styled axios react-router-dom (Одна строка)
npm install framer-motion
и пишем команды json-server --watch public/data.json --port 3001 и npm run dev
