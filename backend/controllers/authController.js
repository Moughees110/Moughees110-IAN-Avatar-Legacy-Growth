const { signupUser, loginUser, sendResetEmail } = require("../services/firebaseService");

exports.signup = async (req, res) => {


  const { firstName, lastName, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  try {
    const user = await signupUser({ firstName, lastName, email, password });
    res.status(200).json({ message: "User created successfully", uid: user.uid });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  
  
  const { email, password } = req.body;
console.log(req);

  try {
    const user = await loginUser({ email, password });
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    await sendResetEmail(email);
    res.status(200).json({ message: "Reset email sent" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
