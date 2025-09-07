dayjs.locale("fr");

dayjs.extend(dayjs_plugin_duration);

const now = dayjs();

document.querySelectorAll("[data-time-from]").forEach((element) => {
  const to = element.dataset.timeTo ? dayjs(element.dataset.timeTo) : now;
  const duration = dayjs.duration(to.diff(dayjs(element.dataset.timeFrom)));
  const formatted = [
    duration.years()
      ? duration.years() + " an" + (duration.years() > 1 ? "s" : "")
      : "",
    duration.months() ? duration.months() + " mois" : "",
  ]
    .filter(Boolean)
    .join(" et ");

  element.textContent = formatted;
});

const internalLinkList = document.querySelector("#internal-links ul");

document.querySelectorAll("[data-link]").forEach((element) => {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.classList.add("text-bg", "hover-t-wgh", "focus-visible-t-wgh");
  a.href = `#${element.id}`;
  a.textContent = element.dataset.link;
  li.append(a);
  internalLinkList.append(li);
});
