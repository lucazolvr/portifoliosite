import { PropsWithChildren } from "react"

export const HeroOrbit = ({children, size}: PropsWithChildren<{size: number}>) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="border border-green-500" style={{
        height: `${size}px`,
        width: `${size}px`,
    }}>
      <div className="border border-green-500 inline-flex">{children}</div>
      </div>
    </div>
    )
}