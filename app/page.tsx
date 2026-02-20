import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container" style={{ padding: "4rem 1rem", textAlign: "center" }}>
      <div style={{ marginBottom: "2rem" }}>
        <Image
          src="/images/k3a-logo.png"
          alt="北九州3on3協会 K3A Logo"
          width={600}
          height={300}
          style={{ maxWidth: "100%", height: "auto" }}
          priority
        />
      </div>
      <p style={{ marginBottom: "2rem" }}>Coming Soon...</p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        {/* Temporary links for development navigation */}
        <Link href="/admin" className="btn btn-primary">Admin Dashboard</Link>
        <Link href="/entry" className="btn btn-accent">Entry Form</Link>
      </div>
    </main>
  );
}
