
export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    configured: Boolean(process.env.GEMINI_API_KEY),
    message: "ThreadsKu API aktif"
  });
}
