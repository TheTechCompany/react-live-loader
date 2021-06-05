import { transform } from '@babel/standalone'

const EnvPreset = require('@babel/preset-env')
const ReactPreset = require('@babel/preset-react')
const TypescriptPreset = require('@babel/preset-typescript')

export const compileComponent = (code: string) : string | undefined => {
    const result = transform(code, {
        filename: 'component.tsx',
        presets: [
            [EnvPreset, {
                modules: 'cjs'
            }],
            ReactPreset,
            TypescriptPreset
        ]
    })

    return result.code?.toString();
}