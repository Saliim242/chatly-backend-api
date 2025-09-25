# Chat Backend API

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A robust backend API for a chat application built with Node.js, Express, and MongoDB.

## Description

This project provides a RESTful API for a chat application, handling user authentication and message management. It's designed to be scalable, secure, and easy to integrate with various frontend applications.

## Features

- User authentication (signup, signin, signout)
- Message management (send, receive, delete)
- RESTful API architecture
- JWT-based authentication
- MongoDB database integration

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database (via Mongoose ODM)
- **JWT** - Authentication mechanism
- **bcrypt** - Password hashing

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance (local or cloud)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Saliim242/chatly-backend-api.git
   cd chat-backend-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3001
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

## Usage

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

## API Endpoints

### Authentication

- **POST /api/auth/signup** - Register a new user
- **POST /api/auth/signin** - Login a user
- **GET /api/auth/signout** - Logout a user

### Messages

- **GET /api/messages/send** - Send a message
- **GET /api/messages/receive** - Receive messages
- **GET /api/messages/delete** - Delete a message

## Project Structure

```
├── src/
│   ├── controllers/       # Route controllers
│   ├── models/            # Database models
│   ├── routers/           # API routes
│   └── server.js          # Express app
├── .env                   # Environment variables
├── .gitignore            # Git ignore file
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

## Future Improvements

- Implement real-time messaging using Socket.io
- Add user profiles and avatar support
- Implement group chat functionality
- Add message read receipts
- Enhance security with rate limiting and input validation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Author

- **Salim Abukar Ahmed**

## Acknowledgments

- Node.js community
- Express.js team
- MongoDB team
