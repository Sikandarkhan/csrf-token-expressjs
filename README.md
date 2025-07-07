# 🛡️ CSRF Protection in Express.js

This repository demonstrates how to implement **Cross-Site Request Forgery (CSRF)** protection in Express.js applications using the [`csurf`](https://www.npmjs.com/package/csurf) middleware. It offers a secure foundation for modern web applications.

![Express CSRF Protection Demo](https://via.placeholder.com/800x400.png?text=Express+CSRF+Protection+Demo)

---

## ✨ Features

- ✅ Complete CSRF protection implementation  
- 💾 Session management with `express-session`  
- 📝 Sample forms with CSRF tokens  
- ❌ Error handling for invalid tokens  
- 🔐 REST API protection examples  
- 🌐 Simple Vue.js frontend integration example  

---

## 🚀 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/Sikandarkhan/csrf-token-expressjs.git
   cd csrf-token-expressjs
   npm install --save-dev nodemon
   npm run start




## Testing 🧪
Start the server

Visit http://localhost:3000

Submit the form - should work

Try submitting without CSRF token (simulate attack)

Observe 403 Forbidden error


## Demo video is being played here 

https://user-images.githubusercontent.com/7334929/158018502-2925ce42-cd8c-41a3-b743-758999d9d8e2.mov

## Contributing 🤝
Contributions are welcome! Please follow these steps:

Fork the repository

Create a new branch (git checkout -b feature/your-feature)

Commit your changes (git commit -am 'Add some feature')

Push to the branch (git push origin feature/your-feature)

Open a pull request

## Security Notes ⚠️
Always use HTTPS in production

Keep your session secret secure

Combine CSRF protection with other security headers

Regenerate session on authentication changes

# License 📄
This project is licensed under the MIT License - see the LICENSE file for details.
