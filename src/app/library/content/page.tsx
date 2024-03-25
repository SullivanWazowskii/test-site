'use client'
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
// import { Range } from 'highlightable';
// import Highlightable from 'highlightable';
// import Range from 'highlightable';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { InteractiveHighlighter } from './InteractiveHighlighter';
// import { read } from 'fs';

import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ListItemIcon from '@mui/material/ListItemIcon';

import ClearIcon from '@mui/icons-material/Clear';
import SendIcon from '@mui/icons-material/Send';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import TranslateIcon from '@mui/icons-material/Translate';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { init_text } from '@/app/lib/placeholder-data';



export default function LibraryContent({param}) {

  console.log(param)

  const [text, setText] = useState(init_text)
  const [selectedHighlights, setSelectedHighlights] = useState<string[]>([])
  const [selectedText, setSelectedText] = useState<string | null>(null)
  const [highlights, setHighlights] = useState([
    { startIndex: 63, numChars: 12 },
    { startIndex: 73, numChars: 12 }
  ])

  function onCloseDrawer() {
    setSelectedHighlights([])
    setSelectedText(null)
  }

  function onCloseDialog() {
    setSelectedText(null)
  }

  function selectionHandler(selection: string, selectionStart: number, selectionLen: number) {

    highlights.push({
      startIndex: selectionStart,
      numChars: selectionLen
    })
    setHighlights([...highlights])
    setSelectedText(selection)
  }

  function onHighlightedClickEvent(highlights: string[]) {
    if (highlights && highlights.length > 0) {
      if (highlights.length == 1) {
        onHighlightedTextClickEvent(highlights[0])
      } else {
        console.log(highlights)
        setSelectedHighlights(highlights)
      }

    }
  }

  function onHighlightedTextClickEvent(text: string) {
    setSelectedText(text)
  }


  return (
    <Box >
      <Typography variant="h4" gutterBottom>
        Love life s1 e1.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Auge
      </Typography>

      <Dialog
        open={selectedText ? true : false}
        onClose={onCloseDialog}
        scroll='paper'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        style={{
          maxHeight: '50vh'
        }}
      >
    
        <Chip 
          style={{
            position: 'absolute',
            right: '0px',
            margin: '10px'
          }} 
        onClick={onCloseDrawer} icon={<ClearIcon />} label="Delete" variant="outlined"
         /> 
        

        <DialogTitle id="scroll-dialog-title">AI Chat
        

        </DialogTitle>

        
        {/* </Stack> */}
        
        <DialogContent>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
            {selectedText}
          </DialogContentText>
        </DialogContent>
        {/* <Divider/> */}
        <DialogActions>
          <Chip onClick={onCloseDrawer} icon={<TipsAndUpdatesIcon />} label="Meaning" variant="outlined" />
          <Chip onClick={onCloseDrawer} icon={<TranslateIcon />} label="Translate" variant="outlined" />
          {/* <Chip onClick={onCloseDrawer} icon={<ChatIcon />} label="Chat with AI" variant="outlined" />
          */}
        </DialogActions>
        <Divider />
        <Paper
          component="form"
          sx={{ p: '5px 5px', display: 'flex', alignItems: 'center' }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={"Chat more with AI"}
            inputProps={{ 'aria-label': 'Chat more with AI' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SendIcon />
          </IconButton>


        </Paper>
      </Dialog>


      <Typography variant="body2"
       style={{
        'width': '80vw',
        'maxWidth': '720px'
      }}
      >

        <InteractiveHighlighter
          text={text}
          highlights={highlights}
          customClass='highlighted'
          selectionHandler={selectionHandler}
          onHighlightedClickEvent={onHighlightedClickEvent}
        />
      </Typography>


      <Drawer
        anchor={'bottom'}
        open={selectedHighlights && selectedHighlights.length > 0}
        onClose={onCloseDrawer}
 
      >
        <List style={{
          maxHeight: '50vh',
          width: '50vw',
          minWidth: '600px',
          alignSelf: 'center'
        }} >

          {selectedHighlights.map((text, index) => (

            <ListItem key={text} disablePadding>
              <ListItemButton onClick={e => onHighlightedTextClickEvent(text)}>
                <ListItemIcon><ListItemText primary={index + 1}/></ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>

          ))}

        </List>

      </Drawer>
    </Box>
  );
}


