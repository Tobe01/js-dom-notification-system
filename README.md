# JS DOM Notification System

A lightweight, reusable notification system built with **vanilla JavaScript** and **CSS**.  
Perfect for showing success, error, warning, or info messages in the browser without any dependencies.

---

## Features
- **Pure JavaScript** — no frameworks needed
- Reusable and customizable
- Multiple notification types (success, error, warning, info)
- Auto-dismiss after a given time
- Smooth fade-out animation

---

## Folder Structure
js-dom-notification-system/
│
├── src/
│ ├── notifications.js # Notification logic
│ └── styles.css # Notification styles
│
├── example/
│ └── index.html # Demo page
│
└── README.md

---

## How to Run
1. **Clone the repository**
   
git clone https://github.com/tobe01/js-dom-notification-system.git
Open the example

Navigate to the example folder

Open index.html in your browser

## Usage
## Basic Setup

<link rel="stylesheet" href="src/styles.css">
<script src="src/notifications.js"></script>
<script>
  const notifier = new NotificationSystem();
  notifier.success('Hello, world!');
</script>

API Method	Parameters	Description:

show	message, type, duration	Show a notification of any type
success	message, duration	Green success message
error	message, duration	Red error message
warning	message, duration	Orange warning message
info	message, duration	Blue info message

License
MIT License

Made with ❤️ using Vanilla JS
