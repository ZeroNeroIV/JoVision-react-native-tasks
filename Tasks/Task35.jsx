import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, TextInput, Text, View, StyleSheet, Alert } from "react-native";

export function Task35() {
    const [originalName, setOriginalName] = useState(null);
    const [originalAge, setOriginalAge] = useState(null);
    const [originalCountry, setOriginalCountry] = useState(null);
    const [error, setError] = useState(null);
    const errorMessage = 'Please fill up the empty fields.';
    const regStrings = /[A-Za-z]/gm;

    function on_name_change(txt) {
        if (txt != null) {
            setError('');
        } else {
            setOriginalName('');
            setError(errorMessage);
            return;
        }
        return regStrings.test(txt)
            ? setOriginalName(txt)
            : setError(errorMessage);
    }

    function on_age_change(txt) {
        if (txt != null) {
            setError('');
        } else {
            setOriginalAge('');
            setError(errorMessage);
            return;
        }
        return /[0-9]/gm.test(txt)
            ? setOriginalAge(txt)
            : setError(errorMessage);
    }

    function on_country_change(txt) {
        if (txt != null) {
            setError('');
        } else {
            setOriginalCountry('');
            setError(errorMessage);
            return;
        }
        return regStrings.test(txt)
            ? setOriginalCountry(txt)
            : setError(errorMessage);
    }

    async function on_submit() {
        if (originalName == null || originalAge == null || originalCountry == null) {
            setError(errorMessage);
            return;
        }
        setError('');
        const obj = {
            name: originalName,
            age: originalAge,
            country: originalCountry,
            timestamp: new Date().getTime(),
        };

        try {
            const data = JSON.stringify(obj);
            await AsyncStorage.setItem(`${obj.timestamp}_${obj.name}`, data);
            // console.log('Saved');
        } catch (e) {
            console.error(e);
            setError(e);
        }
        // console.log('Submitted');
        return Alert.alert('Submitted Successfully',
            null,
            [{
                text: 'Ok',
            }]);
    }

    async function get_data() {
        function handleReduce(p, e) {
            const modified_p = p.substring(0, 13);
            const modified_e = e.substring(0, 13);
            // console.log([modified_e, modified_p]);
            const x = modified_p >= modified_e ? p : e;
            // console.log(x);
            // console.log();
            return x;
        }
        try {
            const allKeys = await AsyncStorage.getAllKeys();
            if (allKeys.length == 0)
                return;
            // console.log(allKeys);
            const currentTime = new Date().getTime();
            // console.log(currentTime);
            const mostRecent = allKeys.reduce(handleReduce, allKeys[0]);
            // console.log(mostRecent);
            const difference = Math.abs(currentTime - parseInt(mostRecent.substring(0, 13)));
            // console.log(difference);
            if (difference <= 600000 && difference > 0) {
                const item = await AsyncStorage.getItem(mostRecent);
                const data = JSON.parse(item);
                // console.log(item);
                const { name, age, country } = data;
                setOriginalName(name);
                setOriginalAge(age);
                setOriginalCountry(country);
            }
        } catch (e) {
            console.error(e);
            setError(e);
        }
        return;
    }

    function handleEffect() {
        get_data();
        // AsyncStorage.clear();
    }

    useEffect(handleEffect, [Task35]);

    return (
        <View style={styles.container}>
            <TextInput
                defaultValue={originalName}
                onChangeText={on_name_change}
                placeholder="Your name..."
            />
            <TextInput
                defaultValue={originalAge}
                onChangeText={on_age_change}
                placeholder="Your age..."
                keyboardType="number-pad"
            />
            <TextInput
                defaultValue={originalCountry}
                onChangeText={on_country_change}
                placeholder="Your country..."
            />
            {error &&
                <Text style={styles.error}>{error}</Text>
            }
            <Button
                title="Submit"
                onPress={on_submit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontWidth: 'bold'
    },
    container: {
        width: 250,
        margin: 30,
        padding: 30,
        borderWidth: 2,
        borderRadius: 24,
        borderColor: 'purple',
        backgroundColor: '#9faaffff',
        verticalAlign: 'middle',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'space-evenly',
        justifyContent: 'center',
    },
});