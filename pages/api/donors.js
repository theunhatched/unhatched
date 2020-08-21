import db from '../../lib/db'

export default async (req, res) => {
  if (req.method === 'POST') {
    return res.status(200).json(req)
  }

  const donors = await db.select('*').from('donors')
  return res.status(200).json(donors)
}
