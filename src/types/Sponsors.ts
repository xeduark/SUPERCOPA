type SponsorId = "inder" | "dlms" | "vivoon" | "checho" | "xeduark.dev" | "info" | "khanpro"

type SponsorName =
	| "Inder-Bello"
	| "Donde la magia sucede"
	| "VIVOON"
	| "Checho Store Imported"
	| "Xeduark.Dev"
	| "Info"
	| "Khanpro"

export interface Sponsors {
	id: SponsorId
	name: SponsorName
	url: string
	imageUrl: string
	image: {
		name?: string
		width: number
		height: number
	}
}
