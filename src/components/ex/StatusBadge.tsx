type Status = "high" | "medium" | "low" | "connected" | "missing" | "partial" | "strong" | "premium" | "ready" | "pending";

const map: Record<Status, { bg: string; fg: string; label?: string }> = {
  high: { bg: "rgba(192,57,43,0.10)", fg: "var(--risk-critical)", label: "HIGH" },
  medium: { bg: "rgba(212,131,74,0.12)", fg: "var(--risk-medium)", label: "MEDIUM" },
  low: { bg: "rgba(154,154,142,0.18)", fg: "var(--text-secondary)", label: "LOW" },
  connected: { bg: "rgba(45,106,79,0.12)", fg: "var(--positive)", label: "CONNECTED" },
  missing: { bg: "rgba(154,154,142,0.18)", fg: "var(--text-secondary)", label: "NOT CONNECTED" },
  partial: { bg: "rgba(212,131,74,0.12)", fg: "var(--risk-medium)", label: "PARTIAL" },
  strong: { bg: "transparent", fg: "var(--accent)", label: "STRONG ASSET" },
  premium: { bg: "transparent", fg: "var(--accent)", label: "PREMIUM" },
  ready: { bg: "rgba(45,106,79,0.12)", fg: "var(--positive)", label: "READY" },
  pending: { bg: "rgba(212,131,74,0.12)", fg: "var(--risk-medium)", label: "PENDING" },
};

export function StatusBadge({ status, children }: { status: Status; children?: React.ReactNode }) {
  const s = map[status];
  const isOutline = status === "strong" || status === "premium";
  return (
    <span
      className="inline-flex items-center text-[10px] font-medium tracking-[0.16em] uppercase px-2.5 py-1 rounded-sm"
      style={{
        backgroundColor: s.bg,
        color: s.fg,
        border: isOutline ? `1px solid ${s.fg}` : "none",
      }}
    >
      {children ?? s.label}
    </span>
  );
}
