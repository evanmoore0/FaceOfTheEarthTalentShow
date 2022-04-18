import react from "react";
import {View, Text} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';





const Fact = (props) => {

    return(
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', paddingLeft:15, paddingTop: 10}}>

            <FontAwesome5 name="gripfire" size={16} color="red" style={{paddingRight:7}}/>
            <Text style={{color: 'gray', paddingHorizontal: 10, fontSize: 16}}>

                    {props.text}
            </Text>
        </View>
    )

}

export default Fact;

