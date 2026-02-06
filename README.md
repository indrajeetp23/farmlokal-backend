<h2>Project Description</h2>

<p>

The goal of this project is to demonstrate how scalable, secure, and high-performance
backend systems are designed and implemented.
</p>

<p>
The backend handles core responsibilities such as user authentication, protected APIs,
high-performance product listing, caching, external service integration, and fault tolerance.
It is designed with a clean and modular architecture to ensure maintainability and scalability.
</p>

<p>
Key objectives of the project include:
</p>

<ul>
  <li>Implementing OAuth-style authentication using JWT</li>
  <li>Building secure and protected API endpoints</li>
  <li>Optimizing product listing APIs for performance</li>
  <li>Using Redis caching with graceful fallback mechanisms</li>
  <li>Integrating external APIs with retry and timeout handling</li>
  <li>Following production-grade backend design practices</li>
</ul>
<h2>Project Structure</h2>

<p>
The backend follows a modular and scalable folder structure where each module has a clear
responsibility. This separation of concerns makes the application easier to maintain,
test, and extend.
</p>

<pre>
farmlokal-backend/
├── src/
│   ├── config/
│   │   ├── db.js            # MongoDB connection logic
│   │   ├── env.js           # Environment variable configuration
│   │   └── redis.js         # Redis connection with graceful fallback
│   │
│   ├── auth/
│   │   ├── auth.controller.js   # Authentication business logic
│   │   └── auth.routes.js       # Authentication routes
│   │
│   ├── products/
│   │   ├── product.model.js     # Product schema and model
│   │   ├── product.service.js   # Product-related business logic
│   │   ├── product.controller.js# Product API handlers
│   │   └── product.routes.js    # Product routes
│   │
│   ├── external/
│   │   └── supplier.service.js  # External supplier API integration
│   │
│   ├── middlewares/
│   │   └── auth.middleware.js   # JWT authentication middleware
│   │
│   ├── utils/
│   │   ├── retry.js             # Retry logic for external APIs
│   │   └── timeout.js           # Timeout handling utilities
│   │
│   ├── app.js                   # Express app configuration
│   │
│   └── server.js                # Application entry point
│
├── .env                          # Environment variables (ignored in Git)
├── .gitignore                    # Git ignore configuration
├── package.json                  # Project dependencies and scripts
└── README.md                     # Project documentation
</pre>



