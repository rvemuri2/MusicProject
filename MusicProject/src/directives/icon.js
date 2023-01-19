export default {
  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value} float-right text-green-400 text-xl"></i>`;
    if (binding.arg === "full") {
      iconClass = binding.value;
    }
    el.innerHTML += `<i class = "${iconClass}"></i>`;
  },
};