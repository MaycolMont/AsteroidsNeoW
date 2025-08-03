interface PaginationProps {
  page: number;
  setPage: (newPage: number) => void;
  minPage?: number;
  maxPage?: number;
}

export default function Pagination({
  page,
  setPage,
  minPage = 0,
    maxPage = Infinity, // cambiar al valor máximo de la api
    }: PaginationProps) {

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <p>Página: </p>
      <input
        type="number"
        value={page}
        onChange={(e) => setPage(Number(e.target.value))}
        min={minPage}
        max={maxPage}
        style={{ width: "60px", textAlign: "center" }}
      />
    </div>
  );
}
