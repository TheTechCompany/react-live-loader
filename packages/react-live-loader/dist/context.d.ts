import React from 'react';
export interface LiveContextShape {
    code?: string;
}
export declare const LiveContext: React.Context<LiveContextShape>;
export interface LiveProviderProps {
    code?: string;
}
export declare const LiveProvider: React.FC<LiveProviderProps>;
