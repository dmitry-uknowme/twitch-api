import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
	static async getInitialProps(context) {
		const initialProps = await Document.getInitialProps(context);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default AppDocument;
