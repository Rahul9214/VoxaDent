# 🦷 VoxaDent — AI Dental Assistant

VoxaDent is a **production-grade, AI-powered dental assistance platform** designed to simplify dental care access through intelligent booking, real-time AI voice interaction, and a scalable admin-driven workflow.

The platform combines **modern frontend engineering**, **secure authentication**, **AI integrations**, and **subscription-based monetization** into a cohesive, real-world system.


## 🧠 Problem Statement

Dental consultations today suffer from:
- Long booking friction
- Poor appointment coordination
- Limited real-time assistance
- No AI-powered triage or voice support
- Fragmented admin workflows

**VoxaDent solves this** by providing:
- A guided 3-step appointment booking flow
- AI-powered voice-based dental assistance
- Secure authentication & subscriptions
- Centralized admin appointment management

## ✨ Key Features

### 🏠 User Experience
- Modern landing page with gradients, illustrations, and responsive layout
- Accessible UI with clear CTAs and smooth transitions
- Mobile-first design philosophy

### 🔐 Authentication & Security
- Authentication via **Clerk**
  - Google
  - GitHub
  - Email & Password
- Mandatory email verification (6-digit OTP)
- Session-based protected routes

### 📅 Appointment Booking System
- 3-step guided booking flow:
  1. Select Dentist
  2. Choose Service & Time Slot
  3. Confirm Appointment
- Real-time availability validation
- Email confirmation on successful booking

### 📩 Email Automation
- Booking confirmation emails
- Invoice delivery via email
- Transactional emails powered by **Resend**

### 🗣️ AI Voice Agent (Pro Plans)
- AI voice assistant powered by **Vapi**
- Real-time conversational dental guidance
- Restricted to paid subscriptions via feature gating

### 💳 Subscription & Payments
- Subscription handling via **Clerk Billing**
- Plans:
  - Free
  - Pro
  - Premium
- Smart upgrade logic:
  - Users pay **only the price difference**
- Auto-generated invoices emailed to users

### 📊 Admin Dashboard
- View & manage all appointments
- Status updates (confirmed, cancelled, completed)
- User-centric appointment filtering
- Designed for operational scale

### 🗄️ Data & State Management
- PostgreSQL for persistence
- Type-safe queries
- Optimized data fetching using **TanStack Query**

## 🛠️ Tech Stack

| Layer | Technology |
|------|-----------|
| Frontend | Next.js (App Router), React |
| Styling | Tailwind CSS, Shadcn/UI, tweakcn |
| Auth & Billing | Clerk |
| Database | PostgreSQL |
| AI Voice | Vapi |
| Email | Resend |
| Data Fetching | TanStack Query |
| Dev Workflow | GitHub, CodeRabbit |
| Deployment | Vercel |

## 🧱 Architecture Overview

- Modular, feature-based folder structure
- Clear separation of:
  - UI components
  - Business logic
  - API interactions
- Server Components for secure operations
- Client Components only where interactivity is required

## ⚙️ Environment Variables

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

DATABASE_URL=

RESEND_API_KEY=

NEXT_PUBLIC_VAPI_ASSISTANT_ID=
NEXT_PUBLIC_VAPI_API_KEY=

```
## 🔄 Git & Development Workflow

- Feature-based branching  
- Pull Requests for every major change  
- PR reviews optimized using CodeRabbit  
- Clean commit history  
- No direct pushes to `main`  

## 📈 Performance & Optimization

- Server-side rendering where applicable  
- Optimized API calls using query caching  
- Reduced re-renders via component isolation  
- Lazy loading for non-critical components  

## 🚀 Deployment

- Hosted on Vercel  
- Free-tier optimized  
- Environment-based configurations  
- CI-ready setup

## 🚀 Live Demo
🔗 https://voxa-dent.vercel.app/ 

## 🧪 Future Enhancements

- AI symptom analysis (image + text)  
- Multi-clinic support  
- Doctor availability sync  
- Analytics dashboard for admins  
- Mobile app (React Native)

