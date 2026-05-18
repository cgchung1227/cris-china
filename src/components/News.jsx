// 新聞動態 — News

const items = [
  {
    date: "2025.11.18",
    type: "战略合作",
    title: "润思走访用友香港，深化 BIP 海外 ISV 协同布局",
    excerpt: "围绕港澳台与东南亚制造业客户，双方就 APS 与 ESG 模块在 BIP 平台上的捆绑式交付达成路线图共识。",
  },
  {
    date: "2025.10.09",
    type: "行业峰会",
    title: "出席 2025 中国电子气体高峰论坛，分享低碳与排程双轴实践",
    excerpt: "润思团队在电子特气产业链脱碳分论坛发表演讲，展示 IMPACTs APS 在多品种切换中的能源协同节碳成果。",
  },
  {
    date: "2025.08.22",
    type: "政企交流",
    title: "大连市委台办参访润思，肯定两岸智造数智化协同价值",
    excerpt: "市委台办领导一行调研润思总部，详细了解公司在跨海峡产业链协同与 BIP 生态伙伴生态建设上的进展。",
  },
]

export default function News() {
  return (
    <section id="news">
      <div className="container">
        <div
          className="section-head"
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            maxWidth: "none",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span className="eyebrow">新闻动态</span>
            <h2>最新发布</h2>
          </div>
          <a className="btn btn-ghost" href="#all-news">查看全部 →</a>
        </div>

        <div className="news-grid">
          {items.map((n, i) => (
            <article className="card news-card" key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="date">{n.date}</span>
                <span className="ntype">{n.type}</span>
              </div>
              <div className="glow-line"></div>
              <h3>{n.title}</h3>
              <p className="excerpt">{n.excerpt}</p>
              <div className="read-more">阅读全文 →</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
