import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderComponent } from './header.component';
import { renderWithRouter } from 'common/components/test';
import { Route } from 'react-router-dom';
import { DashboardItemProps } from 'common/components';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import userEvent from '@testing-library/user-event';

describe('HeaderComponent spec', () => {
  it('"HTML elements" should be displayed without drawer', () => {
    // Arrange
    const props = {
      name: 'test title',
      hasDrawer: false,
    };

    // Act
    render(<HeaderComponent {...props} />);
    const header: HTMLElement = screen.getByRole('banner');
    const titleElemet = screen.getByRole('heading', { name: props.name });
    const buttons = screen.getAllByRole('button');

    // Assert
    expect(header).toBeInTheDocument();
    expect(titleElemet).toBeInTheDocument();
    expect(titleElemet).toHaveTextContent('test title');
    expect(buttons.length).toBe(1);
  });
  it('"HTML elements" should be displayed with drawer', () => {
    // Arrange
    const props = {
      name: 'test name',
      hasDrawer: true,
      item: {
        icon: PeopleAltIcon,
        title: 'test name',
        linkTo: '/test-link',
        subtitle: 'test subtitle',
      } as DashboardItemProps,
    };

    // Act
    const { getByRole } = renderWithRouter(
      <HeaderComponent {...props} />,
      <>
        <Route path={props.item.linkTo} component={() => <h1>Test route destination</h1>} />
      </>,
    );
    const header: HTMLElement = screen.getByRole('banner');
    const titleElemet = screen.getByRole('heading', { name: props.name });
    const buttons = screen.getAllByRole('button');

    // Assert
    expect(header).toBeInTheDocument();
    expect(titleElemet).toBeInTheDocument();
    expect(titleElemet).toHaveTextContent('test name');
    expect(buttons.length).toBe(2);
  });
});
