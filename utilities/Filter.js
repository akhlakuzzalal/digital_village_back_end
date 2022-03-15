const filterBlogAndVideo = (allData, search) => {
  const filteredData = allData.filter((data) => {
    const isMatched =
      [data.title, data.about, data.content, data.tags.join('')]
        .join('')
        .toLowerCase()
        .indexOf(search.trim().toLowerCase()) !== -1;
    if (isMatched) return data;
  });

  return filteredData;
};

const filterProducts = (allData, search) => {
  const filteredData = allData.filter((data) => {
    const isMatched =
      [data.name, data.categorie, data.brand, data.description]
        .join('')
        .toLowerCase()
        .indexOf(search.trim().toLowerCase()) !== -1;
    if (isMatched) return data;
  });

  return filteredData;
};

module.exports = {
  filterBlogAndVideo,
  filterProducts,
};
