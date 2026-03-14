# The Wild Oasis

一个现代化的酒店预订管理系统 - React 课程项目

## 项目简介

The Wild Oasis 是一个为精品度假酒店打造的内部管理系统，帮助酒店员工高效管理 Cabin、预订和客户信息。

## 功能特性

**身份认证** - 基于 Supabase 的安全登录系统
**Cabin 管理** - 增删改查 Cabin 信息，支持图片上传
**预订管理** - 查看、筛选、编辑所有预订记录
**客户管理** - 管理客户信息和历史订单
**数据统计** - 入住率、收入等关键数据可视化图表
**暗色模式** - 支持亮色/暗色主题切换
**实时通知** - 操作成功/失败的 toast 提示

## 技术栈

| 类别         | 技术                 | 用途              |
| ------------ | -------------------- | ----------------- |
| **核心框架** | React 18 + Vite      | UI 构建与开发工具 |
| **路由**     | React Router v6      | 页面导航与管理    |
| **状态管理** | TanStack Query v4    | 服务器状态管理    |
| **表单处理** | React Hook Form      | 表单验证与状态    |
| **样式**     | Styled Components v6 | 组件级样式管理    |
| **后端**     | Supabase             | 数据库、认证、API |
| **图表**     | Recharts             | 数据可视化        |
| **日期处理** | date-fns             | 日期格式化与计算  |
| **通知**     | React Hot Toast      | 操作反馈提示      |
| **图标**     | React Icons          | 图标组件库        |
| **代码规范** | ESLint               | 代码质量控制      |

## 快速开始

### 前置要求

- Node.js (v16 或更高版本)
- npm 或 yarn
- Supabase 账号（用于后端服务）

### 安装步骤

1. **克隆项目**

```bash
git clone [你的仓库地址]
cd the-wild-oasis
```

2. **安装依赖**

```bash
npm install
# 或
yarn install
```

3. **配置 Supabase**
   - 在 [Supabase](https://supabase.com) 创建新项目
   - 获取项目 URL 和 anon key
   - 创建 `.env` 文件并添加：

```env
VITE_SUPABASE_URL=你的Supabase项目URL
VITE_SUPABASE_ANON_KEY=你的Supabase匿名密钥
```

4. **启动开发服务器**

```bash
npm run dev
# 或
yarn dev
```

5. **打开浏览器**
   访问 `http://localhost:5173`

## 项目结构

```
the-wild-oasis/
├── public/              # 静态资源
├── src/
│   ├── components/      # 可复用组件
│   │   ├── cabins/     # Cabin 相关组件
│   │   ├── bookings/   # 预订相关组件
│   │   └── ui/         # 通用UI组件
│   ├── features/        # 功能模块
│   ├── hooks/           # 自定义 Hooks
│   ├── pages/           # 页面组件
│   │   ├── Dashboard.jsx
│   │   ├── Bookings.jsx
│   │   ├── Cabins.jsx
│   │   └── Users.jsx
│   ├── services/        # API 服务
│   │   └── supabase.js  # Supabase 配置
│   ├── styles/          # 全局样式
│   ├── utils/           # 工具函数
│   ├── App.jsx          # 根组件
│   └── main.jsx         # 入口文件
├── .env                 # 环境变量
├── .eslintrc.js        # ESLint 配置
├── index.html
├── package.json
├── vite.config.js       # Vite 配置
└── README.md
```

## 可用脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run preview` - 本地预览生产版本
- `npm run lint` - 运行代码检查
