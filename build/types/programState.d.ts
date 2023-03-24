export declare const schema: {
    tsTypes: import("./StateMachine.typegen").Typegen0;
    schema: {
        context: {
            value: string;
        };
        events: {
            type: 'FOO';
            value: string;
        } | {
            type: 'BAR';
        };
    };
    initial: string;
    context: {
        value: string;
    };
    states: {
        loaded: {
            on: {
                FOO: {
                    actions: string;
                    target: string;
                };
            };
        };
        player_invit: {
            entry: string;
            on: {
                FOO: {
                    actions: string;
                    target: string;
                };
            };
        };
        credits: {
            entry: string;
        };
    };
};
