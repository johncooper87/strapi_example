import fetch from 'isomorphic-unfetch';
const { URL: _URL } = require('url');

export const api = process.env.api;

export async function fetchJSON(path) {
  const res = await fetch(api + path);
  return res.json()
}

export function getTotalPages(itemsCount, pageSize) {
  return Math.round(itemsCount / pageSize) + (itemsCount % pageSize ? 1 : 0);
}

export async function loadItemsPage(path, page = 1, pageSize = 5, sordField = 'id:DESC') {
  
  page = parseInt(page);
  if (isNaN(page)) page = 1;

  const count = await fetchJSON(path + '/count');

  const totalPages = getTotalPages(count, pageSize);
  if (page < 1) page = 1;
  else if (page > totalPages) page = totalPages;
  const start = (page - 1) * pageSize;

  const items = await fetchJSON(path + `?_start=${start}&_limit=${pageSize}&_sort=${sordField}`);

  return { items, page, totalPages };
}

export async function loadItem(path, id) {
  
  const item = await fetchJSON(path + id);

  return { item };
}

const MAX_PAGES = 7;
const HALF_PAGES = Math.trunc(MAX_PAGES / 2);

export function intermediatePages(currentPage, totalPages) {

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

export function getRefererPage(request) {
  const url = new _URL(request.headers.referer);
  return url.searchParams.get('page') || 1;
}

export function parseResourceURL(_src) {
    const url = new URL(_src);
    let width = url.searchParams.get('width');
    let height = url.searchParams.get('height');
    const src = url.origin + url.pathname;

    if (width) width += 'px';
    if (height) height += 'px';

    return { src, width, height }
}