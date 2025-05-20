/// <reference lib="dom" />
declare module 'vs/editor/editor.api' {
    /**
     * Minimal type declarations for editor API to support content widgets and contributions.
     */
    export interface IContentWidget {
        getId(): string;
        getDomNode(): HTMLElement;
        getPosition(): IContentWidgetPosition | null;
    }

    export interface IContentWidgetPosition {
        position: { lineNumber: number; column: number };
        preference: ContentWidgetPositionPreference[];
        /**
         * If true, the widget can render outside the editor's scrollable area –
         * required for gutter-sitting buttons such as DiffActionController.
         */
        allowEditorOverflow?: boolean;
    }

    export enum ContentWidgetPositionPreference {
        EXACT = 0,
        // other preferences can be added if needed
    }

    export interface IEditorContribution {
        getId(): string;
    }

    export interface ICodeEditor {
        addContentWidget(widget: IContentWidget): void;
        removeContentWidget(widget: IContentWidget): void;
        layoutContentWidget(widget: IContentWidget): void;
        getContribution(id: string): unknown;
        /** Return the text model backing the editor (or null if none) */
        getModel(): ITextModel | null;
        // Additional editor methods can be declared here as needed.
    }

    /** Minimal text model used by DiffActionWidget for querying line lengths */
    export interface ITextModel {
        getLineMaxColumn(lineNumber: number): number;
    }
}
