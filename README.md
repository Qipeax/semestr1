

```markdown
# Инструкция по запуску проекта

## Технологии
- React + Vite
- Redux Toolkit
- Material UI (MUI)
- Framer Motion
- JSON Server (для mock API)

## Установка и запуск

1. **Клонировать репозиторий**  
   ```bash
   git clone git clone https://github.com/Qipeax/semestr1.git
   cd my-shop
   ```
   *Или (если другой репозиторий):*  
   ```bash
   git clone https://github.com/Qipeax/semestr1.git
   cd semestr1
   ```

2. **Установить зависимости**  
   ```bash
   npm install
   npm install @reduxjs/toolkit react-redux @mui/material @emotion/react @emotion/styled axios react-router-dom
   npm install framer-motion
   ```

3. **Запустить JSON Server (mock API)**  
   *В отдельном терминале:*
   ```bash
   json-server --watch public/data.json --port 3001
   ```

4. **Запустить dev-сервер**  
   ```bash
   npm run dev
   ```

