import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderComponent } from '.';

describe('HeaderComponent tests', () => {
  it('should show the all the restaurant info when passed name, description and telephone as arguments', () => {
    // Arrange
    const props = {
      line1: 'The Restaurant',
      line2: 'A nice restaurant',
      line3: '951123123',
    };

    // Act
    const { container } = render(<HeaderComponent {...props} />);
    const headings = screen.getAllByRole('heading');
    const telephone = screen.getByText(props.line3);

    // Assert

    expect(headings.length).toBe(2);
    const [restaurantName, descriptionName] = headings;
    expect(restaurantName).toHaveTextContent(props.line1);
    expect(descriptionName).toHaveTextContent(props.line2);
    expect(telephone).toBeInTheDocument();
  });

  it('should show only the restaurant name when only the name is passed as argument', () => {
    // Arrange
    const props = {
      line1: 'The Restaurant',
    };

    // Act
    render(<HeaderComponent {...props} />);
    const headings = screen.getAllByRole('heading');

    // Assert

    expect(headings.length).toBe(1);
    const [restaurantName] = headings;
    expect(restaurantName).toHaveTextContent(props.line1);
  });
});
