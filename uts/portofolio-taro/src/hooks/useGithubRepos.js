import { useEffect, useState } from 'react';

const CACHE_TTL = 15 * 60 * 1000; // 15 menit

// Ambil data dari localStorage kalau masih "segar"
function readCache(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const { savedAt, data } = JSON.parse(raw);
    return Date.now() - savedAt < CACHE_TTL ? data : null;
  } catch {
    return null;
  }
}

// Simpan hanya field yang dipakai, supaya cache kecil
const toRepo = (r) => ({
  name: r.name,
  description: r.description,
  url: r.html_url,
  homepage: r.homepage,
  language: r.language,
  stars: r.stargazers_count,
  forks: r.forks_count,
  topics: r.topics ?? [],
  updatedAt: r.pushed_at,
  fork: r.fork,
  archived: r.archived,
});

// Satu request untuk semua komponen (Navbar, Hero, Projects memakai hook yang sama)
const inflight = new Map();

function fetchRepos(username, cacheKey) {
  if (inflight.has(cacheKey)) return inflight.get(cacheKey);
  const promise = fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`, {
    headers: { Accept: 'application/vnd.github+json' },
  })
    .then((res) => {
      if (res.status === 403 || res.status === 429) throw new Error('rate limit');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((data) => {
      const repos = data.map(toRepo);
      try {
        localStorage.setItem(cacheKey, JSON.stringify({ savedAt: Date.now(), data: repos }));
      } catch {
        /* abaikan */
      }
      return repos;
    })
    .finally(() => {
      // izinkan fetch ulang nanti kalau gagal / cache kedaluwarsa
      setTimeout(() => inflight.delete(cacheKey), 0);
    });
  inflight.set(cacheKey, promise);
  return promise;
}

export default function useGithubRepos(username) {
  const cacheKey = `taro-gh-repos-${username}`;

  // State awal: pakai cache kalau ada → tidak perlu loading
  const [state, setState] = useState(() => {
    const cached = readCache(cacheKey);
    return { repos: cached ?? [], loading: !cached, error: null };
  });

  useEffect(() => {
    if (readCache(cacheKey)) return; // cache masih segar
    let alive = true;

    fetchRepos(username, cacheKey)
      .then((repos) => alive && setState({ repos, loading: false, error: null }))
      .catch((err) => alive && setState((s) => ({ ...s, loading: false, error: err.message })));

    return () => {
      alive = false;
    };
  }, [cacheKey, username]);

  return state; // { repos, loading, error }
}
