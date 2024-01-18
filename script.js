const editor = grapesjs.init({
  // Indicate where to init the editor. You can also pass an HTMLElement
  container: "#gjs",
  // Get the content for the canvas directly from the element
  // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
  fromElement: true,
  // Size of the editor
  height: "100vh",
  width: "auto",
  // Disable the storage manager for the moment
  storageManager: false,
  // Avoid any default panel
  panels: { defaults: [] },
  blockManager: {
    appendTo: "#blocks",
    openBlocks: false,
  },
  layerManager: {
    appendTo: ".layers-container",
  },
  // We define a default panel as a sidebar to contain layers
  panels: {
    defaults: [
      {
        id: "layers",
        el: ".panel__right",
        // Make the panel resizable
        resizable: {
          maxDim: 450,
          minDim: 200,
          tc: 0, // Top handler
          cl: 1, // Left handler
          cr: 0, // Right handler
          bc: 0, // Bottom handler
          // Being a flex child we need to change `flex-basis` property
          // instead of the `width` (default)
          keyWidth: "flex-basis",
        },
      },
    ],
  },
});

editor.BlockManager.add("text-category", {
  label: "Text Block",
  category: "Basic Blocks",
  content: '<div data-gjs-type="text">Insert your text here</div>',
});

editor.BlockManager.add("image-category", {
  label: "Image Block",
  category: "Media Blocks",
  content: '<img src="your-image-source.jpg" alt="Image description">',
  activate: true,
  select: true,
  
});

editor.BlockManager.add("video-category", {
  label: "Video Block",
  category: "Media Blocks",
  content: '<video src="your-video-source.mp4" controls></video>',
  activate: true,
  select: true,
});

editor.BlockManager.add("button-category", {
  label: "Button Block",
  category: "UI Elements",
  content: "<button>Click me</button>",
});

editor.BlockManager.add("list-category", {
  label: "List Block",
  category: "Basic Blocks",
  content: "<ul><li>Item 1</li><li>Item 2</li></ul>",
});

editor.BlockManager.add("quote-category", {
  label: "Quote Block",
  category: "Text Blocks",
  content: "<blockquote>Your quote here</blockquote>",
});

editor.BlockManager.add("form-category", {
  label: "Form Block",
  category: "UI Elements",
  content:
    '<form action="/submit" method="post"><label for="input">Input:</label><input type="text" id="input" name="input"><input type="submit" value="Submit"></form>',
});

editor.BlockManager.add("heading-category", {
  label: "Heading Block",
  category: "Text Blocks",
  content: "<h1>Your Heading</h1>",
});

editor.BlockManager.add("paragraph-category", {
  label: "Paragraph Block",
  category: "Text Blocks",
  content: "<p>Your paragraph text goes here.</p>",
});

editor.BlockManager.add("link-category", {
  label: "Link Block",
  category: "UI Elements",
  content: '<a href="https://example.com" target="_blank">Visit Example</a>',
});

editor.BlockManager.add("image-gallery-category", {
  label: "Image Gallery Block",
  category: "Media Blocks",
  content:
    '<div class="image-gallery"><img src="image1.jpg" alt="Image 1"><img src="image2.jpg" alt="Image 2"></div>',
});

editor.Panels.addPanel({
  id: "panel-top",
  el: ".panel__top",
});
editor.Panels.addPanel({
  id: "basic-actions",
  el: ".panel__basic-actions",
  buttons: [
    {
      id: "visibility",
      active: true, // active by default
      className: "btn-toggle-borders",
      label: "<u>B</u>",
      command: "sw-visibility", // Built-in command
    },
    {
      id: "export",
      className: "btn-open-export",
      label: "Exp",
      command: "export-template",
      context: "export-template", // For grouping context of buttons from the same panel
    },
    {
      id: "show-json",
      className: "btn-show-json",
      label: "JSON",
      context: "show-json",
      command(editor) {
        editor.Modal.setTitle("Components JSON")
          .setContent(
            `<textarea style="width:100%; height: 250px;">
              ${JSON.stringify(editor.getComponents())}
            </textarea>`
          )
          .open();
      },
    },
  ],
});

