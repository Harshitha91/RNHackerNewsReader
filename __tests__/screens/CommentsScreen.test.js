import * as React from 'react';
import CommentsScreen from '../../src/screens/CommentsScreen';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
it(`renders correctly`, () => {
    const tree = renderer.create(<CommentsScreen />);
    expect(tree).toMatchSnapshot();
});

describe('Test Comment Screen', () => {
    it('Should contain Flatlist.', async () => {
        const { getByTestId } = render(<CommentsScreen />);
        const flatlist = getByTestId('flatlist');

        expect(flatlist).toBeTruthy();
    });
});
