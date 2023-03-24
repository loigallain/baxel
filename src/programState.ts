export const schema = {
   tsTypes:{} as import("./StateMachine.typegen").Typegen0,
    schema: {
      context: {} as { value: string },
      events: {} as 
        {type: 'FOO'; value: string }
        |
        { type: 'BAR' }
    },
    initial: 'loaded',
    context: {
      value: '',
    },
    states: {
      loaded: {
        on: {
          FOO: {
            actions: 'consoleLogValue',
            target: 'player_invit'
          }
        }
      },
      player_invit: {
        entry: 'consoleLogValuePAgain',
        on: {
          FOO: {
            actions: 'consoleLogValue',
            target: 'credits'
          }
        }
      },
      credits: {
        entry: 'consoleLogValuePAgain'
      }
    }
  };