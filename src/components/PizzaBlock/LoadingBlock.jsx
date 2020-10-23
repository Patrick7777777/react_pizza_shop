import ContentLoader from "react-content-loader";
import React from 'react';

function LoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="135" cy="127" r="127"/>
            <rect x="0" y="267" rx="3" ry="3" width="280" height="26"/>
            <rect x="0" y="308" rx="8" ry="8" width="280" height="84"/>
            <rect x="5" y="413" rx="3" ry="3" width="78" height="31"/>
            <rect x="122" y="402" rx="19" ry="19" width="149" height="54"/>
        </ContentLoader>
    );
}


export default LoadingBlock