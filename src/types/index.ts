import type { FC, ReactNode } from 'react';

interface Children {
  children: ReactNode;
}

export type Component<E = unknown> = FC<E>;

export type Layout<E = unknown> = FC<Children & E>;
