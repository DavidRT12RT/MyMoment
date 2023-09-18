import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Providers from './providers';
import Navbar from '@/components/common/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: "MyMoment",
  	description: "Tiktok Clon",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {

	return (
		<html lang="en">
      		<body className={inter.className} >
				<Providers>
					<Navbar/>
					<main>{children}</main>
					<footer></footer>
				</Providers>
			</body>
    	</html>
  	)

}
