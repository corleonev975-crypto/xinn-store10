import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="panel">
            <div className="badge" style={{ marginBottom: 12 }}>Production Starter</div>
            <h1 className="hero-title">Website Top Up Siap Naik Level ke Semi-Production.</h1>
            <p className="muted">
              Sudah disiapkan struktur untuk login Google, checkout Midtrans, fulfillment Digiflazz,
              profit engine, database transaksi, dan admin dashboard.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
              <Link href="/products" className="btn">Mulai Checkout</Link>
              <Link href="/admin" className="btn secondary">Lihat Admin</Link>
            </div>
          </div>
          <div className="panel">
            <h3 style={{ marginTop: 0 }}>Isi paket</h3>
            <ul className="muted" style={{ lineHeight: 1.8 }}>
              <li>Google login via NextAuth</li>
              <li>Supabase/Postgres schema</li>
              <li>Midtrans webhook route</li>
              <li>Digiflazz helper route</li>
              <li>Admin dashboard analytics</li>
              <li>Order tracking page</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
