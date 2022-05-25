import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListItem } from '../components';
import { View, StyleSheet, FlatList } from 'react-native';
import { API } from '../constants';

export default function HomeScreen({ navigation }) {
    const [listsData, setListsData] = useState([]);
    const [isRefreshing, setRefreshing] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get(API + 'topstories.json');
        setListsData(response?.data ?? []);
        setRefreshing(false);
    };

    const onRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    return (
        <View style={styles.container}>
            <FlatList
                testID={'flatlist'}
                style={styles.list}
                data={listsData}
                horizontal={false}
                keyExtractor={item => item.toString()}
                ItemSeparatorComponent={() => {
                    return (
                        <View testID={'separator'} style={styles.separator} />
                    );
                }}
                refreshing={isRefreshing}
                onRefresh={onRefresh}
                renderItem={({ item }) => {
                    return (
                        <ListItem
                            testID={'list-item'}
                            navigation={navigation}
                            id={item.toString()}
                        />
                    );
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    list: {
        backgroundColor: 'transparent',
        height: '100%',
    },
    separator: {
        backgroundColor: '#999999',
        left: 10,
        height: 2,
    },
});
