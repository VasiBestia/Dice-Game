<div align="center">
  
  <h1>🎲 The Dice Challenge</h1>
  <p><strong>A dynamic, browser-based dice simulator powered by vanilla JavaScript.</strong></p>

  <p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
      <img src="https://img.shields.io/badge/Structure-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
      <img src="https://img.shields.io/badge/Style-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
      <img src="https://img.shields.io/badge/Logic-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
    </a>
    <img src="https://img.shields.io/badge/Status-Completed-success?style=for-the-badge" alt="Status">
  </p>

  <p>
    <a href="#-game-overview">Overview</a> •
    <a href="#-key-features">Features</a> •
    <a href="#-gameplay-preview">Preview</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-how-to-run">How to Run</a>
  </p>
</div>

---

## 📖 Game Overview

**The Dice Challenge** is an interactive web application designed to demonstrate DOM manipulation and random number generation logic. It simulates a two-player showdown where users can roll virtual dice to determine a winner instantly.

The project focuses on clean code principles, separating structure (HTML), presentation (CSS), and logic (JS) to create a seamless user experience without external frameworks.

---

## ✨ Key Features

* **🎲 Instant Randomization:** Utilizes `Math.random()` and `Math.floor()` to generate unpredictable dice rolls between 1 and 6.
* **⚡ DOM Manipulation:** Dynamically updates the Image Source (`src`) attributes to display the correct die face in real-time.
* **🏆 Win Logic Algorithm:** Automatically compares the two integer values and updates the `<h1>` header to declare "Player 1 Wins", "Player 2 Wins", or "Draw".
* **🎨 Responsive Design:** Centered layout that adjusts gracefully to different screen sizes.

---

## 📸 Gameplay Preview

See the game mechanics in action below:

<div align="center">
  <img src="images/Dice Game Sample.png" width="80%" alt="Dice Game Interface Demo" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 10px;">
</div>

---

## 🛠 Tech Stack

| Technology | Role |
| :--- | :--- |
| **HTML5** | Defines the skeleton, including the dice containers and header. |
| **CSS3** | Handles the visual styling, text alignment, and shadows. |
| **JavaScript (ES6)** | Executes the game logic, randomization, and DOM updates. |

---

## 🗂 Project Structure

```bash
Dicee-Game/
├── images/               # Dice face assets (dice1.png to dice6.png) & Screenshots
├── index.js              # Core game logic
├── index.html            # Main markup
├── styles.css            # Stylesheet
└── README.md             # Documentation
