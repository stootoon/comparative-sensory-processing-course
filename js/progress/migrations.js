// Schema migrations.
//
// Each entry is a pure (obj) => obj that moves stored progress up exactly one
// version. On load we run every migration from the stored version to current.
//
// Two rules, both non-negotiable:
//   - Migrations only ADD fields with defaults, or RENAME. They never delete
//     data. A migration that drops a field is a migration that destroys a
//     learner's work with no recourse.
//   - We never migrate DOWNWARD. If someone opens a newer deploy elsewhere and
//     then loads a cached older one, silently downgrading corrupts their
//     state. Load read-only and warn instead (handled in store.js).
//
// MIGRATIONS[n] migrates version n -> n+1.

export const MIGRATIONS = [
  // v1 is the initial schema; no migrations exist yet.
  // When the shape next changes, append:
  //
  //   (data) => ({ ...data, newField: defaultValue, schemaVersion: 2 }),
];

export function migrate(data, fromVersion, toVersion) {
  let current = data;
  let version = fromVersion;

  while (version < toVersion) {
    const step = MIGRATIONS[version - 1];
    if (typeof step !== 'function') {
      throw new Error(`No migration from schema v${version} to v${version + 1}`);
    }
    current = step(current);
    version += 1;
    current.schemaVersion = version;
  }

  return current;
}
