import { StyleSheet, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';

const Home = ({ navigation }) => {
    const [data, setData] = useState([]);

    const ambilData = async () => {
        try {
            // proses ambil data
            const dataDoa = await fetch('https://doa-doa-api-ahmadramadhan.fly.dev/api');
            const hasil = await dataDoa.json();
            return setData(hasil);
            // console.log(hasil.data);
        } catch (error) {
            // tampilkan error jika ada
            console.log(error);
        }
    };

    useEffect(() => {
        ambilData();
    }, []);
    return (
        <ScrollView>
            {data &&
                data.map((item, index) => {
                    return (
                        <TouchableOpacity style={styles.boxText}
                            onPress={() =>
                                navigation.navigate('Detail', { noDoa: item.id })
                            }
                            key={index}>
                            <Text style={styles.judul}>{item.id}.{item.doa}</Text>
                        </TouchableOpacity>
                    );
                })}
        </ScrollView>
    );
};


export default Home;

const styles = StyleSheet.create({
    boxText: {
        textDecorationLine: 'underline',
        height: 60,
        borderBottomWidth: 1
    },
    judul: {
        margin: 15,
        fontSize: 18,
        color: 'black',
    },
});