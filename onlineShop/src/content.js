const content = (containedContent) => {
  return {
    html: `<section class="content">${containedContent}</section>`,
    css: `
    .content {
      padding: 20px;
      color: #eee;
      background: #111;
    }
    `,
  };
};

export default content;
