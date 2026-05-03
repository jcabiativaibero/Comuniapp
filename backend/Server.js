const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express(); // 🔥 AQUÍ se crea app

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* 🔥 RUTA BASE */
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "API de ComuniApp funcionando 🚀"
  });
});

/* 🔥 CONEXIÓN MONGO */
mongoose.connect(
  "mongodb+srv://comuniapp_user:admin123@comuniapp.1zqq1fv.mongodb.net/?appName=Comuniapp"
)
.then(() => console.log("Mongo Atlas conectado 🔥"))
.catch(err => console.log("Error Mongo:", err));

/* 🧱 MODELO */
const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model("User", UserSchema);

/* 🔐 REGISTER */
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hashed
  });
const existing = await User.findOne({ email });

if (existing) {
  return res.status(400).json({ error: "El usuario ya existe" });
}
  await user.save();

  res.json({ message: "Usuario creado" });
});

/* 🔐 LOGIN */
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ error: "Usuario no existe" });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(400).json({ error: "Contraseña incorrecta" });
  }

  res.json({ message: "Login exitoso", user });
});

/* 🚀 SERVER */
app.listen(5000, () => {
  console.log("Servidor corriendo en http://localhost:5000");
});