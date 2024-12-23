# Angular E-Commerce Application

## Overview

This is an Angular-based e-commerce application that allows users to browse categories and products. The application features routing, dynamic product display, and detailed views for categories and products. It also includes a search functionality and highlights specific elements on hover.

## Features

- **Home Page**: Displays a welcome message and links to various categories.
- **Category Browsing**: Users can view products by category.
- **Product Details**: Clicking on a product displays detailed information.
- **Search Functionality**: Users can search for categories by title.
- **Dynamic Routing**: The application uses Angular's routing to navigate between components.
- **404 Not Found Page**: Displays a message when a user navigates to an undefined route.
- **Hover Effects**: Categories are highlighted when hovered over.

## Technologies Used

- **Angular**: Frontend framework for building the application.
- **TypeScript**: Superset of JavaScript used for building the application.
- **Bootstrap**: CSS framework for responsive design.
- **HTML/CSS**: Markup and styling for the application.

## Getting Started

### Prerequisites

- Node.js (v12 or later)
- Angular CLI (installed globally)

### Installation

1. Clone the repository:
   git clone https://github.com/Nada-bkh/AngularProject.git
   cd AngularProject
2. Install the dependencies:
npm install
3. Start the development server:
ng serve
4. Open your browser and navigate to http://localhost:4200/.

5. Project Structure
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── home/
│   │   ├── list-categories/
│   │   ├── products-category/
│   │   ├── products-category-qp/
│   │   ├── not-found-page/
│   │   ├── details-category/
│   ├── models/
│   │   ├── product.ts
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   ├── app.module.ts
├── assets/
│   ├── images/
├── styles.css
6. Usage
Navigate to the home page to view available categories.
Click on a category to view its products.
Use the search bar to filter categories by title.
Click on "Voir produits" to see products in a specific category.
Click on "Voir détails" to view the description of a category.
Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

7. License
This project is licensed under the MIT License - see the LICENSE file for details.

8. Acknowledgments
Thanks to the Angular community for their support and resources.
Special thanks to the contributors of the libraries and frameworks used in this project.
### Customization

- Replace `Nada-bkh` and `AngularProject` with your actual GitHub username and repository name.
- You can add more sections or details as needed, such as screenshots, a more detailed description of features, or specific instructions for deployment.
- If you have a license file, make sure to include the correct license information.

Feel free to modify this template to better fit your project's specifics!
