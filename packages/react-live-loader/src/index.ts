import {createRequires} from "./utils/createRequires";

import { resolve } from './config/remote.config'
import { compileComponent } from "./compiler";

import { LiveComponent } from './component'

export {
    LiveComponent
}

const requires = createRequires(() => resolve) 

const defaultRequires = (name : string) => {
    throw new Error(`
        Could not require ${name} the requires function didnt know where to look
    `)
}

export const remoteToComponent = async (url: string) => {
    let res = await fetch(url)
    let text = await res.text()
    return rawToCode(text);
}

export const codeToComponent = (component: string) => {
    const _requires = requires || defaultRequires;
    const exports : any = {}
    const module = {exports}

    const func = new Function("require", "module", "exports", component);
    try{
       func(_requires, module, exports)
    }catch(e){
        console.log("Error", e)
    }
    return module.exports;
}

export const rawToCode = (text: string) => {
    return compileComponent(text)
}

export const rawToComponent = (text: string) => {
    let code = rawToCode(text)

    if(code){
        return codeToComponent(code).default;
    }   
}

