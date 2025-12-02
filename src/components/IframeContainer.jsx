import React from 'react'
import './IframeContainer.css'

function IframeContainer({ src, title, height = '600px', className = '' }) {
  return (
    <div className={`iframe-wrapper ${className}`}>
      <div className="iframe-container">
        <iframe
          src={src}
          title={title}
          className="embedded-iframe"
          style={{ height }}
          allowFullScreen
          scrolling="yes"
        />
      </div>
    </div>
  )
}

export default IframeContainer

