import axios from "axios";

export const fetcher = async ({
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
  return posts.data;
};
