// 指令的功能：封装DOM操作

let onClickDocument = e => {
  let { target } = e;
  callbacks.forEach(item => {
    if (target === item.el || item.el.contains(target)) {
      return;
    } else {
      item.callback();
    }
  });
};

document.addEventListener("click", onClickDocument);

let callbacks = [];

export default {
  bind: function(el, binding, vnode) {
    callbacks.push({
      el,
      callback: binding.value,
    });
    // document.addEventListener('click', (e) => {
    //     let {target} = e
    //     if (target === el || el.contains(target)) {
    //         return
    //     }
    //     binding.value()
    // })
  },
};
let removeListener = () => {
  document.removeEventListener("click", onClickDocument);
};
export { removeListener };
