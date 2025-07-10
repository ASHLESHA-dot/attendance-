##  Attendance Portal (Frontend Project)

This is a frontend-only simulation of an attendance portal, created as part of the NCC Web Development Team Challenge - IIT Roorkee.
It mimics the experience of login, attendance marking, and submission confirmation — using only HTML, CSS, and JavaScript, without any backend/database.

## Features Implemented
1. Authentication (Simulated)
- Separate Login/Signup pages for both Admin and User
- No real database — any credentials are accepted for demo purposes
- After login, users are redirected to the dashboard and admin are displayed an alert

2. Attendance Marking
- Users can mark themselves Present or Absent on a particular date.
- After submission, a success message is shown and user can view attendance but due to only frontend coding an alert msg is displayed

 3. Responsive Design
- UI is built to work across devices — desktop, tablet, and mobile
- Clean styling with simple CSS and layout

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)
- Font Awesome (for icons)
- localStorage (for simulating user state)

##  Pages Included

-`att.html`(sign-up/login page)
- `dashboard.html` (shared dashboard after login)
- `success.html` (attendance confirmation page)

## What’s Not Implemented

- No real backend or database
- No JWT or session handling
- No role-based protection of routes
- Profile page idea was explored but not added to keep it lightweight

## Notes

This is a frontend-focused project aimed at demonstrating:
- UI flow design
- Simulated login logic
- Clean structure and basic logic handling in JS

##  Setup Instructions

1. Clone this repo:
git clone https://github.com/ASHLESHA-dot/attendance-.git
2. Open `att.html` or the login pages in a browser.
3. Start clicking around! No backend or server needed.

## P.S.: 
I am currently learning React.js and will soon start with backend.