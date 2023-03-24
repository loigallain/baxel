export declare const uistates: import("xstate").StateMachine<{
    value: string;
    document: any;
}, any, {
    type: 'SELECT';
    value: string;
} | {
    type: 'SWITCH';
    value: string;
}, {
    value: any;
    context: {
        value: string;
        document: any;
    };
}, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("./uiStates.typegen").Typegen0, {
    type: 'SELECT';
    value: string;
} | {
    type: 'SWITCH';
    value: string;
}, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
