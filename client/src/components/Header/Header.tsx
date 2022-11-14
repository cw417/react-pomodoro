import React from 'react'

type Props = {
  title: string;
  stylingClasses: string;
}

export default function Header({ title, stylingClasses }: Props) {

  return (
    <div className={`what ${stylingClasses}`}>{title}</div>
  )
}