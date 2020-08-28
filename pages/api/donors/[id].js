import db from '../../../lib/db'

export default async (req, res) => {
  const {
    query: { id },
  } = req
  const donor = await db.select('*').from('donors').where({ id })
  res.status(200).json(donor)
  // could also be 404 if not found
  // i guess we should also handle PUT, PATCH, and DELETE?
}
