# spy-lit-issue
demo a potential issue with lit-element/html and sinon.spy

`yarn install`
`yarn test`

The `/src/my-element.test.js` file shows two tests that are identical, expect the event handlers in /src/my-element.js are setup in different ways.
the `#button1` event handler uses mechanisms within lit-html(or lit-element?) to magically bind the event handler and perform optimizations. The test for this button fails.
the `#button2` event handler is bound manually. The test for this button passes.
