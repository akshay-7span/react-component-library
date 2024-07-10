import React, { useState } from 'react';
import { AppBar, Toolbar, Grid, TextField, InputAdornment, Button, useMediaQuery, useTheme, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = ({
  logo,
  logoPath = '/',
  showSearchBar = true,
  onSearch,
  leftButtonText,
  rightButtonText,
  showLeftButton = true,
  showRightButton = true,
  onLeftButtonClick,
  onRightButtonClick,
  showProfile = false,
  ProfileComponent = null,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value;
    if (onSearch) onSearch(query);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {showSearchBar && (
        <ListItem>
          <TextField
            type="text"
            onChange={handleSearch}
            placeholder="Search"
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </ListItem>
      )}
      {showLeftButton && (
        <ListItem button onClick={onLeftButtonClick}>
          <ListItemText primary={leftButtonText} />
        </ListItem>
      )}
      {showRightButton && (
        <ListItem button onClick={onRightButtonClick}>
          <ListItemText primary={rightButtonText} />
        </ListItem>
      )}
      {showProfile && ProfileComponent && (
        <ListItem>
          {ProfileComponent}
        </ListItem>
      )}
    </List>
  );

  return (
    <AppBar position="static" elevation={0} sx={{ 
      borderBottom: '2px solid #D4D4D8', 
      backgroundColor: 'white',
      transition: 'all 0.3s ease-in-out',
    }}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
          {/* Logo */}
          <Grid item xs={isMobile ? 6 : 3}>
            {logo && (
              <Box
                component={Link}
                to={logoPath}
                sx={{
                  display: 'inline-block',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{ height: 40, maxWidth: '100%' }}
                />
              </Box>
            )}
          </Grid>

          {/* Search Bar */}
          {!isMobile && (
            <Grid item xs={6}>
              {showSearchBar && (
                <TextField
                  type="text"
                  onChange={handleSearch}
                  placeholder="Search"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{
                    maxWidth: 400,
                    margin: '0 auto',
                    transition: 'all 0.3s ease-in-out',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '20px',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                      },
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            </Grid>
          )}

          {/* Buttons and Profile */}
          <Grid item xs={isMobile ? 6 : 3} container justifyContent="flex-end" alignItems="center" spacing={1}>
            {!isMobile ? (
              <>
                {showLeftButton && (
                  <Grid item>
                    <Button
                      variant="outlined"
                      onClick={onLeftButtonClick}
                      sx={{
                        height: '38px',
                        padding: '8px 16px',
                        borderRadius: '12px',
                        transition: 'all 0.1s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.02)',
                          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                        },
                      }}
                    >
                      {leftButtonText}
                    </Button>
                  </Grid>
                )}
                {showRightButton && (
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={onRightButtonClick}
                      sx={{
                        height: '38px',
                        padding: '8px 16px',
                        borderRadius: '12px',
                        transition: 'all 0.1s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.02)',
                          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                        },
                      }}
                    >
                      {rightButtonText}
                    </Button>
                  </Grid>
                )}
                {showProfile && ProfileComponent && (
                  <Grid item>
                    {ProfileComponent}
                  </Grid>
                )}
              </>
            ) : (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;