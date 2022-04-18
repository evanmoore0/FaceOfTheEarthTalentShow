import react from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
    const navigation = useNavigation();
    return(
        <View style={{alignItems: 'flex-start', width: '100%'}}>

            <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress = {()=>{
                navigation.goBack();
            }}
            >
                <Ionicons name="caret-back" size={24} color="red" />
                <Text style={{color: 'red', fontWeight: '900'}}>
                    Back
                </Text>
            </TouchableOpacity>


        </View>
    )
}

export default BackButton;