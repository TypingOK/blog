export const fetcher = async ({
  page,
  perPage,
  subCategory,
}: {
  page: number;
  perPage: number;
  subCategory: null | string;
}) => {
  const params = new URLSearchParams();
  params.append("page", page.toString());
  params.append("perPage", perPage.toString());
  if (subCategory) {
    params.append("subCategory", subCategory);
  } else {
    params.append("subCategory", "");
  }
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/develop?${params.toString()}`
  ).then((res) => res.json());
  return posts;
};
