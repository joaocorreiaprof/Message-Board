# Inspirational Message Board

This is a simple web application built with **Express** and **EJS** that allows users to post messages of inspiration. The project features two main routes:

- **/ (Index)**: Displays a list of messages.
- **/new**: Displays a form to submit a new message.

## Features

- View a list of inspirational messages with the user's name and the message date.
- Submit a new message with an author’s name and the message text.
- After submitting, the new message is added to the list and displayed on the homepage.

## Tech Stack

- **Node.js** and **Express** for the backend
- **EJS** as the templating engine
- **HTML**, **CSS** for the front-end

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:joaocorreiaprof/Message-Board.git

   ```

2. Navigate to the project folder

3. Install dependencies

   ```bash
   npm install

   ```

4. Start the server
   ```bash
   npm start
   ```

The app will be available at http://localhost:3000.

## Usage

1. Navigate to the homepage to see a list of inspirational messages.
2. Click on the New Message link to go to the form where you can submit a new message.
3. Fill in the author’s name and the message text, then submit the form.
4. After submitting, you will be redirected back to the homepage, where the new message will be displayed.
5. Each message has an Open button that can be clicked to view the details of the message on a new page.

## Contributing

1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Commit your changes (git commit -m 'Add new feature').
4. Push to your branch (git push origin feature-name).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License.
