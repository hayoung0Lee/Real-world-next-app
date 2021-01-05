import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import useSWR from "swr";
// import ArticlePreview from "../../components/article/ArticlePreview";
import Pagination from "../common/Pagination";

import Maybe from "../common/Maybe";
import { SERVER_BASE_URL, DEFAULT_LIMIT } from "../../lib/utils/constant";
import fetcher from "../../lib/utils/fetcher";
import { usePageState } from "../../lib/context/PageContext";
import {
    usePageCountState,
    usePageCountDispatch
} from "../../lib/context/PageCountContext";

// import Pagination from "../components/common/Pagination";

const ArticleList = () => {
    const page = usePageState();
    const pageCount = usePageCountState();
    const setPageCount = usePageCountDispatch();
    
    // 이건 뭔지 모르겠음
    const lastIndex = pageCount > 480 ? Math.ceil(pageCount / 20) : Math.ceil(pageCount / 20) - 1;

    const router = useRouter();
    const { asPath, pathname, query } = router;
    const { favorite, follow, tag, pid } = query;
    const isProfilePage = pathname.startsWith(`/profile`);
    const getFetchURL = () => {
        return `${SERVER_BASE_URL}/articles?offset=${page * DEFAULT_LIMIT}`;
    }

    let fetchURL = useMemo(() => getFetchURL(), [
        favorite,
        page,
        tag,
        isProfilePage,
      ]);
    
    const { data, error } = useSWR(fetchURL, fetcher);
    // if (error) return <ErrorMessage message="Cannot load recent articles..." />;
    if (!data || error) return <div >loading or error</div>;
    
    console.log("data", data, "error", error)
    const { articles, articlesCount } = data;
    setPageCount(articlesCount);
    if (articles?.length === 0) {
        return <div>No articles are here... yet.</div>;
    }
    
    return (
        <>
            {/* pagination */}
            {articles?.map((article) => (
                <div style={{border: "1px solid black", padding: "1px"}}>
                    <h1>{article.title}</h1>
                </div>
            ))}
            <Maybe test={articlesCount && articlesCount > 20}>
                {/*  버튼 생기는 곳!!! */}
                <Pagination
                    total={pageCount}
                    limit={20}
                    pageCount={10}
                    currentPage={page}
                    lastIndex={lastIndex}
                    fetchURL={fetchURL}
                />
            </Maybe>
        </>
    )
}

export default ArticleList