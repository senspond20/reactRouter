import React from 'react';

const Post = ({match, location}) => {
    const iStyle = {fontSize : '22px'}
    const labelStyle ={color : 'green'}

    return (
        <div style={iStyle}>
            <hr/>
            <p><label style={labelStyle}>match.params.id : </label>{match.params.id}</p>
            <p><label style={labelStyle}>location.pathname : </label>{location.pathname}</p>
            <p><label style={labelStyle}>match.path : </label>{match.path}</p>
            <p><label style={labelStyle}>match.url : </label>{match.url}</p>
        </div>

    );
};

export default Post;