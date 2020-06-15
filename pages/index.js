import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Unhatched</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Unhatched
        </h1>

        <p className="description">
          Coming soon...
        </p>
      </main>

      <footer>
        Built with &hearts; in San Francisco
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box }
      `}</style>
    </div>
  )
}
