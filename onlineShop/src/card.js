const card = (content) => {
  return {
    html: `
    <div class="card">
      ${content}
    </div>
    `,
    css: `
    .card {
      background: #000;
      padding: 20px;
      border-radius: 5px;
    }

    .card p{
      margin-top: 20px;
    }
    `,
  };
};

export default card;
