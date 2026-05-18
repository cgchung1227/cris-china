import { useEffect, useState, useRef } from 'react'

export default function CountUp({ to, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (startedRef.current) return
    startedRef.current = true
    const start = performance.now()
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * to))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(to)
    }
    requestAnimationFrame(step)
  }, [to, duration])

  return <>{count}</>
}
