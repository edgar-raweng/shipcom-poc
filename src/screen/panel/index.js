import React from 'react'

// Import Libraries
import { 
  View
} from 'react-native'

// Import Components
import {
  Header,
  DataTable
} from 'src/components'

const data = [
  {
    "INCIDENT_ID": "55028",
    "INCIDENT_NUMBER": "48071",
    "INCIDENT_TYPE_ID": 4,
    "INCIDENT_STATUS_ID": 1,
    "INCIDENT_SEVERITY_ID": 6,
    "SR_OWNER_ID": "100003631",
    "SUMMARY": "This is sample SR",
    "CUSTOMER_ID": 4429,
    "INVENTORY_ITEM_ID": "149",
    "CREATION_DATE": "2020-02-05T15:45:02",
    "LAST_UPDATE_DATE": "2020-02-05 15:45:02",
    "ORGANIZATION_ID": 204,
    "INVENTORY_ORG_ID": "204"
  },
  {
    "INCIDENT_ID": "55030",
    "INCIDENT_NUMBER": "48072",
    "INCIDENT_TYPE_ID": 5,
    "INCIDENT_STATUS_ID": 2,
    "INCIDENT_SEVERITY_ID": 7,
    "SR_OWNER_ID": "100003632",
    "SUMMARY": "This is sample SR",
    "CUSTOMER_ID": 4430,
    "INVENTORY_ITEM_ID": "150",
    "CREATION_DATE": "2020-02-05T15:45:02",
    "LAST_UPDATE_DATE": "2020-02-05 15:45:02",
    "ORGANIZATION_ID": 205,
    "INVENTORY_ORG_ID": "205"
  },
  {
    "INCIDENT_ID": "55032",
    "INCIDENT_NUMBER": "48073",
    "INCIDENT_TYPE_ID": 6,
    "INCIDENT_STATUS_ID": 3,
    "INCIDENT_SEVERITY_ID": 8,
    "SR_OWNER_ID": "100003633",
    "SUMMARY": "This is sample SR",
    "CUSTOMER_ID": 4431,
    "INVENTORY_ITEM_ID": "151",
    "CREATION_DATE": "2020-02-05T15:45:02",
    "LAST_UPDATE_DATE": "2020-02-05 15:45:02",
    "ORGANIZATION_ID": 206,
    "INVENTORY_ORG_ID": "206"
  }
]

const PanelScreen = () => (

  <View>
    <Header
      title={ `Panel Screen` }
    />
    <DataTable dataSource={data}/>
  </View>

)


export default PanelScreen