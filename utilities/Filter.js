// filter for blogs
const filter = (allData, search) => {
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

module.exports = {
  filter,
};
