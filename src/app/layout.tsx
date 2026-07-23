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

      window.addEventListener('error', function(e) {
        console.log('[FULL ERROR] message:', e.message);
        console.log('[FULL ERROR] filename:', e.filename);
        console.log('[FULL ERROR] line:', e.lineno, 'col:', e.colno);
        console.log('[FULL ERROR] stack:', e.error && e.error.stack);
      });

      window.addEventListener('unhandledrejection', function(e) {
        console.log('[FULL REJECTION]', e.reason);
      });

      document.addEventListener('touchstart', function(e){
        console.log('[debug] touchstart on:', e.target.tagName, e.target.className, 'defaultPrevented:', e.defaultPrevented);
      }, true);
      document.addEventListener('click', function(e){
        console.log('[debug] click on:', e.target.tagName, e.target.className);
      }, true);
    `,
          }}
        />
      </body>
    </html>
  );
}