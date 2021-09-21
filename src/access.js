/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState) {
  const { currentUser } = initialState || {};
  return {
    // canAdmin: false
    canAdmin: currentUser && currentUser.access === 'admin',
  };
}
