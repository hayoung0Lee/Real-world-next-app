import styled from "@emotion/styled";
import axios from "axios";

// import ArticleMeta from "components/article/ArticleMeta";
// import CommentList from "components/comment/CommentList";
// import LoadingSpinner from "components/common/LoadingSpinner";
// import ArticleAPI from "lib/api/article";
// import { ArticleType } from "lib/types/articleType";

const SERVER_BASE_URL = `https://conduit.productionready.io/api`;

export async function getStaticPaths() {
    console.log("paths")
    return { paths: [{ params: { pid: '1' } }], fallback: true };
}

export async function getStaticProps({ params }) {
    // static 하게 빌드
    const { pid } = params;
    console.log("props", pid, params)

    try {
        // const { data } = await ArticleAPI.get(pid);
        const { data } = await axios.get(`${SERVER_BASE_URL}/articles/${encodeURIComponent(pid)}`);
        console.log("data", data)
        return {
        props: {
            article: data?.article,
            pid,
        },
        revalidate: 1,
        };
    } catch (error) {
        console.error(`Get Article id ${pid} error: `, error);
        return {
        props: {
            article: {},
            pid,
        },
        revalidate: 1,
        };
    }
}

const ArticlePage = ({ article, pid }) => {
    // if (!article) return <LoadingSpinner />;
    axios.get(`${SERVER_BASE_URL}/articles/${encodeURIComponent(pid)}`).then(() => console.log("axios call"));
    console.log("article")
    return <div>article page</div>
};
export default ArticlePage;