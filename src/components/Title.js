import react from "react";
import {View,Text} from 'react-native';

const Title = (props) =>{
    return(
        <View style={{flex:1, paddingTop: 20, backgroundColor: 'rgba(0,0,0,0.9)', justifyContent: 'center',alignItems: 'center', paddingBottom: 10}}>

                <Text style={{color:'red', fontWeight: '900', fontSize: 30}}>
                    {props.text}
                </Text>

        </View>
    )
}

export default Title;