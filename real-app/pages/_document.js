import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx);
    //     const { html, head } = ctx.renderPage();
    //     // const styles = flush();
    //     // const emotionStyles = extractCritical(html);
    //     return { ...initialProps, html, head};
    //   }
    
    render() {
        console.log("document");
        return (
            <Html>
                <Head>
                    {/* <meta name="description" content="Next Tutorial"/> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;