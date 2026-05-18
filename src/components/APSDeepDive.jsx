// IMPACTs APS — 深度解析

export default function APSDeepDive() {
  return (
    <section
      id="aps-deep"
      style={{
        background: "rgba(5, 13, 31, 0.55)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        <div className="section-head" style={{ maxWidth: 780 }}>
          <span className="eyebrow">IMPACTs APS · 产品深度解析</span>
          <h2>
            用友 BIP 原生 · 一体化先进规划<br />
            与<span className="text-green">排程引擎</span>
          </h2>
          <p className="text-secondary" style={{ marginTop: 8 }}>
            以「决策支持工具」为定位，结合合理化 · 流程化 · 标准化 · 系统化的管理路径 —
            释放工厂真正的产能与交付能力，让计划员从「计算」回归「规划」。
          </p>
        </div>

        {/* BLOCK 1: 产品架构 */}
        <div style={{ marginBottom: 80 }}>
          <div className="aps-block-head">
            <span className="aps-block-num">01</span>
            <h3>产品架构 · 四模块仿真流水线</h3>
          </div>

          <div className="arch-pipeline">
            {[
              {
                tag: "INPUT",
                title: "数据输入模块",
                items: ["资源基础数据", "需求基础数据", "工艺路线资料", "BOM · 库存 · WIP"],
                color: "green",
              },
              {
                tag: "INIT",
                title: "初始化模块",
                items: ["派工规则", "生产限制", "对象属性", "工艺路线 · 资源群组"],
                color: "green",
              },
              {
                tag: "ENGINE",
                title: "排程仿真引擎",
                items: ["关键比值派货", "优先级派货", "队列时间派货", "复合逻辑派货"],
                color: "copper",
                featured: true,
              },
              {
                tag: "OUTPUT",
                title: "数据输出模块",
                items: ["生产订单总表", "物料规划总表", "资源排程明细", "资源稼动率 · 碳排信息"],
                color: "green",
              },
            ].map((m, i) => (
              <div key={i} className={`arch-stage ${m.featured ? "featured" : ""}`}>
                <div className="arch-stage-tag">{m.tag}</div>
                <h4>{m.title}</h4>
                <ul>{m.items.map(it => <li key={it}>{it}</li>)}</ul>
                {i < 3 && <div className="arch-flow-arrow">▶</div>}
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 2: MRP vs APS */}
        <div style={{ marginBottom: 80 }}>
          <div className="aps-block-head">
            <span className="aps-block-num">02</span>
            <h3>MRP vs APS · 为什么有了 ERP 还需要 APS</h3>
          </div>

          <div className="vs-table">
            <div className="vs-row vs-head">
              <div className="vs-cell">对比维度</div>
              <div className="vs-cell vs-mrp">MRP / ERP</div>
              <div className="vs-cell vs-aps">IMPACTs APS</div>
            </div>
            {[
              {
                k: "核心假设",
                mrp: "无限产能 — 假设设备、人力、运输等资源可无限扩展",
                aps: "有限产能 — 明确识别设备、模具、特殊工种等瓶颈约束",
              },
              {
                k: "运作逻辑",
                mrp: "需求 → BOM 拆解 → 反向推算时间（忽视资源冲突）",
                aps: "资源建模 → 约束识别 → 多目标优化 → 冲突可视化 → 动态重排",
              },
              {
                k: "执行层面",
                mrp: "生成理论上可行、实际无法落地的计划（设备超派 · 物料堆积）",
                aps: "冲突预判 · 多场景模拟 — 紧急插单时如何调整不影响原优先级",
              },
              {
                k: "决策能力",
                mrp: "依赖人工经验反复调整，计划敏捷性差",
                aps: "同步给出多个方案与 KPI 影响（交付延迟 vs 成本增加）",
              },
            ].map((r, i) => (
              <div key={i} className="vs-row">
                <div className="vs-cell vs-key">{r.k}</div>
                <div className="vs-cell vs-mrp">{r.mrp}</div>
                <div className="vs-cell vs-aps">{r.aps}</div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 3: 选配模块矩阵 */}
        <div style={{ marginBottom: 80 }}>
          <div className="aps-block-head">
            <span className="aps-block-num">03</span>
            <h3>选配模块矩阵 · 按产业按需组合</h3>
          </div>

          <div className="addon-grid">
            {[
              {
                tag: "ADD-ON 01",
                title: "资源指派模块",
                desc: "管控设备、模具与治具的稼动序列",
                items: ["自动换线支援", "模具 / 资源指派", "批量（连批）生产"],
              },
              {
                tag: "ADD-ON 02",
                title: "物料与产能同步规划",
                desc: "ATO / MTS / MTO 混合生产的料能协同",
                items: ["组合件自动投料", "物料需求规划 MRP", "严守交期逆向排程"],
              },
              {
                tag: "ADD-ON 03",
                title: "人员指派模块",
                desc: "人机搭配与多机操作的精准派工",
                items: ["加工人员派工", "换线人员指派", "人机搭配加工"],
              },
              {
                tag: "ADD-ON 04",
                title: "AI 决策优化（定制）",
                desc: "试算与寻优，逼近最佳交付与成本平衡",
                items: ["剩余产能产品试算", "产能平衡优化", "生产周期优化"],
              },
            ].map((a, i) => (
              <div key={i} className="card addon-card">
                <div className="addon-tag">{a.tag}</div>
                <h4>{a.title}</h4>
                <p className="addon-desc">{a.desc}</p>
                <div className="addon-divider"></div>
                <ul className="addon-items">
                  {a.items.map(it => (
                    <li key={it}><span className="addon-dot"></span>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 4: 竞品优势 */}
        <div style={{ marginBottom: 80 }}>
          <div className="aps-block-head">
            <span className="aps-block-num">04</span>
            <h3>竞品优势 · 为什么是 IMPACTs APS</h3>
          </div>

          <div className="advantage-grid">
            {[
              { big: "5min", small: "vs. 60 min", lbl: "排程速度", desc: "云端引擎一键智能排程，竞品平均需 60 分钟以上" },
              { big: "6 周", small: "vs. 6 个月", lbl: "实施周期", desc: "80% 产业模块 + 20% 建模调整，竞品需大量定制开发" },
              { big: "全云化", small: "vs. 本地", lbl: "部署方式", desc: "软件租赁 · 无服务器 · 无维护成本 · 高扩充性" },
              { big: "分秒级", small: "设备 / 人 / 模治具", lbl: "排程颗粒度", desc: "细化至工序事件，竞品多停留在生产订单层" },
              { big: "原生", small: "BIP 完全融合", lbl: "系统集成", desc: "U9C · NCC API 无痛对接，亦支持 ERP / MES 标准 API" },
              { big: "AI 仿真", small: "vs. 规则堆栈", lbl: "排程技术", desc: "完整仿真生产环境，结合 AI 多目标寻优" },
            ].map((x, i) => (
              <div key={i} className="card adv-card">
                <div className="adv-big">{x.big}<span>{x.small}</span></div>
                <div className="adv-lbl">{x.lbl}</div>
                <p className="adv-desc">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 5: 客户效益数据墙 */}
        <div style={{ marginBottom: 80 }}>
          <div className="aps-block-head">
            <span className="aps-block-num">05</span>
            <h3>真实客户效益 · 数据说话</h3>
            <span className="aps-block-sub">数据来源：医疗 · 新能源 · SMT · 模具 · 灯具 · 厨电等实施案例</span>
          </div>

          <div className="kpi-wall">
            {[
              { from: "4 小时", to: "6 分钟", lbl: "排产效率", up: "+90%", note: "某医疗用品制造企业" },
              { from: "75%", to: "89%", lbl: "交期达成率", up: "+14pp", note: "某医疗用品制造企业" },
              { from: "70%", to: "85%", lbl: "设备利用率", up: "+15pp", note: "某医疗 · 换线时间 −50%" },
              { from: "52%", to: "71%", lbl: "订单准交率", up: "+19pp", note: "佛山新能源汽车部件" },
              { from: "21 天", to: "18 天", lbl: "一般产品周期", up: "−14%", note: "佛山新能源汽车部件" },
              { from: "13 天", to: "8 天", lbl: "OTD 接单到出货", up: "−38.5%", note: "某 SMT 测试产线" },
              { from: "30 天", to: "24 天", lbl: "整体 OTD", up: "−20%", note: "某设备组装企业" },
              { from: "82%", to: "96%", lbl: "交期准确率", up: "+14pp", note: "某螺丝螺帽工厂" },
            ].map((k, i) => (
              <div key={i} className="kpi-cell">
                <div className="kpi-up">{k.up}</div>
                <div className="kpi-flow">
                  <span className="kpi-from">{k.from}</span>
                  <span className="kpi-arrow">→</span>
                  <span className="kpi-to">{k.to}</span>
                </div>
                <div className="kpi-lbl">{k.lbl}</div>
                <div className="kpi-note">{k.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 6: 成熟度路径 */}
        <div>
          <div className="aps-block-head">
            <span className="aps-block-num">06</span>
            <h3>实施成熟度路径 · 稳步发展，莫求一步登天</h3>
            <span className="aps-block-sub">基础数据与流程完整性要求 — 从 50% 走向 95%</span>
          </div>

          <div className="maturity-track">
            <div className="maturity-axis">
              <div className="maturity-axis-fill"></div>
            </div>
            {[
              {
                stage: "STAGE 01", pct: "50%", title: "用 APS 取代人工排程",
                desc: "解放计划员人力，使其真正进行「规划」而非「计算」 — 计算让计算机执行。",
              },
              {
                stage: "STAGE 02", pct: "65%", title: "以 APS 进行决策支持",
                desc: "试算不同情境与策略对生产、交期的影响，进一步推算生产成本与方案 ROI。",
              },
              {
                stage: "STAGE 03", pct: "80%", title: "整体生产模式优化",
                desc: "配合算法与 AI 进行寻优，找到更符合企业战略的计划与执行方式。",
              },
              {
                stage: "STAGE 04", pct: "95%", title: "自动化智能排程",
                desc: "缺料 · 当机 · 不良率 · 设计变更 — 任何情境皆可自动触发重排，最小化不确定性冲击。",
              },
            ].map((s, i) => (
              <div key={i} className="maturity-step">
                <div className="maturity-bubble">
                  <span className="maturity-pct">{s.pct}</span>
                </div>
                <div className="maturity-stage-tag">{s.stage}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
