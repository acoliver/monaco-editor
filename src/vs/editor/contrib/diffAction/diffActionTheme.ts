// monaco-editor/src/vs/editor/contrib/diffAction/diffActionTheme.ts
// Defines the 'llrt-diff' theme for Monaco editor

/**
 * The LLRT diff theme definition for Monaco editor
 * Can be applied with: monaco.editor.defineTheme('llrt-diff', llrtDiffTheme)
 */
export const llrtDiffTheme = {
    base: 'vs-dark',
    inherit: true,
    rules: [],
    colors: {
        // Background colors for diff editor
        'diffEditor.insertedTextBackground': '#1e4620',    // Dark green for added text
        'diffEditor.removedTextBackground': '#4b1818',     // Dark red for removed text
        'diffEditor.insertedLineBackground': '#1e462080',  // Transparent dark green for added lines
        'diffEditor.removedLineBackground': '#4b181880',   // Transparent dark red for removed lines

        // Colors for accepted/rejected hunks
        'diffEditor.acceptedLineBackground': '#153814',    // Darker green for accepted lines
        'diffEditor.rejectedLineBackground': '#3b1414',    // Darker red for rejected lines

        // Gutter indicators
        'editorGutter.addedBackground': '#487e02',         // Green for added lines gutter
        'editorGutter.deletedBackground': '#9c1e1e',       // Red for deleted lines gutter
        'editorGutter.modifiedBackground': '#1b81a8'       // Blue for modified lines gutter
    }
};
