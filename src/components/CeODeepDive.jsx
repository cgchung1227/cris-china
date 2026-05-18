// CeO ESG — 深度解析

export default function CeODeepDive() {
  return (
    <section
      id="ceo-deep"
      style={{
        background: "rgba(8, 18, 36, 0.45)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        <div className="section-head" style={{ maxWidth: 820 }}>
          <span className="eyebrow" style={{ color: "var(--accent-copper)" }}>
            CeO ESG · 产品深度解析
          </span>
          <h2>
            一个系统 · 串起<span className="text-gold">所有国际碳标准</span><br />
            从盘查到减碳，一站式落地。
          </h2>
          <p className="text-secondary" style={{ marginTop: 8 }}>
            符合 ISO 14064-1 / 14067 与 GHG Protocol，对接 IFRS S1/S2、CBAM、SBTi、CDP、GRI、TCFD、SASB —
            通过 SGS AUP 认证的「邊 · 源 · 算 · 報 · 查」流程导向系统，
            把企业减碳从 Excel 时代带进数智时代。
          </p>
        </div>

        {/* BLOCK 1: ESG 平台四层架构 */}
        <div style={{ marginBottom: 80 }}>
          <div className="aps-block-head">
            <span className="aps-block-num" style={{ color: "var(--accent-copper)" }}>01</span>
            <h3>ESG 平台 · 四层一体架构</h3>
            <span className="aps-block-sub">盘查 · 监控 · 分析 · 规划 — 一个数据底座，四种碳能力</span>
          </div>

          <div className="ceo-arch">
            {[
              {
                tag: "LAYER 01 · 盘查",
                title: "组织碳盘查 + 产品碳足迹",
                items: ["ISO 14064-1 范畴 1·2·3", "ISO 14067 产品碳足迹", "盘查清册 · 报告书一键产出"],
                primary: true,
              },
              {
                tag: "LAYER 02 · 监控",
                title: "AIoT 实时能碳监控",
                items: ["智能电表 · PLC · SCADA 串接", "设备级耗电与碳排追踪", "超标自动告警"],
              },
              {
                tag: "LAYER 03 · 分析",
                title: "碳排热点与减碳分析",
                items: ["范畴 / 排放源 / 工序碳画像", "基准年减碳进度追踪", "AI 电力 · 碳排预测"],
              },
              {
                tag: "LAYER 04 · 规划",
                title: "减碳路径 · APS 协同优化",
                items: ["SBTi 科学减量目标设定", "碳权与抵换规划", "与 APS 排程协同减排"],
                accent: true,
              },
            ].map((m, i) => (
              <div key={i} className={`ceo-arch-stage ${m.primary ? "primary" : ""} ${m.accent ? "accent" : ""}`}>
                <div className="ceo-arch-tag">{m.tag}</div>
                <h4>{m.title}</h4>
                <ul>{m.items.map(it => <li key={it}>{it}</li>)}</ul>
              </div>
            ))}
          </div>

          <div className="ceo-platform-bar">
            <span className="ceo-pb-tag">PLATFORM</span>
            <span className="ceo-pb-text">
              CeO 雲端碳盘查 · 监控 · 分析 · 规划平台 — API 异构系统集成 · Eco-invent 1400 万笔系数库
            </span>
          </div>
        </div>

        {/* BLOCK 2: 邊-源-算-報-查 */}
        <div style={{ marginBottom: 80 }}>
          <div className="aps-block-head">
            <span className="aps-block-num" style={{ color: "var(--accent-copper)" }}>02</span>
            <h3>邊 · 源 · 算 · 報 · 查 — 数智化盘查五步法</h3>
            <span className="aps-block-sub">流程导向 · 选项式碳盘查 — 把人工 11 步骤浓缩为 5 阶段</span>
          </div>

          <div className="five-step">
            {[
              { ch: "邊", en: "Boundary", desc: "组织与营运边界设定、报告边界划定、廠区与公司层级展开" },
              { ch: "源", en: "Source", desc: "排放源鉴别、设备级 GHG 来源建档、Tier 2C 制程参数登录" },
              { ch: "算", en: "Calculate", desc: "活动数据 × 系数库 × GWP — 直接 / 间接 / 上下游全范畴量化" },
              { ch: "報", en: "Report", desc: "盘查清册 · 报告书自动产出（繁/简/英）— ISO 14064/14067 模板" },
              { ch: "查", en: "Verify", desc: "佐证资料 · 审核流 · 退审机制 — SGS / BSI 等第三方查证" },
            ].map((s, i) => (
              <div key={i} className="step-cell">
                <div className="step-circle">
                  <span className="step-ch">{s.ch}</span>
                </div>
                <div className="step-en">{s.en}</div>
                <p className="step-desc">{s.desc}</p>
                {i < 4 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>

          <div className="five-step-note">
            <span className="badge badge-gold"><span className="dot"></span>SGS AUP 认证</span>
            <span className="text-secondary" style={{ fontSize: 13 }}>
              系统计算方式、排放逻辑已经 SGS Agreed Upon Procedure 验证 — 查证人员可依此程序快速验证，节省稽核沟通成本。
            </span>
          </div>
        </div>

        {/* BLOCK 3: 国际合规矩阵 */}
        <div style={{ marginBottom: 80 }}>
          <div className="aps-block-head">
            <span className="aps-block-num" style={{ color: "var(--accent-copper)" }}>03</span>
            <h3>国际合规矩阵 · 一站对接全球碳标准</h3>
            <span className="aps-block-sub">从盘查标准到揭露准则，从市场机制到行业认证 — 一个 CeO 系统全覆盖</span>
          </div>

          <div className="compliance-grid">
            {[
              { code: "ISO 14064-1:2018", title: "组织碳盘查标准", desc: "范畴 1 直接 + 范畴 2 能源间接 + 范畴 3 类别 1–15", main: true },
              { code: "ISO 14067", title: "产品碳足迹标准", desc: "原料 · 制造 · 使用 · 废弃全生命周期", main: true },
              { code: "GHG Protocol", title: "温室气体盘查议定书", desc: "全球最广采用的企业级 GHG 核算方法学" },
              { code: "IFRS S1 · S2", title: "永续 / 气候揭露准则", desc: "台湾 2026 年起分阶段直接采用 · 揭露范畴 1+2+3", main: true },
              { code: "CBAM", title: "欧盟碳边境调整机制", desc: "金属制品等隐含排放申报支撑 · 与 EU ETS 一致" },
              { code: "SBTi", title: "科学基础减量目标", desc: "巴黎协议 1.5°C 路径 · 跨国合作基本门槛" },
              { code: "CDP", title: "碳揭露评级", desc: "全球 1/3 股票市值评鑑 · 供应链揭露主流要求" },
              { code: "GRI · TCFD · SASB", title: "永续报告框架", desc: "三大主流报告书框架 · 环境永续指标揭露" },
            ].map((c, i) => (
              <div key={i} className={`compliance-card ${c.main ? "main" : ""}`}>
                <div className="compliance-code">{c.code}</div>
                <div className="compliance-title">{c.title}</div>
                <div className="compliance-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 4: 范畴全覆盖 */}
        <div style={{ marginBottom: 80 }}>
          <div className="aps-block-head">
            <span className="aps-block-num" style={{ color: "var(--accent-copper)" }}>04</span>
            <h3>范畴全覆盖 · 范畴 1 + 2 + 3 完整 15 类别</h3>
            <span className="aps-block-sub">模组化设计 · 依企业阶段逐步落地公部门揭露规范</span>
          </div>

          <div className="scope-grid">
            <div className="scope-block scope-1">
              <div className="scope-head">
                <span className="scope-tag">SCOPE 1</span>
                <h4>直接排放</h4>
              </div>
              <div className="scope-items">
                <div className="scope-pill">固定燃烧源</div>
                <div className="scope-pill">移动源</div>
                <div className="scope-pill">制程排放</div>
                <div className="scope-pill">逸散源</div>
              </div>
            </div>

            <div className="scope-block scope-2">
              <div className="scope-head">
                <span className="scope-tag">SCOPE 2</span>
                <h4>能源间接</h4>
              </div>
              <div className="scope-items">
                <div className="scope-pill">外购电力</div>
                <div className="scope-pill">外购蒸汽</div>
                <div className="scope-pill">外购冷热水</div>
              </div>
            </div>

            <div className="scope-block scope-3">
              <div className="scope-head">
                <span className="scope-tag">SCOPE 3 · 上下游 15 类别</span>
                <h4>其他间接排放</h4>
              </div>
              <div className="scope-cats">
                {[
                  ["1", "购买商品与服务"],
                  ["2", "资本物品"],
                  ["3", "燃料与能源相关"],
                  ["4", "上游运输配送"],
                  ["5", "营运废弃物"],
                  ["6", "商务旅行"],
                  ["7", "员工通勤"],
                  ["8", "上游租赁资产"],
                  ["9", "下游运输配送"],
                  ["10", "销售产品加工"],
                  ["11", "销售产品使用"],
                  ["12", "销售产品废弃"],
                  ["13", "下游租赁资产"],
                  ["14", "特许经营 / 加盟"],
                  ["15", "投资排放"],
                ].map(([n, t]) => (
                  <div key={n} className={`scope-cat ${["1", "11"].includes(n) ? "highlight" : ""}`}>
                    <span className="scope-cat-n">{n}</span>
                    <span className="scope-cat-t">{t}</span>
                  </div>
                ))}
              </div>
              <div className="scope-footnote">
                <span className="text-gold" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em" }}>● IFRS 必揭露</span>
                <span className="text-secondary" style={{ fontSize: 12, marginLeft: 12 }}>类别 1 「购买商品与服务」& 类别 11 「销售产品使用」</span>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 5: 系统能力亮点 */}
        <div style={{ marginBottom: 80 }}>
          <div className="aps-block-head">
            <span className="aps-block-num" style={{ color: "var(--accent-copper)" }}>05</span>
            <h3>系统能力亮点 · 为什么选 CeO</h3>
          </div>

          <div className="ceo-features-grid">
            {[
              {
                big: "1,400 万", unit: "笔", lbl: "Eco-invent 系数库",
                desc: "国际权威系数 + 环保署 · 能源局 · IPCC 定期更新 · 可自定行业系数",
              },
              {
                big: "Tier 2C", unit: "", lbl: "半导体制程气体",
                desc: "晶圆厂自订气体利用率（UCF4）与副产品排放因子（BCF4）· 已落地 6 座晶片厂",
              },
              {
                big: "API", unit: "实时", lbl: "异构系统集成",
                desc: "ERP / MES / EMS / HR / 采购平台直连 · 减少人工 Key-in 与公式错误",
              },
              {
                big: "3 语", unit: "繁/简/英", lbl: "多语报告书",
                desc: "ISO 14064-1 / 14067 模板一键产出 · 适合跨国合作与海外申报",
              },
              {
                big: "陆 · 海 · 空", unit: "", lbl: "运距自动计算",
                desc: "Google Maps API + Haversine 公式 · 上下游运输碳排自动归集",
              },
              {
                big: "SGS", unit: "AUP 认证", lbl: "查证可信度",
                desc: "2025.3 取得 — 计算方式与排放逻辑预先验证 · 加速第三方稽核",
              },
            ].map((f, i) => (
              <div key={i} className="card ceo-feat-card">
                <div className="ceo-feat-big">
                  {f.big}
                  {f.unit && <span className="ceo-feat-unit">{f.unit}</span>}
                </div>
                <div className="ceo-feat-lbl">{f.lbl}</div>
                <p className="ceo-feat-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 6: 旗舰案例 */}
        <div>
          <div className="aps-block-head">
            <span className="aps-block-num" style={{ color: "var(--accent-copper)" }}>06</span>
            <h3>旗舰案例 · 半导体晶片大厂 6 座生态工厂落地</h3>
            <span className="aps-block-sub">2023.9 启动 · 2024.11 系统上线 · 6 座晶片厂区通过 SGS 查证</span>
          </div>

          <div className="case-flagship">
            <div className="case-stats">
              <div className="case-stat-row">
                <div className="case-stat">
                  <div className="case-stat-num">6</div>
                  <div className="case-stat-lbl">晶片厂区落地</div>
                </div>
                <div className="case-stat">
                  <div className="case-stat-num">15</div>
                  <div className="case-stat-lbl">范畴三全类别</div>
                </div>
              </div>
              <div className="case-stat-row">
                <div className="case-stat">
                  <div className="case-stat-num">100%</div>
                  <div className="case-stat-lbl">SGS 查证通过</div>
                </div>
                <div className="case-stat">
                  <div className="case-stat-num">14 月</div>
                  <div className="case-stat-lbl">从启动到上线</div>
                </div>
              </div>
              <div className="case-bullets">
                <h4>项目重点交付</h4>
                <ul>
                  <li>Tier 2C 制程排放计算（PFCs · SF₆ · NF₃ 气体利用率）</li>
                  <li>API 对接客户中介系统 · 实现跨系统盘查资料双向控管</li>
                  <li>陆 / 海 / 空运距离自动计算模组开发</li>
                  <li>Eco-invent 国际数据对接 · 范畴三 7 类别全开</li>
                  <li>佐证资料上传 · 审核 · 退审完整流程</li>
                </ul>
              </div>
            </div>

            <div className="case-timeline">
              <div className="case-timeline-head">项目里程碑</div>
              {[
                { date: "2023.09", title: "专案启动", desc: "需求方案 · S1 + S2 Tier 2C 计算需求" },
                { date: "2024.05", title: "Tier 2C 计算开发", desc: "晶圆厂制程气体公式建模与 API 对接" },
                { date: "2024.07", title: "范畴 1+2 上线", desc: "系统教育训练 · 平台产出验证" },
                { date: "2024.08", title: "Eco-invent 接入", desc: "国际系数库与范畴 3 七类别对接" },
                { date: "2024.10", title: "运距模组开发", desc: "Google API + Haversine 自动计算" },
                { date: "2024.11", title: "系统上线", desc: "6 座晶片厂区全面投产" },
                { date: "2025.03", title: "SGS AUP 认证", desc: "系统计算方式与排放逻辑通过验证", milestone: true },
              ].map((m, i) => (
                <div key={i} className={`case-milestone ${m.milestone ? "milestone" : ""}`}>
                  <div className="case-milestone-dot"></div>
                  <div className="case-milestone-date">{m.date}</div>
                  <div className="case-milestone-body">
                    <strong>{m.title}</strong>
                    <span>{m.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
