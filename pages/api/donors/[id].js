import db from '../../../lib/db'

export default async (req, res) => {
  const {
    query: { id },
  } = req
  const donor = await db.select('*').from('bepis').where({ id })
  res.status(200).json(donor)
}
