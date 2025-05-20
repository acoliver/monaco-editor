import * as monaco from 'monaco-editor';
import { DiffActionController } from 'vs/editor/contrib/diffAction/diffActionController';
import { expect } from 'chai';

describe('DiffActionController', () => {
  it('renders two buttons for a single hunk', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const editor = monaco.editor.create(container, { value: 'foo', language: 'text' });
    const ctrl = new DiffActionController(editor);
    editor.addContentWidget(ctrl);
    ctrl.setHunks([{ startLine: 1, endLine: 1, id: 'test' }]);
    const dom = ctrl.getDomNode();
    expect(dom.querySelectorAll('button').length).to.equal(2);
    editor.dispose();
    document.body.removeChild(container);
  });
});
