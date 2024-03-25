"use client"
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import * as React from 'react';


import { ListItemButton, Stack } from '@mui/material';
import { libraryItems } from '../lib/placeholder-data'
import { useEffect, useState } from 'react';

export async function fetchLibraryItems() {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })

  // const data = await res.json()

  // const libraryItems = [
  //     {
  //         "id": "1",
  //         "title": "After Life s1 e1",
  //         "img": "http://img.png",
  //         "status": "downloaded"
  //     },
  //     {
  //         "id": "2",
  //         "title": "Extraordinary s1 e1",
  //         "img": "http://img2.png",
  //         "status": "processing"
  //     },
  // ]


  return Response.json(libraryItems)
}

export default function Library() {

  const [data, setData] = useState<any>([])
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    fetchLibraryItems()
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })

  }, [])



  return (
    <Stack>

      <List sx={{
        bgcolor: 'background.paper',
        width: '45vw',
        minWidth: '400px',
      }}>

        {data && data.map((item, index) => (

          <ListItem key={item.id} >
            <ListItemButton component="a" href={"library/content/?id="+ item.id}>
            <ListItemAvatar>
              <Avatar alt={item.title} src={item.img} />
            </ListItemAvatar>

            <ListItemText
              primary={item.title}
            // secondary={item.status}

            />
            </ListItemButton>
          </ListItem>

        ))}

      </List>


      <Paper
        component="form"
        sx={{

          display: 'flex',
          alignSelf: 'center',
          alignItems: 'center',
          width: '45vw',
          minWidth: '400px',
          position: 'fixed',
          margin: '5px',
          bottom: '60px',

        }}
      >
        <InputBase
          sx={{
            ml: 1, flex: 1,
            width: '100%',
            padding: '5px',
          }}
          placeholder="Search tv show subtitles"
          inputProps={{ 'aria-label': 'Search subtitles' }}
        />

        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>

      </Paper>

    </Stack>
  );
}
