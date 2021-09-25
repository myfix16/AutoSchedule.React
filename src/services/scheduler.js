import { request } from 'umi';
export async function getAvailableCourse(params) {
  return request('/api/Sessions/ClassNames', {
    method: 'GET',
  });
}
export async function genSchedules(body, maxSchedules = 4) {
  return request(`/api/ClassSelection/${maxSchedules}`, {
    method: 'POST',
    data: body,
    
  });
}
