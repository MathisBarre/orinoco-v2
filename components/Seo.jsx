import Head from 'next/head'

export default function SEO ({ title, description, imageUrl }) {
  return (
    <Head>
      { title && (<>
        <title>{title}</title>
        <meta name="title" content={ title } />
        <meta property="og:title" content={ title } />
        <meta property="twitter:title" content={ title } />
      </>)}

      { description && (<>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="twitter:description" content={description} />
      </>)}

      { imageUrl && (<>
        <meta property="og:image" content={ imageUrl } />
        <meta property="twitter:image" content={ imageUrl } />
        <meta property="twitter:card" content="summary_large_image" />
      </>)}
    </Head>
  )
}
