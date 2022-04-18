import react from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';

import { useNavigation } from "@react-navigation/native";

const FirstPage = () => {

    const navigation = useNavigation();
    return(
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 50, fontWeight: '900', color: 'red'}}>
                    Volcanoes
                </Text>

            </View>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>

                <Image
                source={require('/Users/evanmoore/Desktop/Volcano/Volcano/assets/imgs/volcanoEruption.jpg')}
                style ={{height: 500, width: 900}}
                
                />
            

            </View>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            
                <TouchableOpacity 
                style={{width: 200, height: 50, borderRadius: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}
                onPress = {()=>{
                    navigation.navigate('WhatAreVolcanoes')
                }}
                >

                    <Text style={{fontWeight: '900'}}>

                        Learn More!

                    </Text>

                </TouchableOpacity>

            </View>

        </View>
    )
}

export default FirstPage;