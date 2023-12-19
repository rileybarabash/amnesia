/**
 * @file The AMNESIA logo.
 * @author Riley Barabash <riley@rileybarabash.com>
 */

"use client"

import { createSVG, type SVG } from "~/components/svgs/create-svg"

export const Logo: SVG = createSVG(({ squareBounds = false, viewBox, ...props }) => (
    <svg viewBox={viewBox ?? squareBounds ? "0 0 4096 4096" : "0 1851.6166 4096 392.7668"} fill="currentColor" {...props}>
        <g>
            <path
                d="M561.1,1963.84h-74.81l74.81,28.05v252.49H448.88V2029.3l-28.05,74.81h-308.6v28.05h42.08l-42.08,112.22H0v-140.27
		l102.01-102.01L0,1963.84v-112.22h561.1V1963.84z M448.88,1963.84H112.22v28.05h336.66V1963.84z"
            />
            <path
                d="M1150.25,2244.38h-112.22v-280.55H925.81v280.55H813.59v-280.55H701.37v168.33h42.08l-42.08,112.22H589.15v-252.49
		l74.81-28.05h-74.81v-112.22h224.44l102.01,102.01l38.26-102.01h196.38V2244.38z"
            />
            <path
                d="M1739.4,2244.38h-112.22v-280.55h-336.66v168.33h42.08l-42.08,112.22H1178.3v-252.49l74.81-28.05h-74.81v-112.22h448.88
		l112.22,112.22V2244.38z"
            />
            <path
                d="M2328.55,1851.62v112.22h-448.88v28.05h448.88v112.22h-420.82l-28.05-74.81v102.87h448.88v112.22h-448.88l-112.22-112.22
		v-140.27l74.81-28.05h-74.81v-112.22H2328.55z"
            />
            <path
                d="M2468.82,1991.89h336.66l112.22,112.22v140.27h-561.1v-112.22h448.88v-28.05h-308.6l-28.05-74.81v74.81H2356.6v-112.22
		l74.81-28.05h-74.81v-112.22h561.1v112.22h-448.88V1991.89z"
            />
            <path
                d="M3506.85,1851.62v112.22h-224.44v168.33h224.44v112.22h-561.1v-112.22h224.44v-140.27l74.81-28.05h-299.25v-112.22H3506.85
		z"
            />
            <path
                d="M4096,1963.84h-74.81l74.81,28.05v252.49h-112.22V2029.3l-28.05,74.81h-308.6v28.05h42.08l-42.08,112.22H3534.9v-140.27
		l102.01-102.01l-102.01-38.26v-112.22H4096V1963.84z M3983.78,1963.84h-336.66v28.05h336.66V1963.84z"
            />
        </g>
    </svg>
))
