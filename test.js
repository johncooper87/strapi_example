const MAX_PAGES = 7;
const HALF_PAGES = Math.trunc(MAX_PAGES / 2);

function intermediatePages(currentPage, totalPages) {

  if (totalPages <= MAX_PAGES + 2) {
    const intermediateCount = totalPages - 2;
    if (intermediateCount <= 0) return [];
    let pages = new Array(intermediateCount);
    for (let index = 0; index < intermediateCount; index++) pages[index] = index + 2;
    return pages;
  }

  let pages = new Array(MAX_PAGES);

  let firstPage = currentPage - HALF_PAGES;
  if (firstPage < 2) firstPage = 2;
  for (let index = 0; index < MAX_PAGES; index++) pages[index] = firstPage + index;

  const penultPage = totalPages - 1;
  const lastIndex = MAX_PAGES - 1;
  const decrement = pages[lastIndex] - penultPage;
  if (decrement > 0) for (let index = 0; index < MAX_PAGES; index++) pages[index] -= decrement;

  pages = pages.filter(page => page >= 2);
  if (pages[0] !== 2) pages[0] = null;
  if (pages[lastIndex] !== penultPage) pages[lastIndex] = null;

  return pages;
}

console.log(intermediatePages(1, 3));