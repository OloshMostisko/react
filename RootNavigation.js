import React from 'react';


export const navigationRef = React.createRef();
function navigate(name){
    navigationRef.current?.navigate(name);
};
export default navigate;