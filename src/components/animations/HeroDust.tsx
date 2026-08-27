const motes = [
  { left: "8%", top: "22%", size: 5, color: "#f6ba29", x: "18px", y: "-32px", dur: "16s", delay: "0s" },
  { left: "18%", top: "68%", size: 4, color: "#ee7a48", x: "-14px", y: "-24px", dur: "13s", delay: "1.2s" },
  { left: "32%", top: "18%", size: 6, color: "#e95559", x: "10px", y: "28px", dur: "18s", delay: "0.4s" },
  { left: "44%", top: "74%", size: 3, color: "#f8c94d", x: "22px", y: "-18px", dur: "12s", delay: "2s" },
  { left: "58%", top: "28%", size: 5, color: "#ee7a48", x: "-20px", y: "16px", dur: "15s", delay: "0.8s" },
  { left: "72%", top: "58%", size: 4, color: "#f6ba29", x: "12px", y: "-30px", dur: "17s", delay: "1.6s" },
  { left: "84%", top: "16%", size: 3, color: "#e95559", x: "-8px", y: "22px", dur: "14s", delay: "0.2s" },
  { left: "12%", top: "42%", size: 4, color: "#f8c94d", x: "16px", y: "20px", dur: "19s", delay: "2.4s" },
  { left: "66%", top: "82%", size: 5, color: "#ee7a48", x: "-18px", y: "-14px", dur: "15s", delay: "1s" },
  { left: "90%", top: "40%", size: 3, color: "#f6ba29", x: "-12px", y: "-26px", dur: "13s", delay: "1.8s" },
  { left: "38%", top: "50%", size: 2, color: "#e95559", x: "8px", y: "-22px", dur: "11s", delay: "0.6s" },
  { left: "24%", top: "86%", size: 4, color: "#f6ba29", x: "14px", y: "-16px", dur: "16s", delay: "2.2s" },
  { left: "52%", top: "12%", size: 3, color: "#ee7a48", x: "-10px", y: "24px", dur: "14s", delay: "0.9s" },
  { left: "78%", top: "78%", size: 5, color: "#e95559", x: "8px", y: "-20px", dur: "18s", delay: "1.4s" },
  { left: "5%", top: "55%", size: 3, color: "#f8c94d", x: "20px", y: "-12px", dur: "12s", delay: "2.8s" },
  { left: "95%", top: "62%", size: 4, color: "#f6ba29", x: "-16px", y: "14px", dur: "15s", delay: "0.3s" },
  { left: "48%", top: "40%", size: 2, color: "#ee7a48", x: "6px", y: "-18px", dur: "10s", delay: "1.1s" },
  { left: "61%", top: "6%", size: 4, color: "#e95559", x: "-14px", y: "26px", dur: "17s", delay: "2.6s" },
];

export function HeroDust() {
  return (
    <div className="hero-dust" aria-hidden="true">
      {motes.map((mote, index) => (
        <i
          key={index}
          style={{
            left: mote.left,
            top: mote.top,
            width: mote.size,
            height: mote.size,
            background: mote.color,
            ["--dust-x" as string]: mote.x,
            ["--dust-y" as string]: mote.y,
            ["--dust-dur" as string]: mote.dur,
            ["--dust-delay" as string]: mote.delay,
          }}
        />
      ))}
    </div>
  );
}
