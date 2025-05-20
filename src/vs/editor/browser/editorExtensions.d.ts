// Type-only declaration so TS can resolve the module without emitting JS
import type { IEditorContribution } from 'vs/editor/editor.api';

declare module 'vs/editor/browser/editorExtensions' {
  export function registerEditorContribution(
    id: string,
    ctor: new (...args: any[]) => IEditorContribution
  ): void;
}
