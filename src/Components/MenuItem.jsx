import React from 'react';

import { Button } from '@mantine/core';

function MenuItem({label, icon, active, sx={}}) {
    sx.width = sx.width ?? "100%"
    sx.height = sx.height ?? "56px"

    sx.fontFamily = sx.fontFamily ?? "SF Pro Display"
    sx.fontSize = sx.fontSize ?? "15px"
    sx.fontWeight = sx.fontWeight ?? 600
    sx.color = sx.color ?? (active ? "#DA584B" : "#94979A")
    sx.display = sx.display ?? "flex"
    sx.justifyContent = sx.justifyContent ?? "space-between"
    sx.alignItems = sx.alignItems ?? "center"
    sx.gap = sx.gap ?? "80px"
    sx.background = sx.background ?? (active ? "linear-gradient(90deg, rgba(186, 37, 37, 0) 0%, rgba(210, 77, 77, 0.1) 100%);" : "transparent")
    sx.border = sx.border ?? "none"

    return (
        <>
            <Button justify="space-between" leftSection={icon} style={sx} variant='transparent'>
                {label}
            </Button>
        </>
    );
}

export default MenuItem