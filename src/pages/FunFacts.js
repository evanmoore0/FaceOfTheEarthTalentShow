import react from "react";
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';

import BackButton from "../components/BackButton";
import Title from "../components/Title";
import FactTitle from "../components/FactTitle";
import Fact from "../components/Fact";
import Divider from "../components/Divider";


const FunFacts = (props) => {
    return(
        <View style={{flex:1, paddingTop: 50}}>

            <ScrollView

            stickyHeaderIndices={[1]}
            
            >

                <BackButton/>



                <Title
                text = "Fun Facts!"
                />

            <View style={{flex:1, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 30, paddingTop: 15}}>

            <View style= {{paddingVertical: 10}}>
                <FactTitle
                    text = "Volcanoes created more than 80% of Earth's surface"
                />
            </View>

            <View style= {{paddingVertical: 10}}>
            <FactTitle
                text = "There are currently about 1500 active volcanoes"
            /> 
            </View>
            
           

            <View style= {{paddingVertical: 10}}>
            <FactTitle
                text = "There are 20 volcanoes erupting right now!"
            />  
             </View>
             <View style= {{paddingVertical: 10}}>
             <FactTitle
                text = "Volcanoes are present on other planets"
            />  
            </View>
            <View style= {{paddingVertical: 10}}>
             
            <FactTitle
                text = "The Biggest volcano in the Solar System is on Mars"
            />  
            </View>
            

            

           
           

            

                
            </View>

                
    
            </ScrollView>

            <View style={{height: 100, width: '100%', backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center', paddingBottom: 20}}>

                <TouchableOpacity
                style={{width: 300, height: 50, borderRadius: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}
                onPress = {() => {
                    props.navigation.navigate('FinalPage')
                }}
                >

                    <Text style={{fontWeight: '900'}}>
                      End of the Road
                    </Text>

                </TouchableOpacity>

            </View>
            
        </View>
    )
}

export default FunFacts;