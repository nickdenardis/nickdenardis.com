---
title: "Getting Cypress JS to interact with CKEditor"
lastModified: "2018-07-16"
---

Because .type() doesn’t submit when selecting the textarea.

\[caption id="attachment\_1584" align="alignnone" width="797"\]![CKEditor](/images/Screen-Shot-2018-07-15-at-1.26.42-PM.png) CkEditor iframe with custom toolbar\[/caption\]

While writing a few [Cypress.io](https://www.cypress.io/) tests I ran into a problem of manipulating text in a [CKEditor](https://ckeditor.com/) window.

Without diving completely into how CKEditor implements the editable iframe, my first thought was to use the native `textarea` field and skip adding content to the [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) all together.

#### Using the native `type()` function

// The underlying \`textarea\`

cy.get("#html\_body")
.type("<p>HTML body</p>");

\[caption id="attachment\_1585" align="alignleft" width="348"\]![Cypress native type command](/images/Screen-Shot-2018-07-15-at-1.51.04-PM.png) Cypress error, can’t type in hidden inputs\[/caption\]

Cypress doesn’t like typing into hidden input element elements.

Adding the `force:true` config doesn’t fare much better. With Javascript turned on, CKEditor overwrites the `textarea` on submit and that value is lost. 😒

#### Cypress interacting with an iFrame

Next stop is to search “[cypress type in ckeditor](https://www.google.com/search?q=cypress%20type%20in%20ckeditor)” which leads to the issue [Cannot target elements inside of an iframe #136](https://github.com/cypress-io/cypress/issues/136).

Reading through the working examples lead to something like this:

// Find the \`contenteditable\` element within the iframe and type

cy.get("#html\_body")
  .then(function ($iframe) {
    const $body = $iframe.contents().find("body");

    cy.wrap($body\[0\])
      .type("<p>HTML body</p>");
  });

\[caption id="attachment\_1586" align="alignnone" width="644"\]![Cypress doesn't error](/images/Screen-Shot-2018-07-15-at-2.05.03-PM.png) Doesn’t error, but also doesn’t submit\[/caption\]

This does find the DOM element and says that it was typed, but it doesn’t actually result in the words being visible in the CKEditor or submitted with the form. 😢

#### Interacting with JS page objects

Last ditch effort is to break outside of Cypress and set the data in CKEditor natively then try to make the same call from within the Cypress test.

CKEditor has `[setData()](https://docs.ckeditor.com/ckeditor4/latest/api/CKEDITOR_editor.html#method-setData)` and `[getData()](https://docs.ckeditor.com/ckeditor4/latest/api/CKEDITOR_editor.html#method-getData)` functions for getting contents in and out of the editor window.

// Set the contents of the CKEditor natively on the page

CKEDITOR_._instances\["html\_body"\]_._setData("<p>HTML body</p>");

Now to call that from within Cypress, led to a search for “[cypress get page JS objects](https://www.google.com/search?q=cypress%20get%20page%20JS%20objects)” and then to this issue: [How can I execute a JavaScript command #897](http://how%20can%20i%20execute%20a%20javascript%20command%20/#897) and the `[.window()](https://docs.cypress.io/api/commands/window.html#Syntax)` [function](https://docs.cypress.io/api/commands/window.html#Syntax).

#### Success!

// Call out to the page window and use the CKEDITOR object

cy_._window()
  _._then(win => {
    win_._CKEDITOR_._instances\["html\_body"\]_._setData("<p>HTML body</p>");
  });

\[caption id="attachment\_1587" align="alignnone" width="668"\]![Setting the content of CKEditor with Javascript](/images/Screen-Shot-2018-07-15-at-2.21.08-PM.png) Setting the content of CKEditor with Javascript\[/caption\]

#### Turning the solution into a reusable command

// Define the command

Cypress.Commands.add("type\_ckeditor", (element, content) => {
  cy.window()
    .then(win => {
      win.CKEDITOR.instances\[element\].setData(content);
    });
});

// Use the command

cy_._type\_ckeditor("html\_body", "<p>HTML body</p>");

With this approach it is possible to use any of the `[CKEDITOR.editor](https://docs.ckeditor.com/ckeditor4/latest/api/CKEDITOR_editor.html)` [object functions.](https://docs.ckeditor.com/ckeditor4/latest/api/CKEDITOR_editor.html)
