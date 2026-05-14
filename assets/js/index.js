const items = document.querySelectorAll('.grid-item');
const filter_role = document.querySelectorAll('.filter-role');
const filter_blog = document.querySelectorAll('.filter-blog');
const filter_tag = document.getElementById('filter-tag');

var role = ""
var blog = false
var tag = ""

filter_role.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains("active")) {
      role = ""
      btn.classList.remove("active");
    }
    else {
      role = btn.dataset.role;
      filter_role.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }

    updateItems();
  });
});

filter_blog.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle("active");
    blog = !blog;

    updateItems();
  });
});

filter_tag.addEventListener('change', () => {
  tag = filter_tag.value;

  if (tag == "")
    filter_tag.classList.remove("active");
  else
  filter_tag.classList.add("active");

  updateItems();
});

function updateItems() {
  items.forEach(item => {
    item.style.display = 'block';

    if (role != "" && item.dataset.role != role)
      item.style.display = "none";

    if (blog == true && item.dataset.blog == "")
      item.style.display = "none";

    if (tag != "" && !item.dataset.tags?.split(',').includes(tag))
      item.style.display = "none";
  });
}
