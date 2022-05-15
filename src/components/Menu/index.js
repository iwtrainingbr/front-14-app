import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import './styles.css';

export default function Menu() {
  return (
    
    <Box className="menu" sx={{ width: '100%', maxWidth: 360 }}>
      <nav aria-label="main mailbox folders">
        <List>          
          <ListItem disablePadding>
            <ListItemButton>
            <ListItemText primary="Início" />
            </ListItemButton>
          </ListItem>
          <Divider/> 
          <ListItem disablePadding>
            <ListItemButton>
             
              <ListItemText primary="Categoria" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Carrinho" />
            </ListItemButton>
          </ListItem>
          <Divider/>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Tutorial" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Sobre" />
            </ListItemButton>
          </ListItem>
          <Divider/>
      </nav>
    </Box>
  );
}
