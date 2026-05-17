# Siddharth Mourya - Comprehensive Portfolio

## Professional Summary

Full-stack developer with expertise in modern web technologies, cloud platforms, and real-time communication systems. Experienced in building scalable applications using Node.js, React, TypeScript, and MongoDB. Passionate about creating intuitive user interfaces and robust backend systems. Proven track record with 49+ projects spanning full-stack web development, IoT platforms, embedded systems, and game development.

---

## 🎯 Featured Projects

### 1. **Powerlytics Suite** (Current)
**Status:** Active Development  
**Repository:** [powerlytic-be](https://github.com/siddharth-mourya/powerlytic-be) | [powerlytic-ui](https://github.com/siddharth-mourya/powerlytic-ui)  
**Live Demo:** https://powerlytic-ui.vercel.app

#### Project Overview
A comprehensive analytics and energy management platform providing real-time data visualization and reporting capabilities. The project is built as a full-stack application with separate backend and frontend repositories.

#### Technical Architecture

**Backend (TypeScript + Express.js)**
- **Framework:** Express 5.1.0
- **Language:** TypeScript with strict type checking
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens) with bcrypt password hashing
- **Additional Libraries:**
  - `axios` - HTTP client for external API integration
  - `uuid` - Unique identifier generation
  - `cors` - Cross-Origin Resource Sharing middleware
  - `dotenv` - Environment configuration management
  
**Key Features:**
- RESTful API architecture
- JWT-based authentication system
- Admin seed functionality for initial setup
- Error handling with Winston logging
- Input validation using express-validator
- Type-safe development with TypeScript

**Build & Deployment:**
- Development: `ts-node-dev` for hot-reload development
- Production Build: `tsc` compiler
- ESLint for code quality
- Prettier for code formatting

**Frontend (Next.js + TypeScript)**
- **Framework:** Next.js with modern App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (https://powerlytic-ui.vercel.app)
- **Key Features:**
  - Server-side rendering for better performance
  - Static site generation capabilities
  - Optimized image loading with Next.js Image component
  - Built-in font optimization

#### Responsibilities
- Full-stack development from architecture design to deployment
- Database schema design and optimization
- API endpoint development and testing
- Frontend component development with TypeScript
- User authentication and authorization

#### Impact
- 1 fork indicating developer interest
- Active maintenance and ongoing improvements
- Live production deployment on Vercel

---

### 2. **Real-Time Chat Application**
**Repository:** [chatApp](https://github.com/siddharth-mourya/chatApp)  
**Created:** May 2024  
**Status:** Production-Ready  
**Visibility:** Private

#### Project Overview
A comprehensive full-stack real-time messaging application with user authentication, message persistence, and live socket communication.

#### Technical Stack

**Backend (Node.js + Express.js + Socket.io)**
- **Core Framework:** Express 4.19.2
- **Real-time Communication:** Socket.io 4.7.5
- **Database:** MongoDB with Mongoose 8.3.4
- **Authentication:**
  - JWT with jsonwebtoken 9.0.2
  - Password hashing with bcryptjs 2.4.3
  - Cookie-based session management with cookie-parser 1.4.6
- **Middleware:** CORS for cross-origin requests
- **Development Tool:** Nodemon for hot-reload

**Frontend (React + Vite + Zustand)**
- **Framework:** React 18.2.0
- **Build Tool:** Vite 5.2.0 with HMR
- **State Management:** Zustand 4.5.2 (lightweight alternative to Redux)
- **Routing:** React Router DOM 6.23.1
- **UI Components:** React Bootstrap, React Icons 5.2.1
- **Real-time Communication:** Socket.io-client 4.7.5
- **Notifications:** React Hot Toast 2.4.1 for user feedback
- **Styling:** Tailwind CSS 3.4.3, Sass 1.77.1
- **Linting:** ESLint with React plugins

#### Architecture Highlights

**Backend Features:**
1. **Authentication Routes** (`/api/auth`)
   - User registration and login
   - Password hashing and verification
   - JWT token generation and validation

2. **Message Routes** (`/api/message`)
   - Message persistence to MongoDB
   - Message retrieval and history
   - Real-time message delivery via Socket.io

3. **User Routes** (`/api/users`)
   - User profile management
   - User discovery
   - Online/offline status tracking

4. **Socket.io Integration**
   - Real-time message broadcasting
   - User presence tracking
   - Connection/disconnection handling

**Frontend Features:**
- Responsive UI with Bootstrap components
- Real-time message updates with Socket.io
- State management with Zustand for simplified logic
- Toast notifications for user actions
- Client-side routing with React Router

#### Deployment Strategy
- Full-stack served from single backend
- Frontend built and served as static files from Express
- Can be deployed as monolithic application

#### Technologies Learned/Demonstrated
- Real-time application architecture
- WebSocket protocol implementation
- Full-stack state management
- Production-ready authentication patterns

---

### 3. **URL Shortener Service**
**Repository:** [url-shortner](https://github.com/siddharth-mourya/url-shortner)  
**Created:** May 2022  
**Status:** Complete  
**Visibility:** Public

#### Project Overview
RESTful API service for converting long URLs into short, shareable links with click tracking capabilities.

#### Technical Stack

**Backend (Node.js + Express.js)**
- **Framework:** Express 4.18.1
- **Database:** MongoDB with Mongoose 6.3.4
- **URL Generation:** Shortid 2.2.16 for unique short IDs
- **Validation:** 
  - `is-url` - URL format validation
  - `valid-url` - URL validation library
- **Development:** Nodemon for development workflow
- **CORS:** Enabled for cross-origin requests

#### Implementation Details

**Core Functionality:**
1. **URL Shortening Algorithm**
   - Uses shortid library for unique short code generation
   - Stores original URL and short code mapping in MongoDB
   - Prevents duplicate URLs with database queries

2. **API Endpoints**
   - `GET /` - Service status endpoint
   - `POST /shorten` - Create shortened URL
   - `GET /:shortCode` - Redirect to original URL

3. **Database Schema**
   - Original URL storage
   - Unique short code identifier
   - Creation timestamp
   - Click count for analytics

#### Key Features
- URL validation before shortening
- Redirect functionality
- CORS-enabled for frontend integration
- Error handling for invalid URLs
- Performance optimized with database indexing

#### Technologies Mastered
- RESTful API design
- URL validation and security
- Database indexing for performance
- Redirect mechanisms

---

### 4. **Gmail UI Clone**
**Repository:** [gmail-ui](https://github.com/siddharth-mourya/gmail-ui)  
**Status:** Portfolio Project

#### Project Overview
A React-based UI recreation of Gmail's interface, demonstrating advanced React component architecture and styling capabilities.

#### Technical Stack

**Frontend (React + Bootstrap + SASS)**
- **Framework:** React 18.2.0
- **UI Library:** React Bootstrap 2.7.4, Bootstrap 5.2.3
- **Icons:** FontAwesome with React integration
  - FontAwesome core library
  - Free Solid SVG icons
  - Free Regular SVG icons
- **Styling:** SASS for advanced CSS features
- **Build Tool:** React Scripts

#### Design & Implementation

**Component Structure:**
- Modular component architecture
- Reusable UI components using Bootstrap
- SASS mixins and variables for styling consistency

**Features Replicated:**
- Email list view with sender, subject, and preview
- Left sidebar navigation
- Email detail view
- Search functionality UI
- Settings and compose sections
- Responsive mobile interface

**UI/UX Highlights:**
- Responsive design adapting to different screen sizes
- Icon integration for visual clarity
- Bootstrap grid system for layout
- SASS nesting for maintainable styles

#### Learning Outcomes
- Advanced React component composition
- Bootstrap framework mastery
- Icon integration techniques
- UI/UX design implementation

---

### 5. **Senior Frontend Interview Preparation**
**Repository:** [frontend-tauji](https://github.com/siddharth-mourya/frontend-tauji)  
**Status:** Active Documentation  
**Visibility:** Public

#### Project Overview
A comprehensive documentation site built with Docusaurus for senior-level frontend engineering interview preparation.

#### Technical Stack

**Framework:** Docusaurus 3 + TypeScript  
- **Language:** TypeScript for type safety
- **Search:** Local search plugin for offline search capability
- **Styling:** Custom CSS with dark mode support
- **Deployment:** Vercel/Netlify ready

#### Content Structure

**Covered Topics:**
1. **JavaScript** - Core concepts, advanced patterns, design patterns, event loop
2. **TypeScript** - Type system, advanced types, generics, utility types
3. **React** - Hooks, patterns, fiber architecture, concurrent features
4. **Next.js** - App router, server components, optimization
5. **Browser** - Internals, APIs, web vitals
6. **Network** - HTTP, caching, authentication
7. **Security** - XSS, CSRF, CSP
8. **Performance** - Optimization techniques, lazy loading
9. **Accessibility** - ARIA, keyboard navigation
10. **Styling** - CSS-in-JS, CSS modules, modern CSS
11. **Tooling** - Build systems, bundlers, testing

#### Features
- **Dual format**: Quick Revision + Deep Understanding
- **Dark mode support** - Automatic theme switching
- **Full-text search** - Local search for offline usage
- **Mobile-friendly** - Responsive design
- **Code examples** - Syntax highlighting with multiple languages

#### Build & Deployment
**Development:** `npm start` - Local development server  
**Production:** `npm run build` - Static content generation  
**Output:** `build/` directory for hosting

---

### 6. **Switch IoT Platform - Backend**
**Repository:** [switch-be](https://github.com/siddharth-mourya/switch-be)  
**Description:** Backend for IoT platform Switch

#### Technical Stack

**Technology:** Node.js + Express.js + MongoDB  
- **Framework:** Express 4.19.2
- **Database:** MongoDB with Mongoose 8.5.2
- **Input Validation:** Express-validator 7.1.0
- **Logging:** Winston 3.13.1 for structured logging
- **Environment:** Dotenv for configuration management
- **Development:** Nodemon for hot-reload

#### Architecture

**Core Components:**
1. **Database Connection** (`config/db.js`)
   - MongoDB connection establishment
   - Connection pooling and error handling
   - Retry mechanisms

2. **Logger Configuration** (`config/logger.js`)
   - Structured logging with Winston
   - Different log levels (info, error, warn, debug)
   - Log persistence for debugging
   - File-based logging

3. **Express Server** (`server.js`)
   - Port configuration from environment variables
   - Middleware setup
   - Route initialization
   - Health check endpoints

**Features:**
- RESTful API for IoT device management
- Input validation on all endpoints
- Structured logging for monitoring
- Environment-based configuration
- Production-ready error handling

#### Use Cases
- Device registration and management
- Command execution on IoT devices
- Data collection from sensors
- Real-time device status tracking
- Device telemetry storage

#### Technical Concepts Demonstrated
- Async/await patterns
- Error handling middleware
- Database connections
- Logging strategies

---

## 📚 Additional Notable Projects

### 7. **Chat Application UI - Vibechat**
**Repository:** [vibechat-ui](https://github.com/siddharth-mourya/vibechat-ui)  
**Status:** Complete

#### Technical Stack
- **Framework:** React 18.2.0
- **Build Tool:** Vite 4.4.0
- **UI:** React Bootstrap 2.8.0, Bootstrap 5.3.0
- **Routing:** React Router DOM 6.14.1
- **Styling:** SASS 1.63.6

#### Features
- User chat list view with avatars
- Real-time conversation display
- Message input with formatting
- Responsive mobile-friendly layout
- User search functionality
- Online status indicators

#### Architecture
- Component-based modular design
- Bootstrap responsive grid
- SASS for advanced styling
- React hooks for state management

---

### 8. **Next.js Blog Platform**
**Repository:** [NextBlog](https://github.com/siddharth-mourya/NextBlog)  
**Status:** Complete

#### Technical Stack
- **Framework:** Next.js 14.0.4
- **Language:** TypeScript
- **Styling:** CSS modules, Tailwind CSS
- **Development:** ESLint with Next.js rules

#### Features
- Server-side rendering for SEO
- Static site generation for optimized performance
- Blog post management system
- Responsive mobile-first design
- TypeScript for type safety
- Fast refresh during development

#### Use Cases
- Content management system
- Static blogging platform
- Documentation site
- Marketing website

---

### 9. **In-Time - Time Management App**
**Repository:** [in-time](https://github.com/siddharth-mourya/in-time)  
**Status:** Active Development

#### Technical Stack
- **Framework:** Next.js 15.1.6 (Latest with Turbopack)
- **Language:** TypeScript
- **Utilities:** 
  - `@uidotdev/usehooks` - Custom React hooks
  - `moment` - Date/time manipulation
- **Styling:** SASS 1.83.4
- **Development:** Turbopack for fast builds

#### Features
- Time and schedule management
- Moment.js integration for date handling
- Custom React hooks for reusability
- Next.js 15 latest features
- TypeScript strict mode
- ESLint configuration

#### Implementation Highlights
- Modern Next.js App Router
- Advanced time utilities
- Responsive design
- Performance optimized with Turbopack

---

### 10. **UI Components Library**
**Repository:** [ui-components](https://github.com/siddharth-mourya/ui-components)  
**Status:** Active Development

#### Technical Stack
- **Framework:** Next.js 15.1.6 with Turbopack
- **Language:** React 19.0.0 + TypeScript
- **Development:** Turbopack for blazing fast builds

#### Components Included
- Reusable button components
- Form controls and inputs
- Modal/dialog components
- Navigation elements
- Card layouts
- Grid components
- Badge and label components

#### Purpose
- Shared component library
- Consistency across projects
- Component documentation
- Storybook integration ready

#### Benefits
- Code reusability
- Consistent design system
- Type safety with TypeScript
- Fast development with Turbopack

---

### 11. **Redirection App - Device Parameters Proxy**
**Repository:** [redirection-app](https://github.com/siddharth-mourya/redirection-app)  
**Status:** Production

#### Technical Stack
- **Framework:** Express.js
- **HTTP Client:** axios 1.7.7
- **Environment:** Dotenv for configuration

#### Core Functionality

**API Routes:**

1. **Device Parameters Route** (`/api/deviceParams`) - Receives: pH, TDS, Temperature, Battery Voltage, Solar Voltage, Turbine Voltage, Turbidity, Water Flow Rate Forwards: Data to external API (waterfit service) Response: Formatted JSON with all parameters 
2. **Health Check Route** (`/health`) Purpose: Server availability verification Response: Status OK with uptime information


#### Data Flow
- Query parameters parsing
- Data transformation
- External API communication
- Error handling and logging
- Response formatting

#### Parameters Handled
- **pH Level** - Water quality measurement
- **TDS (Total Dissolved Solids)** - Water purity
- **Temperature** - Ambient/water temperature
- **Battery Voltage** - Device power status
- **Solar Voltage** - Solar panel output
- **Turbine Voltage** - Alternative power source
- **Turbidity** - Water clarity
- **Water Flow Rate** - Flow measurement

#### Use Cases
- IoT device data forwarding
- Sensor data aggregation
- Real-time monitoring
- Data integration bridge

---

### 12. **Shaukeens Menu - QR Code Restaurant Menu**
**Repository:** [shaukeens-menu](https://github.com/siddharth-mourya/shaukeens-menu)  
**Status:** Production

#### Technical Stack
- **Framework:** React 18.2.0
- **Build:** React Scripts 5.0.1
- **Styling:** SASS 1.56.1
- **Testing:** Jest integration

#### Features

**Core Functionality:**
- QR code generation for menu access
- Responsive menu display
- Item search and filtering
- Category-based organization
- Real-time menu updates

**Technical Implementation:**
- React components for modularity
- SASS for advanced styling
- State management with React Hooks
- Dynamic QR code generation

**Business Benefits:**
- Contactless menu access
- Reduced printing costs
- Real-time menu updates
- Easy menu modifications
- Analytics on customer engagement

#### Use Cases
- Restaurant digital transformation
- Bar and café menus
- Event catering menus
- Fast food chains

---

### 13. **URL Shortener UI - Frontend**
**Repository:** [url-shortner-ui](https://github.com/siddharth-mourya/url-shortner-ui)  
**Status:** Complete

#### Technical Stack
- **Framework:** React 18.1.0
- **Build:** React Scripts 5.0.1
- **UI:** Bootstrap 5.1.3
- **HTTP:** axios 0.27.2
- **QR Code:** react-qr-code 2.0.7
- **Icons:** FontAwesome with React
- **Styling:** node-sass

#### Features

**User Interface:**
- URL input form
- Short URL generation
- QR code display for shortened URLs
- Copy-to-clipboard functionality
- URL history
- Responsive design

**Integration:**
- Connects to URL shortener backend
- Real-time URL validation
- QR code generation for sharing
- Bootstrap components for styling

**UI Components:**
- Input forms with validation
- Copy buttons with feedback
- QR code display
- History list
- Share buttons

#### Technologies Demonstrated
- React Hooks for state management
- Bootstrap responsive design
- Integration with backend APIs
- QR code generation
- User feedback mechanisms

---

### 14. **Personal Portfolio Website**
**Repository:** [portfolio](https://github.com/siddharth-mourya/portfolio)  
**Status:** Complete

#### Technical Stack
- **Framework:** React 18.0.0
- **Build:** React Scripts 5.0.0
- **UI:** React Bootstrap 2.2.3, Bootstrap 5
- **Routing:** React Router DOM 6.3.0
- **Effects:** Typewriter-effect 2.19.0
- **Icons:** FontAwesome (Brands + Solid)
- **Date:** moment 2.29.4
- **Styling:** node-sass

#### Features

**Portfolio Sections:**
- Hero section with typewriter effect
- About me section
- Skills showcase
- Project portfolio
- Experience timeline
- Contact information
- Social media links

**Technical Highlights:**
- Animated text effects
- Responsive design
- Smooth scrolling
- Modal for project details
- Contact form
- Social media integration

**Components:**
- Navigation bar
- Hero banner
- Skills cards
- Project showcase
- Footer with links
- Contact form

#### Purpose
- Professional portfolio showcase
- GitHub integration
- Social media links
- Contact channels

---

### 15. **API Testing Backend**
**Repository:** [TEST-APIs](https://github.com/siddharth-mourya/TEST-APIs)  
**Status:** Testing/Development

#### Technical Stack
- **Framework:** Express.js 4.18.2
- **Language:** JavaScript (Node.js)
- **Purpose:** API testing and development

#### Features
- Mock API endpoints
- Request/response logging
- Error handling
- Development testing
- API documentation

#### Use Cases
- Frontend testing without live backend
- API design validation
- Integration testing
- Development environment setup

---

### 16. **Node Weather Server**
**Repository:** [node-weather-server](https://github.com/siddharth-mourya/node-weather-server)  
**Status:** Complete

#### Technical Stack
- **Framework:** Express.js 4.17.1
- **Templating:** EJS 3.1.5, HBS 4.1.1
- **HTTP:** request 2.88.2
- **HTML Output**

#### Features

**Functionality:**
- Weather API integration
- Real-time weather data fetching
- Location-based weather
- Temperature display
- Weather conditions
- Forecast information

**Technology Details:**
- Server-side rendering with EJS
- External weather API integration
- HTTP request handling
- Dynamic HTML generation
- Error handling

**API Integration:**
- OpenWeather or similar service
- Real-time data fetching
- Caching strategies
- Error handling

#### Use Cases
- Weather information portal
- Local weather display
- Web application backend
- Learning project

---

### 17. **Test Farm - IoT Farm Management**
**Repository:** [test-farm](https://github.com/siddharth-mourya/test-farm)  
**Status:** Development

#### Technical Stack
- **Framework:** Express.js 5.1.0 (Latest)
- **Templating:** EJS 3.1.10
- **IoT Protocol:** MQTT 5.13.0
- **Middleware:** body-parser 2.2.0

#### Features

**Functionality:**
- IoT device management
- MQTT communication
- Real-time sensor data
- Farm monitoring
- Equipment control

**Technical Implementation:**
- MQTT protocol for IoT devices
- Express.js API endpoints
- EJS template rendering
- Body parsing for requests
- Event-driven architecture

**MQTT Integration:**
- Device subscriptions
- Message publishing
- Real-time updates
- Lightweight communication

#### Components
- Device registry
- Sensor data collection
- Alert system
- Dashboard display

#### Use Cases
- Smart farm monitoring
- IoT device management
- Real-time sensor data
- Agricultural automation

---

### 18. **Test React - React Testing Project**
**Repository:** [test-react](https://github.com/siddharth-mourya/test-react)  
**Status:** Development

#### Technical Stack
- **Framework:** React 19.1.0 (Latest)
- **Build:** Vite 7.0.0 (Latest)
- **Language:** TypeScript ~5.8.3
- **Linting:** ESLint 9.29.0
- **Styling:** CSS Modules

#### Features
- React 19 latest features
- TypeScript strict mode
- Vite fast builds
- Modern React patterns
- Component testing setup

#### Purpose
- React experimentation
- Latest feature testing
- Build optimization
- Development practices

---

### 19. **Streamline - Full-Stack Application**
**Repository:** [Streamline](https://github.com/siddharth-mourya/Streamline)  
**Status:** Development

#### Technical Stack

**Backend:**
- **Framework:** Express.js 4.19.2
- **CORS:** Cross-origin support
- **Environment:** Dotenv configuration
- **Build:** Node.js with module support

**Frontend:**
- **Framework:** React 18.2.0
- **Build:** Vite 5.2.0
- **Language:** TypeScript
- **Linting:** ESLint

#### Architecture

**Backend Setup:**
- Express server on configurable port
- CORS middleware for frontend integration
- Environment-based configuration
- Module-based organization

**Frontend Setup:**
- React with Vite build tool
- TypeScript for type safety
- ESLint for code quality
- Hot module replacement (HMR)

**Integration:**
- Single build script
- Frontend builds and deploys with backend
- Monolithic deployment option
- Development and production modes

#### Build Scripts
```bash
npm run dev      # Development mode
npm start        # Production server
npm run build    # Full-stack build


### 20. **Painter – C++ Desktop Application**

**Status:** Educational Project
**Repository:** [Painter](https://github.com/siddharth-mourya/Painter)

#### Project Overview

A desktop painting application developed in C++ to demonstrate graphics programming, mouse event handling, and file operations.

#### Technical Stack

* **Language:** C++
* **Graphics Library:** `graphics.h`
* **Input Handling:** REGS Union for mouse position access
* **Platform:** Windows/DOS environment

#### Key Features

* Drawing canvas
* Free-hand drawing
* Color selection
* Brush size adjustment
* Save/load functionality
* Clear canvas

#### Concepts Demonstrated

* Graphics programming
* Mouse event handling
* Real-time rendering
* File I/O operations

---

### 21. **CrasherGame – Python Pygame**

**Status:** Complete Project
**Repository:** [CrasherGame](https://github.com/siddharth-mourya/CrasherGame)

#### Project Overview

A Python-based car racing game built with Pygame featuring obstacle generation, collision detection, score tracking, and sound effects.

#### Technical Stack

* **Language:** Python
* **Framework:** Pygame

#### Key Features

* Player-controlled car
* Auto-generated obstacles
* Collision detection
* Score system
* Sound effects
* Game over and restart functionality

#### Learning Outcomes

* Game development fundamentals
* Event-driven programming
* Physics simulation
* Sprite animation
* User input handling

---

### 22. **Gameo – Gaming Aggregator**

**Status:** Hackathon Project
**Repository:** [Gameo](https://github.com/siddharth-mourya/Gameo)

#### Project Overview

A gaming aggregator platform that fetches and displays game scores, release dates, news, and recommendations using external APIs.

#### Technical Stack

* HTML
* CSS
* JavaScript
* External Gaming APIs

#### Key Features

* Game score display
* Launch date information
* News aggregation
* Game recommendations
* Search and filtering

#### Technologies Demonstrated

* API integration
* JSON data parsing
* DOM manipulation
* Asynchronous programming

---

### 23. **MazeSolver – Line Follower Robot**

**Status:** Open Source Project
**Repository:** [MazeSolver-LineFollower](https://github.com/siddharth-mourya/MazeSolver-LineFollower)

#### Project Overview

An Arduino-based autonomous robot that solves mazes by following white lines using infrared sensor feedback and PWM motor control.

#### Technical Stack

* **Language:** C++
* **Microcontroller:** Arduino Uno
* **Sensors:** 6 IR sensors
* **Motors:** DC motors with PWM control

#### Key Features

* Autonomous maze navigation
* Real-time sensor processing
* Adaptive path following
* Obstacle detection
* Power-efficient operation

#### Concepts Demonstrated

* Embedded systems programming
* Sensor interfacing
* Feedback control systems
* Robotics fundamentals

#### Impact

* 3 GitHub stars
* 3 GitHub forks

---

### 24. **JavaScript Programs Collection**

**Status:** Educational Repository
**Repository:** [Javascript-progs](https://github.com/siddharth-mourya/Javascript-progs)

#### Project Overview

A collection of JavaScript programs and coding exercises covering algorithms, data structures, and modern ES6+ features.

#### Topics Covered

* Array and string manipulation
* Object-oriented programming
* Higher-order functions
* Promises and async/await
* Sorting and searching algorithms
* Regular expressions

---

### 25. **Frontend Interview Preparation**

**Status:** Learning Resource
**Repository:** [frontend-interview](https://github.com/siddharth-mourya/frontend-interview)

#### Project Overview

A curated repository of React examples, performance optimization techniques, and common interview questions for frontend preparation.

#### Topics Included

* React component patterns
* Hooks usage
* State management
* Performance optimization
* Best practices

---

### 26. **Frontend Notes**

**Status:** Documentation Repository
**Repository:** [frontend-notes](https://github.com/siddharth-mourya/frontend-notes)

#### Project Overview

Comprehensive notes and documentation covering frontend technologies, frameworks, and development concepts.

---

### 27. **Business Design Website**

**Status:** Static Website
**Repository:** [businessDesign](https://github.com/siddharth-mourya/businessDesign)

#### Project Overview

A professional business website showcasing branding, services, and portfolio content.

#### Sections

* Hero section
* Services and products
* Portfolio showcase
* About company
* Contact information

---

### 28. **Coming Soon Page**

**Status:** Reusable Template
**Repository:** [Coming-soon-page](https://github.com/siddharth-mourya/Coming-soon-page)

#### Project Overview

A customizable launch page template with countdown timer, animations, and email subscription support.

#### Key Features

* Countdown timer
* Subscription form
* Social links
* Responsive design
* Visual effects and animations

---

### 29. **HouseWise Design**

**Status:** Portfolio Project
**Repository:** [HouseWise-Design](https://github.com/siddharth-mourya/HouseWise-Design)

#### Project Overview

A real estate website design showcasing property listings, details, and contact forms.

---

### 30. **HTML Resume**

**Status:** Professional Document
**Repository:** [html-resume](https://github.com/siddharth-mourya/html-resume)

#### Project Overview

A fully responsive and print-friendly resume built with HTML and CSS.

---

### 31. **LinkedIn Remake**

**Status:** UI Mockup
**Repository:** [LinkedinRemake](https://github.com/siddharth-mourya/LinkedinRemake)

#### Project Overview

A frontend recreation of LinkedIn’s interface to practice layout design and component structuring.

---

### 32. **QR Code Card**

**Status:** Reusable Component
**Repository:** [QR-Code-Card](https://github.com/siddharth-mourya/QR-Code-Card)

#### Project Overview

A reusable QR code card component built with HTML and CSS.

---

### 33. **File Explorer**

**Status:** React Application
**Repository:** [File-Explorer](https://github.com/siddharth-mourya/File-Explorer)

#### Project Overview

A file explorer application built with React, TypeScript, and Vite featuring file operations and search.

#### Technical Stack

* React 18
* TypeScript
* Vite
* ESLint

#### Key Features

* File browsing
* Directory navigation
* Create, delete, rename operations
* Keyboard shortcuts
* Search functionality

---

### 34. **Trade Bazaar**

**Status:** E-commerce Platform
**Repository:** [trade-bazaar](https://github.com/siddharth-mourya/trade-bazaar)

#### Project Overview

An e-commerce platform with product catalog, shopping cart, order management, and payment integration.

---

### 35. **Metro**

**Status:** Development Project
**Repository:** [Metro](https://github.com/siddharth-mourya/Metro)

#### Project Overview

A transportation-related application focused on metro navigation and travel management.

---

### 36. **Todo Web App**

**Status:** Complete Project
**Repository:** [todo-web-app](https://github.com/siddharth-mourya/todo-web-app)

#### Project Overview

A task management application with CRUD operations and local storage persistence.

#### Key Features

* Add/remove tasks
* Mark as complete
* Task filtering
* Local storage
* Responsive UI

---

### 37. **Toggle Node**

**Status:** Embedded Systems Project
**Repository:** [toggle-node](https://github.com/siddharth-mourya/toggle-node)

#### Project Overview

A C++-based embedded project for controlling IoT device toggles.

---

### 38. **Toggle – Next.js IoT Dashboard**

**Status:** IoT Application
**Repository:** [toggle](https://github.com/siddharth-mourya/toggle)

#### Project Overview

A dashboard application for monitoring and controlling IoT devices.

#### Technical Stack

* Next.js 14.2.9
* MongoDB with Mongoose

#### Key Features

* Device monitoring
* Real-time status updates
* Control interface
* Dashboard visualization

---

### 39. **Waterfit**

**Status:** Fitness Application
**Repository:** [waterfit](https://github.com/siddharth-mourya/waterfit)

#### Project Overview

A fitness and hydration tracking application for monitoring water intake and progress.

#### Key Features

* Water consumption tracking
* Daily reminders
* Goal management
* Progress visualization

---

### 40. **Darzi**

**Status:** Development Project
**Repository:** [darzi](https://github.com/siddharth-mourya/darzi)

#### Project Overview

A platform-based application with backend capabilities.

---

### 41. **How To**

**Status:** Documentation Repository
**Repository:** [howto](https://github.com/siddharth-mourya/howto)

#### Project Overview

A collection of setup guides, tutorials, and best practices for various tools and technologies.

---

### 42. **Foodshala**

**Status:** Platform Application
**Repository:** [Foodshala](https://github.com/siddharth-mourya/Foodshala)

#### Project Overview

A PHP-based food delivery and ordering platform.

#### Key Features

* Restaurant listings
* Menu browsing
* Order placement
* Delivery tracking
* Payment processing

---

### 43. **PyDictionary**

**Status:** Educational Utility
**Repository:** [PyDictionary](https://github.com/siddharth-mourya/PyDictionary)

#### Project Overview

A Python utility that demonstrates website blocking using hosts file manipulation.

#### Key Features

* Domain filtering
* Hosts file modification
* Website blocking

---
