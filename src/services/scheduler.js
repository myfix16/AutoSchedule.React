import {request} from 'umi'
export async function getAvailableCourse (params) {
    return (request(
        '/api/getAvailableCourse', {
            method: 'GET'
        }
    ))
}