Tattoo Concierge
Overview

Tattoo Concierge is a web application developed as part of a final project for a master’s degree. It facilitates tattoo appointment scheduling and helps manage client data. The project includes both a frontend (React) and backend (Node.js) component.

This README describes the current state of the project (Version 1.0) and mentions ongoing improvements for Version 2.0, which are currently in development.
Features

    User Authentication: Basic session-based user login system.
    Appointment Scheduling: Users can book and manage tattoo appointments.
    Client Management: Keeps records of client data for reference.

Project Structure

    Frontend:
        Developed with React and uses Vite for fast builds.
        Styled with Tailwind CSS.
        Routing is handled using React Router.

    Backend:
        Built using Node.js and Express.js.
        MongoDB is used as the database, with Mongoose as the ORM.
        User authentication is handled using session storage (will be updated to JWT in v2).

Tools & Dependencies

    Frontend:
        React (^18.2.0)
        React Router DOM (^6.21.2)
        Tailwind CSS (^3.4.1)
        Vite (^5.0.8)
        ESLint & Prettier for code linting and formatting

    Backend:
        Node.js
        Express.js
        MongoDB + Mongoose
        Bcrypt (for password hashing)

Getting Started

To run the current version of the project:

    Clone the repository:

    bash

git clone git@github.com:svonw/tattooconcierge.git

Navigate to the frontend and backend directories and install dependencies:

bash

cd frontend
npm install

cd ../backend
npm install

Run the application: You can use the start.sh script to start both the frontend and backend:

bash

    ./start.sh

    The frontend will be available at http://localhost:5173/ and the backend at http://localhost:4000/.

Ongoing Work on Version 2.0

I am currently working on a new and improved version of this application. Version 2.0 will include the following key upgrades:

    JWT Authentication: Replacing session storage with JWT for a more secure and scalable authentication system.
    Image Upload Functionality: Users will be able to upload tattoo design images related to their appointments.
    Code Refactoring: The codebase will be reorganized to improve reusability and maintainability.

Version 2.0 is under development in a separate branch and will be available soon.
Contributing

If you want to contribute to this project, feel free to fork the repository, create a feature branch, and submit a pull request.# tattoo_concierge
