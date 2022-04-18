import react from "react";
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';

import BackButton from "../components/BackButton";
import Title from "../components/Title";
import FactTitle from "../components/FactTitle";
import Fact from "../components/Fact";
import Divider from "../components/Divider";


const WhatAreVolcanoes = (props) => {
    return(
        <View style={{flex:1, paddingTop: 50}}>

            <ScrollView

            stickyHeaderIndices={[1]}
            
            >

                <BackButton/>



                <Title
                text = "What Are Volcaones?"
                />

            <View style={{flex:1, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 30, paddingTop: 15}}>

            <FactTitle
                text = "Volcanoes are openings of the Earth's surface"
                />

                <Fact
                text = "They are typically a mountain or hill in a conical shape that has a crater or vent which lava, rock fragments, and gases are being erupted or have been erupted from the earth's crust"
                />

                <Fact
                text = "Volcanoes can be active dormant or extinct. Active volcanoes have erupted within the last 10,000 years or is currently active. Dormant volcanoes haven't erupted in the last 10,000 years, but still have a chance of erupting. Exinct volcanoes haven't erupted in the past 10,000 years and are unlikely to erupt in the future."
                />

                <Fact
                text = "Volcanoes contain molten rock called magma. When this magma is expelled from the volcano during an eruption it is called lava. "
                />

                <View style={{ justifyContent: 'center', alignItems: 'center',width:'100%', paddingTop: 20}}>

                    <Image
                    style={{width: '100%', height: 200, borderRadius: 15}}
                    resizeMode="cover"

                    source={require('/Users/evanmoore/Desktop/Volcano/Volcano/assets/imgs/whatIsAVolcano.jpg')}
                    />

                </View>

                <Divider/>

                <FactTitle
                text = "Where does the word volcano come from?"
                />

                <Fact
                text = "Volcano comes from the world 'vulcan' who was the Roman God of fire!"
                />

                <View style={{ justifyContent: 'center', alignItems: 'center',width:'100%', paddingTop: 20, paddingBottom: 40}}>

                    <Image
                    style={{width: '100%', height: 200, borderRadius: 15}}
                    resizeMode="cover"

                    source={require('/Users/evanmoore/Desktop/Volcano/Volcano/assets/imgs/vulcan.jpg')}
                    />

                </View>

                <Divider/>

                <FactTitle
                text = "There are multiple types of volcanoes"
                />

                <Fact
                text = "Cinder cone volcanoes are the most common type of volcano in the world. They are normally irregularly shaped and often large volcanic craters."
                />


                <Fact
                text = "Composite volcanoes, or strato volcaones, are steep sided cones formed from layers of ash and lava flows. Composite volcano eruptions are explosive and are very dangerous. "
                />

                <Fact
                text = "Sheild volcanoes short with gently sloping sides froemd from layers of lava. Eruptions from shield volcanoes are typically not explosive, but produce fast flowing lava."
                />

                <Fact
                text = "Lava dome volcanoes have steep sides and have thick, slow flowing lava."
                />

                <View style={{ justifyContent: 'center', alignItems: 'center',width:'100%', paddingTop: 20, paddingBottom: 40}}>

                    <Image
                    style={{width: '100%', height: 200, borderRadius: 15}}
                    resizeMode="cover"

                    source={require('/Users/evanmoore/Desktop/Volcano/Volcano/assets/imgs/typesOfVolcanoes.jpg')}
                    />

                </View>

            </View>

                
    
            </ScrollView>

            <View style={{height: 100, width: '100%', backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center', paddingBottom: 20}}>

                <TouchableOpacity
                style={{width: 300, height: 50, borderRadius: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}
                onPress = {() => {
                    props.navigation.navigate('SubductionZones')
                }}
                >

                    <Text style={{fontWeight: '900'}}>
                    How Are Volcanoes Formed?
                    </Text>

                </TouchableOpacity>

            </View>
            
        </View>
    )
}

export default WhatAreVolcanoes;