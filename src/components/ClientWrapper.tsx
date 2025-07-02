'use client';
import useScrollAnimate from '../hooks/useScrollAnimate';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  useScrollAnimate();
  
  return <>{children}</>;
} 