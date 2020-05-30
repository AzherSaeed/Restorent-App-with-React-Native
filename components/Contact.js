import React , { Component } from 'react';
import { Text  , View} from 'react-native'
import { Card, ListItem} from 'react-native-elements'
const RenderContact = () => {
    return(
      <Card title={'Contact Information'} >
        <Text style={{margin: 5}}>121, Clear Water Bay Road </Text>
        <Text style={{margin: 5}}>Clear Water Bay Kowloon  </Text>
        <Text style={{margin: 5}}>HONG KONG </Text>
        <Text style={{margin: 5}}>Tel: +852 1234 5678 </Text>
        <Text style={{margin: 5}}>Fax: +852 8765 4321</Text>    
        <Text style={{margin: 5}}>Email:confusion@food.net</Text>
      </Card>
    )
}
class Contact extends Component {
    static navigationOptions = {
        title: 'Contact Us'
    };
    render(){
        return(
            <RenderContact/>
        )
    }
}

export default Contact;