import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ style }) => (
  <footer className="Footer">
    <style jsx>{`
      .Footer {
        grid-area: foot;
        text-align: right;
        padding: 5px;
        color: white;
        background-color: ${style?.backgroundColor};
      }
    `}</style>
  </footer>
)

Footer.propTypes = {
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
}

Footer.defaultProps = {
  style: {
    backgroundColor: undefined,
  },
}

export default Footer
