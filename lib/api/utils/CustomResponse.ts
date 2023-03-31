
const statusCode = {
    SUCCESS: 200,
    DUPLICATE: 209,
    NOT_FOUND: 401,
    CREATED: 201,
    UNPROCESSABLE: 400
}
export const res_200 = function (data) {
    return {
        statusCode: statusCode.SUCCESS,
        body: JSON.stringify({ statusCode: statusCode.SUCCESS, ...data })
    }
}

export const res_201 = function (data) {
    return {
        statusCode: statusCode.CREATED,
        body: JSON.stringify({ statusCode: statusCode.CREATED, ...data })
    }
}

export const res_401 = function (data) {
    return {
        statusCode: statusCode.NOT_FOUND,
        body: JSON.stringify({ statusCode: statusCode.NOT_FOUND, ...data }, null,
            2)
    }
}

export const res_409 = function (data) {
    return {
        statusCode: statusCode.DUPLICATE,
        body: JSON.stringify({ statusCode: statusCode.DUPLICATE, ...data }, null,
            2)
    }
}
export const res_400 = function (data) {
    return {
        statusCode: statusCode.UNPROCESSABLE,
        body: JSON.stringify({ statusCode: statusCode.UNPROCESSABLE, ...data }, null,
            2)
    }
}
