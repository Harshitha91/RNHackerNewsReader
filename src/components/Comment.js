import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import axios from 'axios';
import { API } from '../constants';
import { ListLoader } from '.';

export default function Comment({ id }) {
    const [comment, setComment] = useState(null);

    useEffect(() => {
        let mounted = true;
        async function fetchData() {
            const response = await axios.get(API + `item/${id}.json`);
            if (mounted) {
                setComment(response?.data);
            }
        }
        fetchData();

        return () => (mounted = false);
    }, []);

    return (
        <View style={styles.container}>
            {!comment && <ListLoader />}
            {comment && (
                <View style={{ marginTop: 5, height: 150 }}>
                    <View style={styles.bodyContent}>
                        <View style={styles.user}>
                            <Text testID={'user'} style={styles.titleStyle}>
                                {comment.by ?? ''}
                            </Text>
                        </View>
                        <View style={styles.time}>
                            <Text style={styles.text}>
                                {comment.time
                                    ? moment(comment.time * 1000).fromNow()
                                    : ''}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <Text
                            testID={'text'}
                            style={styles.bodyText}
                            numberOfLines={10}
                            ellipsizeMode="tail">
                            {comment.text ?? ''}
                        </Text>
                    </View>
                </View>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
    },
    bodyContent: {
        padding: 5,
        paddingLeft: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    body: {
        height: 120,
        paddingLeft: 15,
    },
    bodyText: {
        fontSize: 14,
        lineHeight: 20,
        color: '#424242',
        marginRight: 20,
        paddingRight: 5,
        flex: 1,
    },
    user: {
        flexDirection: 'row',
        width: 111,
        height: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    titleStyle: {
        margin: 0,
        padding: 0,
        fontSize: 14,
        color: 'rgba(255,102,13,1)',
        marginLeft: 5,
    },
    time: {
        width: 111,
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        margin: 0,
        marginLeft: 5,
        padding: 0,
        fontSize: 14,
        color: 'rgba(177,177,177,1)',
    },
});
