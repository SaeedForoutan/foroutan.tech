export const skills = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript',
  'Python', 'Go', 'Rust', 'Bash',
  'Git', 'GitHub Actions', 'Docker', 'Kubernetes',
  'AWS', 'Azure', 'GCP',
  'PostgreSQL', 'Redis', 'GraphQL', 'REST APIs',
  'Linux', 'Terraform', 'Ansible', 'CI/CD',
];

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
