import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 22,
              height: 22,
              borderRadius: 6,
              background: '#1D4ED8',
              color: '#FFFFFF',
              fontFamily: 'ui-monospace, monospace',
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            ∞
          </span>
          <span style={{ fontWeight: 600 }}>{appName}</span>
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
