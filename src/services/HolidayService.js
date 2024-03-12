import * as httpRequest from '~/utils/httpRequest';

export const get = async () => {
    try {
        const res = await httpRequest.get('admin/holidays', {});
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const post = async ({ day }) => {
    try {
        const res = await httpRequest.post('admin/holidays', {
            day: day,
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const put = async ({ data }) => {
    try {
        const res = await httpRequest.put('admin/holidays/' + data.id, {
            day: data.day,
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const destroy = async ({ data }) => {
    try {
        const res = await httpRequest.destroy('admin/holidays/' + data.id, {
            day: data.day,
            account_id: data.account_id,
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};
