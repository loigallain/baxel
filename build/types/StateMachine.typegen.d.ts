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
        "consoleLogValue": "FOO";
        "consoleLogValueAgain": "FOO";
    };
    eventsCausingDelays: {};
    eventsCausingGuards: {};
    eventsCausingServices: {};
    matchesStates: "a" | "b";
    tags: never;
}
