# MERN Fitness & Health App with AI-Based Features

## Overview
This project is a comprehensive MERN (MongoDB, Express, React, Node.js) Fitness & Health App that leverages AI-based features to enhance the user experience. The application provides users with personalized fitness and health recommendations, tracking tools, and more. It’s designed to help individuals maintain a healthy lifestyle through AI-driven insights and user-friendly interfaces.

## Key Features
1. AI-Based Recommendations: Get personalized workout plans, diet suggestions, and health tips.
2. User Authentication: Secure user registration and login with JWT-based authentication.
3. Workout Tracking: Track workouts, calories burned, and progress over time.
4. Nutrition Management: Log daily food intake and receive nutritional insights.
5. Progress Dashboard: Visualize your fitness journey with charts and statistics.
6. Responsive Design: Optimized for both mobile and desktop devices.

## Technologies Used
Frontend: React, Redux, Material-UI, Axios
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Authentication: JSON Web Tokens (JWT)
AI Integration: TensorFlow.js
DevOps: Docker
Testing: Jest

## Installation
### Prerequisites
Ensure you have the following installed on your machine:

```
Node.js (v14 or higher)
npm or yarn
MongoDB
```
### Steps
1. Clone the Repository
```
git clone https://github.com/bilal-azam/MERN-Fitness-Health-App-with-AI-Based.git
cd MERN-Fitness-Health-App-with-AI-Based
```
2. Install Dependencies
```
cd backend
npm install
cd ../frontend
npm install
```
3. Environment Variables
Create a .env file in the backend directory and add the following variables:
```
PORT=5000
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
AI_MODEL_PATH=path_to_your_ai_model
```
4. Run the Application
Backend: Start the backend server
```
cd backend
npm run dev
```
Frontend: Start the frontend development server
```
cd ../frontend
npm start
```
5. Access the Application
Open your browser and go to http://localhost:3000 to view the app.

## Usage
1. User Registration & Login: Sign up or log in to your account to access personalized features.
2. Dashboard Overview: The dashboard provides an overview of your fitness progress, AI recommendations, and more.
3. Workout Tracking: Add and track your workouts, set goals, and monitor your progress.
4. Nutrition Management: Log your daily meals and receive AI-driven nutritional advice.
5. AI Features: Use the AI-based tools to get personalized recommendations tailored to your fitness goals.

## API Documentation
### Endpoints

User Authentication
```
POST /api/users/register - Register a new user
POST /api/users/login - Login a user
```
Workout Management
```
GET /api/workouts - Get all workouts
POST /api/workouts - Add a new workout
```
Nutrition Management
```
GET /api/nutrition - Get nutritional logs
POST /api/nutrition - Log a new meal
```

## Contributing
Contributions are welcome to this project. To contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature-name).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/your-feature-name).
5. Create a Pull Request.

Please make sure to update tests as appropriate.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For inquiries, please reach out:

Author: Bilal Azam

Email: [bilal.azam1@outlook.com](mailto:bilal.azam1@outlook.com)

LinkedIn: [Bilal Azam](https://www.linkedin.com/in/bilal-azam-818637110/)
