import db from './db';

export interface NavLink {
  href: string;
  label: string;
  visible: boolean;
}

export function addNavLink(nav: NavLink) {
  db.prepare('INSERT INTO nav_links (href, label, visible) VALUES (?, ?, ?)')
    .run(nav.href, nav.label, nav.visible ? 1 : 0);
}

export function getNavLinks(): NavLink[] {
  return db
    .prepare('SELECT href, label, visible FROM nav_links')
    .all()
    .map((r: any) => ({ href: r.href, label: r.label, visible: !!r.visible }));
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export function addTestimonial(t: Testimonial) {
  db.prepare(
    'INSERT INTO testimonials (quote, name, role, company, avatar) VALUES (?, ?, ?, ?, ?)'
  ).run(t.quote, t.name, t.role, t.company, t.avatar);
}

export function getTestimonials(): Testimonial[] {
  return db
    .prepare('SELECT quote, name, role, company, avatar FROM testimonials')
    .all() as Testimonial[];
}

export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  cover: string;
  problem: string;
  approach: string;
  result: string;
  lessons: string;
  metrics: Metric[];
  liveUrl?: string;
  repoUrl?: string;
}

export function addProject(p: Project) {
  const stmt = db.prepare(
    `INSERT INTO projects (slug, title, description, cover, problem, approach, result, lessons, liveUrl, repoUrl)
     VALUES (@slug, @title, @description, @cover, @problem, @approach, @result, @lessons, @liveUrl, @repoUrl)`
  );
  const info = stmt.run({
    slug: p.slug,
    title: p.title,
    description: p.description,
    cover: p.cover,
    problem: p.problem,
    approach: p.approach,
    result: p.result,
    lessons: p.lessons,
    liveUrl: p.liveUrl || null,
    repoUrl: p.repoUrl || null,
  });
  const projectId = info.lastInsertRowid as number;
  const metricStmt = db.prepare('INSERT INTO metrics (project_id, label, value) VALUES (?, ?, ?)');
  for (const m of p.metrics) {
    metricStmt.run(projectId, m.label, m.value);
  }
}

export function getProjects(): Project[] {
  const projects = db.prepare('SELECT * FROM projects').all();
  const metricStmt = db.prepare('SELECT label, value FROM metrics WHERE project_id = ?');
  return projects.map((p: any) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    cover: p.cover,
    problem: p.problem,
    approach: p.approach,
    result: p.result,
    lessons: p.lessons,
    liveUrl: p.liveUrl || undefined,
    repoUrl: p.repoUrl || undefined,
    metrics: metricStmt.all(p.id) as Metric[],
  }));
}

export interface Idea {
  title: string;
  goal: string;
  benefit: string;
}

export function addIdea(i: Idea) {
  db.prepare('INSERT INTO ideas (title, goal, benefit) VALUES (?, ?, ?)')
    .run(i.title, i.goal, i.benefit);
}

export function getIdeas(): Idea[] {
  return db.prepare('SELECT title, goal, benefit FROM ideas').all() as Idea[];
}
