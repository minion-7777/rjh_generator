import { studioStyles as styles } from "../styles";
import { Icon } from "./Icon";

export function StudioFooter() {
  return (
    <footer className={styles.footer}>
      <span>FORMA STUDIO <span className="text-[#56545f]">·</span> MADE FOR IMAGINATION</span>
      <span className="flex items-center gap-1.5"><Icon name="sparkles" size={12} /> Powered by AI</span>
    </footer>
  );
}
