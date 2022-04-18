import React, { useState } from 'react'
import { Box } from '@oneloop/box'
import '@oneloop/fonts'

export const Button = (props) => (
  <Box sx={{ position: 'relative', width: 26, height: 26 }}>
    <Box
      as="button"
      tx="buttons"
      variant="primary"
      {...props}
      __css={{
        appearance: 'none',
        display: 'flex',
        lineHeight: 'inherit',
        fontFamily: 'Nunito Sans',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: 26,
        py: 14,
        color: 'white',
        bg: 'primary',
        border: 0,
        borderRadius: 'button',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  </Box>
)

export const ButtonIcon = ({ icon, isRounded, fontSize, borderRadius, padding, height, width, variant, props }) => (
  <Box sx={{ position: 'relative', width: 26, height: 26 }}>
    <Box
      as="button"
      tx="buttons"
      variant={variant}
      {...props}
      __css={{
        appearance: 'none',
        display: 'inline-block',
        lineHeight: 'inherit',
        fontFamily: 'Nunito Sans',
        fontWeight: 'bold',
        fontSize: fontSize || '28px',
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: isRounded ? 24 : 26,
        py: 14,
        color: 'white',
        bg: 'primary',
        border: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: borderRadius || 12,
        width: width || '48px',
        height: height || '48px',
        paddingLeft: '35.4%',
        paddingRight: '35.4%',
        paddingTop: '40%',
        paddingBottom: '40%',
        padding: padding,
      }}
    >
      {icon && <span className={icon}></span>}
    </Box>
  </Box>
)

export const ButtonRound = ({ text, icon, fontSize, borderRadius, paddingLeft, paddingTop, height, variant, props }) => (
  <Box sx={{ position: 'relative', width: 26, height: 26 }}>
    <Box
      as="button"
      tx="buttons"
      variant={variant}
      {...props}
      __css={{
        appearance: 'none',
        display: 'inline-block',
        lineHeight: 'inherit',
        fontFamily: 'Nunito Sans',
        fontWeight: 'bold',
        fontSize: fontSize || 16,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        px: 26,
        py: 14,
        color: 'white',
        bg: 'primary',
        border: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        borderRadius: borderRadius || 24,
        height: height || '48px',
        paddingBottom: '27%',
        paddingTop: paddingTop || '27%',
      }}
    >
      <span className={icon} style={{ fontSize: fontSize || '20px', position: 'absolute' }}></span>
      <span style={{ paddingLeft: paddingLeft || '24px' }}> {text}</span>
    </Box>
  </Box>
)

export const ButtonMain = ({ text, icon, fontSize, variant, isCollapsible, props }) => {
  const [hover, setHover] = useState()
  const [active, setActive] = useState()

  return (
    <Box sx={{ position: 'relative', width: 18, height: 18 }}>
      <Box
        as="button"
        tx="buttons"
        variant={variant}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onClick={() => setActive(true)}
        onBlur={() => setActive(false)}
        {...props}
        __css={{
          appearance: 'none',
          display: 'inline-block',
          lineHeight: 'inherit',
          fontFamily: 'Nunito Sans',
          fontWeight: 'normal',
          fontSize: fontSize || 16,
          textAlign: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          outline: 'none',
          px: 26,
          py: 14,
          color: 'white',
          bg: 'primary',
          border: 0,
          borderRadius: 'button',
          whiteSpace: 'nowrap',
        }}
      >
        <span className={icon} style={{ fontSize: '20px', position: 'absolute', color: active || hover ? '#DF1E02' : '#707E86' }}/>
        <span style={{ marginLeft: '24px', marginTop: '22px', position: 'relative' }}> {text} </span>
        { isCollapsible && <span className="icon-dropdown" style={{ fontSize: '20px', position: 'absolute', color: '#A6B2BA' }}/>}
      </Box>
    </Box>
  )
}
