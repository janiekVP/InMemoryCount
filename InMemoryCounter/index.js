let count = 0;

module.exports = async function (context, req) {
    count++;
    context.res = {
        status: 200,
        body: `This function has been called ${count} times.`
    };
};
