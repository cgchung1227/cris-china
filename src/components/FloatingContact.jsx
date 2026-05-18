import { useState } from 'react'

function WeChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M8.5 4C4.36 4 1 6.91 1 10.5c0 2.08 1.13 3.93 2.88 5.13L3 18.5l3.05-1.62c.78.21 1.6.32 2.45.32l.6-.02c-.34-.74-.55-1.55-.55-2.41 0-3.32 3.13-6.02 7-6.02.2 0 .39.01.58.02C15.55 6.07 12.34 4 8.5 4zM6 8.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
      <path d="M23 14.5c0-2.9-2.78-5.25-6.21-5.25S10.58 11.6 10.58 14.5s2.78 5.25 6.21 5.25c.71 0 1.39-.1 2.03-.28L21 20.5l-.7-1.99C21.91 17.51 23 16.11 23 14.5zm-8.62-1.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm4.83 0c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75z" />
    </svg>
  )
}

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div className="wechat-float">
      {open && (
        <div className="wechat-panel">
          <h5 style={{ color: "var(--text-primary)" }}>扫码联系顾问</h5>
          <p>微信咨询 IMPACTs APS / CeO ESG</p>
          <div className="wechat-qr">
            <div className="qr-pattern"></div>
          </div>
          <p style={{ marginTop: 12, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent-green)" }}>
            CRIS-CHINA · OFFICIAL
          </p>
        </div>
      )}
      <button
        className="wechat-btn"
        onClick={() => setOpen(!open)}
        aria-label="WeChat"
      >
        <WeChatIcon />
      </button>
    </div>
  )
}
