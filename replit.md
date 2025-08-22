# ServerSmith - Minecraft Server Builder

## Overview

ServerSmith is a desktop application designed to help users build and configure Minecraft servers with ease. The application provides comprehensive guides, tutorials, and tools for everything from basic single-player to multiplayer conversion, to advanced multi-server network setups. Built as a client-side React application, it offers both written guides and video tutorials, with a focus on making complex server administration accessible to users of all skill levels.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Pure React 18 with CDN-delivered scripts
- **Build System**: Browser-based Babel compilation for JSX transformation
- **State Management**: React hooks (useState, useEffect, useContext) for component state
- **Styling**: CSS custom properties with theme system, no external UI framework
- **Icons**: Feather Icons library for consistent iconography
- **Responsive Design**: Mobile-first approach with collapsible sidebar navigation

### Component Structure
- **Layout Components**: Modular sidebar navigation, header, and theme toggle
- **Content Components**: Dashboard with feature cards, guides system, video guides, FAQ, and contact
- **Context System**: Theme context provider for light/dark mode switching
- **Data Layer**: Static JavaScript objects for guides, FAQ, and video content

### Theme System
- **CSS Custom Properties**: Comprehensive variable system for colors, shadows, and spacing
- **Theme Switching**: Runtime theme toggling with localStorage persistence
- **Brand Alignment**: Color palette designed to match ServerSmith branding
- **Responsive Theming**: Consistent theming across light and dark modes

### Navigation Architecture
- **Single Page Application**: Client-side routing using React state
- **Persistent Sidebar**: Fixed navigation with collapse functionality
- **Responsive Behavior**: Mobile-optimized navigation with automatic collapsing
- **Icon Integration**: Feather icons with dynamic replacement system

### Content Organization
- **Categorized Guides**: Structured tutorial system with difficulty levels and search
- **Video Integration**: Embedded video player system for advanced topics
- **FAQ System**: Accordion-style expandable question/answer format
- **Progressive Disclosure**: Layered information architecture from basic to advanced

## External Dependencies

### Core Libraries
- **React 18**: Main UI framework delivered via CDN
- **Babel Standalone**: Client-side JSX compilation
- **Feather Icons**: Icon library for UI elements

### Fonts and Assets
- **Google Fonts**: Inter font family for typography
- **Pixabay Images**: Stock photography for guide thumbnails and backgrounds
- **YouTube Integration**: Video embedding capability for tutorial content

### Browser APIs
- **LocalStorage**: Theme preference persistence
- **Window Resize Events**: Responsive behavior handling
- **DOM Manipulation**: Dynamic icon replacement and theme switching

### Content Sources
- **Static Data**: Guides and FAQ content stored as JavaScript objects
- **External Images**: Pixabay-hosted images for visual content
- **Video Content**: YouTube video integration for advanced tutorials

### Development Dependencies
- **No Build Process**: Direct browser execution without bundling
- **CDN Dependencies**: External hosting for React and supporting libraries
- **File-based Routing**: Simple script tag inclusion for component loading