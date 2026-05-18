import { useState } from 'react'
import { LogoLockup } from './Logo'

const links = [
  { id: "home",      label: "首页",      href: "#home" },
  { id: "solutions", label: "解决方案",  href: "#solutions" },
  { id: "products",  label: "产品中心",  href: "#products" },
  { id: "aps-deep",  label: "APS 解析",  href: "#aps-deep" },
  { id: "ceo-deep",  label: "CeO 解析",  href: "#ceo-deep" },
  { id: "industries",label: "行业专区",  href: "#industries" },
  { id: "service",   label: "实施服务",  href: "#service" },
  { id: "news",      label: "新闻动态",  href: "#news" },
]

export default function Navbar() {
  const [active, setActive] = useState("home")

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <LogoLockup markSize={38} compact={true} />

        <div className="nav-links">
          {links.map(l => (
            <a
              key={l.id}
              href={l.href}
              className={active === l.id ? "active" : ""}
              onClick={() => setActive(l.id)}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span className="badge badge-gold">
            <span className="dot"></span>
            用友 BIP · ISV
          </span>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ padding: "10px 18px", fontSize: 14 }}
          >
            联系我们
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
