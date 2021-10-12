import * as React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from 'common/components/test';
import { Route } from 'react-router-dom';
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
    };

    // Act
    const {} = renderWithRouter(
      <BarInfoListComponent {...props} />,
      <>
        <Route path={'/test-link'} component={() => <h1>Test route destination</h1>} />
      </>,
    );

    const list = screen.getAllByRole('list');
    const listitems = screen.getAllByRole('listitem');
    const headings = screen.getAllByRole('heading')

    // Assert
    expect(list).toHaveLength(1);
    expect(listitems).toHaveLength(2);
    expect(headings).toHaveLength(6);
  });
});
