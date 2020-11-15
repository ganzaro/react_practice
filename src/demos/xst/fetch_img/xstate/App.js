import React from "react";
import { useMachine } from '@xstate/react'

import { machine } from './machine'

const App = () => {
  const [current, send] = useMachine(machine);
  const { image } = current.context;

  return (
    <section>
      {current.matches("ready") && (
        <button onClick={() => send("BUTTON_CLICKED")}>
          Get Image
        </button>
      )}
      {current.matches("fetching") && <p>loading...</p>}
      {current.matches("success") && <img src={image} alt="" />}
      {current.matches("error") && <p>An error occured</p>}
    </section>
  );
};

export default App;