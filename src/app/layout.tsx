import type { Metadata } from "next";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rbody Clinic — Body Clinic & Recovery in Lagos",
  description:
    "Rbody is a specialist clinic for lymphatic drainage massage, post-surgical recovery care, body sculpting, lipolysis, IV therapy and medical weight-loss support in Lagos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        {children}
        {/* TEMPORARY — mobile debug console, remove once the iOS button bug is fixed */}
        <script src="https://cdn.jsdelivr.net/npm/eruda"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      eruda.init();

      function showBanner(text) {
        var el = document.createElement('div');
        el.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:999999;background:red;color:white;font-size:12px;padding:8px;white-space:pre-wrap;word-break:break-all;max-height:40vh;overflow:auto;';
        el.textContent = text;
        document.body.appendChild(el);
      }

      window.addEventListener('error', function(e) {
        showBanner('ERROR: ' + e.message + ' | file: ' + e.filename + ' | line: ' + e.lineno + ':' + e.colno + ' | stack: ' + (e.error && e.error.stack));
      });

      window.addEventListener('unhandledrejection', function(e) {
        showBanner('REJECTION: ' + e.reason);
      });
    `,
          }}
        />
      </body>
    </html>
  );
}