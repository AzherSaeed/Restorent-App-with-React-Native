import React , { Component } from 'react';
import { Text , View , FlatList , ScrollView } from 'react-native';
import { LEADERS } from '../shared/leaders'
import { Card, ListItem} from 'react-native-elements'

const ReanderHistory = () => {
    return (
        <Card title={'Our History'}>
        <Text style={{margin: 5}}>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</Text>
        <Text style={{margin: 5}}>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.  </Text>
        
      </Card>
    )
}

const RenderLeader = ({item}) => {

    return(
     <View>  
     <ListItem key={item.id} title={item.name} subtitle={item.description} hideChevron={true} 
     leftAvatar = {{source : require('./images/alberto.png')}}
     />
     </View>
    )
}
class About extends Component {

    constructor(props){
        super(props)

        this.state = {
            leaders : LEADERS
        }
    }
    static navigationOptions = {
        title: 'About Us'
    };
    render(){
        return(
            <View>
               <ScrollView>
               <ReanderHistory/>
               <Card title="Corporate Leadership">
               <FlatList data={this.state.leaders} renderItem={RenderLeader} keyExtractor={item => item.id.toString()} />
               </Card>
              
               </ScrollView>
            </View>
        )
    }
}
export default About;