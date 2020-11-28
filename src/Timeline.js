import React from 'react';
import Data from './Data';
import TimelineItem from './TimelineItem';

const Timeline = () => Data.length > 0 && (

    <div className="timeline-container container">
        {Data.map((data,inx)=>(
            
             <TimelineItem
             key={inx} 
             data={data}
             />
        ))
       }
    </div>

)
export default Timeline;