

export const questions = [
    {
        text: "What command is used to start the React local development server?",
        options: [
            { id: 0, text: "npm start", isCorrect: true },
            { id: 1, text: "npm serve", isCorrect: false },
            { id: 2, text: "npm build", isCorrect: false },
            { id: 3, text: "npm run", isCorrect: false },
        ],
    },
    {
        text: "To develop and run React code, Node.js is required.",
        options: [
            { id: 0, text: "True", isCorrect: true },
            { id: 1, text: "False", isCorrect: false },
        ],
    },
    {
        text: "React component names must begin with an uppercase letter.",
        options: [
            { id: 0, text: "True", isCorrect: true },
            { id: 1, text: "False", isCorrect: false },
        ],
    },
    {
        text: "Which of the following command is used to install create-react-app?",
        options: [
            { id: 0, text: "npm install -g create-react-app", isCorrect: false },
            { id: 1, text: "npx create-react-app my-app", isCorrect: true },
            { id: 2, text: "npm install create-react-app", isCorrect: false },
            { id: 3, text: "npm install -f create-react-app", isCorrect: false },
        ],
    },
    {
        text: "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
        options: [
            { id: 0, text: "data", isCorrect: false },
            { id: 1, text: "key", isCorrect: true },
            { id: 2, text: "index", isCorrect: false },
            { id: 3, text: "id", isCorrect: false },
        ],
    },
    {
        text: "What is the default port where webpack-server runs?",
        options: [
            { id: 0, text: "8080", isCorrect: false },
            { id: 1, text: "6060", isCorrect: false },
            { id: 2, text: "3030", isCorrect: false },
            { id: 3, text: "3000", isCorrect: true },
        ],
    },
    {
        text: " Which of these use the spread operator?",
        options: [
            {
                id: 0,
                text: "const combined = ...array1 + ...array2;  ",
                isCorrect: false,
            },
            { id: 1, text: "const combined = [array1, array2];", isCorrect: false },
            { id: 2, text: "const combined = array1 + array2;", isCorrect: false },
            {
                id: 3,
                text: "const combined = [...array1, ...array2];  ",
                isCorrect: true,
            },
        ],
    },
    {
        text: "What is the correct syntax to import a Component from React?",
        options: [
            {
                id: 0,
                text: "import React.Component from 'react' ",
                isCorrect: false,
            },
            { id: 1, text: "import Component from 'react' ", isCorrect: false },
            { id: 2, text: "import [ Component ] from 'react' ", isCorrect: false },
            { id: 3, text: "import { Component } from 'react' ", isCorrect: true },
        ],
    },
    {
        text: "What are the two ways to handle data in React?",
        options: [
            { id: 0, text: "State & Props", isCorrect: true },
            { id: 1, text: "Services & Components", isCorrect: false },
            { id: 2, text: "State & Services", isCorrect: false },
            { id: 3, text: "State & Component", isCorrect: false },
        ],
    },
    {
        text: "What tool does React use to compile JSX?",
        options: [
            { id: 0, text: "React Router", isCorrect: false },
            { id: 1, text: "Babel", isCorrect: true },
            { id: 2, text: "JSX Compiler", isCorrect: false },
            { id: 3, text: "None of the above", isCorrect: false },
        ],
    },
    {
 text: " Click on the image to see the final results !",
        options: [
            {
                id: 0,
                text: <img src="icons8-react-js-150.png" alt="" />,
                isCorrect: true,
            },
        ],
    },
];
