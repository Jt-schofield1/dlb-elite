import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Training | DLB Elite',
}

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 