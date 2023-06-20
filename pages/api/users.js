export default function handler(req, res) {
  const body = JSON.parse(req.body);

const user = {
  email: "",
  password: "",
  name: "Bob"
};

if (body.email === user.email && body.password === user.password) {
  res.status(200).json(user);
}

res.status(400).json({message: 'User not found'});
}