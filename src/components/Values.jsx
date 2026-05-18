import { useRef, useState, useEffect } from 'react'

function useInView(threshold = 0.3) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current || inView) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setInView(true)),
      { threshold }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [inView, threshold])
  return [ref, inView]
}

function useCountUp(target, duration = 1600, start = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    let raf
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, start])
  return val
}

function AnimatedNumber({ to, suffix = "", decimals = 0, prefix = "" }) {
  const [ref, inView] = useInView()
  const v = useCountUp(to, 1600, inView)
  return (
    <span ref={ref}>
      {prefix}{v.toFixed(decimals)}<span className="suffix">{suffix}</span>
    </span>
  )
}

const data = [
  {
    to: 38, suffix: "%",
    title: "提升生产效率",
    desc: "通过 IMPACTs APS 智能排程，订单完成准时率显著提升，瓶颈工序产能利用率从基线水平大幅优化。",
    tags: ["排程优化", "换线缩短", "瓶颈疏解"],
  },
  {
    to: 22, suffix: "%",
    title: "降低人力成本",
    desc: "排程决策从经验工时转为算法毫秒级响应，规划人员由 4–6 人压缩至 1–2 人，专注异常处理。",
    tags: ["决策自动化", "人员精简", "异常聚焦"],
  },
  {
    to: 100, suffix: "%",
    title: "国际合规保障",
    desc: "CeO 系统对接 ISO 14064 / 14067 / GHG Protocol，碳盘查与产品碳足迹直通 SGS 等国际机构审核。",
    tags: ["ISO 14064", "ISO 14067", "SGS 审核"],
    gold: true,
  },
]

export default function Values() {
  return (
    <section id="values">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">三大核心价值</span>
          <h2>
            用数据说话，<br />
            让<span className="text-green">智能化</span>与<span className="text-gold">合规性</span>并行落地。
          </h2>
          <p className="text-secondary" style={{ marginTop: 8 }}>
            从订单接入到出货交付，从能源采集到碳足迹核算 — 我们以可验证的指标交付转型成果。
          </p>
        </div>

        <div className="value-grid">
          {data.map((d, i) => (
            <div key={i} className="card value-card">
              <div
                className="num"
                style={d.gold ? {
                  background: "linear-gradient(180deg, #c89968 0%, #8b6020 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                } : {}}
              >
                <AnimatedNumber to={d.to} suffix={d.suffix} />
              </div>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
              <div className="icon-strip">
                {d.tags.map(t => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
