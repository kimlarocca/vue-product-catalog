module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/_global.scss";`
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/'
};
