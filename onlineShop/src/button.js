const button = (text) => {
  return {
    html: `<div class="button">${text}</d>`,
    css: `
    .button {
      background-color: #4CAF50;
      font-size: 15px;
      color: #eee;
      padding: 2px 5px;
      text-align: center;
      cursor: pointer;
      border-radius: 5px;
      max-width: 50%;
      display: inline-block;
      margin-top: 8px;
    }
    `,
  };
};

export default button;
