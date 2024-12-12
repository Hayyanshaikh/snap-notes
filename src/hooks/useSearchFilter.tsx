import { useState, useMemo } from "react";

const useSearchFilter = (data: any[], searchKeys: string[]) => {
  const [query, setQuery] = useState("");
  const [timeoutId, setTimeoutId] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const filteredData = useMemo(() => {
    if (!query) return data;
    return data.filter((item: any) =>
      searchKeys.some(key => item[key]?.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query, data, searchKeys]);

  const handleQueryChange = (newQuery: string) => {
    if (timeoutId) clearTimeout(timeoutId);
    setLoading(true);
    const newTimeoutId = setTimeout(() => {
      setQuery(newQuery);
      setLoading(false);
    }, 500);
    setTimeoutId(newTimeoutId);
  }

  return { query, setQuery: handleQueryChange, filteredData, loading };
}

export default useSearchFilter;
