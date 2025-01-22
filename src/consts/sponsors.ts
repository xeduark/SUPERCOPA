// consts/sponsors.ts
import type { Sponsors } from "@/types/Sponsors"

export const SPONSORS: Array<Sponsors> = [
	{
		id: "inder",
		name: "Inder-Bello",
		url: "https://www.inderbello.gov.co/",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/images-e79d0.appspot.com/o/log-inder.png?alt=media&token=1ddccc48-52fb-4d1c-a588-c0c07e0d1da9",
		image: {
			width: 164,
			height: 35,
		},
	},
	{
		id: "vivoon",
		name: "VIVOON",
		url: "https://www.instagram.com/vivo_sostenible?igsh=MW9qNnZlYWtvZTNzOQ==",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/images-e79d0.appspot.com/o/vivoon-logo.png?alt=media&token=dc9a1cfc-4855-4a65-9345-5e3114f240c2",
		image: {
			width: 177,
			height: 32,
		},
	},
	{
		id: "dlms",
		name: "Donde la magia sucede",
		url: "https://www.instagram.com/dondelamagiasucedee?igsh=ZHVsZG5icGVmdWZh",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/images-e79d0.appspot.com/o/logo-dlms.png?alt=media&token=97e18e0a-c8d1-4f73-906e-7b340695514a",
		image: {
			width: 160,
			height: 30,
		},
	},
	{
		id: "checho",
		name: "Checho Store Imported",
		url: "https://www.instagram.com/checho_store_imported?igsh=aGJ0aDdnenBpOHJ4",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/images-e79d0.appspot.com/o/checho-fotor.png?alt=media&token=86b2f6e9-db36-47eb-b555-9ca66a9f04f5",
		image: {
			name: "spotify-3",
			width: 160,
			height: 50,
		},
	},
	{
		id: "xeduark.dev",
		name: "Xeduark.Dev",
		url: "https://www.instagram.com/xeduark/",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/images-e79d0.appspot.com/o/logo-xeduark.png?alt=media&token=002d55c8-172e-4ee3-b44a-1e2cf157b1a8",
		image: {
			width: 220,
			height: 94,
		},
	},
] as const
