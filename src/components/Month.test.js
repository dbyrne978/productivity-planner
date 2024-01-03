import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Month from './Month'

test('renders content', () => {
  render(<Month/>)

  const element = screen.getByText('MONFF INIT')
  expect(element).toBeDefined()
})