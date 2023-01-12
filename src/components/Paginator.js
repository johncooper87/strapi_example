import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { intermediatePages } from '../internals';

const { Prev, Next, Item, Ellipsis } = Pagination;

export default function Paginator({ page, totalPages, path = '' }) {

  if (totalPages === 1) return null;

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  const pages = intermediatePages(page, totalPages);

  const href = path + '?page=';

  return <Pagination className="paginator">
    <Prev disabled={isFirstPage} href={href + (page - 1)} />
    <Item active={isFirstPage} href={href + 1}>{1}</Item>

    {pages[0] === null && <Ellipsis disabled={true} />}
    {pages.map(num => 
      num !== null && <Item key={num} active={page === num} href={href + num}>{num}</Item>
    )}
    {pages[pages.length - 1] === null && <Ellipsis disabled={true} />}

    <Item active={isLastPage} href={href + totalPages}>{totalPages}</Item>
    <Next disabled={isLastPage} href={href + (page + 1)} />
  </Pagination>;
}