import React from 'react';


const TimelineItem = ({data}) =>(
 

    <div className="timeline-item ">
        <div className="timeline-item-content">
        <span className="tag" style={{background:data.color}}>
          {data.tag}
        </span>
       <time>{data.date}</time>
       <p>{data.text}</p>
      <a href={data.url} target="_balnk" >{data.btntext}</a>
      </div>
    </div>
);

export default TimelineItem;