// 產品中心 — Products

export default function Products() {
  return (
    <section id="products">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">产品中心</span>
          <h2>三层架构 · 一体化平台</h2>
          <p className="text-secondary">从底层 AI Agent 框架到业务级排程与碳管理，构建可扩展、可组合的工业大脑。</p>
        </div>

        <div className="product-grid">
          {/* APS */}
          <div className="card product-card">
            <div className="ptype">APPLICATION · APS</div>
            <h3>IMPACTs APS</h3>
            <p className="pdesc">智能甘特图 + 决策雷达图，毫秒级重排引擎，支持多目标加权与人工干预。</p>
            <div className="pvisual">
              <div className="gantt-mini">
                {[
                  { l: "M-01", segs: [{ x: 5, w: 35 }, { x: 45, w: 20 }] },
                  { l: "M-02", segs: [{ x: 10, w: 50 }] },
                  { l: "M-03", segs: [{ x: 0, w: 28 }, { x: 32, w: 18 }, { x: 60, w: 30 }] },
                  { l: "M-04", segs: [{ x: 20, w: 40 }] },
                  { l: "M-05", segs: [{ x: 5, w: 22 }, { x: 50, w: 35 }] },
                ].map((r, i) => (
                  <div className="gantt-row" key={i}>
                    <span className="gantt-label">{r.l}</span>
                    <div className="gantt-track">
                      {r.segs.map((s, j) => (
                        <div className="gantt-bar" key={j} style={{ left: `${s.x}%`, width: `${s.w}%` }}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CeO */}
          <div className="card product-card">
            <div className="ptype" style={{ color: "var(--accent-gold)" }}>APPLICATION · ESG</div>
            <h3>CeO 碳管理系统</h3>
            <p className="pdesc">碳排放系数数据库 + 盘查报告书自动生成，能源 / 工序 / 产品三维碳画像。</p>
            <div className="pvisual">
              <div className="carbon-dash">
                <div className="carbon-cell">
                  <div className="clbl">SCOPE 1</div>
                  <div className="cval">2,847<span style={{ fontSize: 10, marginLeft: 4, color: "var(--text-muted)" }}>tCO₂e</span></div>
                  <div className="spark">
                    {[40, 60, 45, 70, 55, 80, 65].map((h, i) => (
                      <span key={i} style={{ height: `${h}%` }}></span>
                    ))}
                  </div>
                </div>
                <div className="carbon-cell">
                  <div className="clbl">SCOPE 2</div>
                  <div className="cval">8,124<span style={{ fontSize: 10, marginLeft: 4, color: "var(--text-muted)" }}>tCO₂e</span></div>
                  <div className="spark">
                    {[70, 50, 80, 60, 85, 55, 75].map((h, i) => (
                      <span key={i} style={{ height: `${h}%` }}></span>
                    ))}
                  </div>
                </div>
                <div className="carbon-cell">
                  <div className="clbl">SCOPE 3</div>
                  <div className="cval">14,562<span style={{ fontSize: 10, marginLeft: 4, color: "var(--text-muted)" }}>tCO₂e</span></div>
                  <div className="spark">
                    {[55, 65, 75, 60, 50, 70, 90].map((h, i) => (
                      <span key={i} style={{ height: `${h}%` }}></span>
                    ))}
                  </div>
                </div>
                <div className="carbon-cell">
                  <div className="clbl">INTENSITY</div>
                  <div className="cval">0.42<span style={{ fontSize: 10, marginLeft: 4, color: "var(--text-muted)" }}>kg/件</span></div>
                  <div className="spark">
                    {[80, 70, 65, 55, 50, 45, 38].map((h, i) => (
                      <span key={i} style={{ height: `${h}%`, background: "#00f2fe" }}></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OpenClaw */}
          <div className="card product-card">
            <div className="ptype">FOUNDATION · AI</div>
            <h3>OpenClaw 框架</h3>
            <p className="pdesc">底层 AI Agent 数据处理框架，多模型路由与工业知识图谱，赋能上层一切智能应用。</p>
            <div className="pvisual radar-mini">
              <svg viewBox="-50 -50 100 100">
                {[20, 32, 44].map((r, i) => (
                  <polygon
                    key={i}
                    points={`0,-${r} ${r * 0.95},-${r * 0.3} ${r * 0.6},${r * 0.8} -${r * 0.6},${r * 0.8} -${r * 0.95},-${r * 0.3}`}
                    fill="none"
                    stroke="rgba(0, 242, 254, 0.2)"
                    strokeWidth="0.5"
                  />
                ))}
                {[0, 1, 2, 3, 4].map(i => {
                  const a = (i * 72 - 90) * Math.PI / 180
                  return (
                    <line
                      key={i}
                      x1="0" y1="0"
                      x2={44 * Math.cos(a)} y2={44 * Math.sin(a)}
                      stroke="rgba(0, 242, 254, 0.15)"
                      strokeWidth="0.5"
                    />
                  )
                })}
                <polygon
                  points="0,-32 30,-10 22,28 -22,26 -28,-12"
                  fill="rgba(0, 242, 254, 0.2)"
                  stroke="#00f2fe"
                  strokeWidth="1"
                />
                {[
                  { x: 0, y: -32 }, { x: 30, y: -10 }, { x: 22, y: 28 }, { x: -22, y: 26 }, { x: -28, y: -12 }
                ].map((p, i) => (
                  <circle key={i} cx={p.x} cy={p.y} r="2" fill="#00f2fe" />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
