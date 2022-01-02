import React,{useState} from 'react';
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import CardDetails from "./CardDetail";

export default function PinnedSubheaderList({searchWord,inputText}) {

    const [cardData, setcardData] = useState({});

    async function displaycard(obj){
        await setcardData(obj)
        // console.log(cardData)
        // console.log(Object.keys(cardData).length !== 0)
    }

  return (
    searchWord.length>0 && inputText!=='' && Object.keys(cardData).length === 0?<List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      { searchWord.map((sectionId) => (
        <li key={sectionId.id}>
          <ul>
              <ListItemButton key={sectionId.id} onClick={()=>displaycard(sectionId)}>
                <ListItemText primary={sectionId.title} />
              </ListItemButton>
           
          </ul>
        </li>
      ))}
    </List>:Object.keys(cardData).length === 0 ?null:<CardDetails cardData={cardData}/>
  );
}
