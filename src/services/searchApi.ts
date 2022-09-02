import Api from './Api';

const searchArticle = async (articleName: string) => {
  try {
    const response = await Api.get(`/articles/search/${articleName}`, {
      params: {
        pageSize: 10,
        apiKey: process.env.SECRET_API_KEY,
      },
    });
    return response.data;
  } catch (e: any) {
    return { message: e.message };
  }
};

export default searchArticle;
