import { Machine } from 'xstate';

export const lightSwitchMachine = Machine({
  id: 'lightSwitch',
  initial: 'inactive',
  states: {
    inactive: {
      on: {
        TOGGLE: 'active'
      }
    },
    active: {
      on: {
        TOGGLE: 'inactive'
      }
    },
  }
});
