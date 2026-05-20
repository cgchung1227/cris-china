// Solutions — IMPACTs APS + CeO ESG

export default function Solutions() {
  return (
    <section id="solutions">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">双引擎解决方案</span>
          <h2>智能化排程 × 绿色低碳管理<br />同步加速制造业转型。</h2>
        </div>

        <div className="solutions-grid">
          {/* APS Card */}
          <div className="card solution-card aps">
            <div className="product-tag">01 / IMPACTs APS</div>
            <h3>智能化排程系统</h3>
            <div className="tagline">需求预测 · 多约束求解 · 毫秒级重排</div>

            <div className="metric-row">
              <div className="metric">
                <div className="big">6–10%</div>
                <div className="lbl">订单损失减少</div>
              </div>
              <div className="metric">
                <div className="big">4–10%</div>
                <div className="lbl">库存积压减少</div>
              </div>
            </div>

            <ul className="feature-list">
              <li>预测需求调整，动态优化交期承诺与产能匹配</li>
              <li>多目标设备配置与瓶颈疏解，提升 OEE 表现</li>
              <li>智能换线序列编排，减少切换时间与品种切换损耗</li>
              <li>智能甘特图与决策雷达图，规划员一屏掌控全局</li>
            </ul>

            <div className="footer">
              <div className="cert-row">
                <span className="badge">用友 BIP 集成</span>
                <span className="badge">OPC-UA</span>
              </div>
              <a className="text-green" href="#products" style={{ fontFamily: "var(--font-mono)", fontSize: 13, textDecoration: "none" }}>
                查看产品 →
              </a>
            </div>
          </div>

          {/* CeO Card */}
          <div className="card solution-card esg">
            <div className="product-tag">02 / IMPACTs双碳</div>
            <h3>绿色低碳管理平台</h3>
            <div className="tagline">组织盘查 · 产品碳足迹 · 能源监控</div>

            <div className="metric-row">
              <div className="metric">
                <div className="big">ISO 14064</div>
                <div className="lbl">组织碳盘查</div>
              </div>
              <div className="metric">
                <div className="big">ISO 14067</div>
                <div className="lbl">产品碳足迹</div>
              </div>
            </div>

            <ul className="feature-list">
              <li>AIoT 实时数据采集，能源消耗与排放数据自动归集</li>
              <li>碳排密集度热点分析，定位高排工序与节能机会</li>
              <li>盘查报告书一键生成，直通 SGS 等第三方审核机构</li>
              <li>能源监控仪表板，电、汽、水、气与碳同屏可视</li>
            </ul>

            <div className="footer">
              <div className="cert-row">
                <span className="badge badge-gold">SGS 认证</span>
                <span className="badge badge-gold">GHG Protocol</span>
              </div>
              <a className="text-gold" href="#products" style={{ fontFamily: "var(--font-mono)", fontSize: 13, textDecoration: "none" }}>
                查看产品 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
