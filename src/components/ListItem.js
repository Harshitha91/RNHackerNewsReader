import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { API, COMMENT_SCREEN } from '../constants';
import { ListLoader } from '.';

export default function ListItem({ id, navigation }) {
    const [newsData, setNewsData] = useState(null);

    useEffect(() => {
        let mounted = true;
        async function fetchData() {
            const response = await axios.get(API + `item/${id}.json`);
            if (mounted) {
                setNewsData(response?.data);
            }
        }
        fetchData();

        return () => (mounted = false);
    }, []);

    return (
        <View style={styles.container}>
            {!newsData && <ListLoader />}
            {newsData && (
                <>
                    <View style={styles.itemContainer}>
                        <Text
                            style={styles.itemName}
                            numberOfLines={2}
                            ellipsizeMode="tail">
                            {newsData?.title}
                        </Text>
                        <Text style={styles.itemAuthor}>{newsData?.by}</Text>
                        <Text
                            style={styles.itemUrl}
                            numberOfLines={2}
                            ellipsizeMode="tail">
                            {newsData?.url}
                        </Text>
                    </View>
                    <TouchableOpacity
                        testID={'button'}
                        style={styles.button}
                        onPress={() => {
                            navigation.push(COMMENT_SCREEN, {
                                commentsList: newsData?.kids ?? [],
                                title: newsData?.title ?? '',
                                url: newsData?.url ?? '',
                            });
                        }}>
                        <View style={styles.commentsContainer}>
                            <Text
                                testID={'comments-number'}
                                style={styles.commentNumbers}>
                                {newsData.kids?.length ?? ''}
                            </Text>
                        </View>
                        <View style={styles.upvotesContainer}>
                            <Text
                                testID={'score-number'}
                                style={styles.upvotes}>
                                {newsData.score ?? ''}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        height: 90,
        alignSelf: 'stretch',
    },
    itemContainer: {
        top: 0,
        left: 0,
        right: 51,
        height: 90,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(249,249,249,1)',
        opacity: 1,
        paddingRight: 55,
        alignSelf: 'stretch',
    },
    itemName: {
        backgroundColor: 'transparent',
        marginTop: 10,
        marginLeft: 10,
        fontSize: 14,
        color: 'rgba(31,31,31,1)',
    },
    itemAuthor: {
        backgroundColor: 'transparent',
        marginBottom: 0,
        marginLeft: 10,
        fontSize: 12,
        color: 'rgba(148,148,148,1)',
    },
    itemUrl: {
        backgroundColor: 'transparent',
        marginBottom: 10,
        marginLeft: 10,
        fontSize: 12,
        color: 'rgba(148,148,148,1)',
    },
    button: {
        top: 0,
        width: 51,
        height: 90,
        position: 'absolute',
        backgroundColor: 'rgba(245,245,245,1)',
        opacity: 1,
        right: 0,
    },
    commentsContainer: {
        top: 112,
        left: 10,
        width: 32,
        height: 20,
        position: 'absolute',
    },
    commentNumbers: {
        top: -94,
        left: 4,
        position: 'absolute',
        backgroundColor: 'transparent',
        fontSize: 10,
        color: 'rgba(255,102,0,1)',
        width: 24,
        height: 12,
        textAlign: 'center',
    },
    upvotesContainer: {
        top: 54,
        left: 0,
        right: 0,
        height: 20,
        position: 'absolute',
        backgroundColor: 'rgb(230,230,230)',
    },
    upvotes: {
        top: 4,
        left: 11,
        position: 'absolute',
        backgroundColor: 'transparent',
        fontSize: 10,
        textAlign: 'center',
        color: 'rgba(156,156,156,1)',
        width: 30,
        height: 12,
    },
});
