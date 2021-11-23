export const fetchJsonFromLocal = async (file) => {
    console.log('fetch json from local, ', file);
    let content = null;
    await fetch('reading_children.json')
      .then((resp) => resp.json())
      .then((json) => {
        content = json;
        console.log(content);
      });
    return content;
  };