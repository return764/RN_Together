import 'react-native';
import React from 'react';
import App from '../src/index';
import {render, screen, waitFor} from '@testing-library/react-native';

describe('App', function () {
  it('renders correctly', async () => {
    render(<App />);
    // Pixel_3a_API_33_arm64-v8a

    await waitFor(() => {
      expect(screen.getAllByText('主页')).toHaveLength(2);
      expect(screen.getByText('任务')).toBeDefined();
      expect(screen.getByText('商店')).toBeDefined();
      expect(screen.getByText('设置')).toBeDefined();
    });
  });
});
