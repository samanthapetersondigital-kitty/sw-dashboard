import { useState } from "react";

const PASSWORD = "sw";

function PasswordGate({ children }) {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("bwpp_auth") === "1");
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  if (authed) return children;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem("bwpp_auth", "1");
      setAuthed(true);
    } else {
      setError(true);
      setInput("");
    }
  };
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "#060f1a" }}>
      <div style={{ background: "#091929", border: "1px solid #1e3a5f", borderRadius: 12, padding: "40px 48px", minWidth: 320, textAlign: "center" }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Scott Wiener Dashboard</div>
        <div style={{ fontSize: 14, color: "#64748b", marginBottom: 24 }}>Enter password to continue</div>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Password"
            autoFocus
            style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: error ? "1px solid #ef4444" : "1px solid #1e3a5f", background: "#060f1a", color: "#fff", fontSize: 15, marginBottom: 8, boxSizing: "border-box", outline: "none" }}
          />
          {error && <div style={{ color: "#ef4444", fontSize: 13, marginBottom: 8 }}>Incorrect password</div>}
          <button type="submit" style={{ width: "100%", padding: "10px 0", borderRadius: 8, background: "#1d4ed8", color: "#fff", border: "none", fontSize: 15, fontWeight: 600, cursor: "pointer", marginTop: 4 }}>Enter</button>
        </form>
      </div>
    </div>
  );
}

// ─── DATA (auto-generated — update weekly) ────────────────────────────────────
const CLIENT = {
  "name": "Scott Wiener",
  "cycle": "2025–2026",
  "lastUpdated": "April 14, 2026",
  "reportWeek": "Week of 4/13",
  "reportMonth": "April 2026",
  "reportQuarter": "Q2 2026"
};
const EMAIL_TOP_LINES = [
  {
    "subject": "SW_EM_ONBOARD_NTL_2603_1_1",
    "sendDate": "4/6",
    "period": "monthly",
    "recipients": 929,
    "opens": 81,
    "openRate": 8.7,
    "clicks": 5,
    "clickRate": 0.5,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_EV_SF_260403_1_1",
    "sendDate": "4/3",
    "period": "monthly",
    "recipients": 1767,
    "opens": 308,
    "openRate": 17.4,
    "clicks": 83,
    "clickRate": 4.7,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_PT_365DO_260401_1_1",
    "sendDate": "4/1",
    "period": "monthly",
    "recipients": 18197,
    "opens": 520,
    "openRate": 17.2,
    "clicks": 7883,
    "clickRate": 2.9,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_FR_180DO_260331_3_10",
    "sendDate": "3/31",
    "period": "monthly",
    "recipients": 15746,
    "opens": 350,
    "openRate": 19.5,
    "clicks": 7269,
    "clickRate": 2.2,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_FR_180DO_260331_1_8",
    "sendDate": "3/31",
    "period": "monthly",
    "recipients": 15790,
    "opens": 328,
    "openRate": 15.9,
    "clicks": 6576,
    "clickRate": 2.1,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_FR_180DO_260331_2_9",
    "sendDate": "3/31",
    "period": "monthly",
    "recipients": 15771,
    "opens": 327,
    "openRate": 18.0,
    "clicks": 6899,
    "clickRate": 2.1,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_FR_180DO_260330_1_7",
    "sendDate": "3/30",
    "period": "monthly",
    "recipients": 15963,
    "opens": 431,
    "openRate": 23.1,
    "clicks": 8119,
    "clickRate": 2.7,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_FR_180DO_260329_1_5",
    "sendDate": "3/29",
    "period": "monthly",
    "recipients": 16087,
    "opens": 478,
    "openRate": 16.6,
    "clicks": 7004,
    "clickRate": 3.0,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_FR_180DO_260329_2_6",
    "sendDate": "3/29",
    "period": "monthly",
    "recipients": 16076,
    "opens": 455,
    "openRate": 18.5,
    "clicks": 7349,
    "clickRate": 2.8,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_SPLIT_180DO_2603028_2_4",
    "sendDate": "3/28",
    "period": "monthly",
    "recipients": 16095,
    "opens": 477,
    "openRate": 17.6,
    "clicks": 7207,
    "clickRate": 3.0,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_FR_180DO_2603028_1_3",
    "sendDate": "3/28",
    "period": "monthly",
    "recipients": 16113,
    "opens": 699,
    "openRate": 17.9,
    "clicks": 7310,
    "clickRate": 4.3,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_FR_180DO_2603027_1_2",
    "sendDate": "3/27",
    "period": "monthly",
    "recipients": 16193,
    "opens": 363,
    "openRate": 15.9,
    "clicks": 7006,
    "clickRate": 2.2,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_FR_180DO_2603026_1_1",
    "sendDate": "3/26",
    "period": "monthly",
    "recipients": 16237,
    "opens": 332,
    "openRate": 16.4,
    "clicks": 6991,
    "clickRate": 2.0,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_PT_180DO_260324_1_1",
    "sendDate": "3/24",
    "period": "monthly",
    "recipients": 16316,
    "opens": 2886,
    "openRate": 17.7,
    "clicks": 565,
    "clickRate": 3.5,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_FR_180DO_2603021_1_1",
    "sendDate": "3/21",
    "period": "monthly",
    "recipients": 16344,
    "opens": 599,
    "openRate": 19.0,
    "clicks": 7655,
    "clickRate": 3.7,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_FR_180DO_2603013_1_1",
    "sendDate": "3/13",
    "period": "monthly",
    "recipients": 16269,
    "opens": 373,
    "openRate": 21.4,
    "clicks": 8080,
    "clickRate": 2.3,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_FR_180DO_2603012_1_1",
    "sendDate": "3/12",
    "period": "monthly",
    "recipients": 16319,
    "opens": 572,
    "openRate": 18.8,
    "clicks": 7721,
    "clickRate": 3.5,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_FR_180DO_260306_1_2",
    "sendDate": "3/6",
    "period": "monthly",
    "recipients": 16541,
    "opens": 427,
    "openRate": 20.1,
    "clicks": 8050,
    "clickRate": 2.6,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_FR_180DO_260306_2_3",
    "sendDate": "3/6",
    "period": "monthly",
    "recipients": 16477,
    "opens": 367,
    "openRate": 18.3,
    "clicks": 7886,
    "clickRate": 2.2,
    "unsubs": 0
  },
  {
    "subject": "SW_EM_FR_180DO_260305_1_1",
    "sendDate": "3/5",
    "period": "monthly",
    "recipients": 15955,
    "opens": 365,
    "openRate": 21.0,
    "clicks": 8205,
    "clickRate": 2.3,
    "unsubs": 0
  }
];
const EMAIL_MONTHLY_SUMMARY = {
  "sends": 53,
  "totalRecipients": 713249,
  "avgOpenRate": 19.8,
  "avgClickRate": 3.4,
  "totalUnsubs": 0
};
const EMAIL_QUARTERLY_SUMMARY = {
  "sends": 53,
  "totalRecipients": 713249,
  "avgOpenRate": 19.8,
  "avgClickRate": 3.4,
  "totalUnsubs": 0
};
const LIST_SIZE = [
  {
    "label": "30-Day Openers",
    "key": "30DO",
    "current": 0,
    "prev": 0,
    "change": 0.0,
    "goal": null
  },
  {
    "label": "90-Day Openers",
    "key": "90DO",
    "current": 0,
    "prev": 0,
    "change": 0.0,
    "goal": null
  },
  {
    "label": "180-Day Openers",
    "key": "180DO",
    "current": 0,
    "prev": 0,
    "change": 0.0,
    "goal": null
  },
  {
    "label": "Monthly New to List",
    "key": "1MNTL",
    "current": 0,
    "prev": 0,
    "change": 0.0,
    "goal": null
  },
  {
    "label": "All Subscribed",
    "key": "ALL",
    "current": 0,
    "prev": 0,
    "change": 0.0,
    "goal": null
  }
];
const FINANCES = [
  {
    "period": "Nov 2025",
    "type": "month",
    "totalActBlue": 298525.0,
    "digitalRaise": 3968.0
  },
  {
    "period": "Dec 2025",
    "type": "month",
    "totalActBlue": 270667.18,
    "digitalRaise": 17662.0
  },
  {
    "period": "Jan 2026",
    "type": "month",
    "totalActBlue": 205677.17,
    "digitalRaise": 7119.0
  },
  {
    "period": "Feb 2026",
    "type": "month",
    "totalActBlue": 275088.85,
    "digitalRaise": 3703.0
  },
  {
    "period": "Mar 2026",
    "type": "month",
    "totalActBlue": 221530.0,
    "digitalRaise": 12221.0
  },
  {
    "period": "Apr 2026",
    "type": "month",
    "totalActBlue": 22664.0,
    "digitalRaise": 1502.0
  },
  {
    "period": "Q2 2026 (QTD)",
    "type": "qtd",
    "totalActBlue": 1294152.2,
    "digitalRaise": 46175.0
  }
];
const DIGITAL_PCT_MIN = 25;
const DIGITAL_PCT_MAX = 30;
const FINANCE_MONTHLY = {
  "period": "April 2026 (MTD)",
  "totalActBlue": 22664.0,
  "digitalRaise": 1502.0,
  "projection": 29463
};
const FINANCE_QUARTERLY = {
  "period": "Q2 2026 (QTD)",
  "totalActBlue": 1294152.2,
  "digitalRaise": 46175.0,
  "projection": 1488275
};
const ACQUISITION_ROI = [];
const TEXTING_ROI = [
  {
    "campaign": "250913_SW Masking Bill",
    "sendDate": "9/13",
    "period": "monthly",
    "sent": 4749,
    "delivered": 4749,
    "responses": 0,
    "optOuts": 430,
    "donations": 0,
    "raised": 0
  },
  {
    "campaign": "SW EOQ #2",
    "sendDate": "9/30",
    "period": "monthly",
    "sent": 926,
    "delivered": 926,
    "responses": 0,
    "optOuts": 41,
    "donations": 0,
    "raised": 0
  },
  {
    "campaign": "251022_Launch Donors",
    "sendDate": "10/22",
    "period": "monthly",
    "sent": 4297,
    "delivered": 4297,
    "responses": 0,
    "optOuts": 175,
    "donations": 0,
    "raised": 0
  },
  {
    "campaign": "251025 KICKOFF INVITE",
    "sendDate": "10/25",
    "period": "monthly",
    "sent": 16630,
    "delivered": 16630,
    "responses": 0,
    "optOuts": 1237,
    "donations": 0,
    "raised": 0
  },
  {
    "campaign": "Kickoff - TURNOUT LAUNCH",
    "sendDate": "10/29",
    "period": "monthly",
    "sent": 18,
    "delivered": 18,
    "responses": 0,
    "optOuts": 0,
    "donations": 0,
    "raised": 0
  },
  {
    "campaign": "Congressional Forum Invite 251223",
    "sendDate": "12/23",
    "period": "monthly",
    "sent": 1592,
    "delivered": 1592,
    "responses": 0,
    "optOuts": 43,
    "donations": 0,
    "raised": 0
  },
  {
    "campaign": "260110_SF ALL_Canvass Invite",
    "sendDate": "1/10",
    "period": "monthly",
    "sent": 11643,
    "delivered": 11643,
    "responses": 0,
    "optOuts": 304,
    "donations": 0,
    "raised": 0
  },
  {
    "campaign": "260116_Canvass Tomorrow!",
    "sendDate": "1/16",
    "period": "monthly",
    "sent": 10973,
    "delivered": 10973,
    "responses": 0,
    "optOuts": 249,
    "donations": 0,
    "raised": 0
  }
];
const META_ADS = [];
const GOOGLE_ADS = [];
const GROWTH_CALC = [
  {
    "metric": "List Growth Rate (MoM)",
    "value": "—",
    "benchmark": "+1.5%",
    "status": "above"
  },
  {
    "metric": "Email Churn Rate",
    "value": "—",
    "benchmark": "<0.15%",
    "status": "above"
  },
  {
    "metric": "Avg Open Rate (30d)",
    "value": "19.8%",
    "benchmark": ">14% = Strong",
    "status": "above"
  },
  {
    "metric": "Avg Click Rate (30d)",
    "value": "3.4%",
    "benchmark": ">3.0%",
    "status": "above"
  },
  {
    "metric": "SMS Opt-Out Rate",
    "value": "—",
    "benchmark": "<0.20%",
    "status": "above"
  },
  {
    "metric": "Digital % of ActBlue",
    "value": "3.6%",
    "benchmark": "25–30%",
    "status": "below"
  }
];
const DEFAULT_HIGHLIGHTS = [
  "Dashboard auto-generated for Scott Wiener — April 14, 2026",
  "Update this section with key insights for Week of 4/13",
  "Add notable email performance observations here",
  "Add texting campaign highlights here",
  "Add fundraising milestones or anomalies here"
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const fmt = (n) => n?.toLocaleString() ?? "—";
const fmtD = (n) => n != null ? `$${n.toLocaleString()}` : "—";
const fmtP = (n) => n != null ? `${n}%` : "—";

function openRateColor(r) {
  if (r >= 14) return "#4ade80";
  if (r >= 10) return "#fbbf24";
  return "#f87171";
}
function openRateBadge(r) {
  if (r >= 14) return { label: "Strong",  color: "#4ade80", bg: "#052e16", border: "#166534" };
  if (r >= 10) return { label: "Average", color: "#fbbf24", bg: "#2d1f00", border: "#92400e" };
  return           { label: "Low",     color: "#f87171", bg: "#3f0f0f", border: "#7f1d1d" };
}
function digitalPctStatus(p) {
  if (p >= DIGITAL_PCT_MIN && p <= DIGITAL_PCT_MAX) return { color: "#4ade80", label: "On Target",    bg: "#052e16", border: "#166534" };
  if (p > DIGITAL_PCT_MAX)                          return { color: "#60a5fa", label: "Above Target", bg: "#0c1f3f", border: "#1d4ed8" };
  return                                                   { color: "#f87171", label: "Below Target", bg: "#3f0f0f", border: "#7f1d1d" };
}
function Delta({ val }) {
  if (val == null) return null;
  const up = val >= 0;
  return <span style={{ color: up ? "#22c55e" : "#ef4444", fontWeight: 600, fontSize: 13 }}>{up ? "▲" : "▼"} {Math.abs(val).toFixed(2)}%</span>;
}
function GoalBar({ current, goal }) {
  if (!goal) return null;
  const pct = Math.min((current / goal) * 100, 100);
  return (
    <div style={{ marginTop: 6 }}>
      <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 3 }}>{fmt(current)} / {fmt(goal)} goal ({pct.toFixed(1)}%)</div>
      <div style={{ background: "#1e3a5f", borderRadius: 99, height: 6, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: "linear-gradient(90deg,#1d4ed8,#60a5fa)", borderRadius: 99 }} />
      </div>
    </div>
  );
}
function DigitalPctBar({ pct }) {
  const status = digitalPctStatus(pct);
  const barWidth = Math.min(pct / 50 * 100, 100);
  const minMark = DIGITAL_PCT_MIN / 50 * 100;
  const maxMark = DIGITAL_PCT_MAX / 50 * 100;
  return (
    <div style={{ marginTop: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontSize: 12 }}>
        <span style={{ color: "#94a3b8" }}>Digital % of Total Raise</span>
        <span style={{ color: status.color, fontWeight: 700 }}>{pct.toFixed(1)}% — {status.label}</span>
      </div>
      <div style={{ position: "relative", background: "#1e3a5f", borderRadius: 99, height: 10 }}>
        <div style={{ position: "absolute", top: 0, bottom: 0, left: `${minMark}%`, width: `${maxMark - minMark}%`, background: "rgba(74,222,128,0.12)", borderLeft: "1px dashed #166534", borderRight: "1px dashed #166534" }} />
        <div style={{ width: `${barWidth}%`, height: "100%", background: `linear-gradient(90deg,#1d4ed8,${status.color})`, borderRadius: 99 }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3, fontSize: 10, color: "#475569" }}>
        <span>0%</span>
        <span style={{ color: "#4ade80" }}>Target zone: {DIGITAL_PCT_MIN}–{DIGITAL_PCT_MAX}%</span>
        <span>50%</span>
      </div>
    </div>
  );
}

// ─── PERIOD TOGGLE ────────────────────────────────────────────────────────────
function PeriodToggle({ active, onChange }) {
  const options = [
    { id: "weekly",    label: "Weekly",    sub: CLIENT.reportWeek },
    { id: "monthly",   label: "Monthly",   sub: CLIENT.reportMonth },
    { id: "quarterly", label: "Quarterly", sub: CLIENT.reportQuarter },
  ];
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
      {options.map(o => (
        <button key={o.id} onClick={() => onChange(o.id)} style={{
          background: active === o.id ? "#1d4ed8" : "#091929",
          border: `1px solid ${active === o.id ? "#3b82f6" : "#1e3a5f"}`,
          borderRadius: 8, padding: "8px 18px", cursor: "pointer", textAlign: "left", transition: "all 0.15s",
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: active === o.id ? "#fff" : "#94a3b8", fontFamily: "'Sora', sans-serif" }}>{o.label}</div>
          <div style={{ fontSize: 11, color: active === o.id ? "#93c5fd" : "#475569" }}>{o.sub}</div>
        </button>
      ))}
    </div>
  );
}

// ─── SUMMARY CALLOUT ──────────────────────────────────────────────────────────
function SummaryCallout({ label, children }) {
  return (
    <div style={{ background: "#091929", border: "1px solid #1e3a5f", borderRadius: 12, padding: "16px 22px", marginBottom: 20 }}>
      <div style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>{label}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 28 }}>{children}</div>
    </div>
  );
}
function SummaryItem({ label, value, color }) {
  return (
    <div>
      <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Sora', sans-serif", color: color || "#60a5fa", lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 11, color: "#64748b", marginTop: 3 }}>{label}</div>
    </div>
  );
}

// ─── SECTION ──────────────────────────────────────────────────────────────────
function Section({ title, subtitle, children }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 700, color: "#e2e8f0", margin: 0, letterSpacing: "-0.2px" }}>{title}</h2>
        {subtitle && <p style={{ margin: "4px 0 0", fontSize: 13, color: "#64748b" }}>{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

// ─── TABLE ────────────────────────────────────────────────────────────────────
function Table({ headers, rows, alignRight = [] }) {
  return (
    <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #1e3a5f" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, fontFamily: "'Inter', sans-serif" }}>
        <thead>
          <tr style={{ background: "#0c2340" }}>
            {headers.map((h, i) => (
              <th key={i} style={{ padding: "10px 16px", textAlign: alignRight.includes(i) ? "right" : "left", color: "#94a3b8", fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ borderTop: "1px solid #1e3a5f", background: ri % 2 === 0 ? "#091929" : "#0b1f33" }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ padding: "10px 16px", textAlign: alignRight.includes(ci) ? "right" : "left", color: "#cbd5e1", whiteSpace: "nowrap" }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── STAT CARD ────────────────────────────────────────────────────────────────
function StatCard({ label, value, sub, accent }) {
  return (
    <div style={{ background: "#091929", border: "1px solid #1e3a5f", borderRadius: 12, padding: "20px 24px", flex: "1 1 180px", minWidth: 160 }}>
      <div style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Sora', sans-serif", color: accent || "#60a5fa", lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ marginTop: 6, fontSize: 12, color: "#64748b" }}>{sub}</div>}
    </div>
  );
}

// ─── EDITABLE HIGHLIGHTS ──────────────────────────────────────────────────────
function EditableHighlights({ highlights, onChange }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(highlights.join("\n"));
  const save = () => { onChange(draft.split("\n").map(s => s.trim()).filter(Boolean)); setEditing(false); };
  const cancel = () => { setDraft(highlights.join("\n")); setEditing(false); };
  return (
    <div style={{ background: "#091929", border: "1px solid #1e3a5f", borderRadius: 12, padding: "20px 24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontSize: 12, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em" }}>Highlights</div>
        {editing ? (
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={save} style={{ background: "#1d4ed8", color: "#fff", border: "none", borderRadius: 6, padding: "5px 14px", fontSize: 12, cursor: "pointer", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Save</button>
            <button onClick={cancel} style={{ background: "#1e3a5f", color: "#94a3b8", border: "none", borderRadius: 6, padding: "5px 14px", fontSize: 12, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>Cancel</button>
          </div>
        ) : (
          <button onClick={() => { setDraft(highlights.join("\n")); setEditing(true); }} style={{ background: "transparent", color: "#60a5fa", border: "1px solid #1e4976", borderRadius: 6, padding: "5px 14px", fontSize: 12, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>Edit</button>
        )}
      </div>
      {editing ? (
        <textarea value={draft} onChange={e => setDraft(e.target.value)} style={{ width: "100%", background: "#060f1a", border: "1px solid #1e4976", borderRadius: 8, color: "#e2e8f0", padding: "12px", fontSize: 13, fontFamily: "'Inter', sans-serif", lineHeight: 1.9, resize: "vertical", minHeight: 140, outline: "none", boxSizing: "border-box" }} placeholder="One highlight per line..." />
      ) : (
        <ul style={{ margin: 0, paddingLeft: 20, color: "#94a3b8", fontSize: 13, lineHeight: 2.1 }}>
          {highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      )}
    </div>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "overview",    label: "Digital Overview" },
  { id: "email",       label: "Email" },
  { id: "listsize",    label: "List Size" },
  { id: "finances",    label: "Finances" },
  { id: "acquisition", label: "Acquisition ROI" },
  { id: "texting",     label: "Texting ROI" },
  { id: "ads",         label: "Ad Reporting" },
  { id: "growth",      label: "Growth" },
];

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function Dashboard() {
  const [active, setActive] = useState("overview");
  const [period, setPeriod] = useState("weekly");
  const [highlights, setHighlights] = useState(DEFAULT_HIGHLIGHTS);
  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const emailRows   = period === "weekly"    ? EMAIL_TOP_LINES.filter(r => r.period === "weekly")
                    : period === "monthly"   ? EMAIL_TOP_LINES.filter(r => ["weekly","monthly"].includes(r.period))
                    : EMAIL_TOP_LINES;
  const textingRows = TEXTING_ROI.filter(r => period === "weekly" ? r.period === "weekly" : period === "monthly" ? ["weekly","monthly"].includes(r.period) : true);
  const metaRows    = META_ADS.filter(r => period === "weekly" ? r.period === "weekly" : period === "monthly" ? ["weekly","monthly"].includes(r.period) : true);
  const googleRows  = GOOGLE_ADS.filter(r => period === "weekly" ? r.period === "weekly" : period === "monthly" ? ["weekly","monthly"].includes(r.period) : true);
  const acquisRows  = ACQUISITION_ROI.filter(r => period === "weekly" ? r.period === "weekly" : period === "monthly" ? ["weekly","monthly"].includes(r.period) : true);
  const financeRows = period === "quarterly" ? FINANCES : FINANCES.filter(r => r.type === "month");

  const totalActBlue = FINANCES.filter(r => r.type === "month").reduce((s, r) => s + r.totalActBlue, 0);
  const totalDigital = FINANCES.filter(r => r.type === "month").reduce((s, r) => s + r.digitalRaise, 0);
  const overallPct   = totalActBlue > 0 ? (totalDigital / totalActBlue) * 100 : 0;
  const overallStatus = digitalPctStatus(overallPct);

  const periodLabel = period === "weekly" ? CLIENT.reportWeek : period === "monthly" ? CLIENT.reportMonth : CLIENT.reportQuarter;

  const initials = CLIENT.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  return (
    <PasswordGate>
      <div style={{ minHeight: "100vh", background: "#060f1a", color: "#e2e8f0", fontFamily: "'Inter', sans-serif" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap');
          * { box-sizing: border-box; }
          ::-webkit-scrollbar { width: 6px; height: 6px; }
          ::-webkit-scrollbar-track { background: #060f1a; }
          ::-webkit-scrollbar-thumb { background: #1e3a5f; border-radius: 3px; }
          .nav-item { cursor: pointer; transition: color 0.15s; }
          .nav-item:hover { color: #60a5fa !important; }
          .badge-above { background: #052e16; color: #4ade80; border: 1px solid #166534; }
          .badge-below { background: #3f0f0f; color: #f87171; border: 1px solid #7f1d1d; }
        `}</style>

        {/* HEADER */}
        <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(6,15,26,0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1e3a5f", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "linear-gradient(135deg,#1d4ed8,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 800, fontFamily: "'Sora', sans-serif", color: "#fff", flexShrink: 0 }}>{initials}</div>
            <div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, color: "#e2e8f0", lineHeight: 1.1 }}>{CLIENT.name}</div>
              <div style={{ fontSize: 11, color: "#475569", letterSpacing: "0.06em" }}>{CLIENT.cycle} CAMPAIGN REPORT</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", background: "#091929", border: "1px solid #1e3a5f", borderRadius: 8, overflow: "hidden" }}>
              {["weekly","monthly","quarterly"].map(p => (
                <button key={p} onClick={() => setPeriod(p)} style={{ background: period === p ? "#1d4ed8" : "transparent", border: "none", color: period === p ? "#fff" : "#64748b", padding: "6px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif", textTransform: "capitalize", transition: "all 0.15s" }}>{p}</button>
              ))}
            </div>
            <div style={{ fontSize: 12, color: "#475569" }}>Updated <span style={{ color: "#60a5fa" }}>{CLIENT.lastUpdated}</span></div>
          </div>
        </header>

        <div style={{ display: "flex" }}>
          {/* SIDEBAR */}
          <nav style={{ width: 200, flexShrink: 0, position: "sticky", top: 64, height: "calc(100vh - 64px)", overflowY: "auto", borderRight: "1px solid #1e3a5f", padding: "24px 0", background: "#07121e" }}>
            {NAV_ITEMS.map(item => (
              <div key={item.id} className="nav-item" onClick={() => scrollTo(item.id)} style={{ padding: "9px 24px", fontSize: 13, fontWeight: active === item.id ? 600 : 400, color: active === item.id ? "#60a5fa" : "#64748b", borderLeft: active === item.id ? "2px solid #3b82f6" : "2px solid transparent" }}>
                {item.label}
              </div>
            ))}
            <div style={{ margin: "24px 24px 0", padding: "12px 16px", background: "#0c2340", borderRadius: 8, border: "1px solid #1e3a5f" }}>
              <div style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Viewing</div>
              <div style={{ fontSize: 12, color: "#94a3b8", textTransform: "capitalize", fontWeight: 600 }}>{period}</div>
              <div style={{ fontSize: 11, color: "#475569", marginTop: 2 }}>{periodLabel}</div>
            </div>
          </nav>

          <main style={{ flex: 1, padding: "40px 48px", maxWidth: "calc(100% - 200px)", overflowX: "hidden" }}>

            {/* DIGITAL OVERVIEW */}
            <div id="overview">
              <Section title="Digital Overview" subtitle={`${periodLabel} · ${CLIENT.lastUpdated}`}>
                <PeriodToggle active={period} onChange={setPeriod} />
                {period === "monthly" && (
                  <SummaryCallout label={`${CLIENT.reportMonth} — Monthly Summary`}>
                    <SummaryItem label="Email Sends" value={EMAIL_MONTHLY_SUMMARY.sends} color="#60a5fa" />
                    <SummaryItem label="Avg Open Rate" value={`${EMAIL_MONTHLY_SUMMARY.avgOpenRate}%`} color="#fbbf24" />
                    <SummaryItem label="Digital Raised (MTD)" value={fmtD(FINANCE_MONTHLY.digitalRaise)} color="#4ade80" />
                    <SummaryItem label="% to Projection" value={FINANCE_MONTHLY.projection > 0 ? `${((FINANCE_MONTHLY.totalActBlue / FINANCE_MONTHLY.projection) * 100).toFixed(1)}%` : "—"} color="#a78bfa" />
                  </SummaryCallout>
                )}
                {period === "quarterly" && (
                  <SummaryCallout label={`${CLIENT.reportQuarter} — Quarterly Summary`}>
                    <SummaryItem label="Email Sends" value={EMAIL_QUARTERLY_SUMMARY.sends} color="#60a5fa" />
                    <SummaryItem label="Avg Open Rate" value={`${EMAIL_QUARTERLY_SUMMARY.avgOpenRate}%`} color="#fbbf24" />
                    <SummaryItem label="Digital Raised (QTD)" value={fmtD(FINANCE_QUARTERLY.digitalRaise)} color="#4ade80" />
                    <SummaryItem label="Total ActBlue (QTD)" value={fmtD(FINANCE_QUARTERLY.totalActBlue)} color="#a78bfa" />
                    <SummaryItem label="% to Q Projection" value={FINANCE_QUARTERLY.projection > 0 ? `${((FINANCE_QUARTERLY.totalActBlue / FINANCE_QUARTERLY.projection) * 100).toFixed(1)}%` : "—"} color="#fb923c" />
                  </SummaryCallout>
                )}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
                  <StatCard label="Total Subscribers" value={fmt(LIST_SIZE.find(r => r.key === "ALL")?.current || 0)} sub={LIST_SIZE.find(r => r.key === "ALL")?.goal ? `Goal: ${fmt(LIST_SIZE.find(r => r.key === "ALL").goal)}` : null} />
                  <StatCard label="Avg Open Rate" value={`${EMAIL_MONTHLY_SUMMARY.avgOpenRate}%`} sub="14%+ = Strong" accent="#fbbf24" />
                  <StatCard label={period === "quarterly" ? "Digital Raised (QTD)" : "Digital Raised (MTD)"} value={period === "quarterly" ? fmtD(FINANCE_QUARTERLY.digitalRaise) : fmtD(FINANCE_MONTHLY.digitalRaise)} sub={`${((period === "quarterly" ? FINANCE_QUARTERLY.digitalRaise / (FINANCE_QUARTERLY.totalActBlue || 1) : FINANCE_MONTHLY.digitalRaise / (FINANCE_MONTHLY.totalActBlue || 1)) * 100).toFixed(1)}% of ActBlue`} accent="#34d399" />
                  <StatCard label="SMS List" value={fmt(LIST_SIZE.find(r => r.key === "180DO")?.current || 0)} sub="180-Day Openers" accent="#fb923c" />
                  <StatCard label="Total Ad Spend" value={fmtD(META_ADS.reduce((s,r) => s + (r.spend||0), 0) + GOOGLE_ADS.reduce((s,r) => s + (r.spend||0), 0))} sub="Meta + Google" accent="#f472b6" />
                </div>
                <EditableHighlights highlights={highlights} onChange={setHighlights} />
              </Section>
            </div>

            {/* EMAIL */}
            <div id="email">
              <Section title="Email" subtitle="Broadcast performance from EveryAction">
                <PeriodToggle active={period} onChange={setPeriod} />
                {period === "monthly" && (
                  <SummaryCallout label={`${CLIENT.reportMonth} — Email Summary`}>
                    <SummaryItem label="Total Sends" value={EMAIL_MONTHLY_SUMMARY.sends} />
                    <SummaryItem label="Total Recipients" value={fmt(EMAIL_MONTHLY_SUMMARY.totalRecipients)} />
                    <SummaryItem label="Avg Open Rate" value={`${EMAIL_MONTHLY_SUMMARY.avgOpenRate}%`} color={openRateColor(EMAIL_MONTHLY_SUMMARY.avgOpenRate)} />
                    <SummaryItem label="Avg Click Rate" value={`${EMAIL_MONTHLY_SUMMARY.avgClickRate}%`} color="#a78bfa" />
                    <SummaryItem label="Total Unsubs" value={EMAIL_MONTHLY_SUMMARY.totalUnsubs} color="#f87171" />
                  </SummaryCallout>
                )}
                {period === "quarterly" && (
                  <SummaryCallout label={`${CLIENT.reportQuarter} — Email Summary`}>
                    <SummaryItem label="Total Sends" value={EMAIL_QUARTERLY_SUMMARY.sends} />
                    <SummaryItem label="Total Recipients" value={fmt(EMAIL_QUARTERLY_SUMMARY.tot