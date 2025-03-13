function decodeFilename(filename: string): string {
  const filenameArr = filename.split("");
  return filename.substring(
    filenameArr.findIndex((res) => res === "_") + 1,
    filenameArr.findLastIndex((res) => res === ".")
  );
}

decodeFilename("2023122512345678_sleighDesign.png.grinchwa");
// ➞ "sleighDesign.png"

decodeFilename("42_chimney_dimensions.pdf.hack2023");
// ➞ "chimney_dimensions.pdf"

decodeFilename("987654321_elf-roster.csv.tempfile");
// ➞ "elf-roster.csv"
