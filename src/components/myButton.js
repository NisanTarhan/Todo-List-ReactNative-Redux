import React, {Component} from 'react';
import { Text, View, TouchableOpacity,Dimensions } from 'react-native';
const {height,width} = Dimensions.get('window');

const MyButton = (props) => {
        return (
            <View style={{margin: 20 ,backgroundColor: '#f4f4f4', width: width*0.4, height: height*0.07, borderRadius: 8, borderColor: 'black', borderWidth: 1}}>
                <TouchableOpacity activeOpacity={0.6} onPress={props.onClick} style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ padding: 5,fontSize: 16, color: 'black', fontWeight:'500', fontFamily: "serif"}}>
                        {props.text}
                    </Text>
                </TouchableOpacity>
            </View>
        );
}

export default MyButton;