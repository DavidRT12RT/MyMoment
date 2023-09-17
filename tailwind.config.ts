import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
    	'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    	'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
    	'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
    	"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  	],
  	theme: {
		extend: {},
  	},
	darkMode:"class",
  	plugins: [
		nextui({
			themes:{
				layot:{
					layout:{},
					colors:{
						primary:"#9147FF"
					}
				},
				light:{
					layout:{},
					colors:{
						primary:"#9147FF"
					}
				},
				dark:{
					layout:{},
					colors:{
						primary:"#9147FF"
					}
				}
			}
		})
  	],
}

export default config
