export const sendContactForm = async (data) =>
  fetch("/api/FormProperty", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Ha fallado su mensaje intentelo nuevamente");
    return res.json();
  });
