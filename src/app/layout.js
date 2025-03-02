import "./globals.css";

export const metadata = {
  title: "HackerKernel Parakh",
  description: "Created Using Next",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
