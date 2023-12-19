import React from 'react'
// import { initInfo } from '../retrievedData2.js';
import { Badge } from '@tremor/react';
const Badges = (initInfo) => {
    const getBadges = []
    console.log(initInfo);
    const lastinitinfo = initInfo[initInfo.length-1];
    console.log('last init info:',lastinitinfo);
    const initDuration = lastinitinfo.initDuration;
    const warmInvocationsDuration = lastinitinfo.warmInvocationsDuration;

    // for(let i=0; i<warmInvocationsDuration.length; i++) {
    //     getBadges.push(
    //     <Badge color={"orange"}>{warmInvocationsDuration[i]}</Badge>
    //     )
    // }

  return (
    <div>
        <Badge>{initDuration}</Badge>
        {warmInvocationsDuration.map(invocation => <Badge color={"orange"}>{invocation}ms</Badge>)}
        {/* {getBadges} */}
    </div>
  )
}

export default Badges