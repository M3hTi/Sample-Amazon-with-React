# Amazon Clone

A React application that simulates the core shopping experience of Amazon, built with React and Vite.

## Features

- **Product Catalog:** Display products with images, titles, and prices
- **Star Ratings:** Allow users to rate products and view average ratings
- **Shopping Cart:** Add products to cart with quantity selection
- **Cart Management:** Edit quantities or remove items from cart
- **Search Functionality:** Filter products by name
- **Prime Membership Indicator:** Display Prime status for products
- **Modern UI:** Amazon-inspired user interface

## Technologies Used

- React 19
- Vite 6
- React Icons
- CSS for styling

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

### Build for Production

Create a production build:

```bash
npm run build
npm run preview
```

## Project Structure

- `src/App.jsx`: Main application component with state management
- `src/Header.jsx`: Navigation bar with logo, search, and cart
- `src/Product.jsx`: Individual product display with buy functionality
- `src/ShowCartItems.jsx`: Cart items display and management
- `src/StarRating.jsx`: Reusable star rating component
- `src/Carousel.jsx`: Product image carousel
- `src/hooks/`: Custom React hooks

## License

MIT
