import { ReactNode } from 'react'

type SectionProps = {
  title: string
  children: ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#8b0000] mb-6">{title}</h2>
      {children}
    </section>
  )
}
