// Override lại webpack mà không cần phải eject ra ngoài (customize-cra | react-app-rewired)
// Mặc định webpack không tự load .babelrc nên phải cấu hình
const {
    override,
    useBabelRc
} = require("customize-cra");

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc()
);