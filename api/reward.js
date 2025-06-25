export default async function handler(req, res) {
  const { type } = req.body;
  let amount = 0;

  if (type === "tap") amount = 0.0001;
  else if (type === "checkin") amount = 0.02;

  res.status(200).json({ amount, msg: `You earned ${amount} TEA` });
}
