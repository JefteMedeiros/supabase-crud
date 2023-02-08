"use client"

import React, {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
} from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const ButtonComponent: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { children },
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <button
      ref={ref}
      className="bg-blue-500 p-3 text-sm hover:scale-[1.02] transition-all rounded-sm text-white"
    >
      {children}
    </button>
  )
}

export const Button = forwardRef(ButtonComponent)
