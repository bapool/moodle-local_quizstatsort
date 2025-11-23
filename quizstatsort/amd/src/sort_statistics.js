// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * JavaScript to sort quiz statistics table by facility index
 *
 * @module     local_quizstatsort/sort_statistics
 * @copyright  2025 Brian A. Pool
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

define(['jquery', 'core/str'], function($, str) {
    return {
        init: function() {
            // Load language strings.
            var strings = [
                {key: 'facilityindex', component: 'local_quizstatsort'},
                {key: 'sorttooltip', component: 'local_quizstatsort'}
            ];

            str.get_strings(strings).then(function(results) {
                var facilityIndexString = results[0];
                var sortTooltipString = results[1];

                // Find the statistics table.
                var table = $('#questionstatistics');

                if (table.length === 0) {
                    return; // Table not found, exit.
                }

                // Get tbody.
                var tbody = table.find('tbody');

                // Store original row order.
                var originalRows = tbody.find('tr').get().slice();

                // Find the facility column index from headers.
                var facilityColumnIndex = -1;
                var facilityHeader = null;

                table.find('thead th').each(function(index) {
                    if ($(this).text().trim() === facilityIndexString) {
                        facilityColumnIndex = index;
                        facilityHeader = $(this);
                        return false; // Break.
                    }
                });

                if (facilityColumnIndex === -1) {
                    return; // Facility column not found.
                }

                // Track sort state: 'asc', 'desc', or 'none'.
                var sortState = 'asc'; // Start with ascending (lowest first).

                // Function to sort the table.
                var sortTable = function(state) {
                    var rows;

                    if (state === 'none') {
                        // Restore original order.
                        rows = originalRows.slice();
                    } else {
                        // Get current rows and sort them.
                        rows = tbody.find('tr').get();

                        rows.sort(function(a, b) {
                            var aValue = $(a).find('td').eq(facilityColumnIndex).text().trim();
                            var bValue = $(b).find('td').eq(facilityColumnIndex).text().trim();

                            // Extract numeric value from percentage (e.g., "68.73%" -> 68.73).
                            var aNum = parseFloat(aValue.replace('%', ''));
                            var bNum = parseFloat(bValue.replace('%', ''));

                            // Handle NaN (rows without facility values go to bottom).
                            if (isNaN(aNum) && isNaN(bNum)) {
                                return 0;
                            }
                            if (isNaN(aNum)) {
                                return 1;
                            }
                            if (isNaN(bNum)) {
                                return -1;
                            }

                            // Sort based on direction.
                            if (state === 'asc') {
                                return aNum - bNum; // Ascending (lowest first).
                            } else {
                                return bNum - aNum; // Descending (highest first).
                            }
                        });
                    }

                    // Reorder the table.
                    $.each(rows, function(index, row) {
                        tbody.append(row);
                    });

                    // Update header to show sort direction.
                    facilityHeader.find('.sorticon').remove();
                    var icon = '';
                    if (state === 'asc') {
                        icon = ' ▲';
                    } else if (state === 'desc') {
                        icon = ' ▼';
                    } else {
                        icon = ' ↕';
                    }
                    facilityHeader.append('<span class="sorticon">' + icon + '</span>');
                };

                // Make the header clickable.
                facilityHeader.css('cursor', 'pointer');
                facilityHeader.attr('title', sortTooltipString);

                // Add click handler.
                facilityHeader.on('click', function() {
                    // Cycle through states: asc -> desc -> none -> asc.
                    if (sortState === 'asc') {
                        sortState = 'desc';
                    } else if (sortState === 'desc') {
                        sortState = 'none';
                    } else {
                        sortState = 'asc';
                    }
                    sortTable(sortState);
                });

                // Do initial sort (ascending - lowest first).
                sortTable(sortState);
            });
        }
    };
});
