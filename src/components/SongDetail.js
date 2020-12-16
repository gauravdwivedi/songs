import React from 'react'
import {connect} from 'react-redux'

const SongDetail = ({ songSelectedByUser})=>{

    

    return <div>
        <h3>Details for:</h3>
        <p>
            Title: {songSelectedByUser.title}<br/>
            Duration:{songSelectedByUser.duration}
        </p>
    </div>;
};

const mapStateToProps=state=>{
    return {songSelectedByUser:state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail)
