import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

type TerminalLineKind = 'command' | 'success' | 'prompt';

interface TerminalLine {
  kind: TerminalLineKind;
  prefix: string;
  text: string;
}

interface TerminalAnimationState {
  started: boolean;
  lineIndex: number;
  charIndex: number;
  done: boolean;
}

const TERMINAL_LINES: TerminalLine[] = [
  {
    kind: 'command',
    prefix: '$',
    text: 'npx skills add https://github.com/moexalgo/algopack-skills',
  },
  {
    kind: 'success',
    prefix: '✓',
    text: 'Установлены 7 инструкций (skills) для работы с ALGOPACK',
  },
  {
    kind: 'command',
    prefix: '$',
    text: 'Любая среда на ваш выбор (codex, claude, cursor и тд.)',
  },
  {
    kind: 'prompt',
    prefix: '>',
    text: 'Проанализируй дисбаланс FUTOI по Si и построй динамику за день.',
  },
  {
    kind: 'success',
    prefix: '✓',
    text: 'Построен анализ открытого интереса по группам участников.',
  },
];

const ALGOPACK_SKILLS_REPO_URL = 'https://github.com/moexalgo/algopack-skills';

const LINE_CLASS_BY_KIND: Record<TerminalLineKind, string> = {
  command: styles.commandLine,
  success: styles.successLine,
  prompt: styles.promptLine,
};

const INITIAL_ANIMATION_STATE: TerminalAnimationState = {
  started: false,
  lineIndex: 0,
  charIndex: 0,
  done: false,
};

const COMPLETE_ANIMATION_STATE: TerminalAnimationState = {
  started: true,
  lineIndex: TERMINAL_LINES.length - 1,
  charIndex: TERMINAL_LINES[TERMINAL_LINES.length - 1].text.length,
  done: true,
};

function getTypingDelay(character: string, kind: TerminalLineKind) {
  if (character === ' ') {
    return 8;
  }

  if ('/.-:'.includes(character)) {
    return 28;
  }

  if (kind === 'command' || kind === 'prompt') {
    return 18;
  }

  return 12;
}

function getLinePause(lineIndex: number) {
  if (lineIndex === 0) {
    return 420;
  }

  if (lineIndex === 2) {
    return 360;
  }

  return 210;
}

function getLineClassName(kind: TerminalLineKind) {
  return `${styles.terminalLine} ${LINE_CLASS_BY_KIND[kind]}`;
}

export default function SkillsShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [animation, setAnimation] = useState(INITIAL_ANIMATION_STATE);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
      setAnimation(COMPLETE_ANIMATION_STATE);
      return undefined;
    }

    const section = sectionRef.current;

    if (!section || !('IntersectionObserver' in window)) {
      setAnimation((current) => ({ ...current, started: true }));
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimation((current) => ({ ...current, started: true }));
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animation.started || animation.done) {
      return undefined;
    }

    const currentLine = TERMINAL_LINES[animation.lineIndex];
    const lineIsComplete = animation.charIndex >= currentLine.text.length;
    const delay = lineIsComplete
      ? getLinePause(animation.lineIndex)
      : getTypingDelay(currentLine.text[animation.charIndex], currentLine.kind);

    const timeoutId = window.setTimeout(() => {
      setAnimation((current) => {
        const line = TERMINAL_LINES[current.lineIndex];

        if (current.done) {
          return current;
        }

        if (current.charIndex < line.text.length) {
          return { ...current, charIndex: current.charIndex + 1 };
        }

        if (current.lineIndex < TERMINAL_LINES.length - 1) {
          return { ...current, lineIndex: current.lineIndex + 1, charIndex: 0 };
        }

        return { ...current, done: true };
      });
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [animation]);

  const visibleLines = TERMINAL_LINES.slice(0, animation.lineIndex + 1);

  return (
    <section className={styles.showcaseSection} ref={sectionRef}>
      <div className={styles.terminalShell}>
        <div className={styles.terminalTopBar}>
          <div className={styles.terminalMeta}>
            <i className={`fas fa-terminal ${styles.terminalIcon}`} aria-hidden="true" />
            <span className={styles.terminalTitle}>algopack-skills</span>
          </div>
          <a
            className={styles.githubButton}
            href={ALGOPACK_SKILLS_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Скачать с GitHub"
          >
            <svg
              className={styles.githubIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <span>Скачать</span>
          </a>
        </div>
        <div className={styles.terminalBody} aria-hidden="true">
          {visibleLines.map((line, index) => {
            const isActiveLine = index === animation.lineIndex;
            const visibleText = isActiveLine
              ? line.text.slice(0, animation.charIndex)
              : line.text;

            return (
              <div className={getLineClassName(line.kind)} key={`${line.prefix}-${line.text}`}>
                <span className={styles.terminalPrefix}>{line.prefix}</span>
                <span className={styles.terminalText}>
                  {visibleText}
                  {isActiveLine && <span className={styles.terminalCursor} />}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
