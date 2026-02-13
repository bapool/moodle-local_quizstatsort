# Quiz Statistics Sort

A Moodle local plugin that enhances the quiz statistics report by allowing teachers to sort questions by Facility Index.

## Description

This plugin adds interactive sorting functionality to the Quiz Statistics report's "Quiz structure analysis" table. Teachers can click on the "Facility index" column header to cycle through three sorting states:

1. **Ascending (▲)** - Questions sorted from lowest to highest facility index (most difficult questions first)
2. **Descending (▼)** - Questions sorted from highest to lowest facility index (easiest questions first)  
3. **Unsorted (↕)** - Original question order as they appear in the quiz

This is particularly useful for identifying student misconceptions by quickly seeing which questions students found most challenging.

## Features

- Click-to-sort functionality on the Facility Index column
- Three-state sorting: ascending, descending, and unsorted (original order)
- Visual indicators (arrows) showing current sort state
- Non-intrusive - only affects the statistics display, not the quiz itself
- Works automatically on all quiz statistics pages

## Requirements

- Moodle 4.5 or higher
- Quiz module enabled

## Installation

1. Download or clone this repository
2. Place the `quizstatsort` folder in your Moodle's `local` directory
3. Visit Site Administration → Notifications to complete the installation
4. Purge all caches (Site Administration → Development → Purge all caches)

## Usage

1. Navigate to any quiz
2. Go to the "Statistics" report
3. Scroll to the "Quiz structure analysis" table
4. Click on the "Facility index" column header to cycle through sort options

## Author

**Brian A. Pool**

## License

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <http://www.gnu.org/licenses/>.

## Support

For bug reports and feature requests, please use the issue tracker on the plugin's repository.
