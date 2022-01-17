import React, { useContext, useEffect, useRef, useState } from 'react'
import { ComponentContext } from '../../context';
import Stack from 'com/ui/stack';
import { Frame, Title, Item  } from 'style/component'
import { Scrollbars } from 'react-custom-scrollbars';
import { getHistory } from 'data/history';
import YearParameter from './year-parameter'
import TagParameter from './tag-parameter'
import HistoryData from './history-data'
import Help from "../help"

function History(props){
    const [ history, setHistory ] = useState( {} )
    const context = useContext( ComponentContext );
    const currentDecade = context.state.parameters.decade;

    const [ year, setYear ] = useState( null )
    const [tagsSelected, setTagsSelected] = useState( null )
    
    useEffect( () => {
      if(!currentDecade) return;
      const d = getHistory( {decade : currentDecade} ) 
      setHistory(d);
    }, [ currentDecade ])

    return (
      <Frame>
        <Stack style={{ display: 'flex', overflow: 'hidden', height: "100%"}}>
          <div>
            <Title>Historical Events <Help text="historical events for a [decade], fetched from wikipedia"/></Title>
            <br/>
          </div>
          <YearParameter disabled={tagsSelected != null} data={history} current={year} onClick={(year) => setYear(year) } />
          <TagParameter data={history} onClick={(w) => setTagsSelected( w ) } />
          <Scrollbars height={'100%'} style={{ height: '100%'}}>
            <HistoryData data={history} tagsSelected={tagsSelected} year={year} onClick={(w) => context.dispatch( { type: "SELECT_TOPIC", payload: w } ) }/>
          </Scrollbars>
        </Stack>
      </Frame>
    )

}

export default History