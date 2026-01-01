# First Leap 🚀

A modern job platform built with React and Vite, connecting job seekers with companies and opportunities.

## 📋 Overview

First Leap is a comprehensive job search and recruitment platform designed to bridge the gap between job seekers ("desempregados") and companies looking to hire.  The platform features user authentication, job listings, company profiles, and an intuitive interface for both employers and job seekers.

## ✨ Features

- **User Authentication**
  - Email/password registration and login
  - Google OAuth integration
  - Email verification system
  
- **Job Management**
  - Browse available job listings
  - View detailed job offers
  - Create and post new job opportunities
  - Filter and search jobs

- **User Roles**
  - Job seekers profile management
  - Company profiles and listings
  - Job posting capabilities for employers

- **Social Features**
  - Social sharing integration
  - Contact information
  - Company networking

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.2.0
- **Build Tool:** Vite 5.2.11
- **Routing:** React Router DOM 6.23.1
- **Styling:** Bootstrap 5.3.3 + Custom CSS
- **Authentication:** @react-oauth/google
- **HTTP Client:** Axios
- **Social Sharing:** react-share, react-share-kit

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Arianna-Cicero/First-Leap.git
   cd First-Leap
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Configure your Google OAuth credentials
   - Set up API endpoints for backend integration

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173` (default Vite port)

## 🚀 Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues

## 📁 Project Structure

```
First-Leap/
├── src/
│   ├── assets/         # Static assets (images, fonts, etc.)
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   │   ├── home/       # Home page
│   │   ├── jobs/       # Jobs listing
│   │   ├── jobOffer/   # Individual job details
│   │   ├── createJob/  # Job creation form
│   │   ├── companies/  # Company listings
│   │   ├── desempregados/ # Job seekers profiles
│   │   ├── login/      # Login page
│   │   ├── register/   # Registration page
│   │   ├── contacts/   # Contact page
│   │   ├── about/      # About page
│   │   └── emailCode/  # Email verification
│   ├── shared/         # Shared utilities and components
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Application entry point
├── public/             # Public static files
├── index.html          # HTML template
├── index.css           # Global styles
└── vite.config.js      # Vite configuration
```

## 🔐 Authentication

The application uses Google OAuth 2.0 for authentication. To set up:

1. Create a project in [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Google OAuth API
3. Create OAuth 2.0 credentials
4. Update the `clientId` in `src/main.jsx` with your credentials

## 🌐 Deployment

Build the application for production: 

```bash
npm run build
```

The optimized build will be available in the `dist/` directory, ready to be deployed to your hosting service of choice (Vercel, Netlify, GitHub Pages, etc.).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Author

**Arianna Cicero** - [@Arianna-Cicero](https://github.com/Arianna-Cicero)

## 🙏 Acknowledgments

- React community for excellent documentation
- Vite for blazing-fast development experience
- Bootstrap for responsive design components
- All contributors and supporters of this project

---

**Note:** This project is under active development. Features and documentation may change as the project evolves.