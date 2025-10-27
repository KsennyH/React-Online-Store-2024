# 🛍️ Интернет-магазин на React + Redux Toolkit + Vite

Разработка клиентской части корпоративного сайта с разделом интернет-магазина. Проект включает каталог товаров, функционал корзины, фильтрацию, а также страницы блога, услуг и контактов.

Создан в 2024 году параллельно с началом работы над реальным проектом, продолжаю развивать проект в свободное время. Дизайн и верстка основаны на старом фриланс-проекте, весь контент изменен.

🔗 Демо: [react-online-store-tawny.vercel.app](https://react-online-store-tawny.vercel.app/)

## Стек технологий

- ⚛️ React 19, TypeScript
- ⚡ Vite
- 🎨 SCSS
- 🔄 React Router,
- 🔄 Redux Toolkit, RTK query
- 🔗 Axios
- 🔧 Framer-motion, keen-slider, react-hot-toast, lucide-react, react-loading-skeleton
- 🧪 Vitest, React Testing Library

## ⚙️ Обзор функциональности

- 🗺️ Современный роутинг с вложенными маршрутами и асинхронной загрузкой данных
- 🛍️ Карточка товара с выбором цвета и слайдером изображений
- 🔄 Фильтрация, сортировка и пагинация, поиск по названию товаров
- 🛒 Клиентская корзина: добавление, удаление, обновление количества товаров
- 🧠 Управление состоянием через Redux Toolkit и RTK query
- 🍞 Уведомления (toast) на действия пользователя
- 🔌 Подключение к тестовому Rest Api
- 🎨 Адаптивная и модульная верстка с использованием SCSS
- 🧩 Переиспользуемые компоненты
- 🧪 Добавлено базовое тестирование компонентов (Vitest + React Testing Library)

## 📊 Google PageSpeed Insights

- 💻 Десктоп: 98 / 100
- 📱 Мобильная версия: 81 / 100

## Планы по развитию проекта

- 🎨 Оптимизация SCSS-структуры: сокращение избыточных BEM-наименований (из старой верстки) и повышение читаемости кода компонентов  
- 🧩 Улучшение UI/UX: повышение доступности интерфейса, оптимизация загрузки изображений и производительности мобильной версии  
- 🧪 Тестирование: написание unit- и интеграционных тестов для ключевых компонентов *(в процессе)* 
- 🧱 Рефакторинг и улучшение архитектуры проекта *(в процессе)*
- 💳 Добавление этапов оформления заказа и интеграция с платёжной системой
- 🔐 Личный кабинет и админ-панель
- 📄 Разработка остальных страниц сайта (блог)
- 🔌 Переход на реальный backend (сейчас данные поступают с мок-сервиса)

## Запуск проекта

### `npm install`

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
