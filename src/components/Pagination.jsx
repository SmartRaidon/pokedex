function Pagination({ page, setPage, total, limit }) {
  const maxPage = Math.ceil(total / limit);
  return (
    <div>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>

      <span style={{ margin: "0 10px" }}>
        Page {page} / {maxPage}
      </span>

      <button onClick={() => setPage(page + 1)} disabled={page === maxPage}>
        Next
      </button>
    </div>
  );
}

export default Pagination;