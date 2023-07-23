import * as React from "react"
import {Box, Typography} from "@mui/material"

export function Home({
                         decorative = "Coding Challenge",
                         title = "The Stealth Startup",
                         subtitle = "We are a stealth startup.",
                     }: {
    decorative?: React.ReactNode
    title?: React.ReactNode
    subtitle?: React.ReactNode
}) {
    return (
        <Box
            sx={{
                flex: 1,
                height: "80vh",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 2,
                my: 6,
                textAlign: "center",
            }}
        >
            <Box
                sx={{
                    color: "primary.500",
                    fontWeight: 600,
                    fontSize: "sm",
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                }}
            >
                {decorative}
            </Box>
            <Typography
                variant="h1"
                sx={{
                    fontSize: {xs: "3xl", sm: "4xl", md: "5xl"},
                    fontWeight: 800,
                }}
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    fontSize: "lg",
                    color: "gray.500",
                    maxWidth: "54ch",
                }}
            >
                {subtitle}
            </Typography>
        </Box>
    )
}
