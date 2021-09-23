import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);

    const detail = query.detail === 'true';

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {/* ?detail=true 로 들어올때만 출력된다*/}
            {detail && 'detail: http://localhost:3000/about?detail=true'}
        </div>
    );
};

export default About;