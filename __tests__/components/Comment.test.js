import * as React from 'react';
import { Comment } from '../../src/components';
import { render, cleanup } from '@testing-library/react-native';
import axios from 'axios';
import renderer from 'react-test-renderer';

jest.mock('axios');

describe('Test Comment Component.', () => {
    beforeAll(() => {
        const fakeResponse = {
            data: {
                by: '3np',
                id: 31501124,
                parent: 31500684,
                text: '(2019).<p>Previous discussion: <a href="https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=21759683" rel="nofollow">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=21759683</a>',
                time: 1653458809,
                type: 'comment',
            },
        };
        axios.get.mockResolvedValue(fakeResponse);
    });

    afterAll(cleanup);

    it('Should visible fetched users name.', async () => {
        const { findByTestId } = render(<Comment />);
        const user = await findByTestId('user');
        expect(user.children[0]).toBe('3np');
    });

    it('Should update score with fetched data.', async () => {
        const { findByTestId } = render(<Comment />);
        const text = await findByTestId('text');
        expect(text).toBeTruthy();
    });
});
