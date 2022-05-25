import * as React from 'react';
import HomeScreen from '../../src/screens/HomeScreen';
import { render, cleanup } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

it(`renders correctly`, async () => {
    const tree = renderer.create(<HomeScreen />);
    expect(tree).toMatchSnapshot();
});

describe('Test Home Screen', () => {
    it('should contain flatlist', () => {
        const component = <HomeScreen />;

        const { getByTestId } = render(component);
        const flatlist = getByTestId('flatlist');

        expect(flatlist).toBeTruthy();
    });

    it('should contain list item seperator', () => {
        const component = <HomeScreen />;

        const { findByTestId } = render(component);
        const separator = findByTestId('separator');

        expect(separator).toBeTruthy();
    });
});
