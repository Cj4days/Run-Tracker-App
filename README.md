# Running Tracker Test Application

Welcome to the **Running Tracker Test Application**! This project is a simple yet effective application designed to help you track your runs. Users can add new run entries and delete existing ones. It's a great way to experiment with modern web technologies and see them in action.

## Features

- **Add Run**: Input details for a new run, including distance, location, and other relevant data.
- **Delete Run**: Remove an existing run entry by its unique ID.

## Technologies Used

This application is built using the following technologies:

### Frontend

- **Angular 19**: A powerful framework for building dynamic and responsive user interfaces.

### Backend

- **Spring Web Framework**: A robust framework for building scalable and maintainable server-side applications.

### Database

- **PostgreSQL**: A reliable and high-performance relational database for storing run data.

## Installation and Setup

Follow these steps to set up the application locally:

### Prerequisites

- Node.js and npm installed
- Java Development Kit (JDK) installed
- Docker installed

### Frontend Setup

1. Navigate to the `runnerUI` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   ng serve
   ```
4. Open your browser and navigate to `http://localhost:4200`.

### Backend Setup

1. Navigate to the backend directory containing the Spring application.
2. Build and run the application:
   ```bash
   ./mvnw spring-boot:run
   ```
3. The backend will run on `http://localhost:8080`.

### Database Setup

1. Ensure Docker is installed and running on your system.
2. The PostgreSQL database will automatically deploy as part of the application's Docker setup.

## Usage

- Open the application in your browser.
- Use the "Add Run" form to enter details for a new run.
- Use the "Delete Run" form to remove a run by its ID.
- View all runs in the table displayed on the page.

## Demo
https://github.com/user-attachments/assets/6c01beae-0c68-467c-b957-b2450b884a77







## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Thank you for checking out the Running Tracker Test Application! Happy running!

