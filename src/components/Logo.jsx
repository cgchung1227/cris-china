export function LogoMark({ size = 40 }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}cris-logo-original.jpg`}
      alt="润思科技 CRIS"
      width={size}
      height={size}
      style={{ objectFit: "contain", borderRadius: 4 }}
    />
  )
}

export function LogoLockup({ markSize = 40, compact = false }) {
  return (
    <a href="#home" className="logo-lockup">
      <LogoMark size={markSize} />
      <div className="logo-text">
        <strong>CRIS</strong>
        {!compact && <span>Corporate Resource Integration System</span>}
        <em>大连润思科技</em>
      </div>
    </a>
  )
}

export default LogoLockup
