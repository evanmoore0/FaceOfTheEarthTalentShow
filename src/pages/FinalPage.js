import react from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import BackButton from '../components/BackButton';
import Title from '../components/Title';


const FinalPage = (props) => {
    return(
        <View style={{justifyContent: 'center', alignItems: 'center', flex:1, paddingTop: 50}}>


            <BackButton/>
            <Title
            text="Volcanoes are awesome!"
            
            />

            <Image
            style={{flex:1, paddingHorizontal: 20}}
            resizeMode="contain"
            source = {require('/Users/evanmoore/Desktop/Volcano/Volcano/assets/imgs/giantExplosion.jpg')}
            
            />

            <View style={{height: 100, width: '100%', backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center', paddingBottom: 20}}>

                <TouchableOpacity
                style={{width: 300, height: 50, borderRadius: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}
                onPress = {() => {

                    props.navigation.popToTop();
                    
                }}
                >
                
                    <Text style={{fontWeight: '900'}}>
                    First Page
                    </Text>

                </TouchableOpacity>

            </View>




        </View>
    )
}

export default FinalPage;