export interface Project {
  name: string;
  description: string;
  /** Where the card links to — a repo, a live site, or a write-up. */
  url: string;
  /** Optional second link, shown next to the primary one. */
  demoUrl?: string;
  /** Free-form: "2026", "2024 — present", "archived". */
  period?: string;
  /** Rendered as chips, using the same styling as post tags. */
  tags?: string[];
}

/**
 * Projects shown at /projects/, in the order listed here.
 *
 * Empty until you fill it in — the page renders a "nothing here yet" note
 * rather than placeholder entries, so nothing invented ships by accident.
 *
 * Example entry:
 *
 *   {
 *     name: 'evoloop',
 *     description: 'An evolutionary loop for prompt optimisation.',
 *     url: 'https://github.com/you/evoloop',
 *     demoUrl: 'https://evoloop.example.com',
 *     period: '2026',
 *     tags: ['Python', 'LLMs'],
 *   },
 */
export const projects: Project[] = [];
