# 🎰 Vending Machine
This project replicates the front end of a vending machine using `React Native`, `Material UI`, `Redux` and `React Router`. It also includes a mocked BE build with `json-server`.<br><br>

## 🏛 Architecture
    /src
    ├── /components             # React FC components
    ├── /mocks                  # A mocked BE powered by json-server
    ├── /pages                  # Page entrypoints for the app
    ├── /redux                  # Redux store sclices
    ├── /App.*                  # App files
    ├── /api.ts                 # Handles all the interactions with BE
    ├── /store.tsx              # Redux store
    └── /types.tsx              # Interfaces definition

## 📸 Screens
### Login screen
![Screenshot 2023-07-26 at 14 05 06](https://github.com/andugu/vending-machine/assets/8087896/7f541b35-ec9d-4934-90e9-9f8fc14205f5)
### Products screen
![Screenshot 2023-07-26 at 14 07 18](https://github.com/andugu/vending-machine/assets/8087896/ee91a4d5-2037-48a3-b040-f47d12d1e925)

## 📜 Available Scripts
### 🛫 `npm start`
To start the application.

### 🧪 `npm test`
To launch the test runner in the interactive watch mode.

### 🥸 `node src/mocks/server.js`
To start a mocked backend json-server for testing purposes.
