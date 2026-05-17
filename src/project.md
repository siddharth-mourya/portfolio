# Siddharth Mourya - Portfolio

## Professional Summary

Full-stack developer with expertise in modern web technologies, cloud platforms, and real-time communication systems. Experienced in building scalable applications using Node.js, React, TypeScript, and MongoDB. Passionate about creating intuitive user interfaces and robust backend systems.

---

## 🎯 Featured Projects

### 1. **Powerlytics Suite** (Current)
**Status:** Active Development  
**Repository:** [powerlytic-be](https://github.com/siddharth-mourya/powerlytic-be) | [powerlytic-ui](https://github.com/siddharth-mourya/powerlytic-ui)

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
- **Styling:** Tailwind CSS (implied from standard Next.js setup)
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

---

### 2. **Real-Time Chat Application**
**Repository:** [chatApp](https://github.com/siddharth-mourya/chatApp)  
**Created:** May 2024  
**Status:** Production-Ready

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

### 5. **Switch IoT Platform - Backend**
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

2. **Logger Configuration** (`config/logger.js`)
   - Structured logging with Winston
   - Different log levels (info, error, warn, debug)
   - Log persistence for debugging

3. **Express Server** (`server.js`)
   - Port configuration from environment variables
   - Middleware setup
   - Route initialization

**Features:**
- RESTful API for IoT device management
- Input validation on all endpoints
- Structured logging for monitoring
- Environment-based configuration

#### Use Cases
- Device registration and management
- Command execution on IoT devices
- Data collection from sensors
- Real-time device status tracking

---

### 7. **Chat Application UI – Vibechat**

**Status:** Frontend Project
**Repository:** [vibechat-ui](https://github.com/siddharth-mourya/vibechat-ui)

#### Project Overview

A modern and responsive chat application UI built using React and Vite. The project focuses on creating a clean messaging experience with reusable components and mobile-friendly layouts.

#### Technical Stack

**Frontend (React + Vite + Bootstrap)**

* **Framework:** React 18.2.0
* **Build Tool:** Vite 4.4.0
* **UI Library:** React Bootstrap 2.8.0, Bootstrap 5.3.0
* **Routing:** React Router DOM 6.14.1
* **Styling:** SASS 1.63.6
* **Code Quality:** ESLint with React Hooks support

#### Key Features

* User chat list view
* Conversation display panel
* Message input area
* Fully responsive layout
* Reusable component-based architecture

#### Styling Approach

* SASS variables and mixins
* Bootstrap utility classes
* Custom component-level styling

---

### 8. **Next.js Blog Platform**

**Status:** Full-Stack Frontend Project
**Repository:** [NextBlog](https://github.com/siddharth-mourya/NextBlog)

#### Project Overview

A blog platform built with Next.js and TypeScript, leveraging server-side rendering and static site generation for high performance and SEO optimization.

#### Technical Stack

* **Framework:** Next.js 14.0.4
* **Language:** TypeScript
* **Styling:** CSS Modules and Tailwind CSS
* **Code Quality:** ESLint with Next.js rules

#### Key Features

* Server-side rendering (SSR)
* Static site generation (SSG)
* Blog post management
* Responsive design
* Type-safe development

#### Use Cases

* Blogging platform
* Content management system
* SEO-optimized websites

---

### 9. **Smartwatch Toggle Device**

**Status:** IoT Dashboard
**Repository:** [toggle](https://github.com/siddharth-mourya/toggle)

#### Project Overview

A device control dashboard built with Next.js and MongoDB for interacting with smartwatch-like IoT devices.

#### Technical Stack

* **Framework:** Next.js 14.2.9
* **Database:** MongoDB with Mongoose

#### Key Features

* Device control interface
* Real-time status updates
* Dashboard-based interaction

---

### 10. **PyDictionary**

**Status:** Educational Project
**Repository:** [PyDictionary](https://github.com/siddharth-mourya/PyDictionary)

#### Project Overview

A Python-based utility demonstrating domain filtering and website blocking using system-level programming concepts.

#### Key Features

* Website blocking functionality
* Domain filtering
* Basic network management

#### Concepts Demonstrated

* Python scripting
* File handling
* System automation

---

### 11. **Maze Solver – Line Follower Robot**

**Status:** Open Source Project
**Repository:** [MazeSolver-LineFollower](https://github.com/siddharth-mourya/MazeSolver-LineFollower)

#### Project Overview

An Arduino-powered autonomous robot that navigates mazes by following white lines using infrared sensor feedback.

#### Technical Stack

* **Language:** C++
* **Microcontroller:** Arduino Uno
* **Sensors:** 6 IR sensors

#### Key Features

* Autonomous maze navigation
* Real-time sensor processing
* Adaptive motor control
* Reliable line tracking

#### Technical Concepts Demonstrated

* Embedded systems programming
* Sensor interfacing
* Robotics fundamentals
* Real-time decision making

#### Impact

* 3 GitHub stars
* 3 GitHub forks

---

### 12. **CrasherGame**

**Status:** Portfolio Project
**Repository:** [CrasherGame](https://github.com/siddharth-mourya/CrasherGame)

#### Project Overview

A 2D car racing game built with Python and Pygame featuring obstacle generation, collision detection, and score tracking.

#### Technical Stack

* **Language:** Python
* **Framework:** Pygame

#### Key Features

* Car controls
* Obstacle generation
* Collision detection
* Score management
* Game state transitions

#### Learning Outcomes

* Event-driven programming
* Physics simulation
* Sprite management

---

### 13. **Gameo – Gaming Aggregator**

**Status:** Hackathon Project
**Repository:** [Gameo](https://github.com/siddharth-mourya/Gameo)

#### Project Overview

A gaming aggregator website that fetches and displays game data, news, and recommendations using external APIs.

#### Technical Stack

* HTML
* CSS
* JavaScript
* External Gaming APIs

#### Key Features

* Game score display
* Release date information
* News aggregation
* Recommendation engine

#### Technologies Demonstrated

* API integration
* JSON parsing
* DOM manipulation

---

### 14. **Painter Application**

**Status:** Educational Desktop Application
**Repository:** [Painter](https://github.com/siddharth-mourya/Painter)

#### Project Overview

A desktop painting application built with C++ featuring drawing tools and canvas management.

#### Key Features

* Drawing tools
* Color selection
* Save/load functionality

---

### 15. **Business Design Website**

**Status:** Static Website
**Repository:** [businessDesign](https://github.com/siddharth-mourya/businessDesign)

#### Project Overview

A professional business website showcasing services, branding, and portfolio information.

#### Components

* Landing page
* Services section
* Portfolio showcase
* Contact section

---

### 16. **Coming Soon Page**

**Status:** Reusable Template
**Repository:** [Coming-soon-page](https://github.com/siddharth-mourya/Coming-soon-page)

#### Project Overview

A customizable coming soon landing page template with countdown timer and email subscription support.

#### Key Features

* Countdown timer
* Email subscription form
* Social links
* Responsive design

---

