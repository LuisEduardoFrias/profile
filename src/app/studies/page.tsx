//
'use client'
import { useSubscribeState } from 'subscribe_state'
import Loading from '../loading'

export default function Studies() {
  const [state, dispatch] = useSubscribeState(["language"])
  return (
    <div style={{ color: "white", margin: "20px 0 0 20px", borderTop: "3px solid white", borderLeft: "3px solid white", borderRadius: "5px", padding: "5px 0 0 5px" }}>
      <h1>Studies</h1>
      <h2>Coming soon</h2>
    </div>
  )
}