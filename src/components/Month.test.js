import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Month from './Month'

test('renders content', () => {
  const { container } = render(<Month/>)

  const div = container.querySelector('.month')
  expect(div).toHaveTextContent(
    'MONFF INIT'
  )

  screen.debug()
})