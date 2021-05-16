import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import { MenuCategory } from '../menu.vm';
import { SubmenuCategoryComponent } from './submenu-category.component';

interface MenuListProps {
  categories: MenuCategory[];
}

export const MenuListComponent: React.FunctionComponent<MenuListProps> = (props) => {
  const { categories } = props;
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {!!categories &&
        categories.map((category, index) => (
          <Accordion
            key={category.name.toLowerCase().split(' ').join('_')}
            expanded={expanded === `category${index}`}
            onChange={handleChange(`category${index}`)}>
            <AccordionSummary aria-controls={`category${index}-content`}>
              <Typography variant='h3'>{category.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SubmenuCategoryComponent categoryIndex={index} products={category.products} />
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
};
