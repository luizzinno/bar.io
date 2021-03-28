import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BarInfoListComponent, Props } from './bar-info-list.component';

describe('pods/bar-info-list/bar-info-list.component specs', () => {
  it('should display bar info list when it feeds with some info', () => {
    // Arrange
    const props: Props = {
      infoList: [
        {
          infoA: 'My name',
          infoB: 'My address',
          infoC: 'Facebook',
        },
        {
          infoA: 'My name 2',
          infoB: 'My address 2',
          infoC: 'Twitter',
        },
      ],
      onSelect: jest.fn(),
    };

    // Act
    render(<BarInfoListComponent {...props} />);

    const list = screen.getAllByRole('list');
    const listitems = screen.getAllByRole('listitem');

    // Assert
    expect(list).toHaveLength(2);
    expect(listitems).toHaveLength(6);
  });
  it('should call onSelect property when it click on the list', () => {
    // Arrange
    const props: Props = {
      infoList: [
        {
          infoA: 'My name',
          infoB: 'My address',
          infoC: 'Facebook',
        },
        {
          infoA: 'My name 2',
          infoB: 'My address 2',
          infoC: 'Twitter',
        },
      ],
      onSelect: jest.fn(),
    };

    // Act
    render(<BarInfoListComponent {...props} />);

    const list = screen.getAllByRole('list');

    userEvent.click(list[0]);

    // Assert
    expect(props.onSelect).toHaveBeenCalled();
  });
});
