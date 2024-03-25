"use client"
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Container } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { redirect } from 'next/navigation';
import * as React from 'react';
import { useRouter } from 'next/navigation'

const Footer: React.FC = () => {
  const [value, setValue] = React.useState("");
  const router = useRouter()

  return (
    <Container style={{
      position: 'fixed',
      bottom: '0px',
      zIndex: 100
    }}>
      <BottomNavigation showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue)
          setValue(newValue);
          
          router.push(`/${newValue}/`)
          
        }}
      >
        <BottomNavigationAction label="Library" value={"library"} icon={<LibraryBooksIcon />} />
        <BottomNavigationAction label="Dictionary" value={"dictionary"} icon={<CollectionsBookmarkIcon />} />
        {/* <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
      </BottomNavigation>
    </Container>
  )


};

export default Footer;