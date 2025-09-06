dayjs.locale("fr");

dayjs.extend(dayjs_plugin_duration);

const now = dayjs();

document.querySelectorAll("[data-time-since]").forEach((element) => {
  const duration = dayjs.duration(now.diff(dayjs(element.dataset.timeSince)));

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
