type Params = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BlogPage({ params }: Params) {
  // 分割代入
  const { id } = await params;
  return <div>ブログID: {id}</div>;
}
