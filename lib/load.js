import swr from 'swr'
import fetch from 'isomorphic-unfetch'

const fetcher = async (path) => {
  const res = await fetch(path)
  return res.json()
}

const load = (path) => swr(path, fetcher)

export default load
