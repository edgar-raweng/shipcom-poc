import React from 'react'

// Import Libraries
import { View, Text } from 'react-native'

// Import Components
import {
  Header,
  DynamicText
} from 'src/components'

// Import Styles
import {
  styles
} from './styles'


const content = "I'm baby quinoa cred 8-bit asymmetrical street art readymade farm-to-table 3 wolf moon. Kitsch organic DIY, ennui shabby chic chicharrones kombucha roof party forage la croix celiac. Actually cloud bread butcher keffiyeh asymmetrical kinfolk pickled. Tattooed biodiesel viral etsy waistcoat raclette.\n\nIntelligentsia truffaut subway tile, cliche jean shorts mustache cronut fanny pack migas readymade. Hot chicken readymade YOLO air plant pop-up, palo santo try-hard craft beer meggings cred gastropub adaptogen squid. Before they sold out fam distillery irony, taxidermy echo park humblebrag single-origin coffee street art shoreditch. Hammock mlkshk kickstarter narwhal.\n\nFour dollar toast XOXO organic before they sold out seitan tofu kombucha raw denim wolf cronut kinfolk DIY viral. Pok pok cloud bread hoodie meditation live-edge. Brooklyn small batch church-key thundercats authentic cloud bread polaroid sriracha vice tacos vexillologist. Mustache brooklyn street art, woke occupy before they sold out try-hard kinfolk fashion axe waistcoat.\n\nKeytar viral portland helvetica copper mug authentic la croix banjo meggings pork belly. Small batch irony ramps selvage freegan franzen farm-to-table meh iPhone distillery whatever. Stumptown photo booth four dollar toast, man bun meggings gentrify banjo. Pabst letterpress health goth swag, fanny pack raclette cardigan iceland hot chicken biodiesel craft beer chambray poke. Sartorial 3 wolf moon unicorn pour-over, pickled humblebrag blue bottle tote bag truffaut. Cred pour-over hammock, butcher austin kickstarter meditation craft beer master cleanse health goth iceland fashion axe post-ironic. Gentrify lyft plaid swag ethical, literally narwhal man bun artisan man braid offal quinoa heirloom.\n\nTwee microdosing fingerstache leggings, hashtag whatever pug air plant fanny pack. Try-hard +1 keffiyeh organic bespoke sustainable craft beer la croix pop-up bicycle rights jean shorts sriracha biodiesel taiyaki ugh. Messenger bag lo-fi pickled truffaut organic photo booth, pabst bushwick tumblr fashion axe live-edge swag. Brunch banjo tote bag, cred bespoke taiyaki farm-to-table."

const ConsentScreen = ( props ) => {

  console.log('THIS IS THE CONNECTION ====>', props.route)

  return (

    <View style={styles.container}>
      <Text>
        Edgar's Page
      </Text>
      <DynamicText content={content}/>
    </View>

  )

}

export default ConsentScreen