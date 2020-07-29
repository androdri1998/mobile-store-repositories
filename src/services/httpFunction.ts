import api from './api';

export const createLike = async (respositorieId: string) => {
  const response = await api.post(`/repositories/${respositorieId}/like`);
  return response;
};
