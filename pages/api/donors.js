import db from '../../lib/db'

const post = async (req, res) => {
  const {
    body: { name },
  } = req
  const id = await db.insert({ name }).into('donors').returning('id')
  return res.redirect(201, `/api/donors/${id}`)
  // might also do
  // 404 Not Found
  // 409 Conflict (if already exists)
  // https://www.restapitutorial.com/lessons/httpmethods.html
}

const get = async (_req, res) => {
  const donors = await db.select('*').from('donors')
  return res.status(200).json(donors)
}

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      return get(req, res)
    case 'POST':
      return post(req, res)
    default:
      // Method Not Allowed
      return res.status(405).end()
  }
}
