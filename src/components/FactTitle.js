import react from "react";

import {View,Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const FactTitle = (props) => {
    return(

        <View style={{flexDirection: 'row'}}>

            <Ionicons name="earth" size={24} color="red" style={{paddingRight: 10}} />
            <Text style={{color: 'white', fontWeight: '500', fontSize: 20}}>
                {props.text}
            </Text>

        </View>
    )
}

export default FactTitle;