# 💳 End-to-End Wallet

<div align="center">

![Wallet Banner](https://img.shields.io/badge/Digital%20Wallet-PayTM%20Clone-blue?style=for-the-badge&logo=wallet&logoColor=white)

**A full-stack digital wallet application built with modern web technologies**

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=flat-square&logo=Prisma&logoColor=white)](https://prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 🚀 Overview

This is a comprehensive digital wallet application inspired by PayTM, featuring secure user authentication, seamless money transfers, and bank integration. Built with a modern monorepo architecture using Turborepo for optimal development experience.

![Architecture Diagram](./assets/architecture-diagram.png)

## ✨ Features

### 🔐 **Authentication & Security**
- **Phone-based Authentication** - Phone number and password login
- **Secure Sessions** - NextAuth.js with credentials provider
- **Password Hashing** - bcrypt for secure password storage

### 💸 **Core Wallet Features**
- **On-ramp Transactions** - Bank deposits with webhook integration
- **P2P Transfers** - Send money between users
- **Balance Management** - Track available and locked balances
- **Transaction History** - Complete audit trail of all transactions

### 🏦 **Banking Integration**
- **Webhook Support** - Real-time bank notifications via Express server
- **Token-based Transactions** - Secure transaction processing
- **OnRamp Status Tracking** - Processing, Success, and Failure states

### 📱 **User Experience**
- **Responsive Design** - Mobile-first approach
- **Real-time Updates** - Live transaction status
- **Intuitive Dashboard** - Clean and modern interface

## 🏗️ Architecture

### **System Architecture**

The system consists of multiple interconnected components:

#### **Core Applications**
- **Next.js App (User)** - User-facing wallet application
- **Next.js App (Merchant)** - Merchant dashboard and payment processing
- **Bank Webhook Handler** - Processes incoming bank notifications (Node.js/CloudFlare)

#### **External Integrations**
- **Bank APIs** - HDFC, SBI, Axis Bank integrations
- **Database** - PostgreSQL for data persistence
- **Scrapers** - User withdrawal and bank transaction scrapers

#### **Data Flow**
1. Users interact with the Next.js user application
2. Merchants process payments through the merchant application
3. Bank webhooks notify the system of transaction updates
4. All applications connect to the central PostgreSQL database
5. External bank APIs handle actual money transfers
6. Scrapers monitor and sync transaction statuses

```mermaid
graph TB
    A[Next.js User App] --> B[PostgreSQL DB]
    C[Next.js Merchant App] --> B
    D[Bank Webhook Handler] --> B
    E[Bank APIs - HDFC/SBI/Axis] --> D
    F[User Withdrawal Scraper] --> A
    G[Bank Scraper] --> D
    B --> H[Transaction Processing]
```

### **Tech Stack**

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | Next.js + TypeScript | Server-side rendering & type safety |
| **Backend** | Next.js API Routes + Express | RESTful APIs & webhook handling |
| **Database** | PostgreSQL + Prisma | Data persistence & ORM |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **State Management** | Recoil | Global state management |
| **Authentication** | NextAuth.js | Secure authentication |
| **Monorepo** | Turborepo | Build system & task runner |

## 📁 Project Structure

```
end-to-end-wallet/
├── 📱 apps/
│   ├── user-app/          # Next.js user application
│   └── bank-webhook/      # Express webhook server
├── 📦 packages/
│   ├── db/               # Prisma schema & client
│   ├── ui/               # Shared UI components
│   ├── store/            # Recoil state management
│   ├── eslint-config/    # ESLint configuration
│   └── typescript-config/ # TypeScript configuration
├── 🐳 docker/            # Docker configurations
└── 🔧 Configuration files
```

## 🛠️ Development Workflow

### **Feature Planning Process**

1. **🎯 Requirements Analysis**
   - User story definition
   - Acceptance criteria
   - Technical specifications

2. **🎨 UI/UX Design**
   - **UX Strategy**: Follow first principles & industry best practices
   - **UI Design**: Modern, clean interface with accessibility in mind

3. **🏗️ Technical Design**
   - Database schema design
   - API route signatures
   - Component architecture

4. **⚡ Implementation**
   - Feature development
   - Testing & validation
   - Code review process

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+
- PostgreSQL database
- npm 10.2.4+

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/end-to-end-wallet.git
   cd end-to-end-wallet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   npm run db:generate
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

5. **Access the applications**
   - User App: `http://localhost:3001`
   - Bank Webhook: `http://localhost:3000` (after build)

### **Environment Setup**

Create `.env.local` files in each app directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/wallet_db"

# NextAuth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Bank Integration
BANK_WEBHOOK_SECRET="webhook-secret"
```

## 📊 Database Schema

### **Core Entities**

- **User** - User accounts with phone/password authentication
- **Balance** - User wallet balances (available + locked amounts)
- **p2pTransfer** - Peer-to-peer money transfers
- **OnRampTransaction** - Bank deposit transactions with status tracking
- **Merchant** - Merchant accounts (Google/Github auth)

## 🔄 Hot Paths & Performance

### **Critical User Journeys**
1. **💸 Send Money** - P2P transfer between users
2. **💳 Add Money** - OnRamp transactions from banks
3. **📊 View Balance** - Check available and locked balances
4. **📥 Bank Webhooks** - Process incoming bank notifications

### **Performance Optimizations**
- Database indexing on frequently queried fields
- Caching for user sessions and balances
- Optimistic UI updates for better UX

## 🚢 Deployment

### **CI/CD Pipeline**

The project includes automated deployment using GitHub Actions:

- **Build Pipeline** - Automated testing and building
- **Docker Integration** - Containerized deployments
- **Multi-environment Support** - Development, staging, and production

### **Deployment Commands**

```bash
# Build all applications
npm run build

# Start production server
npm run start-user-app
```

## 🧪 Testing

```bash
# Run linting
npm run lint

# Format code
npm run format
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by PayTM's user experience
- Built following 100xDevs best practices
- Modern web development patterns and principles

---

<div align="center">

**Built with ❤️ for the future of digital payments**

[⭐ Star this repo](https://github.com/abhii08/end-to-end-wallet) • [🐛 Report Bug](https://github.com/abhii08/end-to-end-wallet/issues) • [💡 Request Feature](https://github.com/abhii08/end-to-end-wallet/issues)

</div>