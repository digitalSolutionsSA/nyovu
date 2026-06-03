export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Hero image — full site background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Heavy dark overlay so content stays readable on all pages */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.78)" }}
      />

      {/* African-inspired geometric grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(0,229,255,0.8) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255,0,204,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Cyan orb — top left */}
      <div
        className="absolute"
        style={{
          top: "-10%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 65%)",
          animation: "float-orb 12s ease-in-out infinite",
        }}
      />

      {/* Magenta orb — bottom right */}
      <div
        className="absolute"
        style={{
          bottom: "-15%",
          right: "-10%",
          width: "55vw",
          height: "55vw",
          background: "radial-gradient(circle, rgba(255,0,204,0.1) 0%, transparent 65%)",
          animation: "float-orb 16s ease-in-out infinite",
          animationDelay: "-6s",
        }}
      />
    </div>
  );
}
