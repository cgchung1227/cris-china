// 戰略背書 strip

export default function Strategy() {
  return (
    <div className="strategy-strip">
      <div className="container">
        <div className="strategy-grid">
          <div className="strategy-cell featured">
            <div className="lbl">Strategic Partnership</div>
            <div className="val">用友 BIP <span className="hi">独立方案供应商 ISV</span></div>
          </div>
          <div className="strategy-cell">
            <div className="lbl">Customer Footprint</div>
            <div className="val">
              六座生态工厂<br />
              <span className="text-muted" style={{ fontSize: 13 }}>半导体龙头客户采用</span>
            </div>
          </div>
          <div className="strategy-cell">
            <div className="lbl">Certifications</div>
            <div className="val">
              SGS · ISO 14064<br />
              <span className="text-muted" style={{ fontSize: 13 }}>14067 · 50001</span>
            </div>
          </div>
          <div className="strategy-cell">
            <div className="lbl">Industry Coverage</div>
            <div className="val">
              半导体 · 医药<br />
              <span className="text-muted" style={{ fontSize: 13 }}>电子材料 · 装备</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
