import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LETTER = [
  "I hope this year brings U calm mornings ☀️ peaceful nights 🌙 & little moments that make U smile :)",
  "without any reason 😊",
  "",
  "No matter what this year holds for U,",
  "I hope U always feel supported,",
  "valued & understood 💞",
  "",
  "May every challenge turn into strength 💪 and every quiet day remind U",
  "of how special U truly are!! 🌷",
  "",
  "U deserve a year filled with happiness 💖",
  "with moments that feel light, warm & meaningful 🌸",
  "",
  "May this year be gentle with U ✨",
  "& give you everything Ur heart",
  "has been hoping for 💫",
  "",
  "Wishing U",
  "a beautiful New Year my LOVE ⭐",
];

export default function FinalCardScreen() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ================= MOBILE ================= */
  if (isMobile) {
    return (
      <div
        style={{
          minHeight: "100vh",
          padding: 20,
          fontFamily: '"Comic Neue", cursive',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: 22, marginBottom: 14 }}>
          For my Cutiepie :)
        </h1>

        {!open ? (
          <motion.div
            onClick={() => setOpen(true)}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              width: "90%",
              maxWidth: 340,
              height: 420,
              background: "#fdf6ec",
              borderRadius: 18,
              border: "5px solid #a855f7",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src="/happy-new-year-2026.png"
              alt="Cover"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </motion.div>
        ) : (
          <motion.div
            onClick={() => setOpen(false)}   // ✅ tap to close
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              width: "100%",
              maxWidth: 360,
              background: "#fdf6ec",
              borderRadius: 18,
              border: "4px solid #a855f7",
              padding: 16,
              color: "#374151",
              fontSize: 14,
              lineHeight: 1.7,
              maxHeight: "75vh",
              overflowY: "auto",
              cursor: "pointer",
            }}
          >
            {LETTER.map((line, i) => (
              <p
                key={i}
                style={{ margin: line === "" ? "12px 0" : "0 0 6px 0" }}
              >
                {line}
              </p>
            ))}
            <p style={{ marginTop: 12, fontSize: 12, opacity: 0.6 }}>
              Tap to close 💜
            </p>
          </motion.div>
        )}
      </div>
    );
  }

  /* ================= DESKTOP ================= */
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        fontFamily: '"Comic Neue", cursive',
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "clamp(24px,5vw,36px)", marginBottom: 6 }}>
        For my Cutiepie :)
      </h1>

      <p style={{ opacity: 0.6, marginBottom: 20 }}>
        Tap the card to {open ? "close" : "read"}
      </p>

      <motion.div
        onClick={() => setOpen(p => !p)}
        animate={{ width: open ? 780 : 360 }}
        transition={{ type: "spring", stiffness: 120, damping: 22 }}
        style={{
          height: 460,
          position: "relative",
          perspective: 1600,
          cursor: "pointer",
        }}
      >
        {/* INSIDE PAGES — ALWAYS MOUNTED (NO SHOWER EFFECT) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#fdf6ec",
            borderRadius: 18,
            border: "6px solid #a855f7",
            boxShadow: "0 25px 50px rgba(0,0,0,0.45)",
            display: "flex",
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
          }}
        >
          <div
            style={{
              width: "50%",
              padding: 34,
              borderRight: "2px solid rgba(168,85,247,0.4)",
              color: "#374151",
              fontSize: 16,
              lineHeight: 1.7,
              textAlign: "left",
            }}
          >
            {LETTER.slice(0, 9).map((l, i) => (
              <p key={i} style={{ margin: l === "" ? "12px 0" : "0 0 6px 0" }}>
                {l}
              </p>
            ))}
          </div>

          <div
            style={{
              width: "50%",
              padding: 34,
              color: "#374151",
              fontSize: 16,
              lineHeight: 1.7,
              textAlign: "left",
            }}
          >
            {LETTER.slice(9).map((l, i) => (
              <p key={i} style={{ margin: l === "" ? "12px 0" : "0 0 6px 0" }}>
                {l}
              </p>
            ))}
          </div>
        </div>

        {/* FRONT COVER */}
        <motion.div
          animate={{ rotateY: open ? -105 : 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            background: "#fdf6ec",
            borderRadius: 18,
            border: "6px solid #a855f7",
            transformOrigin: "left center",
            backfaceVisibility: "hidden",
            overflow: "hidden",
          }}
        >
          <img
            src="/happy-new-year-2026.png"
            alt="Happy New Year"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
