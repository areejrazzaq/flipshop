# Flip Shop: Marketplace for Buying and Selling Digital Assets

Flip Shop is a platform that facilitates the buying and selling of digital assets, offering a reliable and data-driven marketplace specifically for the Pakistani market. This repository contains the full stack of the project, including the front-end, back-end, and machine learning components for predicting asset prices.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Project Architecture](#project-architecture)
4. [Technology Stack](#technology-stack)
5. [Project Structure](#project-structure)
6. [Setup and Installation](#setup-and-installation)
7. [Usage](#usage)
8. [Future Work](#future-work)

---

## Project Overview
Flip Shop acts as a broker between buyers and sellers of digital assets, providing tools for valuation, data analytics, and transaction management. Using a machine learning model, Flip Shop predicts asset prices to offer transparent, data-driven valuations. Users can explore a variety of assets, including Daraz Seller Accounts and blogs, and engage in secure transactions facilitated by Flip Shop.

---

## Features
### Core Features
- **User Roles**: Multiple roles for Sellers, Buyers, and Admin.
- **Asset Listings**: Enables sellers to list digital assets with detailed analytics.
- **Price Prediction Model**: Predicts asset prices using machine learning.
- **Search and Filters**: Provides advanced filtering for assets.
- **Buyer-Seller Interactions**: Features include interest indicators, bidding, and offers.
- **Contract Management**: Manages contracts, payments, and credential transfers securely.
- **Dispute Resolution**: Handles disputes with options for admin intervention.

---

## Project Architecture
Flip Shop is built using a **three-tier architecture** with distinct separation:
1. **Front-End**: A React-based UI that provides a seamless and interactive experience.
2. **Back-End**: A Laravel-powered API that handles business logic, authentication, and communication with the database.
3. **Machine Learning Model**: A Python-based model that predicts asset prices, integrated with the back-end via REST API.

---

## Technology Stack
- **Front-End**: React, Bootstrap
- **Back-End**: Laravel, MySQL
- **Machine Learning Model**: Python, scikit-learn, pandas, NumPy
- **Deployment**: Hostinger (API), FTP server for assets

---

## Project Structure
```plaintext
FlipShop/
├── Frontend/                # React application for the front-end
├── Backend/                 # Laravel application for the back-end
├── ML Model/                # Machine learning model code
└── README.md                # Main project documentation
```
---

## Setup and Installation

### Prerequisites
1. Node.js (v14+) and npm (v6+) for the front-end
2. Python (v3.8+) and pip for the machine learning model
3. PHP (v7.4+), Composer, and MySQL for the back-end
4. Laravel CLI and MySQL Workbench for back-end setup

### Installation Steps
1. Clone the Repository
   ```git clone https://github.com/username/FlipShop.git```
   ```cd FlipShop```
2. Front-End Setup
   **Navigate to the frontend directory and install dependencies**:
      ```cd frontend```
      ```npm install```
   **Start the development server**:
      ```npm start```
3. Back-End Setup
   **Navigate to the backend directory, install dependencies, and set up environment variables**:
      ```cd ../backend```
      ```composer install```
      ```cp .env.example .env```
      ```php artisan key:generate```
   **Set up the database in .env, then run migrations**:
      ```php artisan migrate```
      ```php artisan serve```


## Usage
Once all components are running, navigate to the front-end at http://localhost:3000 to access the Flip Shop platform.

### Key Functionalities
1. **Register/Login**: Users can sign up as buyers or sellers and log in using their credentials.
2. **List Assets**: Sellers can list digital assets with comprehensive details, triggering a price prediction via the ML model.
3. **Explore Listings**: Buyers can search for assets, filter listings, and view asset analytics.
4. **Engage in Transactions**: Buyers can make offers, bid on assets, and finalize purchases through contract and payment management.
5. **Admin Controls**: Admin can monitor user activity, resolve disputes, and manage content.

## Future Work
1. **Expansion of Asset Types**: Include additional digital assets like e-commerce websites and social media accounts.
2. **Enhanced ML Model**: Improve accuracy and integrate recommendation algorithms for personalized asset suggestions.
3. **Increased Automation**: Add automated verification for users and assets to enhance security and efficiency.
