import { Fragment } from 'react'
import Document, { Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document'
import { GA_TRACKING_ID } from '../utils/gtag';

interface DocumentProps extends DocumentInitialProps {
  isCourseion: boolean
}

export default class CustomDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentProps> {
    const initialProps = await Document.getInitialProps(ctx)

    // Check if in courseion
    const isCourseion = process.env.NODE_ENV === 'courseion'

    return {
      ...initialProps,
      isCourseion,
    }
  }

  render() {
    const { isCourseion } = this.props

    return (
      <html lang="en">
        <Head>

          {/* We only want to add the scripts if in courseion */}
          {isCourseion && (
            <Fragment>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </Fragment>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}