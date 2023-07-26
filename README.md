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
![Screenshot 2023-07-26 at 14 05 06](https://github.com/andugu/vending-machine/assets/8087896/2924d69a-c39c-44b5-abf3-38c1bfc94ff2)
### Products screen
![Screenshot 2023-07-26 at 14 07 18](https://github.com/andugu/vending-machine/assets/8087896/468a4abc-f9fa-4362-86aa-b6ef92ca4a0c)

## 📜 Available Scripts
### 🛫 `npm start`
To start the application.

### 🧪 `npm test`
To launch the test runner in the interactive watch mode.

### 🥸 `node src/mocks/server.js`
To start a mocked backend json-server for testing purposes.
