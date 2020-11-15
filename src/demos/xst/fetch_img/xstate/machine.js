import { Machine, assign } from "xstate";
import { fetchImage } from "../fetchImage";

export const machine = Machine({
  id: "imageFetcher",
  initial: "ready",
  context: {
    image: null
  },
  states: {
    ready: {
      on: {
        BUTTON_CLICKED: "fetching"
      }
    },
    fetching: {
      invoke: {
        src: fetchImage,
        onDone: {
          target: "success",
          actions: assign({
            image: (_, event) => event.data
          })
        },
        onError: "error"
      }
    },
    success: {},
    error: {}
  }
});
