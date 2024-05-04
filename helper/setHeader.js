global.cdnname = "shdbdecdnems05";

module.exports = function (req, res) {
  const allowlist = ["http://localhost:3000", "https://altimetrik-task-ui.vercel.app"];
  const allowed = allowlist.includes(req.headers.origin) ? req.headers.origin : "null"
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
  res.setHeader('Cache-Control', 's-maxage=10000');
  res.setHeader('Access-Control-Allow-Credentials', `true`)
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token,Authorization,  X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version")

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }


  return;
};
