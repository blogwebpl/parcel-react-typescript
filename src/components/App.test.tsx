import App from './App';
import React from 'react';
import { render } from '@testing-library/react';

describe('App.tsx', () => {
	test('render properly', () => {
		const { getByText } = render(<App />);
		expect(getByText(/ipsum/i)).toBeTruthy();
	});
});
