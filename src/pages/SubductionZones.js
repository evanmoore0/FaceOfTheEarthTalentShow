import react from "react";
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';

import BackButton from "../components/BackButton";
import Title from "../components/Title";
import FactTitle from "../components/FactTitle";
import Fact from "../components/Fact";
import Divider from "../components/Divider";


const SubductionZones = (props) => {
    return(
        <View style={{flex:1, paddingTop: 50}}>

            <ScrollView

            stickyHeaderIndices={[1]}
            
            >

                <BackButton/>



                <Title
                text = "Subduction Zones"
                />

            <View style={{flex:1, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 30, paddingTop: 15}}>

            <FactTitle
                text = "Two tectonic plates can collide, one plunges deep below the other one. This is known as the subduction zone."
                />

                <Fact
                text = "As the plate sinks temperatures and pressures increase resulting in water releasing from rocks within the plate."
                />

                <Fact
                text = "Water reduces the melting point of the overlying rock which results in the formation of magma."
                />

                <Fact
                text = "Magma continues to form until it eventually forces its way to the surface resulting in an eruption."
                />

                <View style={{ justifyContent: 'center', alignItems: 'center',width:'100%', paddingTop: 20}}>

                    <Image
                    style={{width: '100%', height: 200, borderRadius: 15}}
                    resizeMode="cover"

                    source={require('/Users/evanmoore/Desktop/Volcano/Volcano/assets/imgs/subduction.jpg')}
                    />

                </View>

                <Divider/>

                <View style={{width: '100%', justifyContent: 'center', alignItems:'center'}}>

                <Title
                text = "Hotspots"
                />

                </View>
                
            </View>

                
    
            </ScrollView>

            <View style={{height: 100, width: '100%', backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center', paddingBottom: 20}}>

                <TouchableOpacity
                style={{width: 300, height: 50, borderRadius: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}
                onPress = {() => {
                    props.navigation.navigate('FunFacts')
                }}
                >

                    <Text style={{fontWeight: '900'}}>
                    Fun Facts
                    </Text>

                </TouchableOpacity>

            </View>
            
        </View>
    )
}

export default SubductionZones;