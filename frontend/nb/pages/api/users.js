export default function handler(req, res) {
  res.status(200).json({
    users: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Niloy Niil" },
      {
        id: 3,
        name: "Next Js",
      },
    ],
  });
}