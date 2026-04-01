export default async function handler(req, res) {
  const { group } = req.query;
  if (!group) return res.status(400).send('Missing group parameter');

  const url = `https://celestrak.org/NORAD/elements/gp.php?GROUP=${group}&FORMAT=TLE`;

  try {
    const response = await fetch(url);
    const text = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(text);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching TLE data');
  }
}