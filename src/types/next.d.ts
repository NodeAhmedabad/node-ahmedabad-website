import type { Metadata } from 'next';
import type { NextRequest } from 'next/server';

import type { Component, Layout } from '@/types';

export interface NextParams<T extends string | string[]> {
  params: Promise<Record<T extends string ? T : T[number], string>>;
}

export type ParamsComponent<T extends string | string[], E = unknown> = Component<
  NextParams<T> & E
>;

export type ParamsLayout<T extends string | string[], E = unknown> = Layout<NextParams<T> & E>;

export type GenerateMetadata<T extends string | string[] | null = null> = T extends
  | string
  | string[]
  ? (params: NextParams<T>) => Promise<Metadata>
  : () => Promise<Metadata>;

interface RouteContext {
  params: Promise<Record<string, string>>;
}

export type Route = (request: NextRequest, context: RouteContext) => Promise<Response>;
