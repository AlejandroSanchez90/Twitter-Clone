# Twitter Clone

This project is a Twitter clone that replicates the core features and functionalities of the popular social media platform. It offers a responsive layout, an authentication system, a notification system, image upload capabilities using Base64 strings, and leverages Prisma ORM with MongoDB for efficient data management. The clone also implements various relationships such as one-to-many (User-Post) and many-to-many (Post-Comment), along with additional features like following functionality, comments/replies, and likes functionality.

## Features

- **Authentication System**: The Twitter clone includes a robust authentication system that allows users to register, log in, and securely manage their accounts. Users can authenticate with their credentials and maintain a personalized experience throughout the application.

- **Notification System**: Users receive notifications for relevant events such as new followers, mentions, likes, and comments on their posts. This feature keeps users updated with the latest interactions and activities within the application.

- **Image Upload using Base64 Strings**: The clone supports image uploading using Base64 strings. Users can attach images to profile pictures by converting the images to Base64 format, ensuring easy and seamless image sharing.

- **Prisma ORM with MongoDB**: Prisma, an object-relational mapping (ORM) tool, is integrated with MongoDB to simplify database management. Prisma provides an intuitive and efficient way to interact with the database, allowing seamless retrieval and manipulation of data.

- **Layout using Tailwind**:  utilizes the Tailwind CSS framework to create a responsive and visually appealing layout. The responsive design ensures optimal user experience across various devices and screen sizes.

- **One-to-Many Relations (User-Post)**:  implements a one-to-many relationship between users and posts. Each user can create multiple posts, allowing them to share thoughts, updates, and media with their followers.

- **Many-to-Many Relations (Post-Comment)**: The clone incorporates a many-to-many relationship between posts and comments. Users can leave comments on posts, fostering engagement and conversation within the community.

- **Following Functionality**: Users can follow other users to receive updates on their activities and posts. This feature allows users to curate their timeline and stay connected with the content they find interesting.

- **Comments / Replies**: Users can leave comments on posts and engage in conversations with other users. This feature promotes interaction, discussion, and collaboration within the community.

- **Likes Functionality**: Users can like posts to express their appreciation or agreement. The likes functionality allows users to engage with content and provides a way to gauge the popularity or impact of a post.

## Technologies Used

- **Front-end**: Typescript, React, Next.js, Tailwind
- **Back-end**: Node.js
- **Authentication**: NextAuth
- **File and Image Upload**: Base64 Strings
