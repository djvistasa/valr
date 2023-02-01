import React from 'react';
import { test, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { useTestComponentWithTheme } from '../../../hooks';
import SearchInput from '..';

test('does searchInput render', () => {
  const mountWithTheme = useTestComponentWithTheme();
  const { getByTestId } = render(
    mountWithTheme(<SearchInput onSearch={() => {}} testID="search-input" />)
  );

  const input = getByTestId('search-input');

  expect(input).toMatchSnapshot();
});

test('does onChange get called', () => {
  const onChange = vi.fn();
  const mountWithTheme = useTestComponentWithTheme();
  const { getByTestId } = render(
    mountWithTheme(<SearchInput onSearch={onChange} testID="search-input" />)
  );

  const input = getByTestId('search-input');

  fireEvent.change(input, { target: { value: 'South Africa' } });

  expect(onChange).toHaveBeenCalledTimes(1);

  expect(input.value).toBe('South Africa');
});
