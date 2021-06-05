import React, { useEffect, useState } from 'react';
import { rawToComponent } from '.';

export interface LiveComponentProps {
    code?: string;
    props?: any;
}

export const LiveComponent : React.FC<LiveComponentProps> = (props) => {
    const [ Component, setComponent ] = useState<any>()

    useEffect(() => {
        if(props.code){
            const component = rawToComponent(props.code)
            setComponent(component)
        }
    }, [props.code])

    return Component ? Component(props.props) : <div></div>
}