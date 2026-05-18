// 垂直行業專區 — Industries

export default function Industries() {
  return (
    <section id="industries">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">垂直行业专区</span>
          <h2>为高端制造场景<br />量身定制的转型路径。</h2>
        </div>

        <div className="industry-grid">
          <div className="card industry-card">
            <div className="industry-num">INDUSTRY 01</div>
            <h3>半导体与电子材料</h3>
            <p className="text-secondary" style={{ marginTop: 0, marginBottom: 24, fontSize: 15 }}>
              低碳合规与智能排程双轴转型，应对设备价值高、能耗密度大、客户碳要求严的复合挑战。
            </p>
            <div className="pains">
              <div className="pain">
                <span className="pain-tag">排程</span>
                <span>多产品 · 多 reticle · 多 step，复杂 routing 下的高利用率求解</span>
              </div>
              <div className="pain">
                <span className="pain-tag">能源</span>
                <span>洁净室空调与制程气体高耗能场景的实时优化</span>
              </div>
              <div className="pain">
                <span className="pain-tag">合规</span>
                <span>客户 Scope 3 碳要求 · 出口欧盟 CBAM 申报支撑</span>
              </div>
            </div>
          </div>

          <div className="card industry-card">
            <div className="industry-num">INDUSTRY 02</div>
            <h3>医药与医疗器械</h3>
            <p className="text-secondary" style={{ marginTop: 0, marginBottom: 24, fontSize: 15 }}>
              针对多品种小批量调度难题，融合 GMP 工艺合规约束，平衡产能利用与质量风险。
            </p>
            <div className="pains">
              <div className="pain">
                <span className="pain-tag">调度</span>
                <span>多品种小批量 · 短周期切换下的产能利用最大化</span>
              </div>
              <div className="pain">
                <span className="pain-tag">GMP</span>
                <span>洁净度等级 · 共线风险 · 清线流程的工艺合规校验</span>
              </div>
              <div className="pain">
                <span className="pain-tag">追溯</span>
                <span>批号 · 物料 · 设备状态全链路数据可追溯</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
