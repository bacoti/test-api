const express = require("express");
const cors = require("cors");
const usersRoute = require("./routes/users");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", usersRoute);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Andi's Express API!",
    endpoints: {
      get: "/users",
      post: "/users",
      put: "/users/:id",
      patch: "/users/:id",
      delete: "/users/:id"
    }
  });
});

// Jalankan server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
