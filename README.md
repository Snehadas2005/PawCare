# PawCare - Stray Animal Rescue NGO Website

![PawCare Logo](<img width="1900" height="921" alt="Image" src="https://github.com/user-attachments/assets/4dbec653-d0f1-4e80-b953-a0a3a9145749" />)

## 🐾 Project Overview

PawCare is a comprehensive web application for a stray animal rescue NGO dedicated to rescuing, rehabilitating, and rehoming stray cats and dogs. The website serves as a platform to showcase the organization's mission, programs, and volunteer opportunities while providing an intuitive interface for potential volunteers to join the cause.

## ✨ Features

### 🏠 **Home Section**
- Hero banner with compelling call-to-action
- Image gallery showcasing rescue operations
- Real-time statistics (2,500+ animals rescued, 150+ volunteers, 95% adoption rate)
- Smooth navigation and responsive design

### 📖 **About Us Section**
- Detailed mission statement and organizational values
- Visual showcase of rescue operations, medical care, and adoption programs
- Complete contact information with icons
- Service highlights with checkmark indicators

### 🤝 **Volunteer Registration**
- Comprehensive volunteer application form
- Multiple input types: text, email, phone, select, textarea, checkboxes
- Skills and interests selection
- Form validation and submission feedback
- Success confirmation with auto-reset functionality

### 🎨 **Design Features**
- Modern, responsive design with mobile-first approach
- Smooth scrolling navigation
- Interactive hover effects and animations
- Professional color scheme (orange primary, neutral grays)
- Accessible design with proper contrast ratios

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Icons**: Lucide React
- **Styling**: Inline CSS with responsive design
- **Build Tool**: Create React App
- **Database Integration**: Firebase-ready (mock implementation included)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pawcare-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🔧 Configuration

### Firebase Setup (Optional)
The application includes Firebase configuration for data persistence:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyBRvZF3Ck8uJIM48Qsu-oYTZ9uQrkfl4Mo",
  authDomain: "pawcare-1156f.firebaseapp.com",
  projectId: "pawcare-1156f",
  // ... other config
};
```

Currently using mock implementation for demonstration. To enable Firebase:
1. Replace mock functions with actual Firebase methods
2. Install Firebase SDK: `npm install firebase`
3. Import and initialize Firebase in your components

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-featured layout with three-column grids
- **Tablet**: Adaptive layout with flexible grids
- **Mobile**: Single-column layout with hamburger menu

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Key Components

### Navigation System
- Fixed top navigation with smooth scrolling
- Active section highlighting
- Mobile hamburger menu
- Logo with heart icon

### Form Handling
- Controlled components with React state
- Real-time validation
- Multi-step user feedback
- Comprehensive data collection

### Image Gallery
- High-quality rescue photos
- Hover effects with scaling
- Gradient overlays for visual appeal

## 📊 Statistics Dashboard

The homepage features live statistics:
- **2,500+** Animals Rescued
- **150+** Active Volunteers  
- **95%** Successful Adoptions

## 🌟 Project Highlights

### User Experience
- **Intuitive Navigation**: Easy-to-use menu system with smooth transitions
- **Engaging Visuals**: High-quality images and consistent branding
- **Clear Call-to-Actions**: Prominent volunteer and donation buttons
- **Mobile Optimization**: Seamless experience across all devices

### Technical Excellence
- **Clean Code Architecture**: Well-organized components and reusable styles
- **Performance Optimized**: Efficient rendering and minimal bundle size
- **Accessibility Compliant**: Proper ARIA labels and keyboard navigation
- **SEO Ready**: Semantic HTML and meta tags

### Volunteer Management
- **Comprehensive Forms**: Detailed volunteer application process
- **Skill Matching**: Categories for different volunteer opportunities
- **Contact Management**: Emergency contact collection
- **Experience Tracking**: Previous animal care experience documentation

## 📞 Contact Information

- **Address**: 123 Rescue Street, Delhi, India
- **Phone**: +91-9876543210
- **Email**: info@pawcare.org

## 👨‍💻 Developer

**Sneha Das**  
Full Stack Developer specializing in React applications and user experience design.

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deployment Options
- **Netlify**: Drag and drop build folder
- **Vercel**: Connect GitHub repository
- **Firebase Hosting**: Use Firebase CLI
- **GitHub Pages**: Enable in repository settings

## 🔮 Future Enhancements

- [ ] User authentication system
- [ ] Real-time donation tracking
- [ ] Animal profile management
- [ ] Volunteer dashboard
- [ ] Event management system
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] Payment gateway integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- React community for excellent documentation
- Lucide React for beautiful icons
- All the volunteers and animal rescue organizations for inspiration
- Stock photo providers for high-quality rescue images

---

**Made with ❤️ for stray animals everywhere**

*PawCare - Because every animal deserves a loving home*
