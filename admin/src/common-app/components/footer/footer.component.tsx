import * as React from 'react';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Logo from 'assets/logo-lemon.png';
import * as classes from './footer.styles';

export const FooterComponent: React.FC = () => {
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <footer className={classes.footer}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12}>
          <Typography className={classes.root}>
            <Link
              href='https://lemoncode.net/'
              onClick={preventDefault}
              className={classes.imgFooter}
              target='blank'
              rel='noopener'>
              <img className={classes.imgFooter} src={Logo} alt='lemoncode' />
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <List className={classes.menuFooter}>
            <ListItem className={classes.itemMenuFooter}>
              <Link
                href='about.html'
                onClick={preventDefault}
                className={classes.linkMenuFooter}
                target='blank'
                rel='noopener'>
                About us
              </Link>
            </ListItem>
            <ListItem className={classes.itemMenuFooter}>
              <Link
                href='about.html'
                onClick={preventDefault}
                className={classes.linkMenuFooter}
                target='blank'
                rel='noopener'>
                License
              </Link>
            </ListItem>
            <ListItem className={classes.itemMenuFooter}>
              <Link
                href='about.html'
                onClick={preventDefault}
                className={classes.linkMenuFooter}
                target='blank'
                rel='noopener'>
                Contact
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant='body2' className={classes.copyFooter}>
            Create by LEMONCODE © 2021
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};
