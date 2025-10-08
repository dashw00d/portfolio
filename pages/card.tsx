import Head from 'next/head'
import { useRef } from 'react'

export default function Card() {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (!cardRef.current) return

    try {
      const html2canvas = (await import('html2canvas')).default
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        backgroundColor: null
      })

      const link = document.createElement('a')
      link.download = 'ryan-stefan-business-card.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (error) {
      console.error('Failed to download card:', error)
    }
  }

  return (
    <>
      <Head>
        <title>Ryan Stefan Business Card</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Digital business card for Ryan Stefan - Optimize. Build. Grow. Contact: (737) 205-9226 | ryan@dashwood.net" />
        <meta name="author" content="Ryan Stefan" />
        <meta name="keywords" content="Ryan Stefan, business card, dashwood, contact, web development, optimization" />

        {/* Open Graph */}
        <meta property="og:title" content="Ryan Stefan Business Card" />
        <meta property="og:description" content="Optimize. Build. Grow. Contact Ryan Stefan at (737) 205-9226 or ryan@dashwood.net" />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://dashwood.net/card" />
        <meta property="og:image" content="https://dashwood.net/images/dashwood_qr.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Ryan Stefan Business Card" />
        <meta name="twitter:description" content="Optimize. Build. Grow. Contact: (737) 205-9226 | ryan@dashwood.net" />
        <meta name="twitter:image" content="https://dashwood.net/images/dashwood_qr.png" />

        <link rel="canonical" href="https://dashwood.net/card" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ryan Stefan",
              "telephone": "(737) 205-9226",
              "email": "ryan@dashwood.net",
              "url": "https://dashwood.net",
              "jobTitle": "Web Developer",
              "description": "Optimize. Build. Grow."
            })
          }}
        />
      </Head>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>

      <style jsx>{`
        .container {
          font-family: 'Nunito', Arial, sans-serif;
          background: #ffffff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 32px;
          max-width: max-content;
          margin: 0 auto;
        }
        .stage {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card {
          width: 4.2in;
          height: 2.4in;
          background: #E8DDCB;
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.3in 0.28in;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        .card::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(90deg, #036564, #033649);
        }
        .info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .title {
          font-size: 1.5rem;
          line-height: 1.2;
          margin-bottom: 8px;
          white-space: nowrap;
          letter-spacing: -0.01em;
        }
        .title .first-name {
          color: #031634;
          font-weight: 400;
        }
        .title .last-name {
          color: #036564;
          font-weight: 700;
        }
        .subtitle {
          font-size: 0.875rem;
          font-weight: 600;
          color: #036564;
          line-height: 1.3;
          margin-bottom: 12px;
          letter-spacing: 0.01em;
        }
        .contact {
          font-size: 0.8rem;
          font-weight: 600;
          color: #033649;
          line-height: 1.4;
          margin-bottom: 3px;
        }
        .website {
          font-size: 0.8rem;
          font-weight: 700;
          color: #036564;
          line-height: 1.4;
        }
        .website .handle {
          font-size: 0.6rem;
          font-weight: 400;
          color: #031634;
          letter-spacing: -0.02em;
        }
        .qr {
          flex-shrink: 0;
          width: 1.55in;
          height: 1.55in;
          border-radius: 8px;
          background-color: #E8DDCB;
          display: block;
          object-fit: contain;
          margin-left: 0.15in;
        }
        .download-button {
          padding: 12px 24px;
          background: #036564;
          color: white;
          border: none;
          border-radius: 8px;
          font-family: 'Nunito', Arial, sans-serif;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .download-button:hover {
          background: #033649;
        }
        @media print {
          .container { padding: 0; }
          .stage { display: block; }
          .download-button { display: none; }
        }
      `}</style>

      <div className="container">
        <div className="stage">
          <div className="card" ref={cardRef}>
            <div className="info">
              <div className="title">
                <span className="first-name">Ryan</span>{' '}
                <span className="last-name">Stefan</span>
              </div>
              <div className="subtitle">Optimize. Build. Grow.</div>
              <div className="contact">(737) 205-9226</div>
              <div className="website">
                <span className="handle">ryan@</span>dashwood.net
              </div>
            </div>
            <img src="/images/dashwood_qr.png" alt="QR Code" className="qr" />
          </div>
        </div>

        <button className="download-button" onClick={handleDownload}>
          Download as Image
        </button>
      </div>
    </>
  )
}
