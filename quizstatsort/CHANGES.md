# Changelog

All notable changes to this project will be documented in this file.

## [1.0] - 2025-11-17

### Added
- Initial release
- Interactive sorting for Quiz Statistics report's "Quiz structure analysis" table
- Three-state sorting functionality: ascending, descending, and unsorted
- Click-to-sort on Facility Index column header
- Visual indicators (▲, ▼, ↕) showing current sort state
- Automatically sorts questions by facility index (ascending/lowest first) on page load
- Support for Moodle 4.5+

### Features
- Non-intrusive implementation using JavaScript
- Preserves original question order when unsorted
- No database modifications required
- Works on all quiz statistics pages automatically
