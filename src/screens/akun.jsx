import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import loka from '../assets/img/loka.png';

const Akun = () => {
    return (
        <View>
            <Text>about</Text>

            <Image
                source={require('../assets/img/loka.png')}
                style={{ height: 50, width: 50, alignItems: 'center', justifyContent: 'center' }}
            />
        </View>
    )
}

export default Akun

const styles = StyleSheet.create({})