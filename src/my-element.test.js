import { fixture, expect, nextFrame, elementUpdated, oneEvent } from '@open-wc/testing';
import { html } from 'lit-element';
import sinon from 'sinon';
import './my-element.js';

describe('my-element', () => {
  it('button 1 clicks', async () => {
    const el = await fixture('<my-element></my-element>');
    const clickSpy = sinon.spy(el, 'onClick');
    el.shadowRoot.querySelector('#button1').click();
    expect(clickSpy.called).to.equal(true);
  });
  it('button 2 clicks', async () => {
    const el = await fixture('<my-element></my-element>');
    const clickSpy = sinon.spy(el, 'onClick');
    el.shadowRoot.querySelector('#button2').click();
    expect(clickSpy.called).to.equal(true);
  });
})
