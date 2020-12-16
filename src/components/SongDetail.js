import React from 'react'
import {connect} from 'react-redux'

const SongDetail = props=>{
    console.log(props);


    return <div>Song Details</div>;
};

const mapStateToProps=state=>{
    return {songSelectedByUser:state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail)
