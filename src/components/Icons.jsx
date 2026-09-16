import React from 'react';

export function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74V9.93H5.06v8.57h2.8z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Official Amazon S3 Bucket Icon in Brand Orange (#E05300 / #FF9900)
export function AmazonS3Icon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Amazon S3"
    >
      <path
        d="M12 1.75L2.25 6.625v10.75L12 22.25l9.75-4.875V6.625L12 1.75zm0 2.22l7.25 3.625-7.25 3.625-7.25-3.625L12 3.97zm-8 4.675l7.25 3.625v7.46L4 16.105V8.645zm9.25 11.085v-7.46l7.25-3.625v7.46l-7.25 3.625z"
        fill="#FF9900"
      />
    </svg>
  );
}

// Official Snowflake Icon in Brand Blue (#29B5E8)
export function SnowflakeIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="#29B5E8"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Snowflake"
    >
      <path d="M21.57 9.87l-2.03-.54.89-1.92a.85.85 0 00-.45-1.12.87.87 0 00-1.13.44l-.88 1.9-2.03-.55.53-2.05a.86.86 0 00-.61-1.04.85.85 0 00-1.04.62l-.53 2.05-2.04-.55V4.87l1.9-1.08a.86.86 0 00.32-1.17.86.86 0 00-1.18-.31L12 4.02l-1.9-1.08a.85.85 0 00-1.18.31.86.86 0 00.32 1.17l1.9 1.08v2.22l-2.04.55-.53-2.05a.86.86 0 00-1.04-.62.86.86 0 00-.62 1.04l.54 2.05-2.03.55-.89-1.9a.86.86 0 00-1.13-.45.86.86 0 00-.45 1.13l.89 1.91-2.03.55a.85.85 0 00-.62 1.04.86.86 0 001.04.62l2.03-.54V12l-2.03-.54a.86.86 0 00-1.04.62.86.86 0 00.62 1.04l2.03.55-.89 1.9a.85.85 0 00.45 1.13.85.85 0 001.13-.44l.89-1.91 2.03.54-.54 2.06a.85.85 0 00.62 1.03c.07.02.14.03.21.03a.86.86 0 00.83-.64l.53-2.05 2.04.54v2.23l-1.9 1.08a.86.86 0 00-.32 1.17c.18.31.49.48.84.48.11 0 .23-.02.34-.08l1.9-1.09 1.9 1.09c.11.06.23.08.34.08.35 0 .66-.17.84-.48a.86.86 0 00-.32-1.17l-1.9-1.08v-2.23l2.04-.54.53 2.05c.14.5.64.79 1.13.67.48-.12.78-.62.66-1.11l-.54-2.05 2.03-.54.88 1.9a.86.86 0 001.13.45.86.86 0 00.45-1.13l-.89-1.91 2.03-.54a.86.86 0 00.62-1.04.86.86 0 00-1.04-.62l-2.03.54V10.4l2.03.54a.86.86 0 001.04-.62.86.86 0 00-.62-1.04z" />
    </svg>
  );
}

// Official Databricks Icon in Brand Red/Orange (#FF3621)
export function DatabricksIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="#FF3621"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Databricks"
    >
      <path d="M12 2.5L1.5 8.5L5.7 10.9L12 7.3L18.3 10.9L22.5 8.5L12 2.5Z" />
      <path d="M1.5 11.5L5.7 13.9L12 10.3L18.3 13.9L22.5 11.5L18.3 9.1L12 12.7L5.7 9.1L1.5 11.5Z" />
      <path d="M1.5 14.5L5.7 16.9L12 13.3L18.3 16.9L22.5 14.5L18.3 12.1L12 15.7L5.7 12.1L1.5 14.5Z" />
      <path d="M1.5 17.5L12 23.5L22.5 17.5L18.3 15.1L12 18.7L5.7 15.1L1.5 17.5Z" />
    </svg>
  );
}

// Official Microsoft SQL Server Icon in Brand Red (#CC292B)
export function SqlServerIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SQL Server"
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" fill="#CC292B" />
      <path d="M4 5V11C4 12.66 7.58 14 12 14C16.42 14 20 12.66 20 11V5" stroke="#CC292B" strokeWidth="1.6" fill="#CC292B" fillOpacity="0.25" />
      <path d="M4 11V17C4 18.66 7.58 20 12 20C16.42 20 20 18.66 20 17V11" stroke="#E8395F" strokeWidth="1.6" fill="#CC292B" fillOpacity="0.35" />
      <ellipse cx="12" cy="11" rx="8" ry="3" stroke="#CC292B" strokeWidth="1.2" strokeDasharray="2 2" />
    </svg>
  );
}

// Official Python Icon in Brand Blue (#3776AB) & Brand Yellow (#FFD438)
export function PythonIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Python"
    >
      <path d="M11.91 2C6.88 2 7.2 4.18 7.2 4.18L7.21 6.45H12V7.21H5.06C2.65 7.21 2 8.7 2 11.89C2 15.08 3.58 15.17 3.58 15.17H5.21V12.9C5.21 10.37 7.42 10.45 7.42 10.45H12.06C13.91 10.45 14.37 9.17 14.37 7.79V4.18C14.37 2.37 12.82 2 11.91 2ZM9.5 3.55C10.02 3.55 10.45 3.98 10.45 4.5C10.45 5.02 10.02 5.45 9.5 5.45C8.98 5.45 8.55 5.02 8.55 4.5C8.55 3.98 8.98 3.55 9.5 3.55Z" fill="#3776AB"/>
      <path d="M12.09 22C17.12 22 16.8 19.82 16.8 19.82L16.79 17.55H12V16.79H18.94C21.35 16.79 22 15.3 22 12.11C22 8.92 20.42 8.83 20.42 8.83H18.79V11.1C18.79 13.63 16.58 13.55 16.58 13.55H11.94C10.09 13.55 9.63 14.83 9.63 16.21V19.82C9.63 21.63 11.18 22 12.09 22ZM14.5 20.45C13.98 20.45 13.55 20.02 13.55 19.5C13.55 18.98 13.98 18.55 14.5 18.55C15.02 18.55 15.45 18.98 15.45 19.5C15.45 20.02 15.02 20.45 14.5 20.45Z" fill="#FFD438"/>
    </svg>
  );
}

// Official PostgreSQL Icon in Brand Blue (#336791)
export function PostgresqlIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="#336791"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PostgreSQL"
    >
      <path d="M11.996 0c-2.316 0-4.475.922-6.027 2.454a8.625 8.625 0 0 0-1.896 2.859c-.43.996-.708 2.072-.818 3.208-.112 1.157-.037 2.378.223 3.655.26 1.277.727 2.593 1.397 3.91a24.1 24.1 0 0 0 2.22 3.69c.877 1.206 1.874 2.371 2.977 3.468.224.223.473.435.744.636.27.2.56.376.868.528.307.151.634.27.977.354.343.084.704.128 1.077.128.373 0 .734-.044 1.077-.128.343-.084.67-.203.977-.354.308-.152.598-.328.868-.528.271-.2.52-.413.744-.636 1.103-1.097 2.1-2.262 2.977-3.468.877-1.206 1.63-2.454 2.22-3.69.59-1.236 1.042-2.49 1.34-3.73.298-1.24.425-2.453.376-3.61-.049-1.158-.292-2.257-.714-3.253a8.62 8.62 0 0 0-1.896-2.859C16.471.922 14.312 0 11.996 0zm-1.05 4.542a1.36 1.36 0 1 1 0 2.72 1.36 1.36 0 0 1 0-2.72zm4.195 0a1.36 1.36 0 1 1 0 2.72 1.36 1.36 0 0 1 0-2.72z"/>
    </svg>
  );
}

// Official dbt Icon in Brand Orange (#FF694B)
export function DbtIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="dbt"
    >
      <path d="M14.5 2.5L21.5 9.5L14.5 16.5L7.5 9.5L14.5 2.5Z" fill="#FF694B" />
      <path d="M9.5 7.5L2.5 14.5L9.5 21.5L16.5 14.5L9.5 7.5Z" fill="#FF694B" fillOpacity="0.75" />
    </svg>
  );
}

// Official Power BI Icon in Brand Yellow (#F2C811)
export function PowerBiIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Power BI"
    >
      <rect x="3" y="12" width="4.5" height="9" rx="1.5" fill="#F2C811" />
      <rect x="9.75" y="7" width="4.5" height="14" rx="1.5" fill="#F2C811" />
      <rect x="16.5" y="3" width="4.5" height="18" rx="1.5" fill="#F2C811" />
    </svg>
  );
}

// Official FastAPI Icon in Brand Teal (#05998B)
export function FastApiIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="FastAPI"
    >
      <circle cx="12" cy="12" r="10" fill="#05998B" fillOpacity="0.18" stroke="#05998B" strokeWidth="1.5" />
      <path d="M13 3L6 14H12L11 21L18 10H12L13 3Z" fill="#05998B" />
    </svg>
  );
}

// Official Supabase Icon in Brand Emerald (#3ECF8E)
export function SupabaseIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Supabase"
    >
      <path
        d="M21.36 15.35c.78 1.15.01 2.73-1.38 2.82L7.33 19c-1.39.09-2.29-1.3-1.63-2.52l5.63-10.3c.66-1.22 2.37-1.33 3.19-.22l6.84 9.39z"
        fill="#3ECF8E"
      />
      <path
        d="M2.64 8.65c-.78-1.15-.01-2.73 1.38-2.82L16.67 5c1.39-.09 2.29 1.3 1.63 2.52l-5.63 10.3c-.66 1.22-2.37 1.33-3.19.22L2.64 8.65z"
        fill="#249361"
      />
    </svg>
  );
}

// Official n8n Icon in Brand Coral/Red (#EA4B71)
export function N8nIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="n8n"
    >
      <circle cx="6" cy="12" r="3" fill="#EA4B71" />
      <circle cx="18" cy="7" r="3" fill="#FF6D5A" />
      <circle cx="18" cy="17" r="3" fill="#EA4B71" />
      <path d="M6 12H18M18 7V17M6 12L18 7M6 12L18 17" stroke="#EA4B71" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Official React Icon in Brand Cyan (#61DAFB)
export function ReactIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="React"
    >
      <ellipse cx="12" cy="12" rx="3" ry="8.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="3" ry="8.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="3" ry="8.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  );
}

// Official Hugging Face / Transformers Icon in Brand Yellow (#FFD21E)
export function HuggingFaceIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hugging Face"
    >
      <circle cx="12" cy="12" r="9.5" fill="#FFD21E" />
      <circle cx="9" cy="10.5" r="1.2" fill="#1E1E1E" />
      <circle cx="15" cy="10.5" r="1.2" fill="#1E1E1E" />
      <path d="M8.5 14.2C9.5 16 14.5 16 15.5 14.2" stroke="#1E1E1E" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M5.5 11.5C5 12 4.5 14 5.5 15.5" stroke="#E6A800" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M18.5 11.5C19 12 19.5 14 18.5 15.5" stroke="#E6A800" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// Official Git Icon in Brand Orange (#F05032)
export function GitIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="#F05032"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Git"
    >
      <path d="M21.62 10.95L13.05 2.38a1.5 1.5 0 00-2.12 0L8.85 4.46l2.67 2.67a1.78 1.78 0 011.45 1.45l2.58 2.58a1.79 1.79 0 11-1.07 1.05l-2.43-2.43v5.27a1.79 1.79 0 11-1.5 0V9.67a1.78 1.78 0 01-.96-.96L6.92 6.04 2.38 10.58a1.5 1.5 0 000 2.12l8.57 8.57a1.5 1.5 0 002.12 0l8.55-8.55a1.5 1.5 0 000-2.12z" />
    </svg>
  );
}

// Official Java Icon in Brand Red/Blue (#E76F00 / #5382A1)
export function JavaIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Java"
    >
      <path d="M8.8 17.2c-.4.5-1 1-1.4 1.4 1.7.5 4.5.7 6.6.1.5-.1.9-.3 1.3-.5-.4-.3-.9-.6-1.5-.8-1.7.4-3.5.3-5 .2v-.4z" fill="#5382A1" />
      <path d="M8 15.1c-1.3.4-2.5 1-2.9 1.7 1.4.3 3.3.4 5.3.3 2.1-.1 4.2-.4 5.4-1.2-.5-.3-1-.6-1.7-.8-2 .7-4.1.6-6.1 0z" fill="#5382A1" />
      <path d="M12.4 11.8c.8.9 1.4 1.8 1.4 2.8 0 .1 0 .2-.1.3 1-.5 1.7-1.2 1.7-2 0-.8-.7-1.5-1.5-2.2-.6-.5-1.2-1.1-1.2-1.9 0-.4.2-.8.5-1.2-.9.4-1.6 1.1-1.6 2 0 1 .6 1.6 1.2 2.2h-.4z" fill="#E76F00" />
      <path d="M15.4 7.2c.4-.8.5-1.6.4-2.2-.1-.4-.4-.7-.8-.7-.2 0-.5.1-.7.3.3.3.5.7.5 1.2 0 .9-.5 1.8-1.1 2.7-.9 1.3-2 2.7-2 4.4 0 1.2.5 2.2 1.3 3-.3-.8-.4-1.6-.4-2.3 0-1.6 1-2.8 1.9-4.1.5-.8.9-1.6.9-2.3z" fill="#E76F00" />
      <path d="M4 19.5c2.3.8 6.4 1.1 9.8.7 3-.4 5.6-1.4 6.2-2.6-1.5 1.5-4.8 2.2-8.3 2.3-3 0-6-.4-7.7-1.1v.7z" fill="#5382A1" />
    </svg>
  );
}

// Official SQL / Analytical Query Icon (#0078D4 / #00BCF2)
export function SqlQueryIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SQL Window Functions"
    >
      <rect x="3" y="4" width="18" height="16" rx="3" stroke="#0078D4" strokeWidth="1.6" />
      <line x1="3" y1="9" x2="21" y2="9" stroke="#0078D4" strokeWidth="1.6" />
      <line x1="9" y1="9" x2="9" y2="20" stroke="#0078D4" strokeWidth="1.6" />
      <circle cx="6" cy="6.5" r="1" fill="#00BCF2" />
      <circle cx="12" cy="14" r="1.5" fill="#00BCF2" />
      <circle cx="16.5" cy="14" r="1.5" fill="#00BCF2" />
      <line x1="12" y1="17" x2="18" y2="17" stroke="#00BCF2" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// Tree-sitter / Code Parser Icon (#4EAA25)
export function TreeSitterIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tree-sitter"
    >
      <circle cx="12" cy="4" r="2.5" fill="#4EAA25" />
      <circle cx="6" cy="12" r="2.5" fill="#4EAA25" />
      <circle cx="18" cy="12" r="2.5" fill="#4EAA25" />
      <circle cx="4" cy="20" r="2" fill="#4EAA25" />
      <circle cx="8" cy="20" r="2" fill="#4EAA25" />
      <circle cx="16" cy="20" r="2" fill="#4EAA25" />
      <circle cx="20" cy="20" r="2" fill="#4EAA25" />
      <path d="M12 6.5V9M12 9L6 12M12 9L18 12M6 14.5L4 18M6 14.5L8 18M18 14.5L16 18M18 14.5L20 18" stroke="#4EAA25" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// Microsoft Excel Icon
export function ExcelIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Excel">
      <rect x="2" y="3" width="14" height="18" rx="1.5" fill="#217346" />
      <path d="M8 8L6 12L8 16M10 8L12 12L10 16" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="13" y="7" width="9" height="10" rx="1" fill="#185C37" />
      <line x1="13" y1="10" x2="22" y2="10" stroke="#107C41" strokeWidth="0.8" />
      <line x1="13" y1="13" x2="22" y2="13" stroke="#107C41" strokeWidth="0.8" />
      <line x1="17" y1="7" x2="17" y2="17" stroke="#107C41" strokeWidth="0.8" />
      <text x="14.5" y="12.5" fontSize="3.5" fill="white" fontWeight="bold">XL</text>
    </svg>
  );
}

// Pandas Icon
export function PandasIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Pandas">
      <rect x="4" y="2" width="4" height="10" rx="2" fill="#150458" />
      <rect x="4" y="14" width="4" height="8" rx="2" fill="#150458" />
      <rect x="16" y="2" width="4" height="8" rx="2" fill="#150458" />
      <rect x="16" y="12" width="4" height="10" rx="2" fill="#150458" />
      <rect x="10" y="7" width="4" height="10" rx="2" fill="#E70488" />
    </svg>
  );
}

