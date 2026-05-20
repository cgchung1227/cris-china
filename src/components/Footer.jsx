import { LogoLockup } from './Logo'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <LogoLockup markSize={44} />
            <p className="text-secondary" style={{ fontSize: 14, lineHeight: 1.7, marginTop: 24, maxWidth: 360 }}>
              大连润思科技有限公司 — 用友ISV合作伙伴，以智能化排程与绿色低碳管理双引擎，助力中国高端制造业数智化转型。
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 24, flexWrap: "wrap" }}>
              <span className="badge badge-gold"><span className="dot"></span>用友 BIP · ISV</span>
              <span className="badge badge-green"><span className="dot"></span>ISO 14064</span>
            </div>
          </div>

          <div>
            <h4>解决方案</h4>
            <ul>
              <li><a href="#solutions">IMPACTs APS</a></li>
              <li><a href="#solutions">IMPACTs双碳管理系统</a></li>
              <li><a href="#industries">半导体与电子材料</a></li>
              <li><a href="#industries">医药与医疗器械</a></li>
            </ul>
          </div>

          <div>
            <h4>关于润思</h4>
            <ul>
              <li><a href="#about">公司介绍</a></li>
              <li><a href="#news">新闻动态</a></li>
              <li><a href="#service">实施服务</a></li>
              <li><a href="#partners">合作伙伴</a></li>
            </ul>
          </div>

          <div>
            <h4>联系方式</h4>
            <ul>
              <li><span className="text-secondary">辽宁省大连市高新园区</span></li>
              <li><span className="text-secondary">contact@cris-china.com</span></li>
              <li><span className="text-secondary">+86 0411-xxxx-xxxx</span></li>
              <li><a href="#wechat" className="text-green">扫码添加微信顾问 →</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2025 大连润思科技有限公司 · 保留所有权利 · 辽 ICP 备 xxxxxxx 号</div>
          <div className="keywords">关键词：用友 ISV · APS 排程 · ESG 碳管理 · 智能化转型</div>
        </div>
      </div>
    </footer>
  )
}
