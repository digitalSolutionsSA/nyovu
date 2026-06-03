import Background from "../components/layout/Background";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Shop() {
  return (
    <div className="relative min-h-screen flex flex-col" style={{ background: "#000" }}>
      <Background />

      <div className="relative z-10 flex flex-col min-h-screen text-white">
        <Navbar />

        <main className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-6 text-center px-6">

            {/* Logo */}
            <img
              src="/nyovu-logo.png"
              alt="NYOVU"
              style={{
                width: "100px",
                opacity: 0.6,
                filter: "drop-shadow(0 0 20px rgba(0,229,255,0.4)) drop-shadow(0 0 40px rgba(255,0,204,0.2))",
              }}
            />

            {/* Heading */}
            <h1
              className="font-black uppercase leading-none"
              style={{
                fontSize: "clamp(3rem, 10vw, 7rem)",
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #00E5FF 0%, #FF00CC 55%, #FF8C00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px rgba(0,229,255,0.3))",
              }}
            >
              Coming Soon
            </h1>

            {/* Subtext */}
            <p
              className="text-sm uppercase tracking-[0.3em] font-medium"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              The NYOVU store is on its way
            </p>

            {/* Neon divider */}
            <div style={{ width: "80px", height: "1px", background: "linear-gradient(90deg, #00E5FF, #FF00CC, #FF8C00)" }} />

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
