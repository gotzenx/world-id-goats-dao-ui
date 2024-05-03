import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v13-pagesRouter';
import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v13-pagesRouter';
import { DocumentContext, DocumentProps, Head, Html, Main, NextScript } from 'next/document';

export default function MyDocument(props: DocumentProps & DocumentHeadTagsProps) {
  const descriptionText = 'GoatsDao by Wonderland.';
  const bannerImage = '';

  return (
    <Html lang='en'>
      <Head>
        <DocumentHeadTags {...props} />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' sizes='48x48' />
        <meta name='description' content={descriptionText} />

        <meta property='og:title' content='GoatsDao' />
        <meta property='og:description' content={descriptionText} />
        <meta name='twitter:image' content={bannerImage} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@' />
        <meta name='twitter:creator' content='@' />
        <meta name='twitter:title' content='GoatsDao' />
        <meta name='twitter:description' content={descriptionText} />

        <meta name='twitter:image' content={bannerImage} />
        <meta name='robots' content='noindex' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  ) as JSX.Element;
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
