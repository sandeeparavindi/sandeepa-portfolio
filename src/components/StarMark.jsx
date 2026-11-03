export function StarMark({ className = '', strokeWidth = 3.4, ...rest }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            aria-hidden="true"
            focusable="false"
            className={`inline-block h-[1em] w-[1em] shrink-0 align-[-0.12em] ${className}`}
            {...rest}
        >
            <path d="M12 2.5v19M2.5 12h19M5.28 5.28l13.44 13.44M18.72 5.28 5.28 18.72" />
        </svg>
    );
}

export function Sparkle({ className = '', ...rest }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            className={`inline-block h-[1em] w-[1em] shrink-0 align-[-0.12em] ${className}`}
            {...rest}
        >
            <path d="M12 0c.9 6.6 4.8 10.6 12 12-7.2 1.4-11.1 5.4-12 12-.9-6.6-4.8-10.6-12-12C7.2 10.6 11.1 6.6 12 0Z" />
        </svg>
    );
}