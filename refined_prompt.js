
function toDotCase(input) {
    // Return empty string for non-string or empty input
    if (typeof input !== 'string' || !input.trim()) {
        return '';
    }

    // Replace invalid characters (anything not alphanumeric, space, _, or -) with space
    let sanitized = input.replace(/[^a-zA-Z0-9 _-]+/g, ' ');

    // Split by spaces, underscores, or hyphens (one or more), ignoring empty parts
    let words = sanitized
        .split(/[\s_-]+/)
        .filter(Boolean);

    if (words.length === 0) return '';

    // Lowercase all words and join with dots
    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage and test cases:
const dotCaseTestCases = [
    '', // empty string
    null, // non-string
    undefined, // non-string
    123, // non-string
    'first name',
    'user_id',
    'SCREEN_NAME',
    'mobile-number',
    '  multiple   spaces  ',
    '__leading__and--trailing--',
    'MiXeD_cAsE-Input',
    'alreadyDotCase',
    'invalid!@#characters',
    'UPPER__CASE--WITH__SEPARATORS',
    '___',
    'a',
    'A',
    'a_b_c',
    'a--b--c',
    'a b c',
    'a_b-c d',
];

for (const test of dotCaseTestCases) {
    console.log(`"${test}" => "${toDotCase(test)}"`);
}

