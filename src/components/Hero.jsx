// 潤思科技 — Hero Section

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">工业 4.0 · 双引擎战略</span>
            <h1 style={{ marginTop: 28 }}>
              <span className="line">润思科技 ×</span>
              <span className="line text-gradient">用友 BIP</span>
              <span className="line">打造绿色数智化转型</span>
              <span className="line text-secondary" style={{ fontSize: "0.5em", fontWeight: 400, marginTop: 12, letterSpacing: "0.04em" }}>
                — 智能化排程 × 绿色低碳管理 双轴并进 —
              </span>
            </h1>
            <p className="hero-sub">
              作为<span className="text-gold">用友 BIP 独立方案供应商（ISV）</span>，润思科技以 IMPACTs APS 智能排程与 CeO 碳管理系统为核心，
              已为半导体、医药、电子材料等高端制造业提供国际合规、数据驱动的双轴转型方案。
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#solutions">
                查看解决方案 <span className="btn-arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="#contact">
                预约产品演示
              </a>
            </div>
            <div className="hero-badges">
              <span className="badge badge-green"><span className="dot"></span>ISO 14064 · 14067 认证体系</span>
              <span className="badge badge-green"><span className="dot"></span>SGS 国际审核</span>
              <span className="badge badge-gold"><span className="dot"></span>六座生态工厂落地</span>
            </div>
          </div>

          <div className="dual-engine">
            <div className="engine-ring"></div>
            <div className="engine-ring r2"></div>
            <div className="engine-ring r3"></div>

            <div className="engine-core">
              <div className="engine-core-inner">BIP</div>
            </div>

            <div className="engine-node n1"></div>
            <div className="engine-node n2"></div>
            <div className="engine-node n3"></div>
            <div className="engine-node n4"></div>

            <div className="engine-label l1">
              <span className="num">01 / APS</span>
              <span className="key">IMPACTs</span>
              <span className="desc">智能排程引擎</span>
            </div>
            <div className="engine-label l2">
              <span className="num">02 / ESG</span>
              <span className="key">CeO</span>
              <span className="desc">碳管理平台</span>
            </div>
            <div className="engine-label l3">
              <span className="num">03 / AI</span>
              <span className="key">OpenClaw</span>
              <span className="desc">Agent 框架</span>
            </div>
            <div className="engine-label l4">
              <span className="num">04 / IoT</span>
              <span className="key">EdgeSync</span>
              <span className="desc">实时数据采集</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
