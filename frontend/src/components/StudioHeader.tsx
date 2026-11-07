import type { ApiStatus } from "../types";
import { studioStyles as styles } from "../styles";

type StudioHeaderProps = {
  apiStatus: ApiStatus;
};

const statusLabel: Record<ApiStatus, string> = {
  checking: "Connecting to API",
  online: "API connected",
  offline: "API unavailable",
};

export function StudioHeader({ apiStatus }: StudioHeaderProps) {
  return (
    <header className={styles.header}>
      <div>
        <div className="flex items-center gap-2 text-sm text-[#92919b]">
          <span>Workspace</span><span className="text-[#55545c]">/</span>
          <span className="text-[#f4f3f6]">Studio</span>
        </div>
        <p className="mt-1 text-xs text-[#777680]">Make something remarkable.</p>
      </div>
      <div className={styles.headerStatus}>
        <span className={`${styles.statusDot} ${apiStatus === "offline" ? "bg-rose-400" : ""}`} />
        {statusLabel[apiStatus]}
      </div>
    </header>
  );
}
