import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
    
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    
    )


  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle("React is back", "Top news - 9099 readers")}
        {newsArticle("Bitcoin hits $100k", "Top news - 9099 readers")}
        {newsArticle("Solana is at $200", "Top news - 9099 readers")}
        {newsArticle("ETH failing to make ATHs", "Top news - 9099 readers")}
        {newsArticle("Brink of World War 3", "Top news - 9099 readers")}
        {newsArticle("React is back", "Top news - 9099 readers")}

   
    </div>
  )
}

export default Widgets