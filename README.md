# FeedForward

FeedForward is a food donation platform built using the MERN stack, designed to bridge the gap between surplus food and those in need. The platform enables donors to share excess food, recipients to request food. QR codes and email notifications streamline the food distribution process.

## Features

### 1. **Multiple user roles**:

- **Admin**: Assigns city admins to different cities.
- **City Admin**: Verifies and approves recipients who wish to join the platform.
- **Donor**: Posts surplus food or fulfills recipient food requests.
- **Recipient**: Requests available food from donors or requests food requests based on their needs.

### 2. **QR Code Verification**:

- Once a donation is made, a QR code is generated and sent via email to the donor. The recipient must scan this QR code to mark the donation as completed.

### 3. **Email Notifications**:

- Donors receive alerts about recipient requests.
- Recipients are notified about available food.
- Both parties receive confirmation emails regarding donation transactions.

### 4. **Authentication & Security**:

- JWT-based authentication with **_protected routes_** on both frontend and backend.

### 5. **Effective API Handling**:

- React Query is used for efficient API calls.

## Platform workflow
- The **Admin** assigns a **City Admin** to a specific city. The platform will not be available in a city unless a City Admin has been assigned.
- Once the platform is available, both **Donors** and **Recipients** can sign up.
- The **City Admin** receives notifications for every recipient signup and must verify their credentials and authenticity to prevent misuse of the platform.
- **Donors** can either post about surplus food they have or fulfill a recipient’s food request.
- **Recipients** can either request food from an existing donor post or create a new food request based on their needs.
- When a donor fulfills a food request or a recipient claims available food, the donation is set to In-Progress on a First-Come, First-Served **(FCFS)** basis.
- Both the **Donor** and **Recipient** receive notifications with essential details regarding the donation.
- The **Recipient** must collect the donation from the specified location and scan the QR Code (sent to the Donor via email) to mark the donation as Completed.

## Authors

- [Swapnil Jadhav](https://github.com/Swapnil0809)
- [Rahul Lankeppanavar](https://github.com/RCOM363)

## Built with

![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990.svg?style=for-the-badge&logo=React-Hook-Form&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1.svg?style=for-the-badge&logo=Zod&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)
![React](https://img.shields.io/badge/React%20Query-FF4154.svg?style=for-the-badge&logo=React-Query&logoColor=white)
![Node.JS](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)![Express](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)![MongoDB](https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white)![Mongoose](https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=Mongoose&logoColor=white)![JWT](https://img.shields.io/badge/JSON%20Web%20Tokens-000000.svg?style=for-the-badge&logo=JSON-Web-Tokens&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5.svg?style=for-the-badge&logo=Cloudinary&logoColor=white)

## Preview

### Home page

![homepage](https://github.com/RCOM363/feed-forward/blob/main/frontend/public/homepage.png)

### Login page

![loginpage](https://github.com/RCOM363/feed-forward/blob/main/frontend/public/login.png)

### Sign pages

**User role selection**
![userroleselection](https://github.com/RCOM363/feed-forward/blob/main/frontend/public/signup-1.png)

**Donor signup**
![donor-signup](https://github.com/RCOM363/feed-forward/blob/main/frontend/public/donor-signup.png)

**Recipient signup**
![recipient-signup](https://github.com/RCOM363/feed-forward/blob/main/frontend/public/recipient-signup.png)

## Admin dashboard

![admin-dashboard](https://github.com/RCOM363/feed-forward/blob/main/frontend/public/admin-dashboard-ezgif.png)

**Add city admin modal**
![addcityadminmodal](https://github.com/RCOM363/feed-forward/blob/main/frontend/public/add-city-admin-modal.png)

## City admin dashboard

![city-admin-dashboard](https://github.com/RCOM363/feed-forward/blob/main/frontend/public/city-admin-dashboard.png)

## Donor dashboard

![donor-dashboard](https://github.com/RCOM363/feed-forward/blob/main/frontend/public/donor-dashboard.png)

**Food post modal**
![food-post-modal](https://github.com/RCOM363/feed-forward/blob/main/frontend/public/food-post-modal.png)

## Recipient dashboard

![recipient-dashboard](https://github.com/RCOM363/feed-forward/blob/main/frontend/public/recipient-dashboard.png)

**Food request modal**
![food-request-modal](https://github.com/RCOM363/feed-forward/blob/main/frontend/public/food-request-modal.png)

## Mail received by donor after donation is set in-progress

![donation-complete-qr](https://github.com/RCOM363/feed-forward/blob/main/frontend/public/donation-complete-qr.png)

## Donation complete page (changes donation status to completed)

![donation-complete](https://github.com/RCOM363/feed-forward/blob/main/frontend/public/donation-complete.png)
