# React Project with Firebase Authentication and Vite

## Overview
This project is a React application built with Vite and integrated with Firebase Authentication. It provides a fast and efficient development environment along with secure user authentication.

## Features
- User authentication (Sign Up, Sign In)
- Firebase Authentication integration
- Fast build and hot reloading with Vite
- Responsive UI
- Sign In with (Google, Facebook, LinkedIn)
  
## Technologies Used
- React
- Vite
- Firebase Authentication
- Tailwind CSS 

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   ```
2. Navigate to the project directory:
   ```sh
   cd your-repo
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password, Google, etc.)
   - Get Firebase configuration details from the project settings
   - Create a `.env` file in the root directory and add:
     ```env
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     ```

## Running the Project
Start the development server:
```sh
npm run dev
```
The application will be available at `http://localhost:5173/`.

## Deployment
To build for production:
```sh
npm run build
```
For deployment, you can use Firebase Hosting, Vercel, or Netlify.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

