import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, { useState, useEffect } from 'react';

const Detail = ({ route }) => {
    const { noDoa } = route.params;
    const [data, setData] = useState([]);

    const ambilData = async () => {
        try {
            // proses ambil data
            const dataDoa = await fetch(`https://doa-doa-api-ahmadramadhan.fly.dev/api/${noDoa}`);
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
                data.map((item) => {
                    return (
                        <View key={item.id} style={{ margin: 20 }}>
                            <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', marginBottom: 15 }}>{item.doa}</Text>
                            <Text style={{ color: 'black', fontSize: 23, marginBottom: 15 }}>{item.ayat}</Text>
                            <Text style={{ color: 'blue', marginBottom: 10 }}>" {item.latin} "</Text>
                            <Text style={{ color: 'black' }}>" {item.artinya}"</Text>
                        </View>
                    );
                })}
        </ScrollView>
    );
};

export default Detail;

const styles = StyleSheet.create({});