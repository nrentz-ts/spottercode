import React from 'react'
import { AuthType, SpotterEmbed, useEmbedRef, useInit } from '@thoughtspot/visual-embed-sdk/react'
import '../App.css'
import './SpotStayAI.css'

const embedConfig = {
  thoughtSpotHost: 'https://pm-aws-v1.thoughtspotstaging.cloud',
  authType: AuthType.None,
  customizations: {
    style: {
      customCSS: {
        variables: {
          '--ts-var-root-background': '#f7f7f7',
          '--ts-var-root-color': '#222222',
          '--ts-var-root-font-family': "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
          '--ts-var-application-color': '#ff385c',
          '--ts-var-button-border-radius': '8px',
          '--ts-var-button--icon-border-radius': '8px',
          '--ts-var-button--primary-background': '#ff385c',
          '--ts-var-button--primary--hover-background': '#e61e4d',
          '--ts-var-button--primary--active-background': '#e61e4d',
          '--ts-var-button--primary-color': '#fff',
          '--ts-var-button--primary--font-family': "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
          '--ts-var-button--secondary-background': '#f5f5f5',
          '--ts-var-button--secondary--hover-background': 'rgba(255, 56, 92, 0.1)',
          '--ts-var-button--secondary--active-background': '#FFEBEE',
          '--ts-var-button--secondary-color': '#ff385c',
          '--ts-var-button--secondary--font-family': "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
          '--ts-var-button--tertiary-background': 'transparent',
          '--ts-var-button--tertiary--hover-background': 'rgba(255, 56, 92, 0.1)',
          '--ts-var-button--tertiary--active-background': '#FFEBEE',
          '--ts-var-button--tertiary-color': '#ff385c',
          '--ts-var-viz-border-radius': '12px',
          '--ts-var-viz-background': '#fff',
          '--ts-var-liveboard-layout-background': '#f7f7f7',
          '--ts-var-liveboard-tile-background': '#fff',
          '--ts-var-liveboard-tile-border-radius': '12px',
          '--ts-var-liveboard-tile-padding': '24px',
          '--ts-var-liveboard-tile-border-color': '#ebebeb',
        },
      },
    },
  },
}

function SpotStayAI() {
  useInit(embedConfig)
  const embedRef = useEmbedRef()

  return (
    <>
      <div className="dashboard-header">
        <div>
          <h1>SpotStay AI</h1>
          <p className="subtitle">Ask questions about your properties and bookings</p>
        </div>
      </div>

      <div className="thoughtspot-embed-container">
        <SpotterEmbed
          ref={embedRef}
          worksheetId="82230d30-2d3e-4734-a6b0-b2061806db25"
          frameParams={{
            width: '100%',
            height: '800px',
          }}
        />
      </div>
    </>
  )
}

export default SpotStayAI

