# Autograb Assignment

This project is an interactive form built using React and Node.js (Express.js). The form allows users to select a vehicle's make, model, and badge, as well as upload a service logbook. The form dynamically updates based on the selected make and model, and allows quick selection of common vehicles. The application uses a backend server built with Express.js to handle form submissions.

## Features

- Select a vehicle's make, model, and badge from dynamic dropdowns.
- Upload a service logbook as a plain text file.
- Two buttons to quickly select common vehicles.
- Automatic updates of dropdowns based on selections.
- Backend server to process form data and logbook contents.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Commands](#commands)
- [Contributing](#contributing)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KapoorAnurag1234/autograb-assignment.git
   ```

2. Navigate into the project directory:

   ```bash
   cd autograb-assignment
   ```

3. Install the dependencies for both client and server:
   ```bash
   npm install
   ```

## Usage

To run the project locally, you can use the following commands:

1. Start the client (React app):

   ```bash
   npm run client
   ```

2. Start the server (Node.js backend):

   ```bash
   npm run server
   ```

3. Run both client and server concurrently:
   ```bash
   npm run dev
   ```

Once the development environment is set up, the frontend can be accessed at `http://localhost:3000` and the backend at the appropriate port as configured in the server.

## Project Structure

The project is organized into the following folders:

```
autograb-assignment/
│
├── package.json           # Dependencies and scripts
├── src/                   # Source code
│   ├── server/            # Express.js backend server
│   ├── components/        # React components
│   ├── screens/           # React screens/views
```

### Client-side (React):

- **components**: Contains reusable React components for the form, dropdowns, and buttons.
- **screens**: Includes the main screens, such as the form page.

### Server-side (Express.js):

- **server**: Contains the backend logic to handle form submissions and file uploads.

## Commands

The following commands are defined in the `package.json` to run the app:

- `npm run client`: Starts the React client on `http://localhost:3000`.
- `npm run server`: Runs the Node.js server with `ts-node` to handle requests and process form submissions.
- `npm run dev`: Runs both the client and server concurrently using `concurrently`.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Push to your fork (`git push origin feature-name`).
5. Open a pull request.
