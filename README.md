# AISSMS IEEE Student Branch Committee Website

A modern, responsive website for the IEEE Student Branch Committee built with React and Tailwind CSS.

## 🚀 Features

- 🎨 **Modern Design**: Clean, professional interface with Tailwind CSS
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast Performance**: Built with React 18 for optimal user experience
- 🔍 **Member Search**: Search and filter committee members
- 📝 **Contact Form**: Interactive contact form with validation
- 🎪 **Events Management**: Complete events listing with filtering and search
- 🎯 **Component-Based**: Modular React components for easy maintenance
- 🔗 **SEO Optimized**: Meta tags and social media integration

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Router** - Client-side routing for single-page application
- **JavaScript ES6+** - Modern JavaScript features and syntax

## 📁 Project Structure

```
ieee-committee-website/
├── public/                     # Static assets
│   ├── images/                 # All images and photos
│   │   ├── IEEE logo.jpeg     # Main logo
│   │   ├── Vice-chair.jpeg    # Member photos
│   │   └── ...                # Other member images
│   ├── index.html             # Main HTML template
│   ├── manifest.json          # PWA manifest
│   └── robots.txt             # SEO robots file
├── src/                       # Source code
│   ├── components/            # Reusable React components
│   │   ├── Header.jsx         # Navigation header
│   │   ├── Footer.jsx         # Site footer
│   │   ├── Hero.jsx           # Hero section component
│   │   ├── MemberCard.jsx     # Individual member card
│   │   ├── MemberGroup.jsx    # Group of members
│   │   ├── FilterToolbar.jsx  # Filter controls
│   │   ├── EventCard.jsx      # Event display card
│   │   └── EventFilter.jsx    # Event filtering
│   ├── pages/                 # Page components
│   │   ├── Home.jsx           # Home page
│   │   ├── Events.jsx         # Events page
│   │   └── Contact.jsx        # Contact page
│   ├── data/                  # Data files
│   │   ├── members.js         # Member data
│   │   └── events.js          # Event data
│   ├── App.jsx                # Main app component
│   ├── index.js               # App entry point
│   └── index.css              # Global styles with Tailwind
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ieee-committee-website
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
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🎨 Customization

### Adding New Members

Edit `src/data/members.js` to add or modify committee members:

```javascript
{
  name: 'John Doe',
  role: 'New Role',
  group: 'group_name',
  img: '/images/member-photo.jpg',
  tags: ['tag1', 'tag2'],
  bio: 'Member bio here',
  links: { 
    email: 'john@example.com', 
    linkedin: 'https://linkedin.com/in/john' 
  }
}
```

### Adding New Events

Edit `src/data/events.js` to add or modify events:

```javascript
{
  id: 7,
  title: "New Event Title",
  description: "Event description...",
  date: "2024-03-20",
  time: "10:00 AM - 12:00 PM",
  location: "Event Location",
  type: "workshop",
  status: "upcoming",
  image: "https://example.com/image.jpg",
  speakers: [...],
  tags: ["tag1", "tag2"],
  registrationLink: "https://forms.gle/example",
  maxAttendees: 50,
  currentAttendees: 25
}
```

### Styling

The website uses Tailwind CSS for styling. You can:

- Modify `tailwind.config.js` to customize colors, fonts, and other design tokens
- Update component classes in the JSX files
- Add custom CSS in `src/index.css`

### Colors

The website uses a custom color palette defined in `tailwind.config.js`:

- **Brand Colors**: Blue theme (`brand-50` to `brand-900`)
- **Accent Colors**: Purple theme (`accent-50` to `accent-900`)

## 📱 Features Overview

### Home Page
- Hero section with call-to-action buttons
- About section with vision, mission, and values
- Interactive member filtering and search
- Member cards with photos and contact information
- Join us section with social links

### Events Page
- Event listings with filtering and search
- Event cards with detailed information
- Registration tracking and progress bars
- Speaker information and event tags
- Event type and status filtering

### Contact Page
- Contact form with validation
- Committee member contact information
- Office details and hours
- Social media links
- Quick action buttons

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface
- Optimized for all screen sizes

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please contact the IEEE committee at ieee@aissmscoe.com

---

**Built with ❤️ by the AISSMS IEEE Student Branch Committee**