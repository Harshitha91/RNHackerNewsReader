import * as React from 'react';
import { ListItem } from '../../src/components';
import { render, cleanup } from '@testing-library/react-native';
import axios from 'axios';

jest.mock('axios');

describe('Test List Item Component.', () => {
    beforeAll(() => {
        const fakeResponse = {
            data: {
                by: 'pmoriarty',
                descendants: 17,
                id: 31500684,
                kids: [31502325, 31501124, 31500928, 31501303, 31501233],
                score: 37,
                time: 1653453716,
                title: 'Plundervolt',
                type: 'story',
                url: 'https://plundervolt.com/',
            },
        };
        axios.get.mockResolvedValue(fakeResponse);
    });

    afterAll(cleanup);

    it('Should visible fetched title.', async () => {
        const { findByText } = render(<ListItem />);
        const title = await findByText('Plundervolt');
        expect(title).toBeTruthy();
    });

    it('Should visible fetched users name.', async () => {
        const { findByText } = render(<ListItem />);
        const user = await findByText('pmoriarty');
        expect(user).toBeTruthy();
    });

    it('Should update comment number with fetched data.', async () => {
        const { findByTestId } = render(<ListItem />);
        const noOfComments = await findByTestId('comments-number');
        expect(noOfComments.children[0]).toBe('5');
    });

    it('Should update score with fetched data.', async () => {
        const { findByTestId } = render(<ListItem />);
        const score = await findByTestId('score-number');
        expect(score.children[0]).toBe('37');
    });
});
