import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderComponent } from '.';

describe('HeaderComponent tests', () => {
  it('should show the all the restaurant info when passed name, description and telephone as arguments', () => {
    // Arrange
    const props = {
      infoA: 'The Restaurant',
      infoB: 'A nice restaurant',
      infoC: '951123123',
    };

    // Act
    const { container } = render(<HeaderComponent {...props} />);
    const headings = screen.getAllByRole('heading');
    const telephone = screen.getByText(props.infoC);

    // Assert

    expect(headings.length).toBe(2);
    const [restaurantName, descriptionName] = headings;
    expect(restaurantName).toHaveTextContent(props.infoA);
    expect(descriptionName).toHaveTextContent(props.infoB);
    expect(telephone).toBeInTheDocument();
  });

  it('should show only the restaurant name when only the name is passed as argument', () => {
    // Arrange
    const props = {
      infoA: 'The Restaurant',
    };

    // Act
    render(<HeaderComponent {...props} />);
    const headings = screen.getAllByRole('heading');

    // Assert

    expect(headings.length).toBe(1);
    const [restaurantName] = headings;
    expect(restaurantName).toHaveTextContent(props.infoA);
  });
});
