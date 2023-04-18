import countries from "world-countries";

const formattedCountrie = countries.map((country) =>({
    value: country.cca2,
    label: country.name.common,
    flag:country
}))