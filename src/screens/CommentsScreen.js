import React from 'react';
import { Comment } from '../components';
import { View, StyleSheet, Text, FlatList } from 'react-native';

export default function CommentsScreen({ route }) {
    const { commentsList, title, url } = route?.params ?? {};

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.title}>
                    <Text style={styles.text}>{title ?? ''}</Text>
                </View>
                <View style={styles.itemUrl}>
                    <Text style={styles.urlText}>{url ?? ''}</Text>
                </View>
            </View>
            <FlatList
                testID={'flatlist'}
                style={styles.list}
                data={commentsList ?? []}
                keyExtractor={item => item.toString()}
                renderItem={({ item }) => {
                    return <Comment testID={'comment'} id={item} />;
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
    subContainer: {
        height: 120,
        backgroundColor: 'rgba(255,110,13,1)',
        opacity: 1,
    },
    itemUrl: {
        height: 20,
        left: 0,
        position: 'absolute',
        right: 0,
        top: '45%',
    },
    urlText: {
        top: '5%',
        left: 20,
        position: 'absolute',
        backgroundColor: 'transparent',
        color: 'rgba(236,236,236,1)',
        opacity: 0.8,
    },
    list: {
        height: '100%',
    },
    title: {
        height: 35,
        top: 15,
        left: 20,
        position: 'absolute',
        right: 15,
    },
    text: {
        color: 'rgba(236,236,236,1)',
    },
});
