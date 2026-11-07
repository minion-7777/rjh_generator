import type { ApiStatus } from "../types";
import { studioStyles as styles } from "../styles";
import { Icon } from "./Icon";

type StudioSidebarProps = {
  apiStatus: ApiStatus;
};

export function StudioSidebar({ apiStatus }: StudioSidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <a className={styles.brand} href="#" aria-label="Forma home">
        <span className={styles.brandMark}><Icon name="sparkles" size={20} /></span>
        <span>forma<span className="text-violet-300">.</span></span>
      </a>
      <div className={styles.sideLabel}>WORKSPACE</div>
      <nav className="mt-3 hidden flex-col gap-1 lg:flex" aria-label="Workspace">
        <a className={styles.navActive} href="#studio" aria-current="page">
          <Icon name="sparkles" size={17} /> Studio
        </a>
        <button className={styles.navItem} type="button" disabled title="Your generations will appear in the canvas during this session">
          <Icon name="image" size={17} /> Creations
          <span className={styles.navSoon}>SOON</span>
        </button>
      </nav>
      <div className={styles.sidebarBottom}>
        <div className={styles.avatar}>F</div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-white">Your workspace</p>
          <p className="mt-0.5 text-xs text-[#8e8d98]">Personal studio</p>
        </div>
        <span
          className={`${styles.statusDot} ${apiStatus === "offline" ? "bg-rose-400" : ""}`}
          title={`Generation API ${apiStatus}`}
        />
      </div>
    </aside>
  );
}
