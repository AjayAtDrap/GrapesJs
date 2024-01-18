const editor = grapesjs.init({
  // Indicate where to init the editor. You can also pass an HTMLElement
  container: "#gjs",
  // Get the content for the canvas directly from the element
  // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
  fromElement: true,
  // Size of the editor
  height: "600px",
  width: "auto",
  // Disable the storage manager for the moment
  storageManager: false,
  // Avoid any default panel
  panels: { defaults: [] },
  blockManager: {
    appendTo: "#blocks",
    blocks: [
      {
        id: "section", // id is mandatory
        label: "<b class='w-100 h-100 d-block'>Section</b>", // Apply Bootstrap classes here
        attributes: { class: "gjs-block-section w-auto h-100" },
        content: `<section>
              <h1>This is a simple title</h1>
              <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
      },
      {
        id: "text",
        label: "Text",
        content: '<div data-gjs-type="text">Insert your text here</div>',
      },
      {
        id: "image",
        label: "Image",
        // Select the component once it's dropped
        select: true,
        // You can pass components as a JSON instead of a simple HTML string,
        // in this case we also use a defined component type `image`
        content: { type: "image" },
        // This triggers `active` event on dropped components and the `image`
        // reacts by opening the AssetManager
        activate: true,
      },
      {
        id: "video",
        label: "video",
        // Select the component once it's dropped
        select: true,
        // You can pass components as a JSON instead of a simple HTML string,
        // in this case we also use a defined component type `image`
        content: { type: "video" },
        // This triggers `active` event on dropped components and the `image`
        // reacts by opening the AssetManager
        activate: true,
      },

      {
        id: "heading",
        label: "Heading",
        content: "<h2>Your Heading Here</h2>",
      },
      {
        id: "paragraph",
        label: "Paragraph",
        content: "<p>Your paragraph text here</p>",
      },
      {
        id: "button",
        label: "Button",
        content: "<button>Click me</button>",
      },
      {
        id: "list",
        label: "List",
        content: "<ul><li>Item 1</li><li>Item 2</li></ul>",
      },
      {
        id: "quote",
        label: "Quote",
        content: "<blockquote>Your quote here</blockquote>",
      },
      {
        id: "divider",
        label: "Divider",
        content: "<hr>",
      },

      // Add more blocks as needed
    ],
  },
});

editor.BlockManager.add('text-category', {
    label: 'Text Block',
    category: 'Basic Blocks',
    content: '<div data-gjs-type="text">Insert your text here</div>',
  });
  
  editor.BlockManager.add('image-category', {
    label: 'Image Block',
    category: 'Media Blocks',
    content: { type: 'image' },
    activate: true,
    select: true,
  });
  editor.BlockManager.add('video-category', {
    label: 'video Block',
    category: 'Media Blocks',
    content: { type: 'video' },
    activate: true,
    select: true,
  });
  editor.BlockManager.add('button-category', {
    label: 'Button Block',
    category: 'UI Elements',
    content: '<button>Click me</button>',
  });
  
  editor.BlockManager.add('list-category', {
    label: 'List Block',
    category: 'Basic Blocks',
    content: '<ul><li>Item 1</li><li>Item 2</li></ul>',
  });
  
  editor.BlockManager.add('quote-category', {
    label: 'Quote Block',
    category: 'Text Blocks',
    content: '<blockquote>Your quote here</blockquote>',
  });