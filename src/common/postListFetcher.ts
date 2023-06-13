import axios from "axios";

export const listFetcher = async ({
  page,
  perPage,
}: {
  page: number;
  perPage: number;
}) => {
  const params = new URLSearchParams();
  params.append("page", page.toString());
  params.append("perPage", perPage.toString());
  const posts = await axios(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/develop?${params.toString()}`
  );
  console.log("서버측 데이터?", posts.data);
  return posts.data;
};
