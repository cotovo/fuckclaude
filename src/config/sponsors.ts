/**
 * Sponsor list rendered by `src/components/Sponsors.astro` in the strip right
 * below the site nav. To add a sponsor, drop its logo into `public/sponsors/`
 * and append an entry here.
 */

import type { Lang } from '../i18n/ui';

export interface Sponsor {
  id: string;
  name: string;
  /** Outbound (referral) link; the whole banner row links here. */
  url: string;
  /** Path under `public/`, e.g. `/sponsors/foo.png`. */
  logo: string;
  /** Intrinsic logo size, used to reserve space and avoid layout shift. */
  logoWidth: number;
  logoHeight: number;
  /** Bold lead-in shown before the tagline. */
  headline: Record<Lang, string>;
  /** One-line pitch per language. */
  tagline: Record<Lang, string>;
  /** Per-sponsor CTA button label. */
  cta: Record<Lang, string>;
}

export const SPONSORS: Sponsor[] = [
  {
    id: 'weiloo',
    name: '卫龙中转',
    url: 'https://ai.weiloo.com/',
    logo: '/sponsors/weiloo-logo-rounded.png',
    logoWidth: 244,
    logoHeight: 98,
    headline: {
      zh: '卫龙中转免费 Fable 5。',
      en: 'Weiloo AI proxy with free Fable 5.',
    },
    tagline: {
      zh: '费率 1 元 = 20 刀，Claude/GPT/Gemini 等模型中转服务',
      en: 'Rate: RMB 1 = USD 20 credits, with Claude / GPT / Gemini proxy access',
    },
    cta: {
      zh: '立即使用',
      en: 'Open now',
    },
  },
];
