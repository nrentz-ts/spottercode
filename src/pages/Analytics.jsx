import React from 'react'
import { 
  AuthType, 
  LiveboardEmbed, 
  useEmbedRef, 
  useInit
} from '@thoughtspot/visual-embed-sdk/react'
import {
  CustomActionsPosition,
  CustomActionTarget
} from '@thoughtspot/visual-embed-sdk'
import '../App.css'
import './Analytics.css'

const OPEN_LISTING_ACTION_ID = 'open-listing-action'

const embedConfig = {
  thoughtSpotHost: 'https://pm-aws-v1.thoughtspotstaging.cloud',
  authType: AuthType.None,
  customActions: [
    {
      id: OPEN_LISTING_ACTION_ID,
      name: 'Open listing',
      position: CustomActionsPosition.CONTEXTMENU,
      target: CustomActionTarget.VIZ,
    },
  ],
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
          '--ts-var-button--primary-background': 'transparent',
          '--ts-var-button--primary--hover-background': 'rgba(255, 56, 92, 0.1)',
          '--ts-var-button--primary--active-background': '#FFEBEE',
          '--ts-var-button--primary-color': '#ff385c',
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

function Analytics() {
  useInit(embedConfig)
  const embedRef = useEmbedRef()

  const handleCustomAction = (event) => {
    console.log('=== Custom Action Triggered ===')
    console.log('Full event object:', event)
    console.log('Event keys:', Object.keys(event || {}))
    console.log('Event.data:', event?.data)
    console.log('Event.data keys:', Object.keys(event?.data || {}))
    
    // Extract action ID from event.data.id
    const actionId = event?.data?.id
    console.log('Action ID:', actionId)
    console.log('Expected Action ID:', OPEN_LISTING_ACTION_ID)
    
    // The payload data is in event.data
    const payload = event?.data || {}
    
    // Check if this is our "Open listing" custom action
    if (actionId === OPEN_LISTING_ACTION_ID) {
      console.log('Action ID matches! Processing "Open listing" action...')
      let listingUrl = null

      // Extract listing URL from context menu points (clicked data point)
      console.log('Checking contextMenuPoints:', payload?.contextMenuPoints)
      if (payload?.contextMenuPoints?.clickedPoint) {
        const clickedPoint = payload.contextMenuPoints.clickedPoint
        console.log('Clicked point:', clickedPoint)
        console.log('Selected attributes:', clickedPoint.selectedAttributes)
        console.log('Selected measures:', clickedPoint.selectedMeasures)
        console.log('Deselected attributes:', clickedPoint.deselectedAttributes)
        console.log('Deselected measures:', clickedPoint.deselectedMeasures)

        // Helper function to find listing URL in an array of column values
        const findListingUrl = (items, sourceName) => {
          if (!items || items.length === 0) return null
          
          console.log(`Checking ${sourceName} for listing URL...`)
          items.forEach((item, idx) => {
            console.log(`${sourceName} ${idx}:`, item.column?.name, '=', item.value)
          })
          
          const urlItem = items.find(
            (item) => {
              const columnName = item.column?.name?.toLowerCase() || ''
              return columnName === 'listing url' || 
                     columnName === 'listingurl' ||
                     columnName === 'listing_url'
            }
          )
          console.log(`Found URL in ${sourceName}:`, urlItem)
          return urlItem?.value || null
        }

        // Check selectedAttributes for listing URL column
        if (!listingUrl && clickedPoint.selectedAttributes && clickedPoint.selectedAttributes.length > 0) {
          listingUrl = findListingUrl(clickedPoint.selectedAttributes, 'selectedAttributes')
          if (listingUrl) {
            console.log('Found listing URL from selectedAttributes:', listingUrl)
          }
        }

        // Check deselectedAttributes for listing URL column
        if (!listingUrl && clickedPoint.deselectedAttributes && clickedPoint.deselectedAttributes.length > 0) {
          listingUrl = findListingUrl(clickedPoint.deselectedAttributes, 'deselectedAttributes')
          if (listingUrl) {
            console.log('Found listing URL from deselectedAttributes:', listingUrl)
          }
        }

        // Check selectedMeasures for listing URL column
        if (!listingUrl && clickedPoint.selectedMeasures && clickedPoint.selectedMeasures.length > 0) {
          listingUrl = findListingUrl(clickedPoint.selectedMeasures, 'selectedMeasures')
          if (listingUrl) {
            console.log('Found listing URL from selectedMeasures:', listingUrl)
          }
        }

        // Check deselectedMeasures for listing URL column (if present)
        if (!listingUrl && clickedPoint.deselectedMeasures && clickedPoint.deselectedMeasures.length > 0) {
          listingUrl = findListingUrl(clickedPoint.deselectedMeasures, 'deselectedMeasures')
          if (listingUrl) {
            console.log('Found listing URL from deselectedMeasures:', listingUrl)
          }
        }
      }

      // Fallback: Try to extract from embedAnswerData if available
      if (!listingUrl && payload?.embedAnswerData) {
        console.log('Checking embedAnswerData for listing URL...')
        console.log('Embed answer data:', payload.embedAnswerData)
        const columns = payload.embedAnswerData.columns || []
        const dataRows = payload.embedAnswerData.data || []
        
        console.log('Columns:', columns.map(col => col.name || col))
        console.log('Data rows count:', dataRows.length)
        
        // Find the listing URL column index
        const urlColumnIndex = columns.findIndex(
          (col) => {
            const columnName = (col.name || col)?.toLowerCase() || ''
            return columnName === 'listing url' || 
                   columnName === 'listingurl' ||
                   columnName === 'listing_url'
          }
        )

        console.log('Listing URL column index:', urlColumnIndex)
        if (urlColumnIndex !== -1 && dataRows.length > 0) {
          // Get the first row's listing URL value
          listingUrl = dataRows[0][urlColumnIndex]
          console.log('Found listing URL from embedAnswerData:', listingUrl)
        }
      }

      // Open the listing URL in a new tab if found
      if (listingUrl) {
        console.log('Opening listing URL:', listingUrl)
        // Ensure URL has protocol
        let urlToOpen = listingUrl
        if (!urlToOpen.startsWith('http://') && !urlToOpen.startsWith('https://')) {
          urlToOpen = `https://${urlToOpen}`
        }
        console.log('Final URL to open:', urlToOpen)
        window.open(urlToOpen, '_blank', 'noopener,noreferrer')
      } else {
        console.warn('Listing URL not found in custom action payload')
        console.warn('Available payload structure:', JSON.stringify(payload, null, 2))
      }
    } else {
      console.log('Action ID does not match. Ignoring this custom action.')
    }
    console.log('=== End Custom Action Handler ===')
  }

  return (
    <>
      <div className="dashboard-header">
        <div>
          <h1>Analytics</h1>
          <p className="subtitle">View your property analytics and insights</p>
        </div>
      </div>

      <div className="thoughtspot-embed-container">
        <LiveboardEmbed
          ref={embedRef}
          liveboardId="69ea4c70-03bc-4af8-b4c2-5f9263560674"
          frameParams={{
            width: '100%',
            height: '800px',
          }}
          onCustomAction={handleCustomAction}
        />
      </div>
    </>
  )
}

export default Analytics

