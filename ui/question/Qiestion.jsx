import React from 'react';

import Collapsible from 'react-collapsible';

export default function Question({ question, answear }) {

    return (
        <Collapsible triggerStyle={{color: '#FFFFFF', 'paddingTop': '16px', 'paddingBottom': '16px'}} trigger={question} triggerTagName='div'>
            <p>
               {answear}
            </p>
        </Collapsible>
    )
}