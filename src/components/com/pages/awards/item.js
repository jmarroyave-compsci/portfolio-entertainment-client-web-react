import React from 'react'
import { styled } from '@mui/material/styles';
import Card from 'core/ui/cards/media';
import MDCard from '@material-ui/core/Card';
import MDCardContent from '@material-ui/core/CardContent';
import MDCardHeader from '@material-ui/core/CardHeader';
import LinkMovie from 'com/entities/movie/link'
import Awards from 'com/awards'
import Field from 'com/field'

export default function AwardItem( props ){
  const { full, year, all, festival, awards, image, awarded } = props;

  return (      
      <Card
        image={(image) ? image.poster : image}
        imageHeight={100}
        text={ 
          <div>
            {awarded.filter( a => a.won ).slice(0,5).map( (a, key) => 
              <Field key={key} title={a.category} value={a.entity}/>
            )}
          </div> 
        }
        title={festival.name}
        subtitle={year}
      />
    
  )
  
}

function Linkit( {id, children} ){
  if( id ) return <LinkMovie id={id}><div>{children}</div></LinkMovie>
  return children;
}