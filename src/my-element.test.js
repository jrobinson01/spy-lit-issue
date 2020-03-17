import { fixture, expect, nextFrame, elementUpdated, oneEvent } from '@open-wc/testing';
import { html } from 'lit-element';
import sinon from 'sinon';
import './my-element.js';

describe('my-element', () => {
  // fails
  it('button 1 clicks', async () => {
    const el = await fixture('<my-element></my-element>');
    const clickSpy = sinon.spy(el, 'onClick');
    el.shadowRoot.querySelector('#button1').click();
    expect(clickSpy.called).to.equal(true);
  });
  // passes
  it('button 2 clicks', async () => {
    const el = await fixture('<my-element></my-element>');
    const clickSpy = sinon.spy(el, 'onClick');
    el.shadowRoot.querySelector('#button2').click();
    expect(clickSpy.called).to.equal(true);
  });
  // passes
  it('button 1 clicks in a weird way', async () => {
    const el = await fixture('<my-element></my-element>');
    const clickSpy = sinon.spy(el, 'onClick');
    // ensure the spy is used as the event handler
    el.requestUpdate();
    await elementUpdated(el);
    el.shadowRoot.querySelector('#button1').click();
    expect(clickSpy.called).to.equal(true);
  });
  // probably best to just use one of these guys
  it('the right way', async () => {
    const clickSpy = sinon.spy();
    const el = await fixture(html`<my-element @special-click=${() => clickSpy()}></my-element>`);
    el.shadowRoot.querySelector('#button1').click();
    expect(clickSpy.called).to.equal(true);
  });
  it('the other right way', async () => {
    const clickSpy = sinon.spy();
    const el = await fixture(html`<my-element @special-click=${clickSpy}></my-element>`);
    el.shadowRoot.querySelector('#button1').click();
    expect(clickSpy.called).to.equal(true);
  });
});

