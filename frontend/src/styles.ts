export const studioStyles = {
  app: "min-h-screen bg-[#111114] font-sans text-[#f5f4f7] antialiased lg:flex",
  sidebar:
    "flex min-h-[68px] items-center justify-between border-b border-white/[0.07] bg-[#151518] px-5 lg:fixed lg:inset-y-0 lg:left-0 lg:z-10 lg:flex lg:w-[228px] lg:flex-col lg:items-stretch lg:border-b-0 lg:border-r lg:px-4 lg:py-6",
  brand: "flex items-center gap-2.5 text-[19px] font-semibold tracking-[-0.06em] text-white",
  brandMark:
    "flex size-8 items-center justify-center rounded-[10px] bg-violet-500 text-white shadow-[0_0_24px_rgba(139,92,246,0.24)]",
  sideLabel: "hidden px-3 pt-10 text-[10px] font-semibold tracking-[0.17em] text-[#74727e] lg:block",
  navActive:
    "flex items-center gap-3 rounded-lg bg-violet-500/[0.13] px-3 py-2.5 text-sm font-medium text-violet-200",
  navItem:
    "flex cursor-not-allowed items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-[#888691] opacity-70",
  navSoon:
    "ml-auto rounded bg-white/[0.06] px-1.5 py-0.5 text-[9px] font-semibold tracking-wider text-[#96949e]",
  sidebarBottom:
    "hidden items-center gap-3 border-t border-white/[0.07] px-2 pt-5 lg:mt-auto lg:flex",
  avatar:
    "flex size-9 shrink-0 items-center justify-center rounded-full border border-violet-300/20 bg-violet-400/10 text-sm font-semibold text-violet-200",
  statusDot: "size-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.55)]",
  main: "min-h-screen min-w-0 flex-1 lg:ml-[228px]",
  header:
    "flex h-[76px] items-center justify-between border-b border-white/[0.07] px-5 sm:px-8 lg:px-10",
  headerStatus:
    "flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[11px] text-[#aaa8b2]",
  workspace:
    "mx-auto grid w-full max-w-[1520px] grid-cols-1 items-start gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(320px,390px)_minmax(0,1fr)] lg:gap-6 lg:px-8 lg:py-8",
  panel:
    "rounded-2xl border border-white/[0.08] bg-[#19191d] p-5 shadow-[0_12px_42px_rgba(0,0,0,0.12)] sm:p-6",
  headingIcon:
    "flex size-10 shrink-0 items-center justify-center rounded-xl border border-violet-300/15 bg-violet-400/[0.08] text-violet-300",
  label: "text-[10px] font-semibold tracking-[0.14em] text-[#c5c3cc]",
  modeTabs: "grid grid-cols-2 gap-1 rounded-xl border border-white/[0.07] bg-[#121215] p-1",
  modeButton:
    "flex min-h-10 items-center justify-center gap-2 rounded-lg px-2 text-sm font-medium text-[#92909c] transition-colors hover:text-white",
  modeActive:
    "flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[#29272f] px-2 text-sm font-medium text-white shadow-sm ring-1 ring-white/[0.07]",
  modeTag:
    "hidden rounded bg-violet-400/10 px-1.5 py-1 text-[8px] font-semibold tracking-[0.08em] text-violet-200 sm:inline",
  textButton:
    "inline-flex items-center gap-1.5 text-xs font-medium text-violet-300 transition hover:text-violet-200",
  input:
    "mt-2.5 w-full rounded-xl border border-white/[0.1] bg-[#121215] px-3.5 py-3 text-xs text-[#eae9ed] outline-none transition placeholder:text-[#66646f] focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10",
  textarea:
    "mt-2.5 min-h-[132px] w-full resize-y rounded-xl border border-white/[0.1] bg-[#121215] px-3.5 py-3.5 text-sm leading-6 text-[#eeedf1] outline-none transition placeholder:text-[#696772] focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/10",
  suggestHeading:
    "flex items-center justify-between text-[9px] font-semibold tracking-[0.15em] text-[#85838e]",
  suggestion:
    "flex w-full items-center justify-between gap-3 rounded-lg border border-white/[0.07] bg-white/[0.018] px-3 py-2.5 text-left text-xs leading-[1.4] text-[#aaa8b2] transition hover:border-violet-300/25 hover:bg-violet-300/[0.04] hover:text-[#e9e7ed]",
  error:
    "mt-4 rounded-lg border border-rose-400/20 bg-rose-400/[0.07] px-3.5 py-3 text-xs leading-5 text-rose-200",
  generateButton:
    "mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-violet-500 px-4 text-sm font-semibold text-white shadow-[0_5px_18px_rgba(139,92,246,0.2)] transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:bg-[#46424f] disabled:text-[#aaa7b1] disabled:shadow-none",
  spinner:
    "size-4 animate-spin rounded-full border-2 border-white/35 border-t-white",
  canvasPanel: "min-w-0 rounded-2xl border border-white/[0.08] bg-[#19191d] p-4 sm:p-5",
  canvasHeader: "flex min-h-11 items-center justify-between gap-3 px-1",
  openButton:
    "inline-flex items-center gap-1.5 rounded-lg border border-white/[0.09] px-3 py-2 text-xs font-medium text-[#d3d1d9] transition hover:border-violet-300/30 hover:text-white",
  canvas:
    "relative mt-4 flex min-h-[390px] items-center justify-center overflow-hidden rounded-xl border border-white/[0.07] bg-[#121215] sm:min-h-[500px] lg:min-h-[620px]",
  emptyIllustration: "relative flex size-[76px] items-center justify-center",
  emptyFrame:
    "flex size-16 items-center justify-center rounded-[18px] border border-violet-300/15 bg-[radial-gradient(circle_at_40%_30%,rgba(167,139,250,0.13),rgba(167,139,250,0.02)_70%)] text-violet-300",
  emptySparkle:
    "absolute -right-0.5 -top-0.5 flex size-7 items-center justify-center rounded-full border border-violet-300/15 bg-[#1d1b23] text-violet-200",
  canvasHint:
    "mt-6 flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] text-[#797782]",
  loadingMark:
    "flex size-16 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-300/[0.08] text-violet-200 shadow-[0_0_36px_rgba(139,92,246,0.12)]",
  progressTrack: "mt-7 h-1 w-48 overflow-hidden rounded-full bg-white/[0.08]",
  progressBar:
    "h-full w-1/2 animate-[pulse_1.5s_ease-in-out_infinite] rounded-full bg-violet-400",
  resultBadge:
    "absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-[#111114]/80 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-emerald-200 backdrop-blur",
  canvasFooter:
    "flex min-h-11 items-center justify-between gap-3 px-1 pt-3 text-[11px] text-[#898792]",
  footer:
    "mx-auto flex max-w-[1520px] items-center justify-between gap-4 border-t border-white/[0.06] px-5 py-5 text-[9px] font-medium tracking-[0.13em] text-[#777580] sm:px-8 lg:px-10",
} as const;
