export type NavItem = { href: string; label: string; external?: boolean };
export type Group = {
  key: string;
  label: string;
  href: string;
  numbered: boolean; // shows 1, 2, 3… in the side index
  sequential: boolean; // shows previous / next at the end of each page
  items: NavItem[];
  refs: NavItem[]; // secondary links below a separator
};

export const GROUPS: Group[] = [
  {
    key: 'protocolo', label: 'Protocolo', href: '/protocolo', numbered: true, sequential: true,
    items: [
      { href: '/protocolo', label: 'Visión general' },
      { href: '/protocolo/ejecucion', label: 'Ejecución' },
      { href: '/protocolo/consenso', label: 'Consenso y staking' },
      { href: '/protocolo/tarifas', label: 'Tarifas y emisión' },
      { href: '/protocolo/interoperabilidad', label: 'Interoperabilidad' },
      { href: '/protocolo/gobernanza', label: 'Gobernanza' },
      { href: '/protocolo/seguridad', label: 'Seguridad' },
      { href: '/protocolo/que-permite-construir', label: 'Qué permite construir' },
    ],
    refs: [],
  },
  {
    key: 'desarrolladores', label: 'Desarrolladores', href: '/desarrolladores', numbered: false, sequential: false,
    items: [
      { href: '/desarrolladores', label: 'Construir en 42' },
      { href: '/desarrolladores/nodos', label: 'Operar un nodo' },
      { href: '/desarrolladores/integrar', label: 'Integrar la red' },
    ],
    refs: [
      { href: '/docs', label: 'Documentación ↗', external: true },
      { href: '/consola', label: 'Consola ↗', external: true },
    ],
  },
  {
    key: 'comunidad', label: 'Comunidad', href: '/comunidad', numbered: false, sequential: false,
    items: [{ href: '/comunidad', label: 'Comunidad' }],
    refs: [],
  },
  {
    key: 'proyecto', label: 'Proyecto', href: '/proyecto', numbered: false, sequential: false,
    items: [
      { href: '/proyecto', label: 'Sobre 42 Chain' },
      { href: '/proyecto/equipo', label: 'El equipo' },
      { href: '/proyecto/contacto', label: 'Contacto y soporte' },
      { href: '/proyecto/transparencia', label: 'Transparencia' },
      { href: '/proyecto/preguntas-frecuentes', label: 'Preguntas frecuentes' },
    ],
    refs: [
      { href: '/legal', label: 'Legal y avisos' },
      { href: '/legal/terminos', label: 'Términos de uso' },
      { href: '/legal/privacidad', label: 'Privacidad y cookies' },
    ],
  },
];

/** Footer columns. */
export const FOOTER: { label: string; links: NavItem[] }[] = [
  { label: 'Protocolo', links: GROUPS[0].items },
  { label: 'Desarrolladores', links: [...GROUPS[1].items, { href: '/docs', label: 'Docs ↗' }, { href: '/consola', label: 'Consola ↗' }] },
  { label: 'Comunidad', links: [{ href: '/comunidad', label: 'Explorar la comunidad' }] },
  { label: 'Proyecto', links: [...GROUPS[3].items, { href: '/legal', label: 'Legal y avisos' }] },
];
