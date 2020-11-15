import React, { Fragment, useEffect } from 'react'
import { useMachine } from '@xstate/react'
import { Machine, assign } from 'xstate'
import GitHubUserProfile from './GitHubUserProfile'
import './styles.css'

const GITHUB_URL = 'https://api.github.com/users'

const fetchUser = username =>
  fetch(`${GITHUB_URL}/${username}`)
    .then(blob => blob.json())
    .then(data => {
      if (data.message) {
        return
      }
      return data
    })
    .catch(console.log)

const userProfileMachine = Machine({
  id: 'userProfile',
  initial: 'idle',
  context: {
    username: 'pedx78',
    user: null,
    error: null,
  },
  states: {
    idle: {
      on: {
        FETCH: 'loading',
      },
    },
    loading: {
      invoke: {
        id: 'getUser',
        src: (context, event) => fetchUser(context.username),
        onDone: {
          target: 'success',
          actions: assign({ user: (context, event) => event.data }),
        },
        onError: {
          target: 'failure',
          actions: assign({ error: (context, event) => event.data }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: 'loading',
      },
    },
  },
})

export default function App() {
  const [current, send] = useMachine(userProfileMachine)

  useEffect(() => {
    send('FETCH')
  }, [send])

  if (current.matches('loading') || current.matches('idle')) {
    return <span>Loading...</span>
  }

  return (
    <Fragment>
      <GitHubUserProfile user={current.context.user} />
    </Fragment>
  )
}
