$(function () {
  var pokeapiUrl = "https://pokeapi.co/api/v2/generation/1";
  var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";

  $.getJSON(pokeapiUrl)
    .done((data) => {
      console.log(data);
      $.each(data.pokemon_species, (index, item) => {
        var name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
        var link = $("<a>")
          .attr("id", name)
          .attr("href", "#")
          .append($("<strong>").text(name));
        var par = $("<p>")
          .html("Pokemon species no." + (index + 1) + " is ")
          .append(link);

        link.click(function (event) {
          $.getJSON(pokemonByName + item.name)
            .done((details) => {
              console.log(details);
              var { back_default, back_shiny, front_default, front_shiny } =
                details.sprites;
              var pokemonDiv = $("#pokemon-details");

              pokemonDiv.empty();
              pokemonDiv.append("<h2>" + name + "<h2>");
              pokemonDiv.append("<img src='" + back_default + "'>");
              pokemonDiv.append("<img src='" + back_shiny + "'>");
              pokemonDiv.append("<img src='" + front_default + "'>");
              pokemonDiv.append("<img src='" + front_shiny + "'>");
              event.preventDefault();
            })
            .fail(() => {});
        });

        par.appendTo("#pokemon");
      });
    })
    .fail((error) => {
      console.log(error);
      alert("Ajax request to Pokeapi failed.");
    })
    .always(() => {
      console.log("Pokemon is awesome");
    });
});
