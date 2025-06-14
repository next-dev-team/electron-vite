# Electron-Vite-React Project Template

<div align="center">

![Electron](https://img.shields.io/badge/Electron-35.x-47848F?logo=electron) ![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react) ![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript) [![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

</div>

## 🚀 Project Overview

A desktop application development template based on modern tech stack, integrated with complete development environment configuration and best practices to help you quickly start project development.

## 🎯 Key Features

### Core Features

- ✨ **Lazy Loading Routes** - Optimized initial page loading time
- 🔄 **State Management (Zustand)** - Simple and efficient state management solution
- 📡 **HTTP Request Wrapping** - Unified request handling based on Axios
- 🎭 **Mock Service** - Supports API data simulation with scenario-based data management
- 🎨 **UI Framework** - Integrated Ant Design + TailwindCSS
- 🔄 **Hot Reload** - Fast development experience
- 🧪 **Testing Support** - Built-in Vitest testing framework

### Development Experience

- 📝 ESLint + Prettier + Stylelint - Code quality assurance
- 🔍 TypeScript type checking
- 🎨 Automatic import statement formatting
- 🧪 Vitest unit test support

### State Management

- Zustand
- Immer
- optics-ts

### Tool Libraries

- React Router v7
- Axios (wrapped with @liangskyli/axios-request)
- classnames
- koffi (Node.js C FFI)
- electron-log
- electron-updater

## 🚀 Quick Start

### Environment Requirements

- Node.js: ^18.20.0 || ^20.0.0 || >=22.0.0
- Package Manager: yarn

### Install Dependencies

```bash
yarn install
```

### Development Modes

```bash
# Standard Development Mode
yarn dev

# Development Mode with Mock Data
yarn dev:mock
yarn dev:mock-server  # Start mock service in a new terminal
```

### Production Build

```bash
# Build for Windows
yarn build:pro:win
# Build for Mac
yarn build:pro:mac
```

## 🔧 Environment Configuration

The project supports multiple environment configurations:

- `.env` - Base configuration
- `.env.dev` - Development environment
- `.env.pro` - Production environment
- `.env.test` - Test environment
- `.env.dev-mock` - Mock development environment

## 📚 Tech Stack

### 🛠 Tech Stack Selection

- **React 19 & React-DOM**: Using the latest version of React for high-performance front-end and smoother user experience.
- **React-Router**: Latest v7 version, supports lazy loading routes, and optimizes page transition performance.
- **[tailwindcss](https://tailwindcss.com/)**: Using tailwindcss@4 version.
- **Less Preprocessor**: Using xxx.module.less, supports CSS Modules.
- **SCSS Preprocessor**: Fully adopts new SCSS version, using `@use` instead of `@import`, stronger modularity.
- **zustand**: Lightweight state management library. After comparing Redux, Dva, React-Toolkit, MobX, and `useContext` combined with `useReducer` management methods, we ultimately chose the simpler Zustand.
- **Immer**: Simplifies immutable data structure operations, especially convenient for handling deeply nested objects.
- **optics-ts**: Suitable for scenarios requiring deep operations on large nested objects, with type-safe and readable code.
- **classnames**: Dynamic class name management tool, especially suitable for conditional rendering styles.
- **[@liangskyli/axios-request](https://github.com/liangskyli/request/blob/main/packages/axios-request/README.md)**: HTTP request library wrapper, making it easier to connect with backend APIs.
- **[@liangskyli/mock](https://github.com/liangskyli/mock#readme)**: Supports local API data mocking, with scenario-based data management and hot updates.
- **[koffi](https://koffi.dev/)**: Node.js C FFI module, supports calling shared libraries on various platforms, such as .so, .dll, .dylib. No need to install C++ compiler.
- **[electron-log](https://github.com/megahertz/electron-log)**: Provides logging functionality for electron main process, preload scripts, and renderer process, default console information is written to logs.
- **[antd](https://ant.design/docs/react/introduce-cn)**: React UI component library based on Ant Design design system
- **Unit Testing**: Code unit testing implemented based on vitest.

### Core Dependencies

- Electron 35
- React 19
- React Router v7
- TypeScript
- Vite 6
- Tailwind CSS v4
- Zustand (State Management)
- Axios (HTTP Requests)

### Toolchain

- ESLint
- Prettier
- Stylelint
- Husky
- Commitlint
- Vitest

### 🔧 Other Recommended Tools

- **[API Development Efficiency Tool](https://github.com/liangskyli/mock/blob/master/packages/http-mock-gen/README.md)**: Generates TypeScript data types and HTTP mock data code based on OpenAPI v3.

## 📝 Development Guidelines

### Code Style

- File/Folder Naming: `kebab-case`
- Style Naming: BEM convention
- Component Naming: PascalCase
- TypeScript preferred

### Git Commit Guidelines

Use Conventional Commits format, for example:

- `feat: add new feature`
- `fix: resolve bug`
- `docs: update documentation`

## Project Structure

```tree
├── .husky # Husky configuration directory for managing Git hooks
│   └── commit-msg # Commit message hook configuration
│   └── pre-commit # Format hook configuration
├── __test__ # Unit test file directory
├── electron # Electron code directory
│   └── common # Common code for main process and preload scripts
│   └── main # Main process code
│   └── preload # Preload script code
├── mock # API mock data
├── public # Static resources directory for files not processed by Vite
├── resources # Electron resources directory for main process and preload scripts
├── src # Source code directory
│ ├── assets # Static resource files like images and fonts
│ ├── components # Public component directory
│ ├── hooks # Custom React Hooks
│ │ └── use-router # Router operation Hook
│ │ └── ...
│ ├── icons # SVG icons
│ ├── layouts # Page layout components
│ ├── pages # Page components
│ ├── router # Router configuration
│ │ └── modules # Page router configuration items
│ │ └── utils # Router-related utility functions
│ │ └── index.tsx # Router entry point
│ ├── services # API service encapsulation
│ ├── store # State management
│ │ └── modules # State management modules
│ │ └── index.ts # State entry point
│ ├── styles # Styles
│ ├── types # TypeScript type definitions
│ └── utils # Utility functions
├── .commitlintrc.js # Commitlint configuration file for Git commit message style checking
├── .editorconfig # Editor configuration file for unifying code style across different editors
├── .env # Base environment configuration file
├── .env.dev # Development environment configuration file
├── .env.dev-mock # Mock development environment configuration file
├── .env.pro # Production environment configuration file
├── .env.test # Test environment configuration file
├── .gitignore # Git ignore file
├── .npmrc # npm configuration file
├── .prettierignore # Code style configuration ignore file
├── .prettierrc.js # Prettier configuration file for code formatting
├── .stylelintignore # Style style configuration ignore file
├── electron.vite.config.ts # electron-vite configuration file
├── electron-builder.json # electron-builder configuration file
├── eslint.config.js # ESLint configuration file for code style and error checking
├── index.html # Entry page
├── lint-staged.config.js # Lint-Staged configuration file for running Linters before Git commit
├── package.json # Project dependency configuration file
├── mock.config.ts # Mock service configuration file
├── package.ts # Package configuration file
├── pnpm-lock.yaml # Package lock file
├── README.md
├── stylelint.config.js # Stylelint configuration file for style file style and error checking
├── tsconfig.json # TypeScript configuration file
├── vite.config.ts # Vite configuration file for defining Vite project build and service options
├── vitest.config.ts # Unit test configuration file
└── vitest.setup.ts # Unit test environment initialization configuration
```

## 🔄 Downgrade Guide

### To downgrade to React 18, execute:

```bash
pnpm install react@18.3.1 react-dom@18.3.1
```

Note: Need to replace React 19 specific features:

- Replace RouterTitle component and page dynamic title setting with react-helmet

### Electron Version Downgrade

- You can manually modify the electron version in package.json to a lower version, supporting a minimum version of 25.0.0

## 🤝 Contribution Guide

We welcome Issue submissions and Pull Requests. Please ensure:

1. Fork the project and create a feature branch
2. Follow the project's code standards
3. Provide clear commit messages
4. Update relevant documentation

## 📄 License

[MIT License](LICENSE)

## 🌟 支持项目

If this project helps you, please give it a Star ⭐️

---

## Base Template

https://github.com/liangskyli/electron-vite-react
