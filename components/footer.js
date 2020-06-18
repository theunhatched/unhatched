import React from 'react'

const Footer = () => (
  <footer className="Footer">
    Built with &hearts; in San Francisco
    <style jsx>{`
      .Footer {
        grid-area: foot;
      }
    `}</style>
    <style jsx>{`
      .Footer {
        text-align: right;
        padding: 5px;
      }
    `}</style>
  </footer>
)

export default Footer
