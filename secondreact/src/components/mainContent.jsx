import React from 'react';

const MainContent = ( {match} ) => {
    return (
        <div>
            ID: { match.params.id }
        </div>
    )
}


export default MainContent;