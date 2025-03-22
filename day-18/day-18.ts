function findInAgenda(
  agenda: string,
  phone: string
): { name: string; address: string } | null {
  const nameRegex = /<(.*?)>/;
  const phoneRegex = /\+?\d{1,4}[-.\s]?\d{2,4}[-.\s]?\d{2,4}[-.\s]?\d{2,4}/;

  const formattedAgenda = agenda.split("\n").map((item) => {
    const nameMatch = item.match(nameRegex);
    const phoneMatch = item.match(phoneRegex);

    const name = nameMatch ? nameMatch[1] : null;
    const phone = phoneMatch ? phoneMatch[0] : null;
    const address = item.replace(nameRegex, "").replace(phoneRegex, "").trim();

    const object = { name, phone, address };
    return object;
  });

  const results = formattedAgenda.filter(
    (item) => item.phone && item.phone.includes(phone)
  );

  return results.length === 0 || results.length > 1
    ? null
    : { name: results[0].name, address: results[0].address };
}
