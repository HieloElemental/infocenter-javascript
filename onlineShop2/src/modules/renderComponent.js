const evaluateJSCode = async (jsCode, componentDirectory) => {
  try {
    console.log("Original JS code:", jsCode);

    // Use Function constructor to create a function with explicit return
    const func = new Function("data", `return ${jsCode}`);

    // Execute the function with the data variable
    const result = await func.call(window, window.data);

    // Convert the result to a string to handle non-string values
    const resultString = String(result);

    console.log("Evaluated JS code:", resultString);

    return resultString;
  } catch (error) {
    console.error(`Error evaluating JS code: ${error}`);
    return ""; // Return an empty string in case of an error
  }
};

const replaceJSBlocks = async (html, componentDirectory) => {
  const jsBlocksRegex = /<js>([\s\S]*?)<\/js>/g;

  const matches = Array.from(html.matchAll(jsBlocksRegex));

  for (const match of matches) {
    const [, jsCode] = match;
    console.log("Original JS code:", jsCode);

    const evaluatedCode = await evaluateJSCode(jsCode, componentDirectory);
    console.log("Evaluated JS code:", evaluatedCode);

    // Replace the placeholder <js-placeholder> with the evaluated JavaScript result
    html = html.replace("<js-placeholder>", evaluatedCode);
  }

  return html;
};

const renderComponent = async (componentDirectory, parentElement) => {
  try {
    // Load HTML content
    const responseHTML = await fetch(`${componentDirectory}/template.html`);
    const html = await responseHTML.text();
    console.log("Loaded HTML:", html);

    // Load CSS content
    const responseCSS = await fetch(`${componentDirectory}/styles.css`);
    const css = await responseCSS.text();
    console.log("Loaded CSS:", css);

    // Load JS content (for placeholders)
    const responseJS = await fetch(`${componentDirectory}/placeholders.js`);
    const js = await responseJS.text();
    console.log("Loaded JS:", js);

    // Replace placeholders in HTML with actual JS content
    const processedHTML = await replaceJSBlocks(html, componentDirectory);

    // Create a new div element
    const componentDiv = document.createElement("div");

    // Apply the CSS styles
    const styleElement = document.createElement("style");
    styleElement.innerHTML = css;
    componentDiv.appendChild(styleElement);

    // Set the HTML content
    componentDiv.innerHTML = processedHTML;

    // Append the component to the parent element
    parentElement.appendChild(componentDiv);

    console.log("Component rendering completed successfully!");
  } catch (error) {
    console.error(`Error loading component: ${error}`);
  }
};

export default renderComponent;
