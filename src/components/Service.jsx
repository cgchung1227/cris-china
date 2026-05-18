// 項目實施與服務 — Service Timeline

const steps = [
  { n: "01", title: "需求分析", desc: "深入现场调研业务流与瓶颈点，建立量化转型基线与目标 KPI。" },
  { n: "02", title: "系统建模", desc: "工艺路径、资源约束、能源拓扑建模，与 BIP 主数据双向贯通。" },
  { n: "03", title: "上线试运行", desc: "并行运行与影子模式比对，规划员陪跑校准，逐步切换决策权限。" },
  { n: "04", title: "正式验收", desc: "按基线 KPI 量化验收，配套培训体系与定期复训持续保障。" },
]

export default function Service() {
  return (
    <section id="service">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">实施服务 · Implementation</span>
          <h2>
            实施四部曲<br />
            从蓝图到稳态运行，一站交付。
          </h2>
        </div>

        <div className="timeline">
          {steps.map(s => (
            <div className="timeline-step" key={s.n}>
              <div className="dot-big">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 80,
            padding: 40,
            border: "1px solid var(--border-subtle)",
            borderRadius: 8,
            background: "rgba(0, 242, 254, 0.02)",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div>
            <span className="eyebrow">培训体系</span>
            <h3 style={{ marginTop: 16, fontSize: 24 }}>
              从用户到内部讲师的<br />人才闭环。
            </h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { t: "现场培训", d: "实施期驻场带教与角色化能力建设" },
              { t: "线上工作坊", d: "按月主题工作坊与最佳实践分享" },
              { t: "定期复训", d: "年度认证与版本升级专项培训" },
            ].map(x => (
              <div key={x.t}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--accent-green)",
                    letterSpacing: "0.2em",
                  }}
                >
                  ● TRAINING
                </div>
                <h4
                  style={{
                    margin: "8px 0 6px",
                    fontSize: 16,
                    fontFamily: "var(--font-sans)",
                    letterSpacing: 0,
                    color: "var(--text-primary)",
                    textTransform: "none",
                  }}
                >
                  {x.t}
                </h4>
                <p style={{ margin: 0, fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
