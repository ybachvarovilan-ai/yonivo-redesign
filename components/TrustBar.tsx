export default function TrustBar() {
  return (
    <div className="border-y border-border bg-surface/50 py-6 backdrop-blur-sm relative z-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 md:gap-16 opacity-70">
        <span className="text-sm font-medium text-secondary uppercase tracking-widest">
          Trusted by brands powered by
        </span>
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-2 font-display font-bold text-xl text-primary hover:text-magento transition-colors cursor-default">
            <i className="fas fa-shopping-cart text-magento text-2xl"></i> Magento 2
          </div>
          <div className="flex items-center gap-1 font-display font-bold text-xl text-primary hover:text-accent transition-colors cursor-default">
            <span className="text-magento">hyvä</span> theme
          </div>
          <div className="flex items-center gap-2 font-display font-bold text-xl text-primary hover:text-red-500 transition-colors cursor-default">
            <i className="fab fa-adobe text-red-500"></i> Commerce
          </div>
        </div>
      </div>
    </div>
  );
}