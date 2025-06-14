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
- Package Manager: pnpm

### Install Dependencies

```bash
pnpm install
```

### Development Modes

```bash
# Standard Development Mode
pnpm dev

# Development Mode with Mock Data
pnpm dev:mock
pnpm dev:mock-server  # Start mock service in a new terminal
```

### Production Build

```bash
# Build for Windows
pnpm build:pro:win
# Build for Mac
pnpm build:pro:mac
```

## 🔧 环境配置

The project supports multiple environment configurations:

- `.env` - Base configuration
- `.env.dev` - Development environment
- `.env.pro` - Production environment
- `.env.test` - Test environment
- `.env.dev-mock` - Mock development environment

## 📚 技术栈

### 🛠 技术栈选型

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

### 核心依赖

- Electron 35
- React 19
- React Router v7
- TypeScript
- Vite 6
- Tailwind CSS v4
- Zustand (状态管理)
- Axios (HTTP 请求)

### 工具链

- ESLint
- Prettier
- Stylelint
- Husky
- Commitlint
- Vitest

### 🔧 其他推荐工具

- **[接口开发提效工具](https://github.com/liangskyli/mock/blob/master/packages/http-mock-gen/README.md)**：基于openapi v3 生成 ts数据类型和http mock 数据代码。

## 📝 开发规范

### 代码风格

- 文件/文件夹命名：`kebab-case`
- 样式命名：BEM 规范
- 组件命名：PascalCase
- TypeScript 优先

### Git 提交规范

使用 Conventional Commits 规范，例如：

- `feat: add new feature`
- `fix: resolve bug`
- `docs: update documentation`

## 项目结构

```tree
├── .husky # Husky 配置文件夹，用于管理 Git 钩子
│   └── commit-msg # 检查提交钩子配置
│   └── pre-commit # 格式化钩子配置
├── __test__ # 单元测试文件目录
├── electron # electron代码目录
│   └── common # 主进程和预加载脚本的通用代码
│   └── main # 主进程代码
│   └── preload # 预加载脚本代码
├── mock # 接口mock数据
├── public # 静态资源目录，用于存放不经过 Vite 处理的静态资源
├── resources # electron资源目录，用于主进程和预加载脚本的资源
├── src # 源代码目录
│ ├── assets # 静态资源文件，如图片、字体等
│ ├── components # 公共组件目录
│ ├── hooks # 自定义 React Hooks
│ │ └── use-router # 路由操作 Hook
│ │ └── ...
│ ├── icons # svg 图标
│ ├── layouts # 页面布局组件
│ ├── pages # 页面组件
│ ├── router # 路由配置
│ │ └── modules # 页面路由配置项
│ │ └── utils # 路由相关工具函数
│ │ └── index.tsx # 路由入口
│ ├── services # API 服务封装
│ ├── store # 状态管理
│ │ └── modules # 状态管理模块
│ │ └── index.ts # 状态入口
│ ├── styles # 样式
│ ├── types # TypeScript 类型定义
│ └── utils # 工具函数
├── .commitlintrc.js # Commitlint 配置文件，用于 Git 提交信息的风格检查
├── .editorconfig # 编辑器配置文件，用于统一不同编辑器的代码风格
├── .env # 基础环境配置文件
├── .env.dev # 开发环境配置文件
├── .env.dev-mock # mock开发环境配置文件
├── .env.pro # 生产环境配置文件
├── .env.test # 测试环境配置文件
├── .gitignore # git忽略文件
├── .npmrc # npm配置文件
├── .prettierignore # 代码风格配置忽略文件
├── .prettierrc.js # Prettier 配置文件，用于代码格式化
├── .stylelintignore # 样式风格配置忽略文件
├── electron.vite.config.ts # electron-vite配置文件
├── electron-builder.json # electron-builder配置文件
├── eslint.config.js # ESLint 配置文件，用于代码风格和错误检查
├── index.html # 入口页面
├── lint-staged.config.js # Lint-Staged 配置文件，用于在 Git 提交前自动运行 Linters
├── package.json # 项目依赖配置文件
├── mock.config.ts # mock服务配置文件
├── package.ts # 包配置文件
├── pnpm-lock.yaml # 安装包锁定文件
├── README.md
├── stylelint.config.js # Stylelint 配置文件，用于样式文件的风格和错误检查
├── tsconfig.json # TypeScript 配置文件
├── vite.config.ts # Vite 配置文件，用于定义 Vite 项目的构建和服务选项
├── vitest.config.ts # 单元测试配置文件
└── vitest.setup.ts # 单元测试环境初始化配置
```

## 🔄 降级指南

### To downgrade to React 18, execute:

```bash
pnpm install react@18.3.1 react-dom@18.3.1
```

Note: Need to replace React 19 specific features

- Replace RouterTitle component and page dynamic title setting with react-helmet

### Electron Version Downgrade

- You can manually modify the electron version in package.json to a lower version, supporting a minimum version of 25.0.0

## 🤝 贡献指南

We welcome Issue submissions and Pull Requests. Please ensure:

1. Fork the project and create a feature branch
2. Follow the project's code standards
3. Provide clear commit messages
4. Update relevant documentation

## 📄 License

[MIT License](LICENSE)

## 🌟 支持项目

如果这个项目对你有帮助，请给它一个 Star ⭐️

---

## Base Template

https://github.com/liangskyli/electron-vite-react
