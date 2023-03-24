export interface Typegen0 {
    '@@xstate/typegen': true;
    internalEvents: {
        "xstate.init": {
            type: "xstate.init";
        };
    };
    invokeSrcNameMap: {};
    missingImplementations: {
        actions: never;
        delays: never;
        guards: never;
        services: never;
    };
    eventsCausingActions: {
        "selectText": "SWITCH";
        "switchControl": "SELECT";
    };
    eventsCausingDelays: {};
    eventsCausingGuards: {};
    eventsCausingServices: {};
    matchesStates: "load" | "load.scene" | "load.scene.not_rotate" | "load.scene.rotate" | "load.text" | "load.text.hide" | "load.text.show" | {
        "load"?: "scene" | "text" | {
            "scene"?: "not_rotate" | "rotate";
            "text"?: "hide" | "show";
        };
    };
    tags: never;
}
