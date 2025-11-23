# Changelog
All notable changes to this project will be documented in this file.

## [1.1] - 2025-11-23
### Fixed
- Moved hard-coded language strings to language file for proper internationalization
- Migrated from deprecated callback function to Hook API (before_standard_head_html_generation)

### Changed
- Updated JavaScript to use Moodle's string API (core/str) for loading language strings
- Replaced `local_quizstatsort_before_standard_html_head()` with hook callback class
- Created `\local_quizstatsort\hook_callbacks\output_callbacks` class for hook implementation
- Improved code quality and Moodle coding standards compliance

### Technical
- Added language strings: 'facilityindex' and 'sorttooltip'
- Created `/classes/hook_callbacks/output_callbacks.php`
- Created `/db/hooks.php` for hook registration
- Cleaned up lib.php (removed deprecated callback function)

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
