import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title, description }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title || 'My Next.js App'}</title>
        <meta name="description" content={description || 'A Next.js app with Tailwind CSS'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
} 