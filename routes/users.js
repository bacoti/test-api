const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Andi Aryanto", email: "andi@example.com" },
  { id: 2, name: "Najmi", email: "najmi@example.com" },
  { id: 3, name: "Rifqi", email: "rifqi@example.com" }
];

// GET (Read all users)
router.get("/", (req, res) => {
  res.json(users);
});

// POST (Create new user)
router.post("/", (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json({
    message: "User berhasil ditambahkan!",
    user: newUser
  });
});

// PUT (Update full data)
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const userIndex = users.findIndex(u => u.id === parseInt(id));

  if (userIndex === -1)
    return res.status(404).json({ message: "User tidak ditemukan!" });

  users[userIndex] = { id: parseInt(id), name, email };
  res.json({ message: "User berhasil diupdate!", user: users[userIndex] });
});

// PATCH (Update sebagian data)
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = users.find(u => u.id === parseInt(id));

  if (!user)
    return res.status(404).json({ message: "User tidak ditemukan!" });

  if (name) user.name = name;
  if (email) user.email = email;

  res.json({ message: "User berhasil diupdate sebagian!", user });
});

// DELETE (Hapus data)
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex(u => u.id === parseInt(id));

  if (userIndex === -1)
    return res.status(404).json({ message: "User tidak ditemukan!" });

  users.splice(userIndex, 1);
  res.json({ message: "User berhasil dihapus!" });
});

module.exports = router;
