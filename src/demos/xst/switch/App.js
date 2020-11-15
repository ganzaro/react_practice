import React from 'react';
import { useMachine } from '@xstate/react';
import Switch from 'react-switch';

import { lightSwitchMachine } from './machine'


const App = () => {
  const [state, send] = useMachine(lightSwitchMachine);

  return (
    <Switch
      onChange={() => send({ type: 'TOGGLE' })}
      checked={state.matches('active')}
      aria-label='Toggle me'
    />
  );
};

export default App;