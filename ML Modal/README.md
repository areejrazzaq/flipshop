# Flip Shop: Marketplace for Buying and Selling Digital Assets

Flip Shop is a platform designed to facilitate the buying and selling of digital assets, acting as a trusted third-party broker between buyers and sellers. This project focuses on predicting the price of digital assets based on data features and analytics provided by sellers, offering a transparent and data-driven marketplace.

---

## Project Overview
Flip Shop provides a secure marketplace where users can buy and sell various digital assets, including blogs and Daraz Seller Accounts. The platform predicts asset prices based on analytics provided by sellers, aiming for high transparency and data-driven pricing. Flip Shop integrates user roles (Seller, Buyer, and Admin), API connections, and real-time data validation to deliver a reliable and smooth transaction experience.

## Dataset Description
This project uses data collected from sellers listing digital assets. Data points for each asset type vary:

- **Revenue-Generating Assets**: Assets with complete data points, including monetization methods and net profit per month.
  - **Data Points**: 709

- **Non-Revenue-Generating Assets**: Assets lacking monetization methods and net profit data, requiring imputation and prediction to estimate values.
  - **Data Points**: 900

## Features in the Dataset
The dataset includes the following key features:

- **Industry**: The sector or niche of the digital asset.
- **Monetization Method**: The revenue generation approach (missing for non-revenue-generating assets).
- **Site Age**: The age of the asset in years, indicating its market history.
- **Net Profit per Month**: Monthly revenue (missing for non-revenue-generating assets).

The target variable is the **predicted price** of the asset.

## Modeling Process
The project follows a structured machine learning workflow:

1. **Data Preprocessing**:
   - Filling missing values using statistical methods.
   - Imputing missing data specifically for non-revenue-generating assets.

2. **Exploratory Data Analysis (EDA)**:
   - Analyzing data distributions and relationships.

3. **Feature Engineering and Dimensionality Reduction**:
   - Creating new features or reducing dimensionality as necessary.
   - Applying PCA for dimensionality reduction where needed.

4. **Model Training**:
   - Training a regression model to predict asset prices.
   - Evaluating performance using metrics like Mean Squared Error (MSE).

## Project Structure
```plaintext
ML Modal/
├── Final Dataset/                        # Cleaned Dataset file (revenue-generating and non-revenue-generating assets)
├── Assets_Price_Predication/             # Jupyter notebooks with Web scrapping, EDA and modeling steps
├── Non_revenue_generating_blogs_data/    # Raw Dataset file for non-revenue-generating assets
├── Revenue_generating_blogs_data         # Raw Dataset file for revenue-generating assets
