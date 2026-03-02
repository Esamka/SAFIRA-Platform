# SAFIRA Platform

An AI-powered customer support platform that helps businesses automate conversations, improve response times, and deliver smarter customer experiences.

## Introduction

SAFIRA is a modern, intelligent customer support solution built with Next.js and TypeScript. It provides businesses with:
- **AI-Powered Support**: Automated customer support using advanced AI
- **Multi-Channel Communication**: Support across multiple channels (Chat, Email, Social Media)
- **Smart Analytics**: Advanced insights and reporting
- **Workflow Automation**: Intelligent workflow management
- **Multilingual Support**: Built-in support for Arabic, English, and French

## Getting Started

### Prerequisites
- Node.js 16+ 
- pnpm (recommended) or npm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/safira-platform.git
cd safira-platform
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Set up environment variables (create `.env.local`):
```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

### Running the Application

Development mode:
```bash
pnpm dev
# or
npm run dev
```

Production build:
```bash
pnpm build
pnpm start
```

## Build and Test

### Build
```bash
pnpm build
```

### Production Start
```bash
pnpm start
```

### Lint
```bash
pnpm lint
```

## Features

- **Responsive Design**: Works seamlessly across all devices
- **RTL Support**: Full right-to-left language support for Arabic
- **Dark Theme UI**: Modern dark interface
- **Tailwind CSS**: Utility-first CSS framework
- **i18n Support**: Multi-language support with i18next
- **Next.js 16**: Latest Next.js features and performance

## Project Structure

```
src/
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── pages/             # Page components
│   ├── sections/          # Section components
│   ├── layout/            # Layout components
│   └── ui/                # UI components
├── i18n/                  # Internationalization
│   └── locales/           # Translation files (ar, en, fr)
├── lib/                   # Utilities and helpers
├── types/                 # TypeScript types
└── styles/                # Global styles
```

## Technology Stack

- **Framework**: Next.js 16.1.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: i18next
- **UI Components**: Custom React components
- **Database**: Configurable (add your own)
- **Deployment**: Vercel or self-hosted

## Localization

The platform supports three languages:
- **Arabic (العربية)** - RTL
- **English** - LTR
- **French (Français)** - LTR

Language preferences are automatically detected and stored in browser storage.

## Contributing

We welcome contributions! Here's how to help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [i18next](https://www.i18next.com)

