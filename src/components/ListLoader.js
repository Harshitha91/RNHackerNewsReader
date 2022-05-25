import React from 'react';
import { Dimensions } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';
const { width, height } = Dimensions.get('window');

const ListLoader = () => (
    <ContentLoader
        speed={2}
        width={'100%'}
        height={70}
        viewBox={`0 0 ${width - width / 30} 70`}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <Rect
            x="10"
            y="15"
            rx="3"
            ry="3"
            width={(width - width / 10) / 2}
            height="6"
        />
        <Rect x="10" y="30" rx="3" ry="3" width={width / 4} height="6" />
        <Rect
            x="10"
            y="45"
            rx="3"
            ry="3"
            width={width - width / 10}
            height="6"
        />
    </ContentLoader>
);

export default ListLoader;
